import debug from "./debug";

import { VideoHandler } from "../index.js";
import { localizationProvider } from "../localization/localizationProvider.js";
import { votStorage } from "./storage.js";
import { VOTLocalizedError } from "./VOTLocalizedError.js";
import { decibelsToPercent, percentToDecibels } from "./volume.js";
// import { Tone } from "../global";

const videoLipSyncEvents = [
  "playing",
  "ratechange",
  "play",
  "waiting",
  "pause",
];

export function initAudioContext() {
  const audioContext =
    window.AudioContext || (window as any).webkitAudioContext;
  return audioContext ? new audioContext() : undefined;
}

export class AudioPlayer {
  audio: HTMLAudioElement;
  videoHandler: VideoHandler;
  gainNode: GainNode | undefined;
  audioSource: MediaElementAudioSourceNode | undefined;

  constructor(videoHandler: VideoHandler, src: string | undefined = undefined) {
    this.audio = new Audio(src);
    this.audio.crossOrigin = "anonymous";
    this.videoHandler = videoHandler;
  }

  initAudioBooster() {
    if (!this.videoHandler.audioContext) {
      return this;
    }

    this.gainNode = this.videoHandler.audioContext.createGain();
    this.gainNode.connect(this.videoHandler.audioContext.destination);
    this.audioSource = this.videoHandler.audioContext.createMediaElementSource(
      this.audio,
    );
    this.audioSource.connect(this.gainNode);
    return this;
  }

  audioErrorHandle = async (e: DOMException) => {
    console.error("[VOT]", e);
    if (e.name === "NotAllowedError") {
      this.videoHandler.transformBtn(
        "error",
        localizationProvider.get("grantPermissionToAutoPlay"),
      );
      throw new VOTLocalizedError("grantPermissionToAutoPlay");
    } else if (e.name === "NotSupportedError") {
      this.videoHandler.data.audioProxy = 1;
      await votStorage.set("audioProxy", 1);
    }
  };

  /**
   * Synchronizes the lipsync of the video and audio elements
   */
  lipSync(mode: false | string = false) {
    debug.log("[AudioPlayer] lipsync video", this.videoHandler.video);
    if (!this.videoHandler.video) {
      return this;
    }

    this.audio.currentTime = this.videoHandler.video.currentTime;
    this.audio.playbackRate = this.videoHandler.video.playbackRate;
    if (!mode) {
      debug.log("lipsync mode isn't set");
      return this;
    }

    debug.log(`lipsync mode is ${mode}`);
    switch (mode) {
      case "play":
      case "playing": {
        return this.syncPlay();
      }
      case "pause":
      case "stop":
      case "waiting": {
        return this.pause();
      }
      default: {
        return this;
      }
    }
  }

  handleVideoEvent = (event: Event) => {
    debug.log(`handle video ${event.type}`);
    this.lipSync(event.type);
    return this;
  };

  removeVideoEvents() {
    for (const e of videoLipSyncEvents) {
      this.videoHandler.video.removeEventListener(e, this.handleVideoEvent);
    }

    return this;
  }

  addVideoEvents() {
    for (const e of videoLipSyncEvents) {
      this.videoHandler.video.addEventListener(e, this.handleVideoEvent);
    }

    return this;
  }

  clear() {
    this.audio.pause();
    this.audio.src = "";
    this.audio.removeAttribute("src");
    return this;
  }

  syncPlay() {
    debug.log("[AudioPlayer] sync play called");
    this.audio.play().catch(this.audioErrorHandle);
    return this;
  }

  async play() {
    debug.log("[AudioPlayer] play called");
    await this.audio.play().catch(this.audioErrorHandle);
    return this;
  }

  pause() {
    debug.log("[AudioPlayer] pause called");
    this.audio.pause();
    return this;
  }

  set src(url: string) {
    this.audio.src = url;
  }

  get src() {
    return this.audio.src;
  }

  get currentSrc() {
    return this.audio.currentSrc;
  }

  /**
   * set audio volume in range 0.00 - 1.00
   */
  set volume(value: number) {
    if (this.gainNode) {
      this.gainNode.gain.value = value;
      return;
    }

    this.audio.volume = value;
  }

  /**
   * return audio volume in range 0.00 - 1.00
   */
  get volume() {
    return this.gainNode ? this.gainNode.gain.value : this.audio.volume;
  }
}

export class TonePlayer extends AudioPlayer {
  grainPlayer: Tone.GrainPlayer | undefined;
  constructor(videoHandler: VideoHandler, src: string | undefined = undefined) {
    super(videoHandler, src);
  }

  waitAudioPlay() {
    return new Promise((resolve) => {
      if (!this.grainPlayer) {
        return resolve(false);
      }

      let interval = setInterval(async () => {
        if (!this.grainPlayer!.loaded) {
          return null;
        }

        clearInterval(interval);
        resolve(true);
      }, 100);
    });
  }

  initAudioBooster() {
    // tone player has embedded gain node
    return this;
  }

  async init() {
    this.grainPlayer = new Tone.GrainPlayer({
      playbackRate: this.videoHandler.video.playbackRate,
      url: this.audio.src,
      grainSize: 0.1,
    }).toDestination();
    await this.waitAudioPlay();
  }

  lipSync(mode: false | string = false) {
    debug.log("[TonePlayer] lipsync video", this.videoHandler.video);
    if (!this.videoHandler.video || !this.grainPlayer) {
      return this;
    }

    this.audio.currentTime = this.videoHandler.video.currentTime;
    this.grainPlayer.playbackRate = this.videoHandler.video.playbackRate;
    if (!mode) {
      debug.log("lipsync mode isn't set");
      return this;
    }

    debug.log(`lipsync mode is ${mode}`);
    switch (mode) {
      case "play":
      case "playing": {
        this.syncPlay();
        return this;
      }
      case "pause":
      case "stop":
      case "waiting": {
        return this.pause();
      }
      default: {
        return this;
      }
    }
  }

  syncPlay() {
    debug.log("[TonePlayer] play called");
    if (!this.grainPlayer) {
      return this;
    }

    try {
      this.grainPlayer.start(undefined, this.audio.currentTime);
    } catch (err) {
      // ! Start time must be strictly greater than previous start time
      console.error("Failed to start", (err as Error).message);
    }

    return this;
  }

  async play() {
    return Promise.resolve(this.syncPlay());
  }

  pause() {
    debug.log("[TonePlayer] pause called");
    if (!this.grainPlayer) {
      return this;
    }

    this.grainPlayer.stop();
    return this;
  }

  clear() {
    if (this.grainPlayer) {
      this.grainPlayer.stop();
      this.grainPlayer = undefined;
    }

    return super.clear();
  }

  set volume(value: number) {
    if (!this.grainPlayer) {
      return;
    }

    this.grainPlayer.volume.value = percentToDecibels(value);
  }

  get volume() {
    return this.grainPlayer
      ? decibelsToPercent(this.grainPlayer.volume.value)
      : 0;
  }
}
