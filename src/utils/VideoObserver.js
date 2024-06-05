import "requestidlecallback-polyfill";
import { EventImpl } from "./EventImpl.js";

function filterVideoNodes(nodes) {
  return Array.from(nodes).flatMap((node) => {
    if (node instanceof HTMLVideoElement) {
      return [node];
    }
    if (node instanceof HTMLElement) {
      return Array.from(node.querySelectorAll("video"));
    }
    return node.shadowRoot
      ? Array.from(node.shadowRoot.querySelectorAll("video"))
      : [];
  });
}

function isVideoReady(video) {
  return video.readyState >= 3;
}

function waitForVideoReady(video, callback) {
  function checkVideoState() {
    if (isVideoReady(video)) {
      callback(video);
    } else {
      requestAnimationFrame(checkVideoState);
    }
  }

  checkVideoState();
}

export class VideoObserver {
  constructor() {
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();
    this.observer = new MutationObserver((mutationsList) => {
      window.requestIdleCallback(
        () => {
          for (let i = 0; i < mutationsList.length; i++) {
            const mutation = mutationsList[i];
            if (mutation.type !== "childList") continue;

            const addedNodes = filterVideoNodes(mutation.addedNodes);
            for (let j = 0; j < addedNodes.length; j++) {
              this.checkAndHandleVideo(addedNodes[j]);
            }

            const removedNodes = filterVideoNodes(mutation.removedNodes);
            for (let k = 0; k < removedNodes.length; k++) {
              this.handleVideoRemoved(removedNodes[k]);
            }
          }
        },
        { timeout: 1000 },
      );
    });
    this.videoCache = new Set();
  }

  enable() {
    this.observer.observe(document, {
      childList: true,
      subtree: true,
    });
    const videos = document.querySelectorAll("video");
    for (let i = 0; i < videos.length; i++) {
      this.checkAndHandleVideo(videos[i]);
    }
  }

  disable() {
    this.observer.disconnect();
  }

  checkAndHandleVideo(video) {
    if (this.videoCache.has(video)) {
      return;
    }

    waitForVideoReady(video, (readyVideo) => {
      this.handleVideoAdded(readyVideo);
      this.videoCache.add(readyVideo);
    });
  }

  handleVideoAdded = (video) => {
    this.onVideoAdded.dispatch(video);
  };

  handleVideoRemoved = (video) => {
    if (!document.contains(video)) {
      this.onVideoRemoved.dispatch(video);
    }
  };
}
