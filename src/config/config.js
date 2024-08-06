// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
const m3u8ProxyHost = "m3u8-proxy.toil.cc"; // used for streaming
const proxyWorkerHost = "vot-worker.toil.cc"; // used for cloudflare version
const votBackendUrl = "https://vot-api.toil.cc/v1";

const defaultAutoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation
const maxAudioVolume = 900;
const defaultTranslationService = "yandex";
const defaultDetectService = "yandex";

const detectUrls = {
  yandex: "https://translate.toil.cc/detect",
  rustServer: "https://rust-server-531j.onrender.com/detect",
};

const translateUrls = {
  yandex: "https://translate.toil.cc/translate",
  deepl: "https://translate-deepl.toil.cc/translate",
};

export {
  workerHost,
  m3u8ProxyHost,
  proxyWorkerHost,
  detectUrls,
  votBackendUrl,
  translateUrls,
  defaultTranslationService,
  defaultDetectService,
  defaultAutoVolume,
  maxAudioVolume,
};
