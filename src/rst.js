import { getUUID } from "./getUUID.js";
import { getSignature } from "./getSignature.js";
import { yandexProtobuf } from "./yandexProtobuf.js";
import debug from "./utils/debug.js";

// Request stream translation from Yandex API
async function requestStreamTranslation(url, requestLang, responseLang) {
  try {
    debug.log("requestStreamTranslation");
    // ! CURRENT CLOUDFLARE WORKER DOESN'T SUPPORT STREAM TRANSLATIONS
    const yar = await import(
      `./yandexRequest${BUILD_MODE === "cloudflare" ? "-cloudflare" : ""}.js`
    );
    const yandexRequest = yar.default;
    debug.log("Inited yandexRequest...");
    // Initialize variables

    const body = yandexProtobuf.encodeStreamRequest(
      url,
      requestLang,
      responseLang,
    );
    // Send the request

    const response = await yandexRequest(
      "/stream-translation/translate-stream",
      body,
      {
        "Vtrans-Signature": await getSignature(body),
        "Sec-Vtrans-Token": getUUID(),
      },
    );

    return { success: true, response };
  } catch (error) {
    // Handle errors
    console.error("[VOT]", error);
    return { success: false, error: error.message };
  }
}

export default requestStreamTranslation;
