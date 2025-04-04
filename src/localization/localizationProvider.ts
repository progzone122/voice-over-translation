import defaultLocale from "./locales/en.json";

import debug from "../utils/debug";
import { contentUrl } from "../config/config.js";
import { votStorage } from "../utils/storage";
import { getTimestamp, GM_fetch, lang } from "../utils/utils.js";
import { LocaleData, LocaleStorageKey } from "../types/locales";

class LocalizationProvider {
  storageKeys: LocaleStorageKey[];
  /**
   * Language used before page was reloaded
   */
  lang: string;
  /**
   * Locale phrases with current language
   */
  locale: LocaleData;

  cacheTTL = 7200;
  localizationUrl = `${contentUrl}/${REPO_BRANCH}/src/localization`;

  constructor() {
    this.storageKeys = [
      "locale-phrases",
      "locale-lang",
      "locale-hash",
      "locale-updated-at",
      "locale-lang-override",
    ];
    this.lang = this.getLang();
    this.locale = {};
    this.setLocaleFromJsonString(votStorage.syncGet("locale-phrases", ""));
  }

  getLangOverride() {
    return votStorage.syncGet("locale-lang-override", "auto");
  }

  getLang() {
    const langOverride = this.getLangOverride();
    return langOverride !== "auto" ? langOverride : lang;
  }

  getAvailableLangs() {
    return AVAILABLE_LOCALES;
  }

  reset() {
    for (const key of this.storageKeys) {
      votStorage.syncDelete(key);
    }
  }

  private buildUrl(path: string, force = false) {
    const query = force ? `?timestamp=${getTimestamp()}` : "";
    return `${this.localizationUrl}${path}${query}`;
  }

  async checkUpdates(force = false) {
    debug.log("Check locale updates...");
    try {
      const res = await GM_fetch(this.buildUrl("/hashes.json", force));
      if (!res.ok) throw res.status;
      const hashes = await res.json();
      return (await votStorage.get("locale-hash")) !== hashes[this.lang]
        ? hashes[this.lang]
        : false;
    } catch (err) {
      console.error(
        "[VOT] [localizationProvider] Failed to get locales hash:",
        err,
      );
      return false;
    }
  }

  async update(force = false) {
    const localeUpdatedAt = await votStorage.get<number>(
      "locale-updated-at",
      0,
    );
    if (
      !force &&
      localeUpdatedAt + this.cacheTTL > getTimestamp() &&
      (await votStorage.get("locale-lang")) === this.lang
    )
      return;

    const hash = await this.checkUpdates(force);
    await votStorage.set("locale-updated-at", getTimestamp());
    if (!hash) return;

    debug.log("Updating locale...");
    try {
      const res = await GM_fetch(
        this.buildUrl(`/locales/${this.lang}.json`, force),
      );
      if (!res.ok) throw res.status;
      // We use it .text() in order for there to be a single logic for GM_Storage and localStorage
      const text = await res.text();
      await votStorage.set("locale-phrases", text);
      await votStorage.set("locale-hash", hash);
      await votStorage.set("locale-lang", this.lang);
      this.setLocaleFromJsonString(text);
    } catch (err) {
      console.error("[VOT] [localizationProvider] Failed to get locale:", err);
      this.setLocaleFromJsonString(await votStorage.get("locale-phrases", ""));
    }
  }

  setLocaleFromJsonString(json: string) {
    try {
      this.locale = JSON.parse(json) || {};
    } catch (err) {
      console.error("[VOT] [localizationProvider]", err);
      this.locale = {};
    }
  }

  getFromLocale(locale: LocaleData, key: string) {
    return (
      key.split(".").reduce((acc, k) => acc?.[k], locale) ??
      this.warnMissingKey(locale, key)
    );
  }

  warnMissingKey(locale: LocaleData, key: string) {
    console.warn(
      "[VOT] [localizationProvider] locale",
      locale,
      "doesn't contain key",
      key,
    );
    return undefined;
  }

  getDefault(key: string) {
    return this.getFromLocale(defaultLocale, key) ?? key;
  }

  get(key: string) {
    return this.getFromLocale(this.locale, key) ?? this.getDefault(key);
  }
}

export const localizationProvider = new LocalizationProvider();
