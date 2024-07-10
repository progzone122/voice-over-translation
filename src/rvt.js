import { getUUID } from "./getUUID.js";
import { getSignature } from "./getSignature.js";
import { yandexProtobuf } from "./yandexProtobuf.js";
import debug from "./utils/debug.js";

// Request video translation from Yandex API
async function requestVideoTranslation(
  url,
  duration,
  requestLang,
  responseLang,
  translationHelp,
) {
  try {
    debug.log("requestVideoTranslation");
    const yar = await import(
      `./yandexRequest${BUILD_MODE === "cloudflare" ? "-cloudflare" : ""}.js`
    );
    const yandexRequest = yar.default;
    debug.log("Inited yandexRequest...");
    // Initialize variables

    const body = yandexProtobuf.encodeTranslationRequest(
      url,
      duration,
      requestLang,
      responseLang,
      translationHelp,
    );
    // Send the request

    const headers = {
      "Vtrans-Signature": await getSignature(body),
      "Sec-Vtrans-Token": getUUID(),
    };

    const response = await yandexRequest(
      "/video-translation/translate",
      body,
      headers,
    );

    return { success: true, response };
  } catch (error) {
    // Handle errors
    console.error("[VOT]", error);
    return { success: false, error: error.message };
  }
}

export default requestVideoTranslation;
