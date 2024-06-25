import { localizationProvider } from "../localization/localizationProvider.js";
import youtubeUtils from "./youtubeUtils.js";

const userlang = navigator.language || navigator.userLanguage;
export const lang = userlang?.substr(0, 2)?.toLowerCase() ?? "en";

// not used
// function waitForElm(selector) {
//   // https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
//   return new Promise((resolve) => {
//     const element = document.querySelector(selector);
//     if (element) {
//       return resolve(element);
//     }

//     const observer = new MutationObserver(() => {
//       const element = document.querySelector(selector);
//       if (element) {
//         resolve(element);
//         observer.disconnect();
//       }
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//       once: true,
//     });
//   });
// }

// not used
// const sleep = (m) => new Promise((r) => setTimeout(r, m));

const getVideoId = (service, video) => {
  let url = new URL(window.location.href);

  switch (service) {
    case "piped":
    case "invidious":
    case "youtube": {
      if (url.searchParams.has("enablejsapi")) {
        const videoUrl = youtubeUtils.getPlayer().getVideoUrl();
        url = new URL(videoUrl);
      }

      return (
        url.pathname.match(/(?:watch|embed|shorts|live)\/([^/]+)/)?.[1] ||
        url.searchParams.get("v")
      );
    }
    case "vk": {
      const pathID = url.pathname.match(
        /^\/(video|clip)-?[0-9]{8,9}_[0-9]{9}$/,
      );
      const paramZ = url.searchParams.get("z");
      const paramOID = url.searchParams.get("oid");
      const paramID = url.searchParams.get("id");
      if (pathID) {
        return pathID[0].slice(1);
      } else if (paramZ) {
        return paramZ.split("/")[0];
      } else if (paramOID && paramID) {
        return `video-${Math.abs(parseInt(paramOID))}_${paramID}`;
      }

      return null;
    }
    case "nine_gag":
    case "9gag":
    case "gag":
      return url.pathname.match(/gag\/([^/]+)/)?.[1];
    case "twitch": {
      const clipPath = url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/);
      if (/^m\.twitch\.tv$/.test(url.hostname)) {
        return url.href.match(/videos\/([^/]+)/)?.[0] || url.pathname.slice(1);
      } else if (/^player\.twitch\.tv$/.test(url.hostname)) {
        return `videos/${url.searchParams.get("video")}`;
      } else if (/^clips\.twitch\.tv$/.test(url.hostname)) {
        // https://clips.twitch.tv/clipId
        const schema = document.querySelector(
          "script[type='application/ld+json']",
        );
        const pathname = url.pathname.slice(1);
        if (!schema) {
          // иногда из-за не прогрузов твича это не работает, но пусть лучше будет (можно переделать все в async и ждать элемента, но нужно ли это ради 1 сайта)
          // ссылки вида https://clips.twitch.tv/embed?clip=clipId грузятся нормально
          const isEmbed = pathname === "embed";
          const channelLink = document.querySelector(
            isEmbed
              ? ".tw-link[data-test-selector='stream-info-card-component__stream-avatar-link']"
              : ".clips-player a:not([class])",
          );

          if (!channelLink) {
            return;
          }

          const channelName = channelLink.href.replace(
            "https://www.twitch.tv/",
            "",
          );

          return `${channelName}/clip/${isEmbed ? url.searchParams.get("clip") : pathname}`;
        }

        const schemaJSON = JSON.parse(schema.innerText);
        const channelLink = schemaJSON["@graph"].find(
          (obj) => obj["@type"] === "VideoObject",
        )?.creator.url;

        const channelName = channelLink.replace("https://www.twitch.tv/", "");
        return `${channelName}/clip/${pathname}`;
      } else if (clipPath) {
        return clipPath[0];
      }

      return url.pathname.match(/(?:videos)\/([^/]+)/)?.[0];
    }
    case "proxitok":
      return url.pathname.match(/([^/]+)\/video\/([^/]+)/)?.[0];
    case "tiktok": {
      let id = url.pathname.match(/([^/]+)\/video\/([^/]+)/)?.[0];
      if (!id) {
        const playerEl = video.closest(".xgplayer-playing, .tiktok-web-player");
        const itemEl = playerEl?.closest(
          'div[data-e2e="recommend-list-item-container"]',
        );
        const authorEl = itemEl?.querySelector(
          'a[data-e2e="video-author-avatar"]',
        );
        if (playerEl && authorEl) {
          const videoId = playerEl.id?.match(/^xgwrapper-[0-9]+-(.*)$/)?.at(1);
          const author = authorEl.href?.match(/.*(@.*)$/)?.at(1);
          if (videoId && author) {
            id = `${author}/video/${videoId}`;
          }
        }
      }
      return id;
    }
    case "vimeo": {
      const appId = url.searchParams.get("app_id");
      const videoId =
        url.pathname.match(/[^/]+\/[^/]+$/)?.[0] ||
        url.pathname.match(/[^/]+$/)?.[0];

      return appId ? `${videoId}?app_id=${appId}` : videoId;
    }
    case "xvideos":
      return url.pathname.match(/[^/]+\/[^/]+$/)?.[0];
    case "pornhub":
      return (
        url.searchParams.get("viewkey") ||
        url.pathname.match(/embed\/([^/]+)/)?.[1]
      );
    case "twitter":
      return url.pathname.match(/status\/([^/]+)/)?.[1];
    case "udemy":
    case "rumble":
    case "facebook":
      return url.pathname.slice(1);
    case "rutube":
      return url.pathname.match(/(?:video|embed)\/([^/]+)/)?.[1];
    case "coub":
      return (
        url.pathname.match(/(?:view|embed)\/([^/]+)/)?.[1] ||
        document.querySelector(".coub.active")?.dataset?.permalink
      );
    case "bilibili": {
      const bvid = url.searchParams.get("bvid");
      if (bvid) {
        return bvid;
      }

      let vid = url.pathname.match(/video\/([^/]+)/)?.[1];
      if (vid && url.searchParams.get("p") !== null) {
        vid += `/?p=${url.searchParams.get("p")}`;
      }

      return vid;
    }
    case "mail_ru": {
      const pathname = url.pathname;
      if (pathname.startsWith("/v/") || pathname.startsWith("/mail/")) {
        return pathname.slice(1);
      }

      const videoId = pathname.match(/video\/embed\/([^/]+)/)?.[1];
      if (!videoId) {
        return null;
      }

      const referer = document.querySelector(".b-video-controls__mymail-link");
      if (!referer) {
        return false;
      }

      return referer?.href.split("my.mail.ru")?.[1];
    }
    case "bitchute":
      return url.pathname.match(/(video|embed)\/([^/]+)/)?.[2];
    case "coursera":
      // ! LINK SHOULD BE LIKE THIS https://www.coursera.org/learn/learning-how-to-learn/lecture/75EsZ
      // return url.pathname.match(/lecture\/([^/]+)\/([^/]+)/)?.[1]; // <--- COURSE PREVIEW
      return url.pathname.match(/learn\/([^/]+)\/lecture\/([^/]+)/)?.[0]; // <--- COURSE PASSING (IF YOU LOGINED TO COURSERA)
    case "eporner":
      // ! LINK SHOULD BE LIKE THIS eporner.com/video-XXXXXXXXX/isdfsd-dfjsdfjsdf-dsfsdf-dsfsda-dsad-ddsd
      return url.pathname.match(/video-([^/]+)\/([^/]+)/)?.[0];
    case "peertube":
      return url.pathname.match(/\/w\/([^/]+)/)?.[0];
    case "dailymotion": {
      // we work in the context of the player
      // geo.dailymotion.com
      const plainPlayerConfig = Array.from(
        document.querySelectorAll("*"),
      ).filter((s) => s.innerHTML.trim().includes(".m3u8"));
      try {
        let videoUrl = plainPlayerConfig[1].lastChild.src;
        return videoUrl.match(/\/video\/(\w+)\.m3u8/)?.[1];
      } catch (e) {
        console.error("[VOT]", e);
        return false;
      }
    }
    case "trovo": {
      const vid = url.searchParams.get("vid");
      if (!vid) {
        return null;
      }

      const path = url.pathname.match(/([^/]+)\/([\d]+)/)?.[0];
      if (!path) {
        return null;
      }

      return `${path}?vid=${vid}`;
    }
    case "yandexdisk":
      return url.pathname.match(/\/i\/([^/]+)/)?.[1];
    case "coursehunter": {
      const courseId = url.pathname.match(/\/course\/([^/]+)/)?.[1];
      return courseId ? courseId + url.search : false;
    }
    case "ok.ru": {
      return url.pathname.match(/\/video\/(\d+)/)?.[1];
    }
    case "googledrive":
      return url.searchParams.get("docid");
    case "bannedvideo":
      return url.searchParams.get("id");
    case "weverse":
      return url.pathname.match(/([^/]+)\/(live|media)\/([^/]+)/)?.[0];
    case "newgrounds":
      return url.pathname.match(/([^/]+)\/(view)\/([^/]+)/)?.[0];
    case "egghead":
      return url.pathname.slice(1);
    case "youku":
      return url.pathname.match(/v_show\/id_[\w=]+/)?.[0];
    case "archive": {
      return url.pathname.match(/(details|embed)\/([^/]+)/)?.[2];
    }
    // case "sibnet": {
    //   const videoId = url.searchParams.get("videoid");
    //   if (videoId) {
    //     return `video${videoId}`;
    //   }

    //   return url.pathname.match(/video([^/]+)/)?.[0];
    // }
    // case "patreon":
    //   return url.pathname.match(/posts\/([^/]+)/)?.[0];
    case "directlink":
      return url.pathname + url.search;
    default:
      return false;
  }
};

function secsToStrTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
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

function langTo6391(lang) {
  // convert lang to ISO 639-1
  return lang.toLowerCase().split(/[_;-]/)[0].trim();
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

const deletefilter = [
  /(?:https?|ftp):\/\/[\S]+/g,
  /https?:\/\/\S+|www\.\S+/gm,
  /\b\S+\.\S+/gm,
  /#[^\s#]+/g,
  /Auto-generated by YouTube/g,
  /Provided to YouTube by/g,
  /Released on/g,
  /0x[a-fA-F0-9]{40}/g,
  /[13][a-km-zA-HJ-NP-Z1-9]{25,34}/g,
  /4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}/g,
  /Paypal/g,
];

const combinedRegex = new RegExp(
  deletefilter.map((regex) => regex.source).join("|"),
);

function cleanText(title, description) {
  const cleanedDescription = description
    ? description
        .split("\n")
        .filter((line) => !combinedRegex.test(line))
        .join(" ")
    : "";

  const fullText = `${title} ${cleanedDescription}`.slice(0, 450);
  return fullText.replace(/[^\p{L}\s]+|\s+/gu, " ").trim();
}

async function GM_fetch(url, opt = {}) {
  try {
    // Попытка выполнить запрос с помощью fetch
    const response = await fetch(url, opt);
    return response;
  } catch (error) {
    // Если fetch завершился ошибкой, используем GM_xmlhttpRequest
    // https://greasyfork.org/ru/scripts/421384-gm-fetch/code
    return new Promise((resolve, reject) => {
      // https://www.tampermonkey.net/documentation.php?ext=dhdg#GM_xmlhttpRequest
      // https://violentmonkey.github.io/api/gm/#gm_xmlhttprequest
      GM_xmlhttpRequest({
        method: opt.method || "GET",
        url: url,
        responseType: "blob",
        onload: (resp) => {
          resolve(
            new Response(resp.response, {
              status: resp.status,
              // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#examples
              headers: Object.fromEntries(
                resp.responseHeaders
                  .trim()
                  .split("\r\n")
                  .map((line) => {
                    let parts = line.split(": ");
                    if (parts?.[0] === "set-cookie") {
                      return;
                    }
                    return [parts.shift(), parts.join(": ")];
                  })
                  .filter((key) => key),
              ),
            }),
          );
        },
        ontimeout: () => reject(new Error("fetch timeout")),
        onerror: (error) => reject(error),
        onabort: () => reject(new Error("fetch abort")),
      });
    });
  }
}

export {
  getVideoId,
  secsToStrTime,
  langTo6391,
  isPiPAvailable,
  initHls,
  cleanText,
  GM_fetch,
};
