import "requestidlecallback-polyfill";
import { EventImpl } from "./EventImpl.js";
import debug from "./debug.js";

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

const adKeywords =
  /advertise|promo|sponsor|banner|commercial|preroll|midroll|postroll|ad-container|sponsored/i;

function isAdVideo(video) {
  if (adKeywords.test(video.className) || adKeywords.test(video.title)) {
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
    this.videoCache = new Set();
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

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            this.handleIntersectingVideo(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );
  }

  enable() {
    this.observer.observe(document, {
      childList: true,
      subtree: true,
    });
    const videos = this.getAllVideoEls();
    for (let i = 0; i < videos.length; i++) {
      this.checkAndHandleVideo(videos[i]);
    }
  }

  disable() {
    this.observer.disconnect();
    this.intersectionObserver.disconnect();
  }

  getAllVideoEls() {
    const videos = document.querySelectorAll("video");
    if (videos.length) {
      return videos;
    }

    // Use it only if we don't find videos
    // It takes a long time to complete
    const els = document.querySelectorAll("*");
    const videoElements = new Set();
    function traverseShadowRoot(root) {
      if (!root) return;
      root.querySelectorAll("video").forEach((video) => {
        if (videoElements.has(video)) {
          return;
        }
        videoElements.add(video);
      });

      root.querySelectorAll("*").forEach((element) => {
        if (element.shadowRoot) {
          traverseShadowRoot(element.shadowRoot);
        }
      });
    }

    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      if (el.shadowRoot) {
        traverseShadowRoot(el);
      }
    }

    return Array.from(videoElements);
  }

  checkAndHandleVideo(video) {
    if (this.videoCache.has(video)) {
      return;
    }
    this.videoCache.add(video);
    this.intersectionObserver.observe(video);
  }

  handleIntersectingVideo(video) {
    this.intersectionObserver.unobserve(video);
    if (isAdVideo(video) || video.getAttribute("muted") !== null) {
      debug.log("The promotional/muted video was ignored", video);
      return;
    }
    waitForVideoReady(video, (readyVideo) => {
      this.handleVideoAdded(readyVideo);
    });
  }

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
