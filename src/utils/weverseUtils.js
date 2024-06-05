import debug from "./debug.js";
import { getHmacSha1 } from "./crypto.js";

const API_ORIGIN = "https://global.apis.naver.com/weverse/wevweb"; // find as REACT_APP_API_GW_ORIGIN in main.<hash>.js
const API_APP_ID = "be4d79eb8fc7bd008ee82c8ec4ff6fd4"; // find as REACT_APP_API_APP_ID in main.<hash>.js
const API_HMAC_KEY = "1b9cb6378d959b45714bec49971ade22e6e24e42"; // find as c.active near `createHmac('sha1'...`  in main.<hash>.js

async function createHash(pathname) {
  // pathname example: /post/v1.0/post-3-142049908/preview?fieldSet=postForPreview...
  const timestamp = Date.now();

  // example salt is /video/v1.1/vod/67134/inKey?gcc=RU&appId=be4d79eb8fc7bd008ee82c8ec4ff6fd4&language=en&os=WEB&platform=WEB&wpf=pc1707527163588
  let salt = pathname.substring(0, Math.min(255, pathname.length)) + timestamp;

  const sign = await getHmacSha1(API_HMAC_KEY, salt);

  return {
    wmsgpad: timestamp,
    wmd: sign,
  };
}

function getURLData() {
  return {
    appId: API_APP_ID,
    language: "en",
    os: "WEB",
    platform: "WEB",
    wpf: "pc",
  };
}

async function getVideoPreview(postId) {
  const pathname =
    `/post/v1.0/post-${postId}/preview?` +
    new URLSearchParams({
      fieldSet: "postForPreview",
      ...getURLData(),
    }); // ! DON'T EDIT ME

  const hash = await createHash(pathname);

  try {
    const res = await fetch(
      API_ORIGIN + pathname + "&" + new URLSearchParams(hash),
    );

    return await res.json();
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function getVideoInKey(videoId) {
  const pathname =
    `/video/v1.1/vod/${videoId}/inKey?` +
    new URLSearchParams({
      gcc: "RU",
      ...getURLData(),
    }); // ! DON'T EDIT ME
  const hash = await createHash(pathname);

  try {
    const res = await fetch(
      API_ORIGIN + pathname + "&" + new URLSearchParams(hash),
      {
        method: "POST",
      },
    );

    return await res.json();
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function getVideoInfo(infraVideoId, inkey, serviceId) {
  const timestamp = Date.now();
  try {
    const res = await fetch(
      `https://global.apis.naver.com/rmcnmv/rmcnmv/vod/play/v2.0/${infraVideoId}?` +
        new URLSearchParams({
          key: inkey,
          sid: serviceId,
          nonce: timestamp,
          devt: "html5_pc",
          prv: "N",
          aup: "N",
          stpb: "N",
          cpl: "en",
          env: "prod",
          lc: "en",
          adi: JSON.stringify([
            {
              adSystem: null,
            },
          ]),
          adu: "/",
        }),
    );

    return await res.json();
  } catch (err) {
    console.error(err);
    return false;
  }
}

function extractVideoInfo(videoList) {
  return videoList.find(
    (video) => video.useP2P === false && video.source.includes(".mp4"),
  );
}

async function getVideoData() {
  // ! When translating using a regular link (like this https://weverse.io/aespa/live/3-142049908),
  // ! we will get an error, so we have to do this

  const postId = new URL(window.location).pathname.match(
    /([^/]+)\/(live|media)\/([^/]+)/,
  )?.[3];

  const videoPreview = await getVideoPreview(postId);
  if (!videoPreview) {
    return undefined;
  }

  debug.log("weverse video preview data:", videoPreview);

  const { videoId, serviceId, infraVideoId } = videoPreview.extension.video;
  if (!(videoId && serviceId && infraVideoId)) {
    return false;
  }

  const inkeyData = await getVideoInKey(videoId);
  debug.log("weverse video inKey data:", videoPreview);
  if (!inkeyData) {
    return false;
  }

  const videoInfo = await getVideoInfo(
    infraVideoId,
    inkeyData.inKey,
    serviceId,
  );
  debug.log("weverse video info:", videoInfo);

  const videoItem = extractVideoInfo(videoInfo.videos.list);
  if (!videoItem) {
    return false;
  }

  return {
    url: videoItem.source,
    duration: videoItem.duration,
  };
}

export default {
  getVideoData,
};
