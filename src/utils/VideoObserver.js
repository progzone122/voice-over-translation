import "requestidlecallback-polyfill";
import { EventImpl } from "./EventImpl.js";
import debug from "./debug.ts";

const adKeywords = new Set([
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

const adKeywordsRegex = (() => {
  const pattern = Array.from(adKeywords).join("|");
  return new RegExp(pattern, "i");
})();

const filterVideoNodes = (nodes) => {
  const result = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node instanceof HTMLVideoElement) {
      result.push(node);
    } else if (node instanceof HTMLElement) {
      const videos = node.querySelectorAll("video");
      for (let j = 0; j < videos.length; j++) {
        result.push(videos[j]);
      }
    }
  }
  return result;
};

const isAdVideo = (video) => {
  if (
    adKeywordsRegex.test(video.className) ||
    adKeywordsRegex.test(video.title)
  )
    return true;

  let parent = video.parentElement;
  while (parent) {
    if (
      adKeywordsRegex.test(parent.className) ||
      adKeywordsRegex.test(parent.id)
    )
      return true;
    parent = parent.parentElement;
  }

  return false;
};

const isMutedVideo = (video) => {
  return (
    video.hasAttribute("muted") &&
    !video.classList.contains("vjs-tech") &&
    !video.preload
  );
};

const isVideoReady = (video) =>
  video.getVideoPlaybackQuality().totalVideoFrames;

const waitForVideoReady = (video, callback) => {
  const checkVideoState = () => {
    if (isVideoReady(video)) {
      callback(video);
    } else {
      requestAnimationFrame(checkVideoState);
    }
  };

  checkVideoState();
};

export class VideoObserver {
  constructor() {
    this.videoCache = new Set();
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();

    this.observer = new MutationObserver(this.handleMutations);
    this.patchAttachShadow();
  }

  patchAttachShadow() {
    const originalAttachShadow = Element.prototype.attachShadow;
    const self = this;
    Element.prototype.attachShadow = function (...args) {
      const shadowRoot = originalAttachShadow.apply(this, args);
      self.searchInRoot(shadowRoot);
      self.observeShadowRoot(shadowRoot);
      return shadowRoot;
    };
  }

  observeShadowRoot(shadowRoot) {
    const shadowObserver = new MutationObserver(this.handleMutations);
    shadowObserver.observe(shadowRoot, { childList: true, subtree: true });
  }

  handleMutations = (mutationsList) => {
    window.requestIdleCallback(
      () => {
        for (let i = 0; i < mutationsList.length; i++) {
          const mutation = mutationsList[i];
          if (mutation.type !== "childList") continue;

          const addedVideos = filterVideoNodes(mutation.addedNodes);
          for (let j = 0; j < addedVideos.length; j++) {
            this.checkAndHandleVideo(addedVideos[j]);
          }

          const removedVideos = filterVideoNodes(mutation.removedNodes);
          for (let k = 0; k < removedVideos.length; k++) {
            this.handleVideoRemoved(removedVideos[k]);
          }
        }
      },
      { timeout: 1000 },
    );
  };

  searchInRoot(root) {
    const videos = root.querySelectorAll("video");
    for (let i = 0; i < videos.length; i++) {
      this.checkAndHandleVideo(videos[i]);
    }
  }

  enable() {
    this.observer.observe(document, { childList: true, subtree: true });

    const regularVideos = document.querySelectorAll("video");
    for (let i = 0; i < regularVideos.length; i++) {
      this.checkAndHandleVideo(regularVideos[i]);
    }
  }

  disable() {
    this.observer.disconnect();
  }

  checkAndHandleVideo = (video) => {
    if (this.videoCache.has(video)) return;
    this.videoCache.add(video);

    if (isAdVideo(video) || isMutedVideo(video)) {
      debug.log("The promotional/muted video was ignored", video);
      return;
    }
    waitForVideoReady(video, this.handleVideoAdded);
  };

  handleVideoAdded = (video) => {
    this.onVideoAdded.dispatch(video);
  };

  handleVideoRemoved = (video) => {
    if (!document.contains(video)) {
      this.videoCache.delete(video);
      this.onVideoRemoved.dispatch(video);
    }
  };
}
