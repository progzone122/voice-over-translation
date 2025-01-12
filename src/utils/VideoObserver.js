import "requestidlecallback-polyfill";
import { EventImpl } from "./EventImpl.js";
import debug from "./debug.ts";

export class VideoObserver {
  static adPatterns = new RegExp(
    [
      "advertise",
      "promo",
      "sponsor",
      "banner",
      "commercial",
      "preroll",
      "midroll",
      "postroll",
      "ad-container",
      "sponsored",
    ].join("|"),
    "i",
  );

  constructor() {
    this.videoCache = new WeakSet();
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();
    this.observer = new MutationObserver(this.handleMutations);
  }

  isAdRelated(element) {
    return (
      VideoObserver.adPatterns.test(element.className) ||
      VideoObserver.adPatterns.test(element.id) ||
      VideoObserver.adPatterns.test(element.title)
    );
  }

  isValidVideo(video) {
    if (this.isAdRelated(video)) return false;
    let parent = video.parentElement;
    while (parent) {
      if (this.isAdRelated(parent)) return false;
      parent = parent.parentElement;
    }
    if (
      video.hasAttribute("muted") &&
      !video.classList.contains("vjs-tech") &&
      !video.preload
    ) {
      debug.log("Ignored promotional/muted video:", video);
      return false;
    }
    return true;
  }

  findVideosInElement(root) {
    const videos = [];
    if (!root.querySelectorAll) return videos;
    videos.push(...root.querySelectorAll("video"));
    for (const element of root.querySelectorAll("*")) {
      if (element.shadowRoot) {
        videos.push(...this.findVideosInElement(element.shadowRoot));
      }
    }
    return videos;
  }

  checkVideoState(video) {
    if (this.videoCache.has(video) || !this.isValidVideo(video)) return;
    this.videoCache.add(video);
    video.addEventListener(
      "timeupdate",
      () => this.onVideoAdded.dispatch(video),
      { once: true },
    );
  }

  handleMutations = (mutations) => {
    window.requestIdleCallback(
      () => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") continue;
          for (const node of mutation.addedNodes) {
            if (node instanceof HTMLElement) {
              for (const video of this.findVideosInElement(node)) {
                this.checkVideoState(video);
              }
            }
          }
          for (const node of mutation.removedNodes) {
            if (node instanceof HTMLElement) {
              for (const video of this.findVideosInElement(node)) {
                if (!video.isConnected) {
                  this.onVideoRemoved.dispatch(video);
                  this.videoCache.delete(video);
                }
              }
            }
          }
        }
      },
      { timeout: 1000 },
    );
  };

  enable() {
    this.observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
    for (const video of this.findVideosInElement(document.documentElement)) {
      this.checkVideoState(video);
    }
  }

  disable() {
    this.observer.disconnect();
  }
}
