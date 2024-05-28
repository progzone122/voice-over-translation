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

const adKeywords = /ad|advertise|promo|sponsor/i;

function isAdVideo(video) {
  if (adKeywords.test(video.className) || adKeywords.test(video.id)) {
    return true;
  }

  let parent = video.parentElement;
  while (parent) {
    if (adKeywords.test(parent.className) || adKeywords.test(parent.id)) {
      return true;
    }
    parent = parent.parentElement;
  }

  return false;
}

export class VideoObserver {
  constructor() {
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();
    this.handleVideoAddedBound = this.handleVideoAdded.bind(this);
    this.handleVideoRemovedBound = this.handleVideoRemoved.bind(this);
    this.observer = new MutationObserver((mutationsList) => {
      window.requestIdleCallback(
        () => {
          for (let i = 0; i < mutationsList.length; i++) {
            const mutation = mutationsList[i];
            if (mutation.type !== "childList") continue;

            const addedNodes = filterVideoNodes(mutation.addedNodes);
            for (let j = 0; j < addedNodes.length; j++) {
              this.handleVideoAddedBound(addedNodes[j]);
            }

            const removedNodes = filterVideoNodes(mutation.removedNodes);
            for (let k = 0; k < removedNodes.length; k++) {
              this.handleVideoRemovedBound(removedNodes[k]);
            }
          }
        },
        { timeout: 1000 },
      );
    });
  }

  enable() {
    this.observer.observe(document, {
      childList: true,
      subtree: true,
    });
    const videos = document.querySelectorAll("video");
    for (let i = 0; i < videos.length; i++) {
      this.handleVideoAddedBound(videos[i]);
    }
  }

  disable() {
    this.observer.disconnect();
  }

  handleVideoAdded(video) {
    if (isAdVideo(video)) {
      return;
    }
    if (video.readyState >= 3) {
      this.onVideoAdded.dispatch(video);
    } else {
      const canPlayHandler = () => {
        video.removeEventListener("canplay", canPlayHandler);
        if (!isAdVideo(video)) {
          this.onVideoAdded.dispatch(video);
        }
      };
      video.addEventListener("canplay", canPlayHandler);
    }
  }

  handleVideoRemoved(video) {
    if (!document.contains(video)) {
      this.onVideoRemoved.dispatch(video);
    }
  }
}
