import Bun from "bun";

import * as path from "node:path";

import sites from "../src/config/sites";

const i18n = {
  limitations: {
    ru: "Ограничения",
    en: "Limitations",
  },
  availabledPaths: {
    ru: "Доступные пути",
    en: "Available paths",
  },
  status: {
    ru: "Статус",
    en: "Status",
  },
  availabledDomains: {
    ru: "Доступные (под)домены",
    en: "Available (sub)domains",
  },
  worksWithLimitations: {
    ru: "Работает с ограничениями",
    en: "Works with limitations",
  },
  working: {
    ru: "Работает",
    en: "Working",
  },
  noPreviewVideos: {
    ru: "Не работает в предпросмотре видео",
    en: "Doesn't work in the video preview",
  },
  noFeedVideos: {
    ru: "Не работает перевод в ленте (Работает только в открытых видео)",
    en: "The translation in the feed doesn't work (It only works in open videos)",
  },
  noStreams: {
    ru: "Не доступен перевод прямых трансляций",
    en: "Translation of live broadcasts is not available",
  },
  maybeNeedCSP: {
    ru: "Для работы может потребоваться добавить скрипт в [CSP](https://github.com/ilyhalight/voice-over-translation/wiki/%5BRU%5D-FAQ)",
    en: "To work, you may need to add a script to the [CSP](https://github.com/ilyhalight/voice-over-translation/wiki/%5BEN%5D-FAQ)",
  },
  needAddToCSP: {
    ru: "Для работы необходимо добавить скрипт в [CSP](https://github.com/ilyhalight/voice-over-translation/wiki/%5BRU%5D-FAQ)",
    en: "To work, you need to add a script to the [CSP](https://github.com/ilyhalight/voice-over-translation/wiki/%5BEN%5D-FAQ)",
  },
  cantTranslatePHPremium: {
    ru: "Недоступен перевод для PH Premium",
    en: "Translation is not available for PH Premium",
  },
  needSetAccessToken: {
    ru: "Для работы необходимо [установить Access Token](https://github.com/ilyhalight/voice-over-translation/wiki/%5BRU%5D-Where-to-get-Udemy-Access-Token%3F)",
    en: "To work, you need to [set an Access Token](https://github.com/ilyhalight/voice-over-translation/wiki/%5BEN%5D-Where-to-get-Udemy-Access-Token%3F)",
  },
  needBeLoggedIn: {
    ru: "Необходимо быть авторизованным на сайте",
    en: "You must be logged in to the site",
  },
  videoWithoutSubs: {
    ru: "Если у видео нет субтитров на вашем языке, то перевод не будет выполнен",
    en: "If the video doesn't have subtitles in your language, then the translation will not be performed",
  },
  someModInstanceNotSupported: {
    ru: "некоторые измененные инстансы не поддерживаются",
    en: "Some modified instances aren't supported",
  },
  dailymotionNotice: {
    ru: "встраиваемый плеер, на www.dailymotion.com работает",
    en: "embedded player, on www.dailymotion.com it works",
  },
  workOnlyWithPublicLinks: {
    ru: "Работает только с публичными ссылками",
    en: "It only works with public links",
  },
  noLocalLinks: {
    ru: "Нельзя переводить локальные видео",
    en: "Local videos cannot be translated",
  },
};

const youtubeSiteData = {
  paths: ["/watch", "/embed", "/shorts", "/live", "?v=VIDEO_ID"],
  limits: [i18n.noPreviewVideos],
};

const siteData = {
  youtube: youtubeSiteData,
  invidious: youtubeSiteData,
  piped: youtubeSiteData,
  vk: {
    paths: [
      "/video-xxxxxxxxx_xxxxxxxxx",
      "?z=VIDEO_ID",
      "/video_ext.php?oid=VIDEO_ID_PART_ONE&id=VIDEO_ID_PART_TWO",
    ],
  },
  nine_gag: {
    paths: ["/gag/VIDEO_ID"],
    limits: [i18n.noFeedVideos],
  },
  twitch: {
    paths: [
      "/videos",
      "/embed",
      "/NICKNAME/clip",
      "?v=VIDEO_ID (player.twitch.tv)",
    ],
    limits: [i18n.noStreams],
  },
  proxitok: {
    paths: ["/@NICKNAME/video/VIDEO_ID"],
  },
  tiktok: {
    paths: ["/@NICKNAME/video/VIDEO_ID"],
    limits: [i18n.noFeedVideos],
  },
  vimeo: {
    paths: ["/CHANNEL_ID/VIDEO_ID", "/VIDEO_ID"],
  },
  xvideos: {
    paths: ["/VIDEO_ID/VIDEO_NAME"],
    limits: [i18n.maybeNeedCSP],
  },
  pornhub: {
    paths: ["/view_video.php?viewkey=VIDEO_ID", "/embed/VIDEO_ID"],
    limits: [i18n.cantTranslatePHPremium],
  },
  twitter: {
    paths: ["/NAME/status/VIDEO_ID"],
    limits: [i18n.needAddToCSP, i18n.noFeedVideos],
  },
  udemy: {
    paths: ["/course/NAME/learn/lecture/LECTURE_ID"],
    limits: [
      i18n.needSetAccessToken,
      i18n.needBeLoggedIn,
      i18n.videoWithoutSubs,
    ],
  },
  rumble: {
    paths: ["/VIDEO_NAME"],
    limits: [i18n.noStreams],
  },
  facebook: {
    paths: ["/reel/VIDEO_ID", "/videos/VIDEO_ID"],
    limits: [i18n.needAddToCSP],
  },
  rutube: {
    paths: ["/video/VIDEO_ID", "/?bvid=VIDEO_ID"],
  },
  bilibili: {
    paths: ["/video/VIDEO_ID", "/?bvid=VIDEO_ID"],
  },
  mail_ru: {
    paths: [
      "/v/NICKNAME/video/...",
      "/mail/NICKNAME/video/...",
      "video/embed/VIDEO_ID",
    ],
  },
  bitchute: {
    paths: ["/video/VIDEO_ID", "/embed/VIDEO_ID"],
  },
  coursera: {
    paths: ["/learn/NAME/lecture/XXXX"],
    limits: [i18n.needBeLoggedIn, i18n.videoWithoutSubs],
  },
  eporner: {
    paths: ["/video-VIDEO_ID/NAME"],
  },
  peertube: {
    paths: ["/w/VIDEO_ID"],
    limits: [i18n.someModInstanceNotSupported],
  },
  dailymotion: {
    paths: ["/video/VIDEO_ID"],
  },
  trovo: {
    paths: ["/s/NICK/VIDEO_ID"],
    limits: [i18n.noStreams],
  },
  yandexdisk: {
    paths: ["/i/FILE_ID"],
    limits: [i18n.needAddToCSP, i18n.workOnlyWithPublicLinks],
  },
  coursehunter: {
    paths: ["/course/COURSE_ID"],
  },
  "ok.ru": {
    paths: ["/video/VIDEO_ID"],
  },
  googledrive: {
    paths: ["/file/d/FILE_ID"],
    limits: [i18n.workOnlyWithPublicLinks],
  },
  bannedvideo: {
    paths: ["/watch?id=VIDEO_ID"],
  },
  weverse: {
    paths: ["/CHANNEL_NAME/media/VIDEO_ID", "/CHANNEL_NAME/live/VIDEO_ID"],
    limits: [i18n.noStreams],
  },
  newgrounds: {
    paths: ["/XXX/view/XXX"],
  },
  egghead: {
    paths: ["/lessons/LESSON_NAME"],
  },
  youku: {
    paths: ["/v_show/VIDEO_ID"],
  },
  archive: {
    paths: ["/details/VIDEO_ID", "/embed/VIDEO_ID"],
  },
  directlink: {
    paths: ["/*.mp4"],
    limits: [i18n.noLocalLinks],
  },
};

const extraData = {
  udemy: {
    status: "⚠️",
    statusPhrase: i18n.worksWithLimitations,
  },
  twitter: {
    status: "⚠️",
    statusPhrase: i18n.worksWithLimitations,
  },
  facebook: {
    status: "⚠️",
    statusPhrase: i18n.worksWithLimitations,
  },
  yandexdisk: {
    status: "⚠️",
    statusPhrase: i18n.worksWithLimitations,
  },
};

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

function getDomainFromRegex(domain, optionalBracket) {
  let clearDomain = domain;
  optionalBracket.map((bracket) => {
    clearDomain = clearDomain.replace(bracket, "");
  });

  const brackets = clearDomain
    .match(/\([^()]*\)/g)
    ?.filter((bracket) => bracket.includes("|"));
  if (!brackets?.length) {
    return [clearDomain];
  }

  const domains = [];
  for (const bracket of brackets) {
    const parts = brackets[0].replace(/[?()]+/g, "").split("|");
    for (const part of parts) {
      domains.push(clearDomain.replace(bracket, part));
    }
  }

  return domains;
}

function fixRegexStr(str) {
  let domain = new RegExp(str).source
    .replace(/^[/^]/g, "")
    .replace(/[$/]$/g, "");
  if (str instanceof Function) {
    return [
      /host.includes\(([^()]*)\)/.exec(domain)?.[1]?.replace(/["']/g, ""),
    ];
  }

  let brackets = Array.from(domain.matchAll(/\([^()]*\)(\?)?/g)).filter(
    (bracket) => !bracket[0].includes("(www.)?"),
  );
  if (!brackets.length) {
    return [domain];
  }

  let domains = new Set();
  brackets = brackets.map((bracket) => bracket[0]);
  const optionalBrackets = brackets.filter((bracket) => bracket.includes("?"));
  if (optionalBrackets.length) {
    getDomainFromRegex(domain, optionalBrackets).map((dom) => domains.add(dom));
  }

  for (const bracket of brackets) {
    const parts = bracket.replace(/[?()]+/g, "").split("|");
    for (const part of parts) {
      let partedDomain = domain.replace(bracket, part);
      getDomainFromRegex(partedDomain, optionalBrackets).map((dom) =>
        domains.add(dom),
      );
    }
  }

  return Array.from(domains);
}

function getDomains(match) {
  return Array.isArray(match)
    ? match.map((s) => fixRegexStr(s).join("\n- "))
    : fixRegexStr(match);
}

function removeDuplicatesKeepLast(arr, key) {
  const map = new Map();
  arr.map((obj) => map.set(obj[key], obj));
  return Array.from(map.values());
}

function genMarkdown(sites, lang = "ru") {
  let sitesData = sites.map((site, idx) => {
    let domains = getDomains(site.match);
    let prev = idx > 0 ? sites[idx - 1] : null;
    if (prev?.host === site.host) {
      let previousDomains = getDomains(prev.match);
      domains = Array.from(new Set([...domains, ...previousDomains]));
    }

    return {
      ...site,
      domains: domains.map((domain) => `\`${domain}\``).join("\n- "),
    };
  });

  return removeDuplicatesKeepLast(sitesData, "host").map((site) => {
    const hasData = Object.hasOwn(siteData, site.host);
    const limitsData = hasData ? siteData[site.host].limits : [];
    let limits = "";
    if (limitsData?.length) {
      limits = `\n\n${i18n.limitations[lang]}:\n\n- ${limitsData.map((limit) => limit[lang]).join("\n- ")}`;
    }

    const pathsData = hasData ? Array.from(siteData[site.host].paths) : [];
    let paths = "";
    if (pathsData.length) {
      paths = `\n\n${i18n.availabledDomains[lang]}:\n\n- ${pathsData.join("\n- ")}`;
    }

    return `## ${ucFirst(site.host)}

${i18n.status[lang]}: [${site.status}] ${site.statusPhrase[lang]}

${i18n.availabledDomains[lang]}:

- ${site.domains}${paths}${limits}`;
  });
}

async function main() {
  const supportedSites = sites.map((site) => {
    const host = site.host.toLowerCase();
    const extra = Object.hasOwn(extraData, host);

    return {
      host,
      match: host === "directlink" ? "any" : site.match,
      status: extra ? extraData[host].status : "✅",
      statusPhrase: extra ? extraData[host].statusPhrase : i18n.working,
      additionalData: site.additionalData,
    };
  });

  const langs = ["ru", "en"];
  for await (const lang of langs) {
    const mdText = genMarkdown(supportedSites, lang)
      .join("\n\n")
      .replace("Nine_gag", "9GAG")
      .replace("Mail_ru", "Mail.ru")
      .replace("Yandexdisk", "Yandex Disk")
      .replace("Googledrive", "Google Drive")
      .replace("Bannedvideo", "Banned.Video")
      .replace(
        "geo.dailymotion.com",
        `geo.dailymotion.com (${i18n.dailymotionNotice[lang]})`,
      )
      .replaceAll("\\/", "/");

    await Bun.write(
      path.join(__dirname, `SITES-${lang.toUpperCase()}.md`),
      mdText,
    );
  }

  // console.log(mdText);
}

try {
  await main();
} catch (err) {
  console.error(err);
}
