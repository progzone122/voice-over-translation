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

    return !(
      video.hasAttribute("muted") &&
      !video.classList.contains("vjs-tech") &&
      !video.preload
    );
  }

  findVideosInElement(root) {
    const videos = [];

    if (!root.querySelectorAll) return videos;

    const directVideos = root.querySelectorAll("video");
    for (const video of directVideos) {
      videos.push(video);
    }

    const elements = root.querySelectorAll("*");
    for (const element of elements) {
      const shadowRoot = element.shadowRoot;
      if (shadowRoot) {
        const shadowVideos = this.findVideosInElement(shadowRoot);
        for (const video of shadowVideos) {
          videos.push(video);
        }
      }
    }

    return videos;
  }

  checkVideoState(video) {
    if (!this.isValidVideo(video)) {
      debug.log("Ignored promotional/muted video:", video);
      return;
    }

    const isReady = video.readyState >= 2 && video.videoWidth;

    if (isReady) {
      this.onVideoAdded.dispatch(video);
    } else {
      video.addEventListener(
        "loadeddata",
        () => {
          if (video.readyState >= 2 && video.videoWidth) {
            this.onVideoAdded.dispatch(video);
          }
        },
        { once: true },
      );
    }
  }

  handleMutations = (mutations) => {
    window.requestIdleCallback(
      () => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") continue;

          for (const node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;

            const videos = this.findVideosInElement(node);
            for (const video of videos) {
              this.checkVideoState(video);
            }
          }

          for (const node of mutation.removedNodes) {
            if (!(node instanceof HTMLElement)) continue;

            const videos = this.findVideosInElement(node);
            for (const video of videos) {
              if (!video.isConnected) {
                this.onVideoRemoved.dispatch(video);
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

    const videos = this.findVideosInElement(document.documentElement);
    for (const video of videos) {
      this.checkVideoState(video);
    }
  }

  disable() {
    this.observer.disconnect();
  }
}
