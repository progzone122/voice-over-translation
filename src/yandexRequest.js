import { workerHost, yandexUserAgent } from "./config/config.js";
import debug from "./utils/debug.js";

function yandexRequest(path, body, headers) {
  return new Promise((resolve, reject) => {
    try {
      debug.log("yandexRequest:", path);
      // Create a fetch options object with headers and body
      const options = {
        url: `https://${workerHost}${path}`,
        method: "POST",
        headers: {
          Accept: "application/x-protobuf",
          "Accept-Language": "en",
          "Content-Type": "application/x-protobuf",
          "User-Agent": yandexUserAgent,
          Pragma: "no-cache",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Mode": "no-cors",
          "sec-ch-ua": null,
          "sec-ch-ua-mobile": null,
          "sec-ch-ua-platform": null,
          ...headers,
        },
        binary: true,
        data: new Blob([body]),
        responseType: "arraybuffer",
        onload: (http) => {
          debug.log("yandexRequest:", http.status, http);
          if (http.status === 200) {
            resolve(http.response);
          } else {
            reject(new Error(`HTTP error! status: ${http.status}`));
          }
        },
        onerror: (error) => {
          console.error("[VOT]", error);
          reject(error);
        },
      };

      // Send the request using GM_xmlhttpRequest
      GM_xmlhttpRequest(options);
    } catch (exception) {
      console.error("[VOT]", exception);
      reject(exception);
    }
  });
}

export default yandexRequest;
