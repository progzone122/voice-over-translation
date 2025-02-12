import { availableTTS } from "@vot.js/shared/consts";

import { localizationProvider } from "../localization/localizationProvider.js";
import debug from "./debug.ts";

const userlang = navigator.language || navigator.userLanguage;
const MAX_SECS_FRACTION = 0.66;
const slavicLangs = [
  "uk",
  "be",
  "bg",
  "mk",
  "sr",
  "bs",
  "hr",
  "sl",
  "pl",
  "sk",
  "cs",
];
export const lang = userlang?.substring(0, 2).toLowerCase() || "en";
export const calculatedResLang = (() => {
  if (availableTTS.includes(lang)) {
    return lang;
  }

  if (slavicLangs.includes(lang)) {
    return "ru";
  }

  return "en";
})();

function secsToStrTime(secs) {
  let minutes = Math.floor(secs / 60);
  let seconds = Math.floor(secs % 60);
  const fraction = seconds / 60;
  if (fraction >= MAX_SECS_FRACTION) {
    // rounding to the next minute if it has already been more than N%
    // e.g. 100 -> 2 minutes
    minutes += 1;
    seconds = 0;
  }

  if (minutes >= 60) {
    return localizationProvider.get("translationTakeMoreThanHour");
  } else if (minutes === 1 || (minutes === 0 && seconds > 0)) {
    return localizationProvider.get("translationTakeAboutMinute");
  } else if (minutes !== 11 && minutes % 10 === 1) {
    return localizationProvider
      .get("translationTakeApproximatelyMinute2")
      .replace("{0}", minutes);
  } else if (
    ![12, 13, 14].includes(minutes) &&
    [2, 3, 4].includes(minutes % 10)
  ) {
    return localizationProvider
      .get("translationTakeApproximatelyMinute")
      .replace("{0}", minutes);
  }

  return localizationProvider
    .get("translationTakeApproximatelyMinutes")
    .replace("{0}", minutes);
}

function isPiPAvailable() {
  return (
    "pictureInPictureEnabled" in document && document.pictureInPictureEnabled
  );
}

function initHls() {
  return typeof Hls != "undefined" && Hls?.isSupported()
    ? new Hls({
        debug: DEBUG_MODE, // turn it on manually if necessary
        lowLatencyMode: true,
        backBufferLength: 90,
      })
    : undefined;
}

const textFilters = (() => {
  const patterns = [
    /(?:https?|www|\bhttp\s+)[^\s/]*?(?:\.\s*[a-z]{2,}|\/)[^\s]*/gi,
    /#[^\s#]+|Auto-generated\s+by\s+YouTube|Provided\s+to\s+YouTube\s+by|Released\s+on|PayPal?/gi,
    /0x[\da-f]{40}|[13][a-km-zA-HJ-NP-Z1-9]{25,34}|4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}/g,
  ];

  return new RegExp(patterns.map((p) => p.source).join("|"), "gi");
})();

function cleanText(title, description) {
  return (title + " " + (description || ""))
    .replace(textFilters, "")
    .replace(/(?:[\s\u200B]+|\.{2,})/g, " ")
    .replace(/[^\p{L}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .substring(0, 450)
    .trim();
}
/**
 * Download binary file with entered filename
 *
 * @param {Blob} blob
 * @param {string} filename
 */
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
/**
 * Remove all banned characters from filename
 *
 * @param {string} filename
 * @return {string}
 */
function clearFileName(filename) {
  if (filename.trim().length === 0) {
    // generate a new filename
    return new Date().toLocaleDateString("en-us").replaceAll("/", "-");
  }

  return filename.replace(/[\\/:*?"'<>|]/g, "");
}

async function GM_fetch(url, opts = {}) {
  const { timeout = 15000, ...fetchOptions } = opts;
  const controller = new AbortController();

  try {
    if (url.includes("api.browser.yandex.ru")) {
      throw new Error("Preventing yandex cors");
    }
    return await fetch(url, {
      signal: controller.signal,
      ...fetchOptions,
    });
  } catch (err) {
    // Если fetch завершился ошибкой, используем GM_xmlhttpRequest
    // https://greasyfork.org/ru/scripts/421384-gm-fetch/code
    debug.log("GM_fetch preventing CORS by GM_xmlhttpRequest", err.message);

    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: fetchOptions.method || "GET",
        url,
        responseType: "blob",
        data: fetchOptions.body,
        timeout,
        headers: fetchOptions.headers || {},
        onload: (resp) => {
          const headers = resp.responseHeaders
            .split(/\r?\n/)
            .reduce((acc, line) => {
              const [, key, value] = line.match(/^([\w-]+): (.+)$/) || [];
              if (key) {
                acc[key] = value;
              }
              return acc;
            }, {});

          const response = new Response(resp.response, {
            status: resp.status,
            headers: headers,
          });
          // Response have empty url by default
          // this need to get same response url as in classic fetch
          Object.defineProperty(response, "url", {
            value: resp.finalUrl ?? "",
          });

          resolve(response);
        },
        ontimeout: () => reject(new Error("Timeout")),
        onerror: (error) => reject(new Error(error)),
        onabort: () => reject(new Error("AbortError")),
      });
    });
  }
}

function getTimestamp() {
  return Math.floor(Date.now() / 1000);
}

function clamp(value, min = 0, max = 100) {
  return Math.min(Math.max(value, min), max);
}

export {
  secsToStrTime,
  isPiPAvailable,
  initHls,
  cleanText,
  downloadBlob,
  clearFileName,
  GM_fetch,
  getTimestamp,
  clamp,
};
