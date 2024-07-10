import { getUUID } from "./getUUID.js";
import { getSignature } from "./getSignature.js";
import { yandexProtobuf } from "./yandexProtobuf.js";
import debug from "./utils/debug.js";

// Request video subtitles from Yandex API
async function requestVideoSubtitles(url, requestLang) {
  try {
    debug.log("requestVideoSubtitles");
    const yar = await import(
      `./yandexRequest${BUILD_MODE === "cloudflare" ? "-cloudflare" : ""}.js`
    );
    const yandexRequest = yar.default;
    debug.log("Inited yandexRequest...");
    // Initialize variables

    const body = yandexProtobuf.encodeSubtitlesRequest(url, requestLang);
    // Send the request

    const response = await yandexRequest(
      "/video-subtitles/get-subtitles",
      body,
      {
        "Vsubs-Signature": await getSignature(body),
        "Sec-Vsubs-Token": getUUID(),
      },
    );

    return { success: true, response };
  } catch (error) {
    // Handle errors
    console.error("[VOT]", error);
    return { success: false, error: error.message };
  }
}

export default requestVideoSubtitles;
