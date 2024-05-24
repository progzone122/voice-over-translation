// coursera & udemy translation help object
const VideoTranslationHelpObject = new protobuf.Type(
  "VideoTranslationHelpObject",
)
  .add(new protobuf.Field("target", 1, "string")) // video_file_url or subtitles_file_url
  .add(new protobuf.Field("targetUrl", 2, "string")); // url to video_file or url to subtitles

const VideoTranslationRequest = new protobuf.Type("VideoTranslationRequest")
  .add(new protobuf.Field("url", 3, "string"))
  .add(new protobuf.Field("deviceId", 4, "string")) // used in mobile version
  .add(new protobuf.Field("firstRequest", 5, "bool")) // true for the first request, false for subsequent ones
  .add(new protobuf.Field("duration", 6, "double"))
  .add(new protobuf.Field("unknown2", 7, "int32")) // 1 1
  .add(new protobuf.Field("language", 8, "string")) // source language code
  .add(new protobuf.Field("forceSourceLang", 9, "bool")) // 0 - auto detected by yabrowser, 1 - user set his own lang by dropdown
  .add(new protobuf.Field("unknown4", 10, "int32")) // 0 0
  .add(
    new protobuf.Field(
      "translationHelp",
      11,
      "VideoTranslationHelpObject",
      "repeated",
    ),
  ) // array for translation assistance ([0] -> {2: link to video, 1: "video_file_url"}, [1] -> {2: link to subtitles, 1: "subtitles_file_url"})
  .add(new protobuf.Field("responseLanguage", 14, "string"))
  .add(new protobuf.Field("unknown5", 15, "int32")) // 0
  .add(new protobuf.Field("unknown6", 16, "int32")) // 1
  .add(new protobuf.Field("bypassCache", 17, "bool")); // ? maybe they have some kind of bypass limiter from one IP, because after one such request it stopped working

const VideoSubtitlesRequest = new protobuf.Type("VideoSubtitlesRequest")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("language", 2, "string")); // source language code

const VideoStreamRequest = new protobuf.Type("VideoStreamRequest")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("language", 2, "string"))
  .add(new protobuf.Field("responseLanguage", 3, "string"));

const VideoStreamPingRequest = new protobuf.Type("VideoStreamPingRequest").add(
  new protobuf.Field("pingId", 1, "int32"),
);

const VideoTranslationResponse = new protobuf.Type("VideoTranslationResponse")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("duration", 2, "double"))
  .add(new protobuf.Field("status", 4, "int32"))
  .add(new protobuf.Field("remainingTime", 5, "int32")) // secs before translation (used as interval before next request in yaBrowser)
  .add(new protobuf.Field("unknown0", 6, "int32")) // unknown 0 (1st request) -> 10 (2nd, 3th and etc requests). (if status is 0)
  .add(new protobuf.Field("translationId", 7, "string"))
  .add(new protobuf.Field("language", 8, "string")) // detected language (if the wrong one is set)
  .add(new protobuf.Field("message", 9, "string"));

const VideoSubtitlesObject = new protobuf.Type("VideoSubtitlesObject")
  .add(new protobuf.Field("language", 1, "string"))
  .add(new protobuf.Field("url", 2, "string"))
  .add(new protobuf.Field("unknown2", 3, "int32"))
  .add(new protobuf.Field("translatedLanguage", 4, "string"))
  .add(new protobuf.Field("translatedUrl", 5, "string"))
  .add(new protobuf.Field("unknown5", 6, "int32"))
  .add(new protobuf.Field("unknown6", 7, "int32"));

const VideoSubtitlesResponse = new protobuf.Type("VideoSubtitlesResponse")
  .add(new protobuf.Field("waiting", 1, "int32")) // 0 - finished/failed | 1 - waiting result (1 - ~10min, maybe more)
  .add(new protobuf.Field("subtitles", 2, "VideoSubtitlesObject", "repeated"));

const VideoStreamObject = new protobuf.Type("VideoStreamObject")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("timestamp", 2, "int64")); // timestamp in ms (probably means the time of 1 request to translate the stream)

const VideoStreamResponse = new protobuf.Type("VideoStreamResponse")
  .add(new protobuf.Field("interval", 1, "int32")) // 20s - streaming, 10s - translating, 0s - there is no connection with the server (the broadcast is finished or deleted)
  .add(new protobuf.Field("translatedInfo", 2, "VideoStreamObject"))
  .add(new protobuf.Field("pingId", 3, "int32"));

// /session/create
const YandexSessionRequest = new protobuf.Type("YandexSessionRequest")
  .add(new protobuf.Field("uuid", 1, "string"))
  .add(new protobuf.Field("module", 2, "string"));

const YandexSessionResponse = new protobuf.Type("YandexSessionResponse")
  .add(new protobuf.Field("sign", 1, "string"))
  .add(new protobuf.Field("expires", 2, "int32"));

// * Yandex has been skipping any translation streams for a long time (whitelist always return true)
// * Most likely, it is already outdated and will not be used
// const VideoWhitelistStreamRequest = new protobuf.Type("VideoWhitelistStreamRequest")
//   .add(new protobuf.Field("url", 1, "string"))
//   .add(new protobuf.Field("deviceId", 4, "string"))

// const VideoWhitelistStreamResponse = new protobuf.Type("VideoWhitelistStreamResponse")
//   .add(new protobuf.Field("inWhitelist", 1, "bool"))

// Create a root namespace and add the types
const root = new protobuf.Root()
  .define("yandex")
  .add(VideoTranslationHelpObject)
  .add(VideoTranslationRequest)
  .add(VideoTranslationResponse)
  .add(VideoSubtitlesRequest)
  .add(VideoSubtitlesObject)
  .add(VideoSubtitlesResponse)
  .add(VideoStreamPingRequest)
  .add(VideoStreamRequest)
  .add(VideoStreamObject)
  .add(VideoStreamResponse)
  .add(YandexSessionRequest)
  .add(YandexSessionResponse);

// Export the encoding and decoding functions
export const yandexProtobuf = {
  encodeTranslationRequest(
    url,
    duration,
    requestLang,
    responseLang,
    translationHelp,
  ) {
    return root.VideoTranslationRequest.encode({
      url,
      firstRequest: true,
      duration,
      unknown2: 1,
      language: requestLang,
      forceSourceLang: false,
      unknown4: 0,
      translationHelp,
      responseLanguage: responseLang,
      unknown5: 0,
      unknown6: 1,
      bypassCache: false,
    }).finish();
  },
  decodeTranslationResponse(response) {
    return root.VideoTranslationResponse.decode(new Uint8Array(response));
  },
  encodeSubtitlesRequest(url, requestLang) {
    return root.VideoSubtitlesRequest.encode({
      url,
      language: requestLang,
    }).finish();
  },
  decodeSubtitlesResponse(response) {
    return root.VideoSubtitlesResponse.decode(new Uint8Array(response));
  },
  encodeStreamPingRequest(pingId) {
    return root.VideoStreamPingRequest.encode({
      pingId,
    }).finish();
  },
  encodeStreamRequest(url, requestLang, responseLang) {
    return root.VideoStreamRequest.encode({
      url,
      language: requestLang,
      responseLanguage: responseLang,
    }).finish();
  },
  decodeStreamResponse(response) {
    return root.VideoStreamResponse.decode(new Uint8Array(response));
  },
  encodeYandexSessionRequest(uuid, module) {
    return root.YandexSessionRequest.encode({
      uuid,
      module,
    }).finish();
  },
  decodeYandexSessionResponse(response) {
    return root.YandexSessionResponse.decode(new Uint8Array(response));
  },
};
