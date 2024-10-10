export class VideoHandler {
  video: HTMLVideoElement;
  data: Record<string, unknown>;
  audioContext: AudioContext | undefined;
  constructor(video: HTMLVideoElement, container: HTMLElement, site: unknown);

  transformBtn(status: "none" | "success" | "error", text: string): this;
  setLoadingBtn(loading: boolean = false): this;
  getVideoVolume(): number;
  setVideoVolume(volume: number): this;
  isMuted(): boolean;
}
