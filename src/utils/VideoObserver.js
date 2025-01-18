import "requestidlecallback-polyfill";
import { EventImpl } from "./EventImpl.js";
import debug from "./debug.ts";

export class VideoObserver {
  static adKeywords = new Set([
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
  ]);

  constructor() {
    this.videoCache = new WeakSet();
    this.observedAddedNodes = new Set();
    this.observedRemovedNodes = new Set();
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();
    this.observer = new MutationObserver(this.handleMutations);
  }

  isAdRelated(element) {
    if (!element) return false;
    const { classList, id, title } = element;
    for (const cls of classList) {
      if (VideoObserver.adKeywords.has(cls)) return true;
    }
    return (
      VideoObserver.adKeywords.has(id) || VideoObserver.adKeywords.has(title)
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
      (video.hasAttribute("muted") &&
        !video.classList.contains("vjs-tech") &&
        !video.preload) ||
      video.src.includes("v.redd.it") // temp fix for reddit
    ) {
      debug.log("Ignore muted video:", video);
      return false;
    }
    return true;
  }

  findVideosAndProcess(root) {
    if (!root) return;
    const elements = [root];

    if (root.querySelectorAll) {
      elements.push(...root.querySelectorAll("*"));
    }

    for (const element of elements) {
      if (element instanceof HTMLVideoElement) {
        this.checkVideoState(element);
      }

      if (element.shadowRoot) {
        this.findVideosAndProcess(element.shadowRoot);
      }
    }
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
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;

      for (const node of mutation.addedNodes) {
        if (node instanceof HTMLElement) {
          this.observedAddedNodes.add(node);
        }
      }
      for (const node of mutation.removedNodes) {
        if (node instanceof HTMLElement) {
          this.observedRemovedNodes.add(node);
        }
      }
    }

    window.requestIdleCallback(
      () => {
        for (const node of this.observedAddedNodes) {
          this.findVideosAndProcess(node);
        }
        for (const node of this.observedRemovedNodes) {
          if (node.querySelectorAll) {
            for (const video of node.querySelectorAll("video")) {
              if (!video.isConnected) {
                this.onVideoRemoved.dispatch(video);
                this.videoCache.delete(video);
              }
            }
          }
        }
        this.observedAddedNodes.clear();
        this.observedRemovedNodes.clear();
      },
      { timeout: 1000 },
    );
  };

  enable() {
    this.observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
    this.findVideosAndProcess(document.documentElement);
  }

  disable() {
    this.observer.disconnect();
  }
}
