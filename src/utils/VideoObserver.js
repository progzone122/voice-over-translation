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
    this.observedNodes = {
      added: new Set(),
      removed: new Set(),
    };
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();
    this.observer = new MutationObserver(this.handleMutations);
  }

  isAdRelated(element) {
    if (!element) return false;

    const checks = [Array.from(element.classList), [element.id, element.title]];

    for (const items of checks) {
      for (const value of items) {
        if (VideoObserver.adKeywords.has(value.toLowerCase())) {
          return true;
        }
      }
    }
    return false;
  }

  isValidVideo(video) {
    if (this.isAdRelated(video)) return false;

    let parent = video.parentElement;
    while (parent && !this.isAdRelated(parent)) {
      parent = parent.parentElement;
    }
    if (parent) return false;

    const mutedVideo =
      (video.hasAttribute("muted") &&
        !video.classList.contains("vjs-tech") &&
        !video.preload) ||
      video.src.includes("v.redd.it"); // temp fix for reddit

    if (mutedVideo) {
      debug.log("Ignoring video element:", video);
      return false;
    }

    return true;
  }

  traverseDOM(root) {
    const treeWalker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_ELEMENT,
      {
        acceptNode: (node) =>
          node.tagName === "VIDEO" || node.shadowRoot
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP,
      },
    );

    while (treeWalker.nextNode()) {
      const currentNode = treeWalker.currentNode;
      if (currentNode instanceof HTMLVideoElement) {
        this.checkVideoState(currentNode);
      }
      if (currentNode.shadowRoot) {
        this.traverseDOM(currentNode.shadowRoot);
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
        this.observedNodes.added.add(node);
      }
      for (const node of mutation.removedNodes) {
        this.observedNodes.removed.add(node);
      }
    }

    window.requestIdleCallback(
      () => {
        for (const node of this.observedNodes.added) {
          this.traverseDOM(node);
        }

        for (const node of this.observedNodes.removed) {
          if (node.querySelectorAll) {
            const videos = node.querySelectorAll("video");
            for (const video of videos) {
              if (!video.isConnected) {
                this.onVideoRemoved.dispatch(video);
                this.videoCache.delete(video);
              }
            }
          }
        }

        this.observedNodes.added.clear();
        this.observedNodes.removed.clear();
      },
      { timeout: 1000 },
    );
  };

  enable() {
    this.observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
    this.traverseDOM(document.documentElement);
  }

  disable() {
    this.observer.disconnect();
    this.videoCache = new WeakSet();
  }
}
