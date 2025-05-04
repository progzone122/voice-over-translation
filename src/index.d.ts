import type { ServiceConf } from "@vot.js/ext/types/service";
import type { RequestLang, ResponseLang } from "@vot.js/shared/types/data";
import type { SubtitlesData } from "@vot.js/shared/types/subs";
import type VOTClient from "@vot.js/ext";
import type { VOTWorkerClient } from "@vot.js/ext";

export type VideoData = object & {
  downloadTitle: string;
  videoId: string;
  detectedLanguage: RequestLang;
  responseLanguage: ResponseLang;
}; // add typings for object
export type Site = object; // add typings for object

export class CacheManager {
  cache: Map<string, unknown>;

  constructor();

  get(key: string): unknown | undefined;
  getTranslation(key: string): unknown | undefined;
  getSubtitles(key: string): unknown | undefined;
  set(key: string, value: unknown): void;
  setTranslation(key: string, translation: unknown): void;
  setSubtitles(key: string, subtitles: unknown): void;
  delete(key: string): void;
  deleteSubtitles(key: string): void;
}

export let countryCode: string | undefined;

export class VideoHandler {
  translateFromLang: string;
  translateToLang: string;

  timer: ReturnType<typeof setTimeout> | undefined;
  videoData?: VideoData;
  site: ServiceConf;
  votClient: VOTClient | VOTWorkerClient;

  firstPlay: boolean;
  audioContext?: AudioContext;
  downloadTranslationUrl: string | null;
  yandexSubtitles: SubtitlesData | null;
  tempOriginalVolume: number;

  longWaitingResCount: number;

  // set in methods
  video: HTMLVideoElement;
  data?: Partial<import("./types/storage").StorageData>;

  subtitlesWidget: {
    strTranslatedTokens: string;
    portal?: HTMLElement;
    releaseTooltip: () => void;
    setHighlightWords: (value: boolean) => void;
    setMaxLength: (len: number) => void;
    setFontSize: (size: number) => void;
    setOpacity: (rate: number) => void;
  };
  cacheManager: CacheManager;
  audioPlayer: import("chaimu").default;
  translationHandler: {
    handleTranslationBtnClick: () => Promise<void>;
  };

  constructor(video: HTMLVideoElement, container: HTMLElement, site: Site);

  transformBtn(status: "none" | "success" | "error", text: string): this;
  syncVolumeWrapper(fromType: "translation" | "video", newVolume: number): void;
  getVideoVolume(): number;
  setVideoVolume(volume: number): this;
  changeSubtitlesLang(subs: string): Promise<this>;
  loadSubtitles(): Promise<void>;
  isMuted(): boolean;
  initVOTClient(): this;
  createPlayer(): this;
  stopTranslate(): void;
  stopTranslation: () => void;
  collectReportInfo(): {
    assignees: "ilyhalight";
    template: string;
    os: string;
    "script-version": string;
    "additional-info": string;
  };
  updateSubtitlesLangSelect(): Promise<void>;
}
