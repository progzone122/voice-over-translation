import debug from "./debug";

export async function convertData(
  data: Record<string, unknown>,
  option: string,
  oldValue: unknown,
  newValue: string | number | boolean,
  optionValue: string | number | boolean | undefined = undefined,
) {
  const optionVal = optionValue ?? data[option];
  if (optionVal !== oldValue) {
    return;
  }

  data[option] = newValue;
  await votStorage.set(option, newValue);
  console.log(`[VOT] Old ${option} converted to new ${newValue}`);
}

export const votStorage = new (class {
  supportGM: boolean;
  supportGMPromises: boolean;
  constructor() {
    this.supportGM = typeof GM_getValue === "function";
    // this.supportGMPromises = typeof GM?.getValue === "function";
    this.supportGMPromises = false;
    debug.log(
      `[VOT Storage] GM Promises: ${this.supportGMPromises} | GM: ${this.supportGM}`,
    );
  }

  syncGet<T = unknown>(name: string, def?: unknown) {
    if (this.supportGM) {
      return GM_getValue<T>(name, def);
    }

    const toNumber = typeof def === "number";
    let val = window.localStorage.getItem(name);

    const result = val ?? def;
    return (toNumber ? Number(result) : result) as T;
  }

  async get<T = unknown>(name: string, def?: unknown) {
    if (this.supportGMPromises) {
      return await GM.getValue<T>(name, def);
    }

    return Promise.resolve(this.syncGet<T>(name, def));
  }

  syncSet<T = string | boolean | number | undefined>(name: string, value: T) {
    if (this.supportGM) {
      return GM_setValue(name, value);
    }

    return window.localStorage.setItem(name, value as string);
  }

  async set<T = string | boolean | number | undefined>(name: string, value: T) {
    if (this.supportGMPromises) {
      return await GM.setValue<T>(name, value);
    }

    return Promise.resolve(this.syncSet<T>(name, value));
  }

  syncDelete(name: string) {
    if (this.supportGM) {
      return GM_deleteValue(name);
    }

    return window.localStorage.removeItem(name);
  }

  async delete(name: string) {
    if (this.supportGMPromises) {
      return await GM.deleteValue(name);
    }

    return Promise.resolve(this.syncDelete(name));
  }

  syncList() {
    if (this.supportGM) {
      return GM_listValues();
    }

    return [
      "autoTranslate",
      "dontTranslateLanguage",
      "dontTranslateYourLang",
      "autoSetVolumeYandexStyle",
      "autoVolume",
      "buttonPos",
      "showVideoSlider",
      "syncVolume",
      "subtitlesMaxLength",
      "subtitlesOpacity",
      "subtitlesFontSize",
      "subtitlesDownloadFormat",
      "highlightWords",
      "responseLanguage",
      "defaultVolume",
      "audioProxy",
      "showPiPButton",
      "translateAPIErrors",
      "translationService",
      "detectService",
      "m3u8ProxyHost",
      "translateProxyEnabled",
      "hotkeyButton",
      "proxyWorkerHost",
      "audioBooster",
      "useNewModel",
      "locale-version",
      "locale-lang",
      "locale-phrases",
    ];
  }

  async list() {
    if (this.supportGMPromises) {
      return await GM.listValues();
    }

    return Promise.resolve(this.syncList());
  }
})();
