// ==UserScript==
// @name           [VOT Cloudflare] - Voice Over Translation
// @name:de        [VOT Cloudflare] - Voice-Over-Video-Übersetzung
// @name:es        [VOT Cloudflare] - Traducción de vídeo en off
// @name:fr        [VOT Cloudflare] - Traduction vidéo voix-off
// @name:it        [VOT Cloudflare] - Traduzione Video fuori campo
// @name:ru        [VOT Cloudflare] - Закадровый перевод видео
// @name:zh        [VOT Cloudflare] - 画外音视频翻译
// @description    A small extension that adds a Yandex Browser video translation to other browsers
// @description:de Eine kleine Erweiterung, die eine Voice-over-Übersetzung von Videos aus dem Yandex-Browser zu anderen Browsern hinzufügt
// @description:es Una pequeña extensión que agrega una traducción de voz en off de un video de Yandex Browser a otros navegadores
// @description:fr Une petite extension qui ajoute la traduction vocale de la vidéo du Navigateur Yandex à d'autres navigateurs
// @description:it Una piccola estensione che aggiunge la traduzione vocale del video dal browser Yandex ad altri browser
// @description:ru Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @description:zh 一个小扩展，它增加了视频从Yandex浏览器到其他浏览器的画外音翻译
// @grant          GM_addStyle
// @grant          GM_deleteValue
// @grant          GM_listValues
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_xmlhttpRequest
// @grant          GM_info
// @require        https://cdn.jsdelivr.net/npm/hls.js/dist/hls.light.min.js
// @require        https://gist.githubusercontent.com/ilyhalight/6eb5bb4dffc7ca9e3c57d6933e2452f3/raw/7ab38af2228d0bed13912e503bc8a9ee4b11828d/gm-addstyle-polyfill.js
// @require        https://unpkg.com/node:crypto
// @match          *://*.youtube.com/*
// @match          *://*.youtube-nocookie.com/*
// @match          *://*.youtubekids.com/*
// @match          *://*.twitch.tv/*
// @match          *://*.xvideos.com/*
// @match          *://*.xv-ru.com/*
// @match          *://*.pornhub.com/*
// @match          *://*.vk.com/*
// @match          *://*.vk.ru/*
// @match          *://invidious.snopyta.org/*
// @match          *://invidious.kavin.rocks/*
// @match          *://vid.puffyan.us/*
// @match          *://invidious.namazso.eu/*
// @match          *://inv.riverside.rocks/*
// @match          *://yt.artemislena.eu/*
// @match          *://invidious.flokinet.to/*
// @match          *://invidious.esmailelbob.xyz/*
// @match          *://invidious.nerdvpn.de/*
// @match          *://invidious.slipfox.xyz/*
// @match          *://invidio.xamh.de/*
// @match          *://invidious.dhusch.de/*
// @match          *://*.piped.video/*
// @match          *://piped.tokhmi.xyz/*
// @match          *://piped.moomoo.me/*
// @match          *://piped.syncpundit.io/*
// @match          *://piped.mha.fi/*
// @match          *://watch.whatever.social/*
// @match          *://piped.garudalinux.org/*
// @match          *://efy.piped.pages.dev/*
// @match          *://watch.leptons.xyz/*
// @match          *://piped.lunar.icu/*
// @match          *://yt.dc09.ru/*
// @match          *://piped.mint.lgbt/*
// @match          *://*.il.ax/*
// @match          *://piped.privacy.com.de/*
// @match          *://piped.esmailelbob.xyz/*
// @match          *://piped.projectsegfau.lt/*
// @match          *://piped.in.projectsegfau.lt/*
// @match          *://piped.us.projectsegfau.lt/*
// @match          *://piped.privacydev.net/*
// @match          *://piped.palveluntarjoaja.eu/*
// @match          *://piped.smnz.de/*
// @match          *://piped.adminforge.de/*
// @match          *://piped.qdi.fi/*
// @match          *://piped.hostux.net/*
// @match          *://piped.chauvet.pro/*
// @match          *://piped.jotoma.de/*
// @match          *://piped.pfcd.me/*
// @match          *://piped.frontendfriendly.xyz/*
// @match          *://*.yewtu.be/*
// @match          *://inv.vern.cc/*
// @match          *://*.vimeo.com/*
// @match          *://*.9gag.com/*
// @match          *://*.twitter.com/*
// @match          *://*.facebook.com/*
// @match          *://*.rutube.ru/*
// @match          *://*.bilibili.com/*
// @match          *://my.mail.ru/*
// @match          *://*.bitchute.com/*
// @match          *://*.coursera.org/learn/*
// @match          *://*.udemy.com/course/*
// @match          *://*.tiktok.com/*
// @match          *://proxitok.pabloferreiro.es/*
// @match          *://proxitok.pussthecat.org/*
// @match          *://tok.habedieeh.re/*
// @match          *://proxitok.esmailelbob.xyz/*
// @match          *://proxitok.privacydev.net/*
// @match          *://tok.artemislena.eu/*
// @match          *://tok.adminforge.de/*
// @match          *://tik.hostux.net/*
// @match          *://tt.vern.cc/*
// @match          *://cringe.whatever.social/*
// @match          *://proxitok.lunar.icu/*
// @match          *://proxitok.privacy.com.de/*
// @match          *://rumble.com/*
// @match          *://*.eporner.com/*
// @match          *://peertube.1312.media/*
// @match          *://tube.shanti.cafe/*
// @match          *://bee-tube.fr/*
// @match          *://video.sadmin.io/*
// @match          *://dalek.zone/*
// @match          *://review.peertube.biz/*
// @match          *://peervideo.club/*
// @match          *://tube.la-dina.net/*
// @match          *://peertube.tmp.rcp.tf/*
// @match          *://peertube.su/*
// @match          *://geo.dailymotion.com/*
// @match          *://*.ok.ru/*
// @match          *://trovo.live/*
// @match          *://disk.yandex.ru/i/*
// @match          *://coursehunter.net/*
// @match          *://youtube.googleapis.com/embed/*
// @match          *://*.banned.video/*
// @match          *://*.weverse.io/*
// @match          *://*.newgrounds.com/*
// @match          *://*.egghead.io/*
// @match          *://*.youku.com/*
// @match          *://*.archive.org/*
// @match          *://*.patreon.com/*
// @match          *://*/*.mp4*
// @exclude        file://*/*.mp4*
// @connect        yandex.ru
// @connect        yandex.net
// @connect        raw.githubusercontent.com
// @connect        toil.cc
// @connect        deno.dev
// @connect        onrender.com
// @connect        workers.dev
// @namespace      vot-cloudflare
// @version        1.6.0-beta.1
// @icon           https://translate.yandex.ru/icons/favicon.ico
// @author         sodapng, mynovelhost, Toil, SashaXser, MrSoczekXD
// @homepageURL    https://github.com/ilyhalight/voice-over-translation/issues
// @updateURL      https://raw.githubusercontent.com/ilyhalight/voice-over-translation/dev/dist/vot-cloudflare.user.js
// @downloadURL    https://raw.githubusercontent.com/ilyhalight/voice-over-translation/dev/dist/vot-cloudflare.user.js
// @supportURL     https://github.com/ilyhalight/voice-over-translation/issues
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bowser/es5.js":
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.vot-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );--vot-helper-ontheme: var( --vot-ontheme-rgb, var(--vot-onprimary-rgb, 255, 255, 255) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-ontheme));background-color:rgb(var(--vot-helper-theme));box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer;transition:box-shadow .2s}.vot-button[hidden]{display:none !important}.vot-button::-moz-focus-inner{border:none}.vot-button::before,.vot-button::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-button::before{background-color:rgb(var(--vot-helper-ontheme));transition:opacity .2s}.vot-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-button:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.vot-button:hover::before{opacity:.08}.vot-button:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.vot-button:active::after{opacity:.32;background-size:100% 100%;transition:background-size 0s}.vot-button:disabled{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.12);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);box-shadow:none;cursor:initial}.vot-button:disabled::before,.vot-button:disabled::after{opacity:0}.vot-outlined-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:solid 1px;border-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.24);border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-theme));background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:34px;outline:none;cursor:pointer}.vot-outlined-button[hidden]{display:none !important}.vot-outlined-button::-moz-focus-inner{border:none}.vot-outlined-button::before,.vot-outlined-button::after{content:"";position:absolute;border-radius:3px;top:0;right:0;bottom:0;left:0;opacity:0}.vot-outlined-button::before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-outlined-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-outlined-button:hover::before{opacity:.04}.vot-outlined-button:active::after{opacity:.16;background-size:100% 100%;transition:background-size 0s}.vot-outlined-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-outlined-button:disabled::before,.vot-outlined-button:disabled::after{opacity:0}.vot-text-button{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:none;border-radius:4px;padding:0 8px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;color:rgb(var(--vot-helper-theme));background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer}.vot-text-button[hidden]{display:none !important}.vot-text-button::-moz-focus-inner{border:none}.vot-text-button::before,.vot-text-button::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-text-button::before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-text-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-text-button:hover::before{opacity:.04}.vot-text-button:active::after{opacity:.16;background-size:100% 100%;transition:background-size 0s}.vot-text-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-text-button:disabled::before,.vot-text-button:disabled::after{opacity:0}.vot-icon-button{--vot-helper-onsurface: rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87);position:relative;display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:0;border:none;border-radius:50%;padding:0;width:36px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;fill:var(--vot-helper-onsurface);color:var(--vot-helper-onsurface);background-color:rgba(0,0,0,0);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;outline:none;cursor:pointer}.vot-icon-button[hidden]{display:none !important}.vot-icon-button::-moz-focus-inner{border:none}.vot-icon-button::before,.vot-icon-button::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-icon-button::before{background-color:var(--vot-helper-onsurface);transition:opacity .2s}.vot-icon-button::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity .3s,background-size .4s}.vot-icon-button:hover::before{opacity:.04}.vot-icon-button:active::after{opacity:.32;background-size:100% 100%;transition:background-size 0s,opacity 0s}.vot-icon-button:disabled{background-color:rgba(0,0,0,0);color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);fill:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-icon-button:disabled::before,.vot-icon-button:disabled::after{opacity:0}.vot-textfield{--vot-helper-theme: rgb( var(--vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243)) ) !important;--vot-helper-safari1: rgba( var(--vot-onsurface-rgb, 0, 0, 0), 0.38 ) !important;--vot-helper-safari2: rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;--vot-helper-safari3: rgba( var(--vot-onsurface-rgb, 0, 0, 0), 0.87 ) !important;position:relative !important;display:inline-block;padding-top:6px !important;font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system) !important;font-size:16px !important;line-height:1.5 !important;text-align:start !important}.vot-textfield[hidden]{display:none !important}.vot-textfield>input,.vot-textfield>textarea{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important;margin:0 !important;border-style:solid !important;border-width:1px !important;border-color:rgba(0,0,0,0) var(--vot-helper-safari2) var(--vot-helper-safari2) !important;border-radius:4px !important;padding:15px 13px 15px !important;width:100% !important;height:inherit !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87) !important;-webkit-text-fill-color:currentColor !important;background-color:rgba(0,0,0,0) !important;box-shadow:inset 1px 0 rgba(0,0,0,0),inset -1px 0 rgba(0,0,0,0),inset 0 -1px rgba(0,0,0,0) !important;font-family:inherit !important;font-size:inherit !important;line-height:inherit !important;caret-color:var(--vot-helper-theme) !important;transition:border .2s,box-shadow .2s !important}.vot-textfield>input:not(:focus):placeholder-shown,.vot-textfield>textarea:not(:focus):placeholder-shown{border-top-color:var(--vot-helper-safari2) !important}.vot-textfield>input+span,.vot-textfield>textarea+span{position:absolute !important;top:0 !important;left:0 !important;display:flex !important;width:100% !important;max-height:100% !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;font-size:75% !important;line-height:15px !important;cursor:text !important;transition:color .2s,font-size .2s,line-height .2s !important;pointer-events:none !important}.vot-textfield>input:not(:focus):placeholder-shown+span,.vot-textfield>textarea:not(:focus):placeholder-shown+span{font-size:inherit !important;line-height:68px !important}.vot-textfield>input+span::before,.vot-textfield>input+span::after,.vot-textfield>textarea+span::before,.vot-textfield>textarea+span::after{content:"" !important;display:block !important;-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important;margin-top:6px !important;border-top:solid 1px var(--vot-helper-safari2) !important;min-width:10px !important;height:8px !important;pointer-events:none !important;box-shadow:inset 0 1px rgba(0,0,0,0) !important;transition:border .2s,box-shadow .2s !important}.vot-textfield>input+span::before,.vot-textfield>textarea+span::before{margin-right:4px !important;border-left:solid 1px rgba(0,0,0,0) !important;border-radius:4px 0 !important}.vot-textfield>input+span::after,.vot-textfield>textarea+span::after{flex-grow:1 !important;margin-left:4px !important;border-right:solid 1px rgba(0,0,0,0) !important;border-radius:0 4px !important}.vot-textfield>input:not(:focus):placeholder-shown+span::before,.vot-textfield>input:not(:focus):placeholder-shown+span::after,.vot-textfield>textarea:not(:focus):placeholder-shown+span::before,.vot-textfield>textarea:not(:focus):placeholder-shown+span::after{border-top-color:rgba(0,0,0,0) !important}.vot-textfield:hover>input,.vot-textfield:hover>textarea{border-color:rgba(0,0,0,0) var(--vot-helper-safari3) var(--vot-helper-safari3) !important}.vot-textfield:hover>input+span::before,.vot-textfield:hover>input+span::after,.vot-textfield:hover>textarea+span::before,.vot-textfield:hover>textarea+span::after{border-top-color:var(--vot-helper-safari3) !important}.vot-textfield:hover>input:not(:focus):placeholder-shown,.vot-textfield:hover>textarea:not(:focus):placeholder-shown{border-color:var(--vot-helper-safari3) !important}.vot-textfield>input:focus,.vot-textfield>textarea:focus{border-color:rgba(0,0,0,0) var(--vot-helper-theme) var(--vot-helper-theme) !important;box-shadow:inset 1px 0 var(--vot-helper-theme),inset -1px 0 var(--vot-helper-theme),inset 0 -1px var(--vot-helper-theme) !important;outline:none !important}.vot-textfield>input:focus+span,.vot-textfield>textarea:focus+span{color:var(--vot-helper-theme) !important}.vot-textfield>input:focus+span::before,.vot-textfield>input:focus+span::after,.vot-textfield>textarea:focus+span::before,.vot-textfield>textarea:focus+span::after{border-top-color:var(--vot-helper-theme) !important;box-shadow:inset 0 1px var(--vot-helper-theme) !important}.vot-textfield>input:disabled,.vot-textfield>input:disabled+span,.vot-textfield>textarea:disabled,.vot-textfield>textarea:disabled+span{border-color:rgba(0,0,0,0) var(--vot-helper-safari1) var(--vot-helper-safari1) !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important;pointer-events:none !important}.vot-textfield>input:disabled+span::before,.vot-textfield>input:disabled+span::after,.vot-textfield>textarea:disabled+span::before,.vot-textfield>textarea:disabled+span::after{border-top-color:var(--vot-helper-safari1) !important}.vot-textfield>input:disabled:placeholder-shown,.vot-textfield>input:disabled:placeholder-shown+span,.vot-textfield>textarea:disabled:placeholder-shown,.vot-textfield>textarea:disabled:placeholder-shown+span{border-top-color:var(--vot-helper-safari1) !important}.vot-textfield>input:disabled:placeholder-shown+span::before,.vot-textfield>input:disabled:placeholder-shown+span::after,.vot-textfield>textarea:disabled:placeholder-shown+span::before,.vot-textfield>textarea:disabled:placeholder-shown+span::after{border-top-color:rgba(0,0,0,0) !important}@media not all and (min-resolution: 0.001dpcm){@supports(-webkit-appearance: none){.vot-textfield>input,.vot-textfield>input+span,.vot-textfield>textarea,.vot-textfield>textarea+span,.vot-textfield>input+span::before,.vot-textfield>input+span::after,.vot-textfield>textarea+span::before,.vot-textfield>textarea+span::after{transition-duration:.1s !important}}}.vot-checkbox{--vot-helper-theme: var( --vot-theme-rgb, var(--vot-primary-rgb, 33, 150, 243) );--vot-helper-ontheme: var( --vot-ontheme-rgb, var(--vot-onprimary-rgb, 255, 255, 255) );z-index:0;position:relative;display:inline-block;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:16px;line-height:1.5;text-align:start}.vot-checkbox[hidden]{display:none !important}.vot-checkbox>input{appearance:none;-moz-appearance:none;-webkit-appearance:none;z-index:10000;position:absolute;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin:3px 1px;border:solid 2px;background:rgba(0,0,0,0);border-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6);border-radius:2px;width:18px;height:18px;outline:none;cursor:pointer;transition:border-color .2s,background-color .2s}.vot-checkbox>input+span{display:inline-block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding-left:30px;width:inherit;cursor:pointer;font-weight:normal}.vot-checkbox>input+span::before{content:"";position:absolute;left:-10px;top:-8px;display:block;border-radius:50%;width:40px;height:40px;background-color:rgb(var(--vot-onsurface-rgb, 0, 0, 0));opacity:0;transform:scale(1);pointer-events:none;transition:opacity .3s,transform .2s}.vot-checkbox>input+span::after{content:"";z-index:10000;display:block;position:absolute;top:3px;left:1px;-webkit-box-sizing:content-box !important;-moz-box-sizing:content-box !important;box-sizing:content-box !important;width:10px;height:5px;border:solid 2px rgba(0,0,0,0);border-right-width:0;border-top-width:0;pointer-events:none;transform:translate(3px, 4px) rotate(-45deg);transition:border-color .2s}.vot-checkbox>input:checked,.vot-checkbox>input:indeterminate{border-color:rgb(var(--vot-helper-theme));background-color:rgb(var(--vot-helper-theme))}.vot-checkbox>input:checked+span::before,.vot-checkbox>input:indeterminate+span::before{background-color:rgb(var(--vot-helper-theme))}.vot-checkbox>input:checked+span::after,.vot-checkbox>input:indeterminate+span::after{border-color:rgb(var(--vot-helper-ontheme, 255, 255, 255))}.vot-checkbox>input:indeterminate+span::after{border-left-width:0;transform:translate(4px, 3px)}.vot-checkbox:hover>input+span::before{opacity:.04}.vot-checkbox:active>input,.vot-checkbox:active:hover>input{border-color:rgb(var(--vot-helper-theme))}.vot-checkbox:active>input:checked{border-color:rgba(0,0,0,0);background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6)}.vot-checkbox:active>input+span::before{opacity:1;transform:scale(0);transition:transform 0s,opacity 0s}.vot-checkbox>input:disabled{border-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-checkbox>input:disabled:checked,.vot-checkbox>input:disabled:indeterminate{border-color:rgba(0,0,0,0);background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38)}.vot-checkbox>input:disabled+span{color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38);cursor:initial}.vot-checkbox>input:disabled+span::before{opacity:0;transform:scale(0)}.vot-slider{--vot-safari-helper1: rgba( var(--vot-primary-rgb, 33, 150, 243), 0.04 ) !important;--vot-safari-helper2: rgba( var(--vot-primary-rgb, 33, 150, 243), 0.12 ) !important;--vot-safari-helper3: rgba( var(--vot-primary-rgb, 33, 150, 243), 0.16 ) !important;--vot-safari-helper4: rgba( var(--vot-primary-rgb, 33, 150, 243), 0.24 ) !important;display:inline-block;width:100% !important;color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87) !important;font-family:var(--vot-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system) !important;font-size:16px !important;line-height:1.5 !important;text-align:start !important}.vot-slider[hidden]{display:none !important}.vot-slider>input{-webkit-appearance:none !important;appearance:none !important;position:relative !important;top:24px !important;display:block !important;margin:0 0 -36px !important;width:100% !important;height:36px !important;background-color:rgba(0,0,0,0) !important;cursor:pointer !important}.vot-slider>input:last-child{position:static !important;margin:0 !important}.vot-slider>span{display:inline-block !important;margin-bottom:36px !important}.vot-slider>input:disabled{cursor:default !important;opacity:.38 !important}.vot-slider>input:disabled+span{color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-slider>input::-webkit-slider-runnable-track{margin:17px 0 !important;border-radius:1px !important;width:100% !important;height:2px !important;background-color:rgba(var(--vot-primary-rgb, 33, 150, 243), 0.24) !important}.vot-slider>input::-webkit-slider-thumb{margin:0 !important;appearance:none !important;-webkit-appearance:none !important;border:none !important;border-radius:50% !important;height:2px !important;width:2px !important;background-color:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important;transform:scale(6, 6) !important;transition:box-shadow .2s !important}.vot-slider:hover>input::-webkit-slider-thumb{box-shadow:0 0 0 2px var(--vot-safari-helper1) !important}.vot-slider>input:active::-webkit-slider-thumb{box-shadow:0 0 0 2px var(--vot-safari-helper4) !important}.vot-slider>input:disabled::-webkit-slider-runnable-track{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-slider>input:disabled::-webkit-slider-thumb{background-color:rgb(var(--vot-onsurface-rgb, 0, 0, 0)) !important;color:rgb(var(--vot-surface-rgb, 255, 255, 255)) !important;box-shadow:0 0 0 1px rgb(var(--vot-surface-rgb, 255, 255, 255)) !important;transform:scale(4, 4) !important}.vot-slider>input::-moz-range-track{margin:17px 0 !important;border-radius:1px !important;width:100% !important;height:2px !important;background-color:rgba(var(--vot-primary-rgb, 33, 150, 243), 0.24) !important}.vot-slider>input::-moz-range-thumb{appearance:none !important;-moz-appearance:none !important;border:none !important;border-radius:50% !important;height:2px !important;width:2px !important;background-color:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important;transform:scale(6, 6) !important;transition:box-shadow .2s !important}.vot-slider>input::-moz-range-progress{border-radius:1px !important;height:2px !important;background-color:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important}.vot-slider:hover>input:hover::-moz-range-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb, 33, 150, 243), 0.04) !important}.vot-slider>input:active::-moz-range-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb, 33, 150, 243), 0.24) !important}.vot-slider>input:disabled::-moz-range-track{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-slider>input:disabled::-moz-range-progress{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.87) !important}.vot-slider>input:disabled::-moz-range-thumb{background-color:rgb(var(--vot-onsurface-rgb, 0, 0, 0)) !important;box-shadow:0 0 0 1px rgb(var(--vot-surface-rgb, 255, 255, 255)) !important;transform:scale(4, 4) !important}.vot-slider>input::-moz-focus-outer{border:none !important}.vot-slider>input:focus{outline:none !important}.vot-slider>input::-ms-track{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important;margin:17px 0 !important;border:none !important;border-radius:1px !important;padding:0 17px !important;width:100% !important;height:2px !important;background-color:rgba(0,0,0,0) !important}.vot-slider>input::-ms-fill-lower{border-radius:1px !important;height:2px !important;background-color:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important}.vot-slider>input::-ms-fill-upper{border-radius:1px !important;height:2px !important;background-color:rgba(var(--vot-primary-rgb, 33, 150, 243), 0.24) !important}.vot-slider>input::-ms-thumb{appearance:none !important;margin:0 17px !important;border:none !important;border-radius:50% !important;height:2px !important;width:2px !important;background-color:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important;transform:scale(6, 6) !important;transition:box-shadow .2s !important}.vot-slider:hover>input::-ms-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb, 33, 150, 243), 0.04) !important}.vot-slider>input:active::-ms-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb, 33, 150, 243), 0.24) !important}.vot-slider>input:disabled::-ms-fill-lower{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important}.vot-slider>input:disabled::-ms-fill-upper{background-color:rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.38) !important;opacity:.38 !important}.vot-slider>input:disabled::-ms-thumb{background-color:rgb(var(--vot-onsurface-rgb, 0, 0, 0)) !important;box-shadow:0 0 0 1px rgb(var(--vot-surface-rgb, 255, 255, 255)) !important;transform:scale(4, 4) !important}.vot-slider>input::before{content:"" !important;display:block !important;position:absolute !important;width:calc(100%*var(--vot-progress, 0)) !important;height:2px !important;top:calc(50% - 1px) !important;background:rgb(var(--vot-primary-rgb, 33, 150, 243)) !important}.vot-select{--vot-helper-theme-rgb: var(--vot-onsurface-rgb, 0, 0, 0) !important;--vot-helper-theme: rgba(var(--vot-helper-theme-rgb), 0.87) !important;--vot-helper-safari1: rgba(var(--vot-onsurface-rgb, 0, 0, 0), 0.6) !important;--vot-helper-safari2: rgba( var(--vot-onsurface-rgb, 0, 0, 0), 0.87 ) !important;display:flex;align-items:center;justify-content:space-between;font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:normal;line-height:1.5;text-align:start;color:var(--vot-helper-theme);fill:var(--vot-helper-theme)}.vot-select[hidden]{display:none !important}.vot-select-label{font-size:16px}.vot-select-outer{display:flex;align-items:center;justify-content:space-between;max-width:120px;width:120px;padding:0 5px;border-style:solid !important;border-width:1px !important;border-color:var(--vot-helper-safari1) !important;border-radius:4px !important;cursor:pointer;transition:border .2s !important}.vot-select-outer:hover{border-color:var(--vot-helper-safari2) !important}.vot-select-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vot-select-arrow-icon{width:20px;height:32px;display:flex;justify-content:center;align-items:center}.vot-select-content-list{display:flex;flex-direction:column}.vot-select-content-list .vot-select-content-item{padding:5px 10px;border-radius:8px;cursor:pointer}.vot-select-content-list .vot-select-content-item:not([inert]):hover{background-color:#2a2c31}.vot-select-content-list .vot-select-content-item[data-vot-selected=true]{color:rgb(var(--vot-primary-rgb, 33, 150, 243));background-color:rgba(var(--vot-primary-rgb, 33, 150, 243), 0.2)}.vot-select-content-list .vot-select-content-item[data-vot-selected=true]:hover{background-color:rgba(var(--vot-primary-rgb, 33, 150, 243), 0.1) !important}.vot-select-content-list .vot-select-content-item[data-vot-disabled=true]{cursor:default}.vot-select-content-list .vot-select-content-item[hidden]{display:none !important}.vot-header{color:rgba(var(--vot-helper-onsurface-rgb), 0.87);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-weight:bold;line-height:1.5;text-align:start}.vot-header[hidden]{display:none !important}.vot-header:not(:first-child){padding-top:8px}.vot-header-level-1{font-size:2em}.vot-header-level-2{font-size:1.5em}.vot-header-level-3{font-size:1.17em}.vot-header-level-4{font-size:1em}.vot-header-level-5{font-size:.83em}.vot-header-level-6{font-size:.67em}.vot-info{display:flex;color:rgba(var(--vot-helper-onsurface-rgb), 0.87);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:16px;line-height:1.5;text-align:start}.vot-info[hidden]{display:none !important}.vot-info>:not(:first-child){color:rgba(var(--vot-helper-onsurface-rgb), 0.5);flex:1;margin-left:8px}.vot-lang-select{--vot-helper-theme-rgb: var(--vot-onsurface-rgb, 0, 0, 0);--vot-helper-theme: rgba(var(--vot-helper-theme-rgb), 0.87);display:flex;align-items:center;justify-content:space-between;color:var(--vot-helper-theme);fill:var(--vot-helper-theme)}.vot-lang-select[hidden]{display:none !important}.vot-lang-select-icon{width:32px;height:32px;display:flex;justify-content:center;align-items:center}.vot-segmented-button{--vot-helper-theme-rgb: var(--vot-onsurface-rgb, 0, 0, 0);--vot-helper-theme: rgba(var(--vot-helper-theme-rgb), 0.87);overflow:hidden;position:absolute;left:50%;top:5rem;transform:translate(-50%);user-select:none;display:flex;align-items:center;height:32px;max-width:100vw;background:rgb(var(--vot-surface-rgb, 255, 255, 255));color:var(--vot-helper-theme);fill:var(--vot-helper-theme);border-radius:4px;font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:16px;line-height:1.5;cursor:default;transition:opacity .5s;z-index:10000}.vot-segmented-button[hidden]{display:none !important}.vot-segmented-button *{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important}.vot-segmented-button .vot-separator{width:1px;height:50%;background:rgba(var(--vot-helper-theme-rgb), 0.1)}.vot-segmented-button .vot-separator[hidden]{display:none !important}.vot-segmented-button .vot-segment,.vot-segmented-button .vot-segment-only-icon{position:relative;overflow:hidden;display:flex;justify-content:center;align-items:center;height:100%;padding:0 8px;background-color:rgba(0,0,0,0);color:inherit;transition:background-color 100ms ease-in-out;border:none}.vot-segmented-button .vot-segment[hidden],.vot-segmented-button [hidden].vot-segment-only-icon{display:none !important}.vot-segmented-button .vot-segment::before,.vot-segmented-button .vot-segment-only-icon::before,.vot-segmented-button .vot-segment::after,.vot-segmented-button .vot-segment-only-icon::after{content:"";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;opacity:0}.vot-segmented-button .vot-segment::before,.vot-segmented-button .vot-segment-only-icon::before{background-color:rgb(var(--vot-helper-theme-rgb));transition:opacity .2s}.vot-segmented-button .vot-segment::after,.vot-segmented-button .vot-segment-only-icon::after{background:radial-gradient(circle at center, currentColor 1%, transparent 1%) center/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-segmented-button .vot-segment:hover::before,.vot-segmented-button .vot-segment-only-icon:hover::before{opacity:.04}.vot-segmented-button .vot-segment:active::after,.vot-segmented-button .vot-segment-only-icon:active::after{opacity:.16;background-size:100% 100%;transition:background-size 0s}.vot-segmented-button .vot-segment-only-icon{min-width:32px;padding:0}.vot-segmented-button .vot-segment-label{margin-left:8px;white-space:nowrap}.vot-segmented-button[data-status=success] .vot-translate-button{color:rgb(var(--vot-primary-rgb, 33, 150, 243));fill:rgb(var(--vot-primary-rgb, 33, 150, 243))}.vot-segmented-button[data-status=error] .vot-translate-button{color:#f28b82;fill:#f28b82}.vot-segmented-button[data-translating=true] #vot-translating-icon{display:block !important}.vot-segmented-button[data-translating=true] #vot-translate-icon{display:none !important}.vot-segmented-button[data-direction=column]{flex-direction:column;height:fit-content}.vot-segmented-button[data-direction=column] .vot-segment-label{display:none}.vot-segmented-button[data-direction=column]>.vot-segment-only-icon,.vot-segmented-button[data-direction=column]>.vot-segment{padding:8px}.vot-segmented-button[data-direction=column] .vot-separator{height:1px;width:50%}.vot-segmented-button[data-position=left]{left:50px;top:12.5vh}.vot-segmented-button[data-position=right]{left:auto;right:0;top:12.5vh}.vot-segmented-button svg{width:fit-content}.vot-menu{--vot-helper-surface-rgb: var(--vot-surface-rgb, 255, 255, 255);--vot-helper-surface: rgb(var(--vot-helper-surface-rgb));--vot-helper-onsurface-rgb: var(--vot-onsurface-rgb, 0, 0, 0);--vot-helper-onsurface: rgba(var(--vot-helper-onsurface-rgb), 0.87);overflow:hidden;position:absolute;left:50%;top:calc(5rem + 32px + 16px);user-select:none;background-color:var(--vot-helper-surface);color:var(--vot-helper-onsurface);border-radius:8px;font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:16px;line-height:1.5;min-width:300px;cursor:default;z-index:10000;visibility:visible;opacity:1;transform-origin:top;transform:translate(-50%) scale(1);transition:opacity .3s,transform .1s}.vot-menu *{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important}.vot-menu[hidden]{pointer-events:none;display:block !important;visibility:hidden;opacity:0;transform:translate(-50%) scale(0)}.vot-menu-content-wrapper{display:flex;flex-direction:column;min-height:100px;max-height:calc(var(--vot-container-height, 75vh) - (5rem + 32px + 16px)*2);overflow:auto}.vot-menu-header-container{flex-shrink:0;align-items:flex-start;display:flex;min-height:31px}.vot-menu-header-container:empty{padding:0 0 16px 0}.vot-menu-header-container>.vot-icon-button{margin-inline-end:4px;margin-top:4px}.vot-menu-title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0;text-align:start}.vot-menu-title{flex:1;font-size:16px;line-height:1;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:16px;padding-top:16px}.vot-menu-body-container{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto;padding:0 16px;gap:8px;overscroll-behavior:contain;scrollbar-color:rgba(var(--vot-helper-onsurface-rgb), 0.1) var(--vot-helper-surface) !important}.vot-menu-body-container::-webkit-scrollbar,.vot-menu-body-container::-webkit-scrollbar-track{height:12px !important;width:12px !important;background:var(--vot-helper-surface) !important}.vot-menu-body-container::-webkit-scrollbar-thumb{background:rgba(var(--vot-helper-onsurface-rgb), 0.1) !important;-webkit-border-radius:1ex !important;border:5px solid var(--vot-helper-surface) !important}.vot-menu-body-container::-webkit-scrollbar-thumb:hover{border:3px solid var(--vot-helper-surface) !important}.vot-menu-body-container::-webkit-scrollbar-corner{background:var(--vot-helper-surface) !important}.vot-menu-footer-container{flex-shrink:0;display:flex;justify-content:flex-end;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:16px;padding-top:16px}.vot-menu-footer-container:empty{padding:16px 0 0 0}.vot-menu[data-position=left]{left:240px;top:12.5vh}.vot-menu[data-position=right]{right:-80px;left:auto;top:12.5vh}.vot-dialog-container{visibility:visible;position:absolute;z-index:10000}.vot-dialog-container[hidden]{display:block !important;pointer-events:none;visibility:hidden}.vot-dialog-container *{-webkit-box-sizing:border-box !important;-moz-box-sizing:border-box !important;box-sizing:border-box !important}.vot-dialog-backdrop{background-color:rgba(0,0,0,.6);position:fixed;top:0;right:0;bottom:0;left:0;opacity:1;transition:opacity .3s}[hidden]>.vot-dialog-backdrop{pointer-events:none;opacity:0}.vot-dialog{--vot-helper-surface-rgb: var(--vot-surface-rgb, 255, 255, 255);--vot-helper-surface: rgb(var(--vot-helper-surface-rgb));--vot-helper-onsurface-rgb: var(--vot-onsurface-rgb, 0, 0, 0);--vot-helper-onsurface: rgba(var(--vot-helper-onsurface-rgb), 0.87);display:block;position:fixed;top:50%;bottom:50%;max-width:initial;max-height:initial;width:min(var(--vot-dialog-width, 512px),100%);height:fit-content;inset-inline-start:0px;inset-inline-end:0px;inset-block-start:0px;inset-block-end:0px;border-radius:8px;margin:auto;padding:0;background-color:var(--vot-helper-surface);color:var(--vot-helper-onsurface);box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);font-family:var(--vot-font-family, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:16px;line-height:1.5;user-select:none;visibility:visible;overflow:auto;overflow-y:hidden;opacity:1;transform-origin:center;transform:scale(1);transition:opacity .3s,transform .1s}[hidden]>.vot-dialog{pointer-events:none;opacity:0;transform:scale(0.5);transition:opacity .1s,transform .2s}.vot-dialog-content-wrapper{display:flex;flex-direction:column;max-height:75vh;overflow:auto}.vot-dialog-header-container{flex-shrink:0;align-items:flex-start;display:flex;min-height:31px}.vot-dialog-header-container:empty{padding:0 0 20px 0}.vot-dialog-header-container>.vot-icon-button{margin-inline-end:4px;margin-top:4px}.vot-dialog-title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}.vot-dialog-title{flex:1;font-size:115.3846153846%;font-weight:bold;line-height:1;padding-bottom:16px;padding-inline-end:20px;padding-inline-start:20px;padding-top:20px}.vot-dialog-body-container{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto;padding:0 20px;gap:16px;overscroll-behavior:contain;scrollbar-color:rgba(var(--vot-helper-onsurface-rgb), 0.1) var(--vot-helper-surface) !important}.vot-dialog-body-container::-webkit-scrollbar,.vot-dialog-body-container::-webkit-scrollbar-track{height:12px !important;width:12px !important;background:var(--vot-helper-surface) !important}.vot-dialog-body-container::-webkit-scrollbar-thumb{background:rgba(var(--vot-helper-onsurface-rgb), 0.1) !important;-webkit-border-radius:1ex !important;border:5px solid var(--vot-helper-surface) !important}.vot-dialog-body-container::-webkit-scrollbar-thumb:hover{border:3px solid var(--vot-helper-surface) !important}.vot-dialog-body-container::-webkit-scrollbar-corner{background:var(--vot-helper-surface) !important}.vot-dialog-footer-container{flex-shrink:0;display:flex;justify-content:flex-end;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:16px;padding-top:16px}.vot-dialog-footer-container:empty{padding:20px 0 0 0}.vot-subtitles-widget{display:flex;justify-content:center;align-items:center;position:absolute;width:50%;max-height:100%;min-height:20%;z-index:10000;left:25%;top:75%;pointer-events:none}.vot-subtitles{position:relative;max-width:100%;max-height:100%;width:max-content;background:var(--vot-subtitles-background, rgba(46, 47, 52, 0.8));color:var(--vot-subtitles-color, rgb(227, 227, 227));border-radius:1rem;pointer-events:all;padding:1rem;font-size:2rem;line-height:normal;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vot-subtitles span{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.vot-subtitles .passed{color:var(--vot-subtitles-passed-color, rgb(33, 150, 243))}:root{--vot-font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system;--vot-primary-rgb: 139, 180, 245;--vot-onprimary-rgb: 32, 33, 36;--vot-surface-rgb: 32, 33, 36;--vot-onsurface-rgb: 227, 227, 227;--vot-subtitles-background: rgba(var(--vot-surface-rgb, 46, 47, 52), 0.8);--vot-subtitles-color: rgb(var(--vot-onsurface-rgb, 227, 227, 227));--vot-subtitles-passed-color: rgb(var(--vot-primary-rgb, 33, 150, 243))}vot-block{display:block}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/requestidlecallback-polyfill/index.js":
/***/ (() => {

window.requestIdleCallback =
    window.requestIdleCallback ||
    function(cb) {
        var start = Date.now();
        return setTimeout(function() {
            cb({
                didTimeout: false,
                timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - start));
                },
            });
        }, 1);
    };

window.cancelIdleCallback =
    window.cancelIdleCallback ||
    function(id) {
        clearTimeout(id);
    };


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/webpack-monkey/lib/node/deps/style-loader-insertStyleElement.js":
/***/ ((module) => {

module.exports = function () {
  return (function styleLoaderInsertStyleElement(options) {
    options.styleTagTransform = function monkeyStyleTagTransform(css, styleElement) {
        styleElement?.remove();
        GM_addStyle(css);
    };
    return document.createElement("style");
}).apply(null, arguments)
}


/***/ }),

/***/ "../vot.js/node_modules/@protobufjs/aspromise/index.js":
/***/ ((module) => {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),

/***/ "../vot.js/node_modules/@protobufjs/base64/index.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),

/***/ "../vot.js/node_modules/@protobufjs/eventemitter/index.js":
/***/ ((module) => {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),

/***/ "../vot.js/node_modules/@protobufjs/float/index.js":
/***/ ((module) => {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),

/***/ "../vot.js/node_modules/@protobufjs/inquire/index.js":
/***/ ((module) => {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),

/***/ "../vot.js/node_modules/@protobufjs/pool/index.js":
/***/ ((module) => {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),

/***/ "../vot.js/node_modules/@protobufjs/utf8/index.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),

/***/ "../vot.js/node_modules/dom-parser/dist/index.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseFromString = void 0;
const Dom_1 = __webpack_require__("../vot.js/node_modules/dom-parser/dist/lib/Dom.js");
function parseFromString(html) {
    return new Dom_1.Dom(html);
}
exports.parseFromString = parseFromString;
__exportStar(__webpack_require__("../vot.js/node_modules/dom-parser/dist/lib/Dom.js"), exports);
__exportStar(__webpack_require__("../vot.js/node_modules/dom-parser/dist/lib/Node.js"), exports);


/***/ }),

/***/ "../vot.js/node_modules/dom-parser/dist/lib/Dom.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dom = void 0;
const Node_1 = __webpack_require__("../vot.js/node_modules/dom-parser/dist/lib/Node.js");
const NodeAttribute_1 = __webpack_require__("../vot.js/node_modules/dom-parser/dist/lib/NodeAttribute.js");
const tagRegExp = /(<\/?(?:[a-z][a-z0-9]*:)?[a-z][a-z0-9-_.]*?[a-z0-9]*\s*(?:\s+[a-z0-9-_:]+(?:=(?:(?:'[\s\S]*?')|(?:"[\s\S]*?")))?)*\s*\/?>)|([^<]|<(?![a-z/]))*/gi;
const attrRegExp = /\s[a-z0-9-_:]+\b(\s*=\s*('|")[\s\S]*?\2)?/gi;
const splitAttrRegExp = /(\s[a-z0-9-_:]+\b\s*)(?:=(\s*('|")[\s\S]*?\3))?/gi;
const startTagExp = /^<[a-z]/;
const selfCloseTagExp = /\/>$/;
const closeTagExp = /^<\//;
const textNodeExp = /^[^<]/;
const nodeNameExp = /<\/?((?:([a-z][a-z0-9]*):)?(?:[a-z](?:[a-z0-9-_.]*[a-z0-9])?))/i;
const attributeQuotesExp = /^('|")|('|")$/g;
const noClosingTagsExp = /^(?:area|base|br|col|command|embed|hr|img|input|link|meta|param|source)/i;
class Dom {
    constructor(rawHTML) {
        this.rawHTML = rawHTML;
    }
    find(conditionFn, findFirst) {
        const result = find(this.rawHTML, conditionFn, findFirst);
        return findFirst ? result[0] || null : result;
    }
    getElementsByClassName(className) {
        const expr = new RegExp(`^(.*?\\s)?${className}(\\s.*?)?$`);
        return this.find((node) => Boolean(node.attributes.length && expr.test(node.getAttribute('class') || '')));
    }
    getElementsByTagName(tagName) {
        return this.find((node) => node.nodeName.toUpperCase() === tagName.toUpperCase());
    }
    getElementById(id) {
        return this.find((node) => node.getAttribute('id') === id, true);
    }
    getElementsByName(name) {
        return this.find((node) => node.getAttribute('name') === name);
    }
    getElementsByAttribute(attributeName, attributeValue) {
        return this.find((node) => node.getAttribute(attributeName) === attributeValue);
    }
}
exports.Dom = Dom;
// private
function find(html, conditionFn, onlyFirst = false) {
    const generator = domGenerator(html);
    const result = [];
    for (const node of generator) {
        if (node && conditionFn(node)) {
            result.push(node);
            if (onlyFirst) {
                return result;
            }
        }
    }
    return result;
}
function* domGenerator(html) {
    const tags = getAllTags(html);
    let cursor = null;
    for (let i = 0, l = tags.length; i < l; i++) {
        const tag = tags[i];
        const node = createNode(tag, cursor);
        cursor = node || cursor;
        if (isElementComposed(cursor, tag)) {
            yield cursor;
            cursor = cursor.parentNode;
        }
    }
    while (cursor) {
        yield cursor;
        cursor = cursor.parentNode;
    }
}
function isElementComposed(element, tag) {
    if (!tag) {
        return false;
    }
    const isCloseTag = closeTagExp.test(tag);
    const [, nodeName] = tag.match(nodeNameExp) || [];
    const isElementClosedByTag = isCloseTag && element.nodeName === nodeName;
    return isElementClosedByTag || element.isSelfCloseTag || element.nodeType === Node_1.NodeType.text;
}
function getAllTags(html) {
    return html.match(tagRegExp) || [];
}
function createNode(tag, parentNode) {
    const isTextNode = textNodeExp.test(tag);
    const isStartTag = startTagExp.test(tag);
    if (isTextNode) {
        return createTextNode(tag, parentNode);
    }
    if (isStartTag) {
        return createElementNode(tag, parentNode);
    }
    return null;
}
function createElementNode(tag, parentNode) {
    var _a;
    const [, nodeName, namespace] = tag.match(nodeNameExp) || [];
    const selfCloseTag = selfCloseTagExp.test(tag) || noClosingTagsExp.test(nodeName);
    const attributes = parseAttributes(tag);
    const elementNode = new Node_1.Node({
        nodeType: Node_1.NodeType.element,
        nodeName,
        namespace,
        attributes,
        childNodes: [],
        parentNode,
        selfCloseTag,
    });
    (_a = parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes) === null || _a === void 0 ? void 0 : _a.push(elementNode);
    return elementNode;
}
function parseAttributes(tag) {
    return (tag.match(attrRegExp) || []).map((attributeString) => {
        splitAttrRegExp.lastIndex = 0;
        const exec = splitAttrRegExp.exec(attributeString) || [];
        const [, name = '', value = ''] = exec;
        return new NodeAttribute_1.NodeAttribute({
            name: name.trim(),
            value: value.trim().replace(attributeQuotesExp, ''),
        });
    });
}
function createTextNode(text, parentNode) {
    var _a;
    const textNode = new Node_1.Node({
        nodeType: Node_1.NodeType.text,
        nodeName: '#text',
        text,
        parentNode,
    });
    (_a = parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes) === null || _a === void 0 ? void 0 : _a.push(textNode);
    return textNode;
}


/***/ }),

/***/ "../vot.js/node_modules/dom-parser/dist/lib/Node.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// https://developer.mozilla.org/en-US/docs/Web/API/Node
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Node = exports.NodeType = void 0;
var NodeType;
(function (NodeType) {
    NodeType[NodeType["element"] = 1] = "element";
    NodeType[NodeType["text"] = 3] = "text";
})(NodeType || (exports.NodeType = NodeType = {}));
class Node {
    constructor({ nodeType, namespace, selfCloseTag, text, nodeName, childNodes, parentNode, attributes, }) {
        this.namespace = namespace || null;
        this.nodeType = nodeType;
        this.isSelfCloseTag = Boolean(selfCloseTag);
        this.text = text || null;
        this.nodeName = nodeType === NodeType.element ? nodeName : '#text';
        this.childNodes = childNodes || [];
        this.parentNode = parentNode;
        this.attributes = attributes || [];
    }
    get firstChild() {
        return this.childNodes[0] || null;
    }
    get lastChild() {
        return this.childNodes[this.childNodes.length - 1] || null;
    }
    get innerHTML() {
        return this.childNodes.reduce((html, node) => html + (node.nodeType === NodeType.text ? node.text : node.outerHTML), '');
    }
    get outerHTML() {
        if (this.nodeType === NodeType.text) {
            return this.textContent;
        }
        const attributesString = stringifyAttributes(this.attributes);
        const openTag = `<${this.nodeName}${attributesString.length ? ' ' : ''}${attributesString}${this.isSelfCloseTag ? '/' : ''}>`;
        if (this.isSelfCloseTag) {
            return openTag;
        }
        const childs = this.childNodes.map((child) => child.outerHTML).join('');
        const closeTag = `</${this.nodeName}>`;
        return [openTag, childs, closeTag].join('');
    }
    get textContent() {
        if (this.nodeType === NodeType.text) {
            return this.text;
        }
        return this.childNodes
            .map((node) => node.textContent)
            .join('')
            .replace(/\x20+/g, ' ');
    }
    getAttribute(name) {
        const attribute = this.attributes.find((a) => a.name === name);
        return attribute ? attribute.value : null;
    }
    getElementsByTagName(tagName) {
        return searchElements(this, (elem) => elem.nodeName.toUpperCase() === tagName.toUpperCase());
    }
    getElementsByClassName(className) {
        const expr = new RegExp(`^(.*?\\s)?${className}(\\s.*?)?$`);
        return searchElements(this, (node) => Boolean(node.attributes.length && expr.test(node.getAttribute('class') || '')));
    }
    getElementsByName(name) {
        return searchElements(this, (node) => Boolean(node.attributes.length && node.getAttribute('name') === name));
    }
    getElementById(id) {
        return searchElement(this, (node) => Boolean(node.attributes.length && node.getAttribute('id') === id));
    }
}
exports.Node = Node;
Node.ELEMENT_NODE = NodeType.element;
Node.TEXT_NODE = NodeType.text;
// private
function searchElements(root, conditionFn) {
    if (root.nodeType === NodeType.text) {
        return [];
    }
    return root.childNodes.reduce((accumulator, childNode) => {
        if (childNode.nodeType !== NodeType.text && conditionFn(childNode)) {
            return [...accumulator, childNode, ...searchElements(childNode, conditionFn)];
        }
        return [...accumulator, ...searchElements(childNode, conditionFn)];
    }, []);
}
function searchElement(root, conditionFn) {
    for (let i = 0, l = root.childNodes.length; i < l; i++) {
        const childNode = root.childNodes[i];
        if (conditionFn(childNode)) {
            return childNode;
        }
        const node = searchElement(childNode, conditionFn);
        if (node) {
            return node;
        }
    }
    return null;
}
function stringifyAttributes(attributes) {
    return attributes.map((elem) => elem.name + (elem.value ? `="${elem.value}"` : '')).join(' ');
}


/***/ }),

/***/ "../vot.js/node_modules/dom-parser/dist/lib/NodeAttribute.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeAttribute = void 0;
class NodeAttribute {
    constructor({ name, value }) {
        this.name = name;
        this.value = value;
    }
}
exports.NodeAttribute = NodeAttribute;


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/minimal.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// minimal library entry point.


module.exports = __webpack_require__("../vot.js/node_modules/protobufjs/src/index-minimal.js");


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/src/index-minimal.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __webpack_require__("../vot.js/node_modules/protobufjs/src/writer.js");
protobuf.BufferWriter = __webpack_require__("../vot.js/node_modules/protobufjs/src/writer_buffer.js");
protobuf.Reader       = __webpack_require__("../vot.js/node_modules/protobufjs/src/reader.js");
protobuf.BufferReader = __webpack_require__("../vot.js/node_modules/protobufjs/src/reader_buffer.js");

// Utility
protobuf.util         = __webpack_require__("../vot.js/node_modules/protobufjs/src/util/minimal.js");
protobuf.rpc          = __webpack_require__("../vot.js/node_modules/protobufjs/src/rpc.js");
protobuf.roots        = __webpack_require__("../vot.js/node_modules/protobufjs/src/roots.js");
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
}

// Set up buffer utility according to the environment
configure();


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/src/reader.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Reader;

var util      = __webpack_require__("../vot.js/node_modules/protobufjs/src/util/minimal.js");

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup(buffer) {
            return (Reader.create = function create_buffer(buffer) {
                return util.Buffer.isBuffer(buffer)
                    ? new BufferReader(buffer)
                    /* istanbul ignore next */
                    : create_array(buffer);
            })(buffer);
        }
        /* istanbul ignore next */
        : create_array;
};

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = create();

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);

    if (start === end) { // fix for IE 10/Win8 and others' subarray returning array of size 1
        var nativeBuffer = util.Buffer;
        return nativeBuffer
            ? nativeBuffer.alloc(0)
            : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/src/reader_buffer.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__("../vot.js/node_modules/protobufjs/src/reader.js");
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__("../vot.js/node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

BufferReader._configure = function () {
    /* istanbul ignore else */
    if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
};


/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice
        ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len))
        : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */

BufferReader._configure();


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/src/roots.js":
/***/ ((module) => {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available across modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/src/rpc.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__("../vot.js/node_modules/protobufjs/src/rpc/service.js");


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/src/rpc/service.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Service;

var util = __webpack_require__("../vot.js/node_modules/protobufjs/src/util/minimal.js");

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/src/util/longbits.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = LongBits;

var util = __webpack_require__("../vot.js/node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/src/util/minimal.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__("../vot.js/node_modules/@protobufjs/aspromise/index.js");

// converts to / from base64 encoded strings
util.base64 = __webpack_require__("../vot.js/node_modules/@protobufjs/base64/index.js");

// base class of rpc.Service
util.EventEmitter = __webpack_require__("../vot.js/node_modules/@protobufjs/eventemitter/index.js");

// float handling accross browsers
util.float = __webpack_require__("../vot.js/node_modules/@protobufjs/float/index.js");

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__("../vot.js/node_modules/@protobufjs/inquire/index.js");

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__("../vot.js/node_modules/@protobufjs/utf8/index.js");

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__("../vot.js/node_modules/@protobufjs/pool/index.js");

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__("../vot.js/node_modules/protobufjs/src/util/longbits.js");

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 */
util.isNode = Boolean(typeof __webpack_require__.g !== "undefined"
                   && __webpack_require__.g
                   && __webpack_require__.g.process
                   && __webpack_require__.g.process.versions
                   && __webpack_require__.g.process.versions.node);

/**
 * Global object reference.
 * @memberof util
 * @type {Object}
 */
util.global = util.isNode && __webpack_require__.g
           || typeof window !== "undefined" && window
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: new Error().stack || "" });

        if (properties)
            merge(this, properties);
    }

    CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
            value: CustomError,
            writable: true,
            enumerable: false,
            configurable: true,
        },
        name: {
            get: function get() { return name; },
            set: undefined,
            enumerable: false,
            // configurable: false would accurately preserve the behavior of
            // the original, but I'm guessing that was not intentional.
            // For an actual error subclass, this property would
            // be configurable.
            configurable: true,
        },
        toString: {
            value: function value() { return this.name + ": " + this.message; },
            writable: true,
            enumerable: false,
            configurable: true,
        },
    });

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/src/writer.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Writer;

var util      = __webpack_require__("../vot.js/node_modules/protobufjs/src/util/minimal.js");

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup() {
            return (Writer.create = function create_buffer() {
                return new BufferWriter();
            })();
        }
        /* istanbul ignore next */
        : function create_array() {
            return new Writer();
        };
};

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = create();

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
};


/***/ }),

/***/ "../vot.js/node_modules/protobufjs/src/writer_buffer.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__("../vot.js/node_modules/protobufjs/src/writer.js");
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__("../vot.js/node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

BufferWriter._configure = function () {
    /**
     * Allocates a buffer of the specified size.
     * @function
     * @param {number} size Buffer size
     * @returns {Buffer} Buffer
     */
    BufferWriter.alloc = util._Buffer_allocUnsafe;

    BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set"
        ? function writeBytesBuffer_set(val, buf, pos) {
          buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
          // also works for plain array values
        }
        /* istanbul ignore next */
        : function writeBytesBuffer_copy(val, buf, pos) {
          if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
          else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
        };
};


/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
        buf.utf8Write(val, pos);
    else
        buf.write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */

BufferWriter._configure();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/bowser/es5.js
var es5 = __webpack_require__("./node_modules/bowser/es5.js");
;// CONCATENATED MODULE: ../vot.js/node_modules/long/index.js
/**
 * @license
 * Copyright 2009 The Closure Library Authors
 * Copyright 2020 Daniel Wirtz / The long.js Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

// WebAssembly optimizations to do native i64 multiplication and divide
var wasm = null;
try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
  ])), {}).exports;
} catch (e) {
  // no wasm support :(
}

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {

  /**
   * The low 32 bits as a signed value.
   * @type {number}
   */
  this.low = low | 0;

  /**
   * The high 32 bits as a signed value.
   * @type {number}
   */
  this.high = high | 0;

  /**
   * Whether unsigned or not.
   * @type {boolean}
   */
  this.unsigned = !!unsigned;
}

// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;

Object.defineProperty(Long.prototype, "__isLong__", { value: true });

/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
  return (obj && obj["__isLong__"]) === true;
}

/**
 * @function
 * @param {*} value number
 * @returns {number}
 * @inner
 */
function ctz32(value) {
  var c = Math.clz32(value & -value);
  return value ? 31 - c : c;
}

/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};

/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
  var obj, cachedObj, cache;
  if (unsigned) {
    value >>>= 0;
    if (cache = (0 <= value && value < 256)) {
      cachedObj = UINT_CACHE[value];
      if (cachedObj)
        return cachedObj;
    }
    obj = fromBits(value, 0, true);
    if (cache)
      UINT_CACHE[value] = obj;
    return obj;
  } else {
    value |= 0;
    if (cache = (-128 <= value && value < 128)) {
      cachedObj = INT_CACHE[value];
      if (cachedObj)
        return cachedObj;
    }
    obj = fromBits(value, value < 0 ? -1 : 0, false);
    if (cache)
      INT_CACHE[value] = obj;
    return obj;
  }
}

/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
  if (isNaN(value))
    return unsigned ? UZERO : ZERO;
  if (unsigned) {
    if (value < 0)
      return UZERO;
    if (value >= TWO_PWR_64_DBL)
      return MAX_UNSIGNED_VALUE;
  } else {
    if (value <= -TWO_PWR_63_DBL)
      return MIN_VALUE;
    if (value + 1 >= TWO_PWR_63_DBL)
      return MAX_VALUE;
  }
  if (value < 0)
    return fromNumber(-value, unsigned).neg();
  return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
  return new Long(lowBits, highBits, unsigned);
}

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
  if (str.length === 0)
    throw Error('empty string');
  if (typeof unsigned === 'number') {
    // For goog.math.long compatibility
    radix = unsigned;
    unsigned = false;
  } else {
    unsigned = !!unsigned;
  }
  if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
    return unsigned ? UZERO : ZERO;
  radix = radix || 10;
  if (radix < 2 || 36 < radix)
    throw RangeError('radix');

  var p;
  if ((p = str.indexOf('-')) > 0)
    throw Error('interior hyphen');
  else if (p === 0) {
    return fromString(str.substring(1), unsigned, radix).neg();
  }

  // Do several (8) digits each time through the loop, so as to
  // minimize the calls to the very expensive emulated div.
  var radixToPower = fromNumber(pow_dbl(radix, 8));

  var result = ZERO;
  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i),
      value = parseInt(str.substring(i, i + size), radix);
    if (size < 8) {
      var power = fromNumber(pow_dbl(radix, size));
      result = result.mul(power).add(fromNumber(value));
    } else {
      result = result.mul(radixToPower);
      result = result.add(fromNumber(value));
    }
  }
  result.unsigned = unsigned;
  return result;
}

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
  if (typeof val === 'number')
    return fromNumber(val, unsigned);
  if (typeof val === 'string')
    return fromString(val, unsigned);
  // Throws for non-objects, converts non-instanceof Long:
  return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}

/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
Long.fromValue = fromValue;

// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);

/**
 * Signed zero.
 * @type {!Long}
 */
Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);

/**
 * Unsigned zero.
 * @type {!Long}
 */
Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);

/**
 * Signed one.
 * @type {!Long}
 */
Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);

/**
 * Unsigned one.
 * @type {!Long}
 */
Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);

/**
 * Signed negative one.
 * @type {!Long}
 */
Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);

/**
 * Maximum signed value.
 * @type {!Long}
 */
Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);

/**
 * Maximum unsigned value.
 * @type {!Long}
 */
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);

/**
 * Minimum signed value.
 * @type {!Long}
 */
Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @this {!Long}
 * @returns {number}
 */
LongPrototype.toInt = function toInt() {
  return this.unsigned ? this.low >>> 0 : this.low;
};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @this {!Long}
 * @returns {number}
 */
LongPrototype.toNumber = function toNumber() {
  if (this.unsigned)
    return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
  return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};

/**
 * Converts the Long to a string written in the specified radix.
 * @this {!Long}
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
LongPrototype.toString = function toString(radix) {
  radix = radix || 10;
  if (radix < 2 || 36 < radix)
    throw RangeError('radix');
  if (this.isZero())
    return '0';
  if (this.isNegative()) { // Unsigned Longs are never negative
    if (this.eq(MIN_VALUE)) {
      // We need to change the Long value before it can be negated, so we remove
      // the bottom-most digit in this base and then recurse to do the rest.
      var radixLong = fromNumber(radix),
        div = this.div(radixLong),
        rem1 = div.mul(radixLong).sub(this);
      return div.toString(radix) + rem1.toInt().toString(radix);
    } else
      return '-' + this.neg().toString(radix);
  }

  // Do several (6) digits each time through the loop, so as to
  // minimize the calls to the very expensive emulated div.
  var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
    rem = this;
  var result = '';
  while (true) {
    var remDiv = rem.div(radixToPower),
      intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
      digits = intval.toString(radix);
    rem = remDiv;
    if (rem.isZero())
      return digits + result;
    else {
      while (digits.length < 6)
        digits = '0' + digits;
      result = '' + digits + result;
    }
  }
};

/**
 * Gets the high 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed high bits
 */
LongPrototype.getHighBits = function getHighBits() {
  return this.high;
};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned high bits
 */
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
  return this.high >>> 0;
};

/**
 * Gets the low 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed low bits
 */
LongPrototype.getLowBits = function getLowBits() {
  return this.low;
};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned low bits
 */
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
  return this.low >>> 0;
};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @this {!Long}
 * @returns {number}
 */
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
  if (this.isNegative()) // Unsigned Longs are never negative
    return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
  var val = this.high != 0 ? this.high : this.low;
  for (var bit = 31; bit > 0; bit--)
    if ((val & (1 << bit)) != 0)
      break;
  return this.high != 0 ? bit + 33 : bit + 1;
};

/**
 * Tests if this Long's value equals zero.
 * @this {!Long}
 * @returns {boolean}
 */
LongPrototype.isZero = function isZero() {
  return this.high === 0 && this.low === 0;
};

/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @this {!Long}
 * @returns {boolean}
 */
LongPrototype.isNegative = function isNegative() {
  return !this.unsigned && this.high < 0;
};

/**
 * Tests if this Long's value is positive or zero.
 * @this {!Long}
 * @returns {boolean}
 */
LongPrototype.isPositive = function isPositive() {
  return this.unsigned || this.high >= 0;
};

/**
 * Tests if this Long's value is odd.
 * @this {!Long}
 * @returns {boolean}
 */
LongPrototype.isOdd = function isOdd() {
  return (this.low & 1) === 1;
};

/**
 * Tests if this Long's value is even.
 * @this {!Long}
 * @returns {boolean}
 */
LongPrototype.isEven = function isEven() {
  return (this.low & 1) === 0;
};

/**
 * Tests if this Long's value equals the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.equals = function equals(other) {
  if (!isLong(other))
    other = fromValue(other);
  if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
    return false;
  return this.high === other.high && this.low === other.low;
};

/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.notEquals = function notEquals(other) {
  return !this.eq(/* validates */ other);
};

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThan = function lessThan(other) {
  return this.comp(/* validates */ other) < 0;
};

/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
  return this.comp(/* validates */ other) <= 0;
};

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThan = function greaterThan(other) {
  return this.comp(/* validates */ other) > 0;
};

/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
  return this.comp(/* validates */ other) >= 0;
};

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.compare = function compare(other) {
  if (!isLong(other))
    other = fromValue(other);
  if (this.eq(other))
    return 0;
  var thisNeg = this.isNegative(),
    otherNeg = other.isNegative();
  if (thisNeg && !otherNeg)
    return -1;
  if (!thisNeg && otherNeg)
    return 1;
  // At this point the sign bits are the same
  if (!this.unsigned)
    return this.sub(other).isNegative() ? -1 : 1;
  // Both are positive if at least one is unsigned
  return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
};

/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @this {!Long}
 * @returns {!Long} Negated Long
 */
LongPrototype.negate = function negate() {
  if (!this.unsigned && this.eq(MIN_VALUE))
    return MIN_VALUE;
  return this.not().add(ONE);
};

/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
LongPrototype.add = function add(addend) {
  if (!isLong(addend))
    addend = fromValue(addend);

  // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

  var a48 = this.high >>> 16;
  var a32 = this.high & 0xFFFF;
  var a16 = this.low >>> 16;
  var a00 = this.low & 0xFFFF;

  var b48 = addend.high >>> 16;
  var b32 = addend.high & 0xFFFF;
  var b16 = addend.low >>> 16;
  var b00 = addend.low & 0xFFFF;

  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 + b48;
  c48 &= 0xFFFF;
  return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the difference of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.subtract = function subtract(subtrahend) {
  if (!isLong(subtrahend))
    subtrahend = fromValue(subtrahend);
  return this.add(subtrahend.neg());
};

/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.multiply = function multiply(multiplier) {
  if (this.isZero())
    return this;
  if (!isLong(multiplier))
    multiplier = fromValue(multiplier);

  // use wasm support if present
  if (wasm) {
    var low = wasm["mul"](this.low,
      this.high,
      multiplier.low,
      multiplier.high);
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }

  if (multiplier.isZero())
    return this.unsigned ? UZERO : ZERO;
  if (this.eq(MIN_VALUE))
    return multiplier.isOdd() ? MIN_VALUE : ZERO;
  if (multiplier.eq(MIN_VALUE))
    return this.isOdd() ? MIN_VALUE : ZERO;

  if (this.isNegative()) {
    if (multiplier.isNegative())
      return this.neg().mul(multiplier.neg());
    else
      return this.neg().mul(multiplier).neg();
  } else if (multiplier.isNegative())
    return this.mul(multiplier.neg()).neg();

  // If both longs are small, use float multiplication
  if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
    return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

  // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
  // We can skip products that would overflow.

  var a48 = this.high >>> 16;
  var a32 = this.high & 0xFFFF;
  var a16 = this.low >>> 16;
  var a00 = this.low & 0xFFFF;

  var b48 = multiplier.high >>> 16;
  var b32 = multiplier.high & 0xFFFF;
  var b16 = multiplier.low >>> 16;
  var b00 = multiplier.low & 0xFFFF;

  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 0xFFFF;
  return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.divide = function divide(divisor) {
  if (!isLong(divisor))
    divisor = fromValue(divisor);
  if (divisor.isZero())
    throw Error('division by zero');

  // use wasm support if present
  if (wasm) {
    // guard against signed division overflow: the largest
    // negative number / -1 would be 1 larger than the largest
    // positive number, due to two's complement.
    if (!this.unsigned &&
      this.high === -0x80000000 &&
      divisor.low === -1 && divisor.high === -1) {
      // be consistent with non-wasm code path
      return this;
    }
    var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(
      this.low,
      this.high,
      divisor.low,
      divisor.high
    );
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }

  if (this.isZero())
    return this.unsigned ? UZERO : ZERO;
  var approx, rem, res;
  if (!this.unsigned) {
    // This section is only relevant for signed longs and is derived from the
    // closure library as a whole.
    if (this.eq(MIN_VALUE)) {
      if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
        return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      else if (divisor.eq(MIN_VALUE))
        return ONE;
      else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shr(1);
        approx = halfThis.div(divisor).shl(1);
        if (approx.eq(ZERO)) {
          return divisor.isNegative() ? ONE : NEG_ONE;
        } else {
          rem = this.sub(divisor.mul(approx));
          res = approx.add(rem.div(divisor));
          return res;
        }
      }
    } else if (divisor.eq(MIN_VALUE))
      return this.unsigned ? UZERO : ZERO;
    if (this.isNegative()) {
      if (divisor.isNegative())
        return this.neg().div(divisor.neg());
      return this.neg().div(divisor).neg();
    } else if (divisor.isNegative())
      return this.div(divisor.neg()).neg();
    res = ZERO;
  } else {
    // The algorithm below has not been made for unsigned longs. It's therefore
    // required to take special care of the MSB prior to running it.
    if (!divisor.unsigned)
      divisor = divisor.toUnsigned();
    if (divisor.gt(this))
      return UZERO;
    if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
      return UONE;
    res = UZERO;
  }

  // Repeat the following until the remainder is less than other:  find a
  // floating-point that approximates remainder / other *from below*, add this
  // into the result, and subtract it from the remainder.  It is critical that
  // the approximate value is less than or equal to the real value so that the
  // remainder never becomes negative.
  rem = this;
  while (rem.gte(divisor)) {
    // Approximate the result of division. This may be a little greater or
    // smaller than the actual value.
    approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

    // We will tweak the approximate result by changing it in the 48-th digit or
    // the smallest non-fractional digit, whichever is larger.
    var log2 = Math.ceil(Math.log(approx) / Math.LN2),
      delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      approxRes = fromNumber(approx),
      approxRem = approxRes.mul(divisor);
    while (approxRem.isNegative() || approxRem.gt(rem)) {
      approx -= delta;
      approxRes = fromNumber(approx, this.unsigned);
      approxRem = approxRes.mul(divisor);
    }

    // We know the answer can't be zero... and actually, zero would cause
    // infinite recursion since we would make no progress.
    if (approxRes.isZero())
      approxRes = ONE;

    res = res.add(approxRes);
    rem = rem.sub(approxRem);
  }
  return res;
};

/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.modulo = function modulo(divisor) {
  if (!isLong(divisor))
    divisor = fromValue(divisor);

  // use wasm support if present
  if (wasm) {
    var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(
      this.low,
      this.high,
      divisor.low,
      divisor.high
    );
    return fromBits(low, wasm["get_high"](), this.unsigned);
  }

  return this.sub(this.div(divisor).mul(divisor));
};

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @this {!Long}
 * @returns {!Long}
 */
LongPrototype.not = function not() {
  return fromBits(~this.low, ~this.high, this.unsigned);
};

/**
 * Returns count leading zeros of this Long.
 * @this {!Long}
 * @returns {!number}
 */
LongPrototype.countLeadingZeros = function countLeadingZeros() {
  return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
};

/**
 * Returns count leading zeros. This is an alias of {@link Long#countLeadingZeros}.
 * @function
 * @param {!Long}
 * @returns {!number}
 */
LongPrototype.clz = LongPrototype.countLeadingZeros;

/**
 * Returns count trailing zeros of this Long.
 * @this {!Long}
 * @returns {!number}
 */
LongPrototype.countTrailingZeros = function countTrailingZeros() {
  return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
};

/**
 * Returns count trailing zeros. This is an alias of {@link Long#countTrailingZeros}.
 * @function
 * @param {!Long}
 * @returns {!number}
 */
LongPrototype.ctz = LongPrototype.countTrailingZeros;

/**
 * Returns the bitwise AND of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.and = function and(other) {
  if (!isLong(other))
    other = fromValue(other);
  return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.or = function or(other) {
  if (!isLong(other))
    other = fromValue(other);
  return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.xor = function xor(other) {
  if (!isLong(other))
    other = fromValue(other);
  return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftLeft = function shiftLeft(numBits) {
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  else if (numBits < 32)
    return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
  else
    return fromBits(0, this.low << (numBits - 32), this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRight = function shiftRight(numBits) {
  if (isLong(numBits))
    numBits = numBits.toInt();
  if ((numBits &= 63) === 0)
    return this;
  else if (numBits < 32)
    return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
  else
    return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;
  if (numBits < 32) return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >>> numBits, this.unsigned);
  if (numBits === 32) return fromBits(this.high, 0, this.unsigned);
  return fromBits(this.high >>> (numBits - 32), 0, this.unsigned);
};

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits rotated to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
LongPrototype.rotateLeft = function rotateLeft(numBits) {
  var b;
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;
  if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
  if (numBits < 32) {
    b = (32 - numBits);
    return fromBits(((this.low << numBits) | (this.high >>> b)), ((this.high << numBits) | (this.low >>> b)), this.unsigned);
  }
  numBits -= 32;
  b = (32 - numBits);
  return fromBits(((this.high << numBits) | (this.low >>> b)), ((this.low << numBits) | (this.high >>> b)), this.unsigned);
}
/**
 * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
LongPrototype.rotl = LongPrototype.rotateLeft;

/**
 * Returns this Long with bits rotated to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
LongPrototype.rotateRight = function rotateRight(numBits) {
  var b;
  if (isLong(numBits)) numBits = numBits.toInt();
  if ((numBits &= 63) === 0) return this;
  if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
  if (numBits < 32) {
    b = (32 - numBits);
    return fromBits(((this.high << b) | (this.low >>> numBits)), ((this.low << b) | (this.high >>> numBits)), this.unsigned);
  }
  numBits -= 32;
  b = (32 - numBits);
  return fromBits(((this.low << b) | (this.high >>> numBits)), ((this.high << b) | (this.low >>> numBits)), this.unsigned);
}
/**
 * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
LongPrototype.rotr = LongPrototype.rotateRight;

/**
 * Converts this Long to signed.
 * @this {!Long}
 * @returns {!Long} Signed long
 */
LongPrototype.toSigned = function toSigned() {
  if (!this.unsigned)
    return this;
  return fromBits(this.low, this.high, false);
};

/**
 * Converts this Long to unsigned.
 * @this {!Long}
 * @returns {!Long} Unsigned long
 */
LongPrototype.toUnsigned = function toUnsigned() {
  if (this.unsigned)
    return this;
  return fromBits(this.low, this.high, true);
};

/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @this {!Long}
 * @returns {!Array.<number>} Byte representation
 */
LongPrototype.toBytes = function toBytes(le) {
  return le ? this.toBytesLE() : this.toBytesBE();
};

/**
 * Converts this Long to its little endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Little endian byte representation
 */
LongPrototype.toBytesLE = function toBytesLE() {
  var hi = this.high,
    lo = this.low;
  return [
    lo & 0xff,
    lo >>> 8 & 0xff,
    lo >>> 16 & 0xff,
    lo >>> 24,
    hi & 0xff,
    hi >>> 8 & 0xff,
    hi >>> 16 & 0xff,
    hi >>> 24
  ];
};

/**
 * Converts this Long to its big endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Big endian byte representation
 */
LongPrototype.toBytesBE = function toBytesBE() {
  var hi = this.high,
    lo = this.low;
  return [
    hi >>> 24,
    hi >>> 16 & 0xff,
    hi >>> 8 & 0xff,
    hi & 0xff,
    lo >>> 24,
    lo >>> 16 & 0xff,
    lo >>> 8 & 0xff,
    lo & 0xff
  ];
};

/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
  return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};

/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
  return new Long(
    bytes[0] |
    bytes[1] << 8 |
    bytes[2] << 16 |
    bytes[3] << 24,
    bytes[4] |
    bytes[5] << 8 |
    bytes[6] << 16 |
    bytes[7] << 24,
    unsigned
  );
};

/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
  return new Long(
    bytes[4] << 24 |
    bytes[5] << 16 |
    bytes[6] << 8 |
    bytes[7],
    bytes[0] << 24 |
    bytes[1] << 16 |
    bytes[2] << 8 |
    bytes[3],
    unsigned
  );
};

/* harmony default export */ const node_modules_long = (Long);

// EXTERNAL MODULE: ../vot.js/node_modules/protobufjs/minimal.js
var minimal = __webpack_require__("../vot.js/node_modules/protobufjs/minimal.js");
;// CONCATENATED MODULE: ../vot.js/dist/protos/yandex.js


const protobufPackage = "";
var StreamInterval;
(function (StreamInterval) {
    StreamInterval[StreamInterval["NO_CONNECTION"] = 0] = "NO_CONNECTION";
    StreamInterval[StreamInterval["TRANSLATING"] = 10] = "TRANSLATING";
    StreamInterval[StreamInterval["STREAMING"] = 20] = "STREAMING";
    StreamInterval[StreamInterval["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamInterval || (StreamInterval = {}));
function streamIntervalFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_CONNECTION":
            return StreamInterval.NO_CONNECTION;
        case 10:
        case "TRANSLATING":
            return StreamInterval.TRANSLATING;
        case 20:
        case "STREAMING":
            return StreamInterval.STREAMING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StreamInterval.UNRECOGNIZED;
    }
}
function streamIntervalToJSON(object) {
    switch (object) {
        case StreamInterval.NO_CONNECTION:
            return "NO_CONNECTION";
        case StreamInterval.TRANSLATING:
            return "TRANSLATING";
        case StreamInterval.STREAMING:
            return "STREAMING";
        case StreamInterval.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseVideoTranslationHelpObject() {
    return { target: "", targetUrl: "" };
}
const VideoTranslationHelpObject = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.target !== "") {
            writer.uint32(10).string(message.target);
        }
        if (message.targetUrl !== "") {
            writer.uint32(18).string(message.targetUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVideoTranslationHelpObject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.target = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.targetUrl = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            target: isSet(object.target) ? globalThis.String(object.target) : "",
            targetUrl: isSet(object.targetUrl) ? globalThis.String(object.targetUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.target !== "") {
            obj.target = message.target;
        }
        if (message.targetUrl !== "") {
            obj.targetUrl = message.targetUrl;
        }
        return obj;
    },
    create(base) {
        return VideoTranslationHelpObject.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVideoTranslationHelpObject();
        message.target = object.target ?? "";
        message.targetUrl = object.targetUrl ?? "";
        return message;
    },
};
function createBaseVideoTranslationRequest() {
    return {
        url: "",
        deviceId: undefined,
        firstRequest: false,
        duration: 0,
        unknown0: 0,
        language: "",
        forceSourceLang: false,
        unknown1: 0,
        translationHelp: [],
        responseLanguage: "",
        unknown2: 0,
        unknown3: 0,
        bypassCache: false,
    };
}
const VideoTranslationRequest = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        if (message.deviceId !== undefined) {
            writer.uint32(34).string(message.deviceId);
        }
        if (message.firstRequest !== false) {
            writer.uint32(40).bool(message.firstRequest);
        }
        if (message.duration !== 0) {
            writer.uint32(49).double(message.duration);
        }
        if (message.unknown0 !== 0) {
            writer.uint32(56).int32(message.unknown0);
        }
        if (message.language !== "") {
            writer.uint32(66).string(message.language);
        }
        if (message.forceSourceLang !== false) {
            writer.uint32(72).bool(message.forceSourceLang);
        }
        if (message.unknown1 !== 0) {
            writer.uint32(80).int32(message.unknown1);
        }
        for (const v of message.translationHelp) {
            VideoTranslationHelpObject.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.responseLanguage !== "") {
            writer.uint32(114).string(message.responseLanguage);
        }
        if (message.unknown2 !== 0) {
            writer.uint32(120).int32(message.unknown2);
        }
        if (message.unknown3 !== 0) {
            writer.uint32(128).int32(message.unknown3);
        }
        if (message.bypassCache !== false) {
            writer.uint32(136).bool(message.bypassCache);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVideoTranslationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.deviceId = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.firstRequest = reader.bool();
                    continue;
                case 6:
                    if (tag !== 49) {
                        break;
                    }
                    message.duration = reader.double();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.unknown0 = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.language = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.forceSourceLang = reader.bool();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.unknown1 = reader.int32();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.translationHelp.push(VideoTranslationHelpObject.decode(reader, reader.uint32()));
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.responseLanguage = reader.string();
                    continue;
                case 15:
                    if (tag !== 120) {
                        break;
                    }
                    message.unknown2 = reader.int32();
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }
                    message.unknown3 = reader.int32();
                    continue;
                case 17:
                    if (tag !== 136) {
                        break;
                    }
                    message.bypassCache = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            deviceId: isSet(object.deviceId) ? globalThis.String(object.deviceId) : undefined,
            firstRequest: isSet(object.firstRequest) ? globalThis.Boolean(object.firstRequest) : false,
            duration: isSet(object.duration) ? globalThis.Number(object.duration) : 0,
            unknown0: isSet(object.unknown0) ? globalThis.Number(object.unknown0) : 0,
            language: isSet(object.language) ? globalThis.String(object.language) : "",
            forceSourceLang: isSet(object.forceSourceLang) ? globalThis.Boolean(object.forceSourceLang) : false,
            unknown1: isSet(object.unknown1) ? globalThis.Number(object.unknown1) : 0,
            translationHelp: globalThis.Array.isArray(object?.translationHelp)
                ? object.translationHelp.map((e) => VideoTranslationHelpObject.fromJSON(e))
                : [],
            responseLanguage: isSet(object.responseLanguage) ? globalThis.String(object.responseLanguage) : "",
            unknown2: isSet(object.unknown2) ? globalThis.Number(object.unknown2) : 0,
            unknown3: isSet(object.unknown3) ? globalThis.Number(object.unknown3) : 0,
            bypassCache: isSet(object.bypassCache) ? globalThis.Boolean(object.bypassCache) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.deviceId !== undefined) {
            obj.deviceId = message.deviceId;
        }
        if (message.firstRequest !== false) {
            obj.firstRequest = message.firstRequest;
        }
        if (message.duration !== 0) {
            obj.duration = message.duration;
        }
        if (message.unknown0 !== 0) {
            obj.unknown0 = Math.round(message.unknown0);
        }
        if (message.language !== "") {
            obj.language = message.language;
        }
        if (message.forceSourceLang !== false) {
            obj.forceSourceLang = message.forceSourceLang;
        }
        if (message.unknown1 !== 0) {
            obj.unknown1 = Math.round(message.unknown1);
        }
        if (message.translationHelp?.length) {
            obj.translationHelp = message.translationHelp.map((e) => VideoTranslationHelpObject.toJSON(e));
        }
        if (message.responseLanguage !== "") {
            obj.responseLanguage = message.responseLanguage;
        }
        if (message.unknown2 !== 0) {
            obj.unknown2 = Math.round(message.unknown2);
        }
        if (message.unknown3 !== 0) {
            obj.unknown3 = Math.round(message.unknown3);
        }
        if (message.bypassCache !== false) {
            obj.bypassCache = message.bypassCache;
        }
        return obj;
    },
    create(base) {
        return VideoTranslationRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVideoTranslationRequest();
        message.url = object.url ?? "";
        message.deviceId = object.deviceId ?? undefined;
        message.firstRequest = object.firstRequest ?? false;
        message.duration = object.duration ?? 0;
        message.unknown0 = object.unknown0 ?? 0;
        message.language = object.language ?? "";
        message.forceSourceLang = object.forceSourceLang ?? false;
        message.unknown1 = object.unknown1 ?? 0;
        message.translationHelp = object.translationHelp?.map((e) => VideoTranslationHelpObject.fromPartial(e)) || [];
        message.responseLanguage = object.responseLanguage ?? "";
        message.unknown2 = object.unknown2 ?? 0;
        message.unknown3 = object.unknown3 ?? 0;
        message.bypassCache = object.bypassCache ?? false;
        return message;
    },
};
function createBaseVideoTranslationResponse() {
    return {
        url: undefined,
        duration: undefined,
        status: 0,
        remainingTime: undefined,
        unknown0: undefined,
        translationId: "",
        language: undefined,
        message: undefined,
    };
}
const VideoTranslationResponse = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.url !== undefined) {
            writer.uint32(10).string(message.url);
        }
        if (message.duration !== undefined) {
            writer.uint32(17).double(message.duration);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.remainingTime !== undefined) {
            writer.uint32(40).int32(message.remainingTime);
        }
        if (message.unknown0 !== undefined) {
            writer.uint32(48).int32(message.unknown0);
        }
        if (message.translationId !== "") {
            writer.uint32(58).string(message.translationId);
        }
        if (message.language !== undefined) {
            writer.uint32(66).string(message.language);
        }
        if (message.message !== undefined) {
            writer.uint32(74).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVideoTranslationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.duration = reader.double();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.remainingTime = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.unknown0 = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.translationId = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.language = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            url: isSet(object.url) ? globalThis.String(object.url) : undefined,
            duration: isSet(object.duration) ? globalThis.Number(object.duration) : undefined,
            status: isSet(object.status) ? globalThis.Number(object.status) : 0,
            remainingTime: isSet(object.remainingTime) ? globalThis.Number(object.remainingTime) : undefined,
            unknown0: isSet(object.unknown0) ? globalThis.Number(object.unknown0) : undefined,
            translationId: isSet(object.translationId) ? globalThis.String(object.translationId) : "",
            language: isSet(object.language) ? globalThis.String(object.language) : undefined,
            message: isSet(object.message) ? globalThis.String(object.message) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.url !== undefined) {
            obj.url = message.url;
        }
        if (message.duration !== undefined) {
            obj.duration = message.duration;
        }
        if (message.status !== 0) {
            obj.status = Math.round(message.status);
        }
        if (message.remainingTime !== undefined) {
            obj.remainingTime = Math.round(message.remainingTime);
        }
        if (message.unknown0 !== undefined) {
            obj.unknown0 = Math.round(message.unknown0);
        }
        if (message.translationId !== "") {
            obj.translationId = message.translationId;
        }
        if (message.language !== undefined) {
            obj.language = message.language;
        }
        if (message.message !== undefined) {
            obj.message = message.message;
        }
        return obj;
    },
    create(base) {
        return VideoTranslationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVideoTranslationResponse();
        message.url = object.url ?? undefined;
        message.duration = object.duration ?? undefined;
        message.status = object.status ?? 0;
        message.remainingTime = object.remainingTime ?? undefined;
        message.unknown0 = object.unknown0 ?? undefined;
        message.translationId = object.translationId ?? "";
        message.language = object.language ?? undefined;
        message.message = object.message ?? undefined;
        return message;
    },
};
function createBaseSubtitlesObject() {
    return { language: "", url: "", unknown0: 0, translatedLanguage: "", translatedUrl: "", unknown1: 0, unknown2: 0 };
}
const SubtitlesObject = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.language !== "") {
            writer.uint32(10).string(message.language);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.unknown0 !== 0) {
            writer.uint32(24).int32(message.unknown0);
        }
        if (message.translatedLanguage !== "") {
            writer.uint32(34).string(message.translatedLanguage);
        }
        if (message.translatedUrl !== "") {
            writer.uint32(42).string(message.translatedUrl);
        }
        if (message.unknown1 !== 0) {
            writer.uint32(48).int32(message.unknown1);
        }
        if (message.unknown2 !== 0) {
            writer.uint32(56).int32(message.unknown2);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubtitlesObject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.language = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.unknown0 = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.translatedLanguage = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.translatedUrl = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.unknown1 = reader.int32();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.unknown2 = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            language: isSet(object.language) ? globalThis.String(object.language) : "",
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            unknown0: isSet(object.unknown0) ? globalThis.Number(object.unknown0) : 0,
            translatedLanguage: isSet(object.translatedLanguage) ? globalThis.String(object.translatedLanguage) : "",
            translatedUrl: isSet(object.translatedUrl) ? globalThis.String(object.translatedUrl) : "",
            unknown1: isSet(object.unknown1) ? globalThis.Number(object.unknown1) : 0,
            unknown2: isSet(object.unknown2) ? globalThis.Number(object.unknown2) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.language !== "") {
            obj.language = message.language;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.unknown0 !== 0) {
            obj.unknown0 = Math.round(message.unknown0);
        }
        if (message.translatedLanguage !== "") {
            obj.translatedLanguage = message.translatedLanguage;
        }
        if (message.translatedUrl !== "") {
            obj.translatedUrl = message.translatedUrl;
        }
        if (message.unknown1 !== 0) {
            obj.unknown1 = Math.round(message.unknown1);
        }
        if (message.unknown2 !== 0) {
            obj.unknown2 = Math.round(message.unknown2);
        }
        return obj;
    },
    create(base) {
        return SubtitlesObject.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSubtitlesObject();
        message.language = object.language ?? "";
        message.url = object.url ?? "";
        message.unknown0 = object.unknown0 ?? 0;
        message.translatedLanguage = object.translatedLanguage ?? "";
        message.translatedUrl = object.translatedUrl ?? "";
        message.unknown1 = object.unknown1 ?? 0;
        message.unknown2 = object.unknown2 ?? 0;
        return message;
    },
};
function createBaseSubtitlesRequest() {
    return { url: "", language: "" };
}
const SubtitlesRequest = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.language !== "") {
            writer.uint32(18).string(message.language);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubtitlesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.language = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            language: isSet(object.language) ? globalThis.String(object.language) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.language !== "") {
            obj.language = message.language;
        }
        return obj;
    },
    create(base) {
        return SubtitlesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSubtitlesRequest();
        message.url = object.url ?? "";
        message.language = object.language ?? "";
        return message;
    },
};
function createBaseSubtitlesResponse() {
    return { waiting: false, subtitles: [] };
}
const SubtitlesResponse = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.waiting !== false) {
            writer.uint32(8).bool(message.waiting);
        }
        for (const v of message.subtitles) {
            SubtitlesObject.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubtitlesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.waiting = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.subtitles.push(SubtitlesObject.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            waiting: isSet(object.waiting) ? globalThis.Boolean(object.waiting) : false,
            subtitles: globalThis.Array.isArray(object?.subtitles)
                ? object.subtitles.map((e) => SubtitlesObject.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.waiting !== false) {
            obj.waiting = message.waiting;
        }
        if (message.subtitles?.length) {
            obj.subtitles = message.subtitles.map((e) => SubtitlesObject.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return SubtitlesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSubtitlesResponse();
        message.waiting = object.waiting ?? false;
        message.subtitles = object.subtitles?.map((e) => SubtitlesObject.fromPartial(e)) || [];
        return message;
    },
};
function createBaseStreamTranslationObject() {
    return { url: "", timestamp: 0 };
}
const StreamTranslationObject = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.timestamp !== 0) {
            writer.uint32(16).int64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTranslationObject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.timestamp = longToNumber(reader.int64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.timestamp !== 0) {
            obj.timestamp = Math.round(message.timestamp);
        }
        return obj;
    },
    create(base) {
        return StreamTranslationObject.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStreamTranslationObject();
        message.url = object.url ?? "";
        message.timestamp = object.timestamp ?? 0;
        return message;
    },
};
function createBaseStreamTranslationRequest() {
    return { url: "", language: "", responseLanguage: "" };
}
const StreamTranslationRequest = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.language !== "") {
            writer.uint32(18).string(message.language);
        }
        if (message.responseLanguage !== "") {
            writer.uint32(26).string(message.responseLanguage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTranslationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.language = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.responseLanguage = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            language: isSet(object.language) ? globalThis.String(object.language) : "",
            responseLanguage: isSet(object.responseLanguage) ? globalThis.String(object.responseLanguage) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.language !== "") {
            obj.language = message.language;
        }
        if (message.responseLanguage !== "") {
            obj.responseLanguage = message.responseLanguage;
        }
        return obj;
    },
    create(base) {
        return StreamTranslationRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStreamTranslationRequest();
        message.url = object.url ?? "";
        message.language = object.language ?? "";
        message.responseLanguage = object.responseLanguage ?? "";
        return message;
    },
};
function createBaseStreamTranslationResponse() {
    return { interval: 0, translatedInfo: undefined, pingId: undefined };
}
const StreamTranslationResponse = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.interval !== 0) {
            writer.uint32(8).int32(message.interval);
        }
        if (message.translatedInfo !== undefined) {
            StreamTranslationObject.encode(message.translatedInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.pingId !== undefined) {
            writer.uint32(24).int32(message.pingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamTranslationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.interval = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.translatedInfo = StreamTranslationObject.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.pingId = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            interval: isSet(object.interval) ? streamIntervalFromJSON(object.interval) : 0,
            translatedInfo: isSet(object.translatedInfo)
                ? StreamTranslationObject.fromJSON(object.translatedInfo)
                : undefined,
            pingId: isSet(object.pingId) ? globalThis.Number(object.pingId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.interval !== 0) {
            obj.interval = streamIntervalToJSON(message.interval);
        }
        if (message.translatedInfo !== undefined) {
            obj.translatedInfo = StreamTranslationObject.toJSON(message.translatedInfo);
        }
        if (message.pingId !== undefined) {
            obj.pingId = Math.round(message.pingId);
        }
        return obj;
    },
    create(base) {
        return StreamTranslationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStreamTranslationResponse();
        message.interval = object.interval ?? 0;
        message.translatedInfo = (object.translatedInfo !== undefined && object.translatedInfo !== null)
            ? StreamTranslationObject.fromPartial(object.translatedInfo)
            : undefined;
        message.pingId = object.pingId ?? undefined;
        return message;
    },
};
function createBaseStreamPingRequest() {
    return { pingId: 0 };
}
const StreamPingRequest = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.pingId !== 0) {
            writer.uint32(8).int32(message.pingId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamPingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.pingId = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { pingId: isSet(object.pingId) ? globalThis.Number(object.pingId) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.pingId !== 0) {
            obj.pingId = Math.round(message.pingId);
        }
        return obj;
    },
    create(base) {
        return StreamPingRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStreamPingRequest();
        message.pingId = object.pingId ?? 0;
        return message;
    },
};
function createBaseYandexSessionRequest() {
    return { uuid: "", module: "" };
}
const YandexSessionRequest = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.uuid !== "") {
            writer.uint32(10).string(message.uuid);
        }
        if (message.module !== "") {
            writer.uint32(18).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseYandexSessionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.uuid = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.module = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            uuid: isSet(object.uuid) ? globalThis.String(object.uuid) : "",
            module: isSet(object.module) ? globalThis.String(object.module) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.uuid !== "") {
            obj.uuid = message.uuid;
        }
        if (message.module !== "") {
            obj.module = message.module;
        }
        return obj;
    },
    create(base) {
        return YandexSessionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseYandexSessionRequest();
        message.uuid = object.uuid ?? "";
        message.module = object.module ?? "";
        return message;
    },
};
function createBaseYandexSessionResponse() {
    return { secretKey: "", expires: 0 };
}
const YandexSessionResponse = {
    encode(message, writer = minimal.Writer.create()) {
        if (message.secretKey !== "") {
            writer.uint32(10).string(message.secretKey);
        }
        if (message.expires !== 0) {
            writer.uint32(16).int32(message.expires);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal.Reader ? input : minimal.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseYandexSessionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.secretKey = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.expires = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            secretKey: isSet(object.secretKey) ? globalThis.String(object.secretKey) : "",
            expires: isSet(object.expires) ? globalThis.Number(object.expires) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.secretKey !== "") {
            obj.secretKey = message.secretKey;
        }
        if (message.expires !== 0) {
            obj.expires = Math.round(message.expires);
        }
        return obj;
    },
    create(base) {
        return YandexSessionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseYandexSessionResponse();
        message.secretKey = object.secretKey ?? "";
        message.expires = object.expires ?? 0;
        return message;
    },
};
function longToNumber(long) {
    if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    if (long.lt(globalThis.Number.MIN_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal.util.Long !== node_modules_long) {
    minimal.util.Long = node_modules_long;
    minimal.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}

;// CONCATENATED MODULE: ../vot.js/dist/protobuf.js

const yandexProtobuf = {
    encodeTranslationRequest(url, duration, requestLang, responseLang, translationHelp) {
        return VideoTranslationRequest.encode({
            url,
            firstRequest: true,
            duration,
            unknown0: 1,
            language: requestLang,
            forceSourceLang: false,
            unknown1: 0,
            translationHelp: translationHelp ? translationHelp : [],
            responseLanguage: responseLang,
            unknown2: 0,
            unknown3: 1,
            bypassCache: false,
        }).finish();
    },
    decodeTranslationResponse(response) {
        return VideoTranslationResponse.decode(new Uint8Array(response));
    },
    encodeSubtitlesRequest(url, requestLang) {
        return SubtitlesRequest.encode({
            url,
            language: requestLang,
        }).finish();
    },
    decodeSubtitlesResponse(response) {
        return SubtitlesResponse.decode(new Uint8Array(response));
    },
    encodeStreamPingRequest(pingId) {
        return StreamPingRequest.encode({
            pingId,
        }).finish();
    },
    encodeStreamRequest(url, requestLang, responseLang) {
        return StreamTranslationRequest.encode({
            url,
            language: requestLang,
            responseLanguage: responseLang,
        }).finish();
    },
    decodeStreamResponse(response) {
        return StreamTranslationResponse.decode(new Uint8Array(response));
    },
    encodeYandexSessionRequest(uuid, module) {
        return YandexSessionRequest.encode({
            uuid,
            module,
        }).finish();
    },
    decodeYandexSessionResponse(response) {
        return YandexSessionResponse.decode(new Uint8Array(response));
    },
};

;// CONCATENATED MODULE: ../vot.js/dist/config/config.js
/* harmony default export */ const config = ({
    host: "api.browser.yandex.ru",
    hostVOT: "https://vot-api.toil.cc/v1",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 YaBrowser/24.6.0.0 Safari/537.36",
    componentVersion: "24.6.1.766",
    hmac: "bt8xH3VOlb4mqf0nqAibnDOoiPlXsisf",
    defaultDuration: 343,
});

;// CONCATENATED MODULE: ../vot.js/package.json
const package_namespaceObject = {"rE":"1.0.0"};
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = crypto;
;// CONCATENATED MODULE: ../vot.js/dist/secure.js


const utf8Encoder = new TextEncoder();
async function signHMAC(hashName, hmac, data) {
    const key = await external_crypto_namespaceObject.subtle.importKey("raw", utf8Encoder.encode(hmac), { name: "HMAC", hash: { name: hashName } }, false, ["sign", "verify"]);
    return await external_crypto_namespaceObject.subtle.sign("HMAC", key, data);
}
async function getSignature(body) {
    const signature = await signHMAC("SHA-256", config.hmac, body);
    return new Uint8Array(signature).reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
}
function getUUID() {
    const hexDigits = "0123456789ABCDEF";
    let uuid = "";
    for (let i = 0; i < 32; i++) {
        const randomDigit = Math.floor(Math.random() * 16);
        uuid += hexDigits[randomDigit];
    }
    return uuid;
}
async function getHmacSha1(hmacKey, salt) {
    try {
        const hmacSalt = utf8Encoder.encode(salt);
        const signature = await signHMAC("SHA-1", hmacKey, hmacSalt);
        return btoa(String.fromCharCode(...new Uint8Array(signature)));
    }
    catch (err) {
        console.error(err);
        return false;
    }
}

;// CONCATENATED MODULE: ../vot.js/dist/types/yandex.js
var VideoService;
(function (VideoService) {
    VideoService["custom"] = "custom";
    VideoService["directlink"] = "custom";
    VideoService["youtube"] = "youtube";
    VideoService["piped"] = "piped";
    VideoService["invidious"] = "invidious";
    VideoService["vk"] = "vk";
    VideoService["nine_gag"] = "nine_gag";
    VideoService["gag"] = "nine_gag";
    VideoService["twitch"] = "twitch";
    VideoService["proxitok"] = "proxitok";
    VideoService["tiktok"] = "tiktok";
    VideoService["vimeo"] = "vimeo";
    VideoService["xvideos"] = "xvideos";
    VideoService["pornhub"] = "pornhub";
    VideoService["twitter"] = "twitter";
    VideoService["rumble"] = "rumble";
    VideoService["facebook"] = "facebook";
    VideoService["rutube"] = "rutube";
    VideoService["coub"] = "coub";
    VideoService["bilibili"] = "bilibili";
    VideoService["mail_ru"] = "mailru";
    VideoService["mailru"] = "mailru";
    VideoService["bitchute"] = "bitchute";
    VideoService["eporner"] = "eporner";
    VideoService["peertube"] = "peertube";
    VideoService["dailymotion"] = "dailymotion";
    VideoService["trovo"] = "trovo";
    VideoService["yandexdisk"] = "yandexdisk";
    VideoService["ok_ru"] = "okru";
    VideoService["okru"] = "okru";
    VideoService["googledrive"] = "googledrive";
    VideoService["bannedvideo"] = "bannedvideo";
    VideoService["weverse"] = "weverse";
    VideoService["newgrounds"] = "newgrounds";
    VideoService["egghead"] = "egghead";
    VideoService["youku"] = "youku";
    VideoService["archive"] = "archive";
    VideoService["kodik"] = "kodik";
    VideoService["patreon"] = "patreon";
    VideoService["reddit"] = "reddit";
})(VideoService || (VideoService = {}));
var VideoTranslationStatus;
(function (VideoTranslationStatus) {
    VideoTranslationStatus[VideoTranslationStatus["FAILED"] = 0] = "FAILED";
    VideoTranslationStatus[VideoTranslationStatus["FINISHED"] = 1] = "FINISHED";
    VideoTranslationStatus[VideoTranslationStatus["WAITING"] = 2] = "WAITING";
    VideoTranslationStatus[VideoTranslationStatus["LONG_WAITING"] = 3] = "LONG_WAITING";
    VideoTranslationStatus[VideoTranslationStatus["PART_CONTENT"] = 5] = "PART_CONTENT";
    VideoTranslationStatus[VideoTranslationStatus["LONG_WAITING_2"] = 6] = "LONG_WAITING_2";
})(VideoTranslationStatus || (VideoTranslationStatus = {}));

;// CONCATENATED MODULE: ../vot.js/dist/utils/utils.js

async function fetchWithTimeout(url, options = {
    headers: {
        "User-Agent": config.userAgent,
    },
}) {
    const { timeout = 3000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(url, {
        ...options,
        signal: controller.signal,
    });
    clearTimeout(id);
    return response;
}
function getTimestamp() {
    return Math.floor(Date.now() / 1000);
}

;// CONCATENATED MODULE: ../vot.js/dist/config/alternativeUrls.js
const sitesInvidious = [
    "invidious.snopyta.org",
    "yewtu.be",
    "invidious.kavin.rocks",
    "vid.puffyan.us",
    "invidious.namazso.eu",
    "inv.riverside.rocks",
    "yt.artemislena.eu",
    "invidious.flokinet.to",
    "invidious.esmailelbob.xyz",
    "y.com.sb",
    "invidious.nerdvpn.de",
    "inv.vern.cc",
    "invidious.slipfox.xyz",
    "invidio.xamh.de",
    "invidious.dhusch.de",
];
const sitesPiped = [
    "piped.video",
    "piped.tokhmi.xyz",
    "piped.moomoo.me",
    "piped.syncpundit.io",
    "piped.mha.fi",
    "watch.whatever.social",
    "piped.garudalinux.org",
    "efy.piped.pages.dev",
    "watch.leptons.xyz",
    "piped.lunar.icu",
    "yt.dc09.ru",
    "piped.mint.lgbt",
    "il.ax",
    "piped.privacy.com.de",
    "piped.esmailelbob.xyz",
    "piped.projectsegfau.lt",
    "piped.in.projectsegfau.lt",
    "piped.us.projectsegfau.lt",
    "piped.privacydev.net",
    "piped.palveluntarjoaja.eu",
    "piped.smnz.de",
    "piped.adminforge.de",
    "piped.qdi.fi",
    "piped.hostux.net",
    "piped.chauvet.pro",
    "piped.jotoma.de",
    "piped.pfcd.me",
    "piped.frontendfriendly.xyz",
];
const sitesProxiTok = [
    "proxitok.pabloferreiro.es",
    "proxitok.pussthecat.org",
    "tok.habedieeh.re",
    "proxitok.esmailelbob.xyz",
    "proxitok.privacydev.net",
    "tok.artemislena.eu",
    "tok.adminforge.de",
    "tik.hostux.net",
    "tt.vern.cc",
    "cringe.whatever.social",
    "proxitok.lunar.icu",
    "proxitok.privacy.com.de",
];
const sitesPeertube = [
    "peertube.1312.media",
    "tube.shanti.cafe",
    "bee-tube.fr",
    "video.sadmin.io",
    "dalek.zone",
    "review.peertube.biz",
    "peervideo.club",
    "tube.la-dina.net",
    "peertube.tmp.rcp.tf",
    "peertube.su",
];


;// CONCATENATED MODULE: ../vot.js/dist/config/sites.js


/* harmony default export */ const sites = ([
    {
        host: VideoService.youtube,
        url: "https://youtu.be/",
        match: /^((www.|m.)?youtube(-nocookie|kids)?.com)|(youtu.be)$/,
    },
    {
        host: VideoService.invidious,
        url: "https://youtu.be/",
        match: sitesInvidious,
    },
    {
        host: VideoService.piped,
        url: "https://youtu.be/",
        match: sitesPiped,
    },
    {
        host: VideoService.vk,
        url: "https://vk.com/video?z=",
        match: /^(www.|m.)?vk.(com|ru)$/,
    },
    {
        host: VideoService.nine_gag,
        url: "https://9gag.com/gag/",
        match: /^9gag.com$/,
    },
    {
        host: VideoService.twitch,
        url: "https://twitch.tv/",
        match: [
            /^m.twitch.tv$/,
            /^(www.)?twitch.tv$/,
            /^clips.twitch.tv$/,
            /^player.twitch.tv$/,
        ],
    },
    {
        host: VideoService.proxitok,
        url: "https://www.tiktok.com/",
        match: sitesProxiTok,
    },
    {
        host: VideoService.tiktok,
        url: "https://www.tiktok.com/",
        match: /^(www.)?tiktok.com$/,
    },
    {
        host: VideoService.vimeo,
        url: "https://vimeo.com/",
        match: /^vimeo.com$/,
    },
    {
        host: VideoService.vimeo,
        url: "https://player.vimeo.com/",
        match: /^player.vimeo.com$/,
    },
    {
        host: VideoService.xvideos,
        url: "https://www.xvideos.com/",
        match: /^(www.)?(xvideos|xv-ru).com$/,
    },
    {
        host: VideoService.pornhub,
        url: "https://rt.pornhub.com/view_video.php?viewkey=",
        match: /^[a-z]+.pornhub.com$/,
    },
    {
        host: VideoService.twitter,
        url: "https://twitter.com/i/status/",
        match: /^twitter.com$/,
    },
    {
        host: VideoService.rumble,
        url: "https://rumble.com/",
        match: /^rumble.com$/,
    },
    {
        host: VideoService.facebook,
        url: "https://facebook.com/",
        match: (url) => url.host.includes("facebook.com") &&
            (url.pathname.includes("/videos/") || url.pathname.includes("/reel/")),
    },
    {
        host: VideoService.rutube,
        url: "https://rutube.ru/video/",
        match: /^rutube.ru$/,
    },
    {
        host: VideoService.bilibili,
        url: "https://www.bilibili.com/video/",
        match: /^(www|m|player).bilibili.com$/,
    },
    {
        host: VideoService.mailru,
        url: "https://my.mail.ru/",
        match: /^my.mail.ru$/,
    },
    {
        host: VideoService.bitchute,
        url: "https://www.bitchute.com/video/",
        match: /^(www.)?bitchute.com$/,
    },
    {
        host: VideoService.eporner,
        url: "https://www.eporner.com/",
        match: /^(www.)?eporner.com$/,
    },
    {
        host: VideoService.peertube,
        url: "stub",
        match: sitesPeertube,
    },
    {
        host: VideoService.dailymotion,
        url: "https://dai.ly/",
        match: /^(www.)?dailymotion.com|dai.ly$/,
    },
    {
        host: VideoService.trovo,
        url: "https://trovo.live/s/",
        match: /^trovo.live$/,
    },
    {
        host: VideoService.yandexdisk,
        url: "https://yadi.sk/i/",
        match: /^disk.yandex.ru|yadi.sk$/,
    },
    {
        host: VideoService.okru,
        url: "https://ok.ru/video/",
        match: /^ok.ru$/,
    },
    {
        host: VideoService.googledrive,
        url: "https://drive.google.com/file/d/",
        match: /^drive.google.com$/,
    },
    {
        host: VideoService.bannedvideo,
        url: "https://madmaxworld.tv/watch?id=",
        match: /^(www.)?banned.video|madmaxworld.tv$/,
        rawResult: true,
    },
    {
        host: VideoService.weverse,
        url: "https://weverse.io/",
        match: /^weverse.io$/,
        needExtraData: true,
    },
    {
        host: VideoService.newgrounds,
        url: "https://www.newgrounds.com/",
        match: /^(www.)?newgrounds.com$/,
    },
    {
        host: VideoService.egghead,
        url: "https://egghead.io/",
        match: /^egghead.io$/,
    },
    {
        host: VideoService.youku,
        url: "https://v.youku.com/",
        match: /^v.youku.com$/,
    },
    {
        host: VideoService.archive,
        url: "https://archive.org/details/",
        match: /^archive.org$/,
    },
    {
        host: VideoService.kodik,
        url: "stub",
        match: /^kodik.(info|biz|cc)$/,
        needExtraData: true,
    },
    {
        host: VideoService.patreon,
        url: "stub",
        match: /^(www.)?patreon.com$/,
        needExtraData: true,
    },
    {
        host: VideoService.reddit,
        url: "stub",
        match: /^(www.)?reddit.com$/,
        needExtraData: true,
    },
    {
        host: VideoService.custom,
        url: "stub",
        match: (url) => /([^.]+).mp4/.test(url.pathname),
        rawResult: true,
    },
]);

// EXTERNAL MODULE: ../vot.js/node_modules/dom-parser/dist/index.js
var dist = __webpack_require__("../vot.js/node_modules/dom-parser/dist/index.js");
;// CONCATENATED MODULE: ../vot.js/dist/utils/helper.js





class VideoHelperError extends Error {
    constructor(message) {
        super(message);
        this.name = "VideoHelper";
        this.message = message;
    }
}
class MailRuHelper {
    async getVideoData(videoId) {
        try {
            const res = await fetchWithTimeout(`https://my.mail.ru/+/video/meta/${videoId}?xemail=&ajax_call=1&func_name=&mna=&mnb=&ext=1&_=${new Date().getTime()}`);
            return (await res.json());
        }
        catch (err) {
            console.error("Failed to get mail.ru video info", err.message);
            return undefined;
        }
    }
}
class WeverseHelper {
    API_ORIGIN = "https://global.apis.naver.com/weverse/wevweb";
    API_APP_ID = "be4d79eb8fc7bd008ee82c8ec4ff6fd4";
    API_HMAC_KEY = "1b9cb6378d959b45714bec49971ade22e6e24e42";
    HEADERS = {
        Accept: "application/json, text/plain, */*",
        Origin: "https://weverse.io",
        Referer: "https://weverse.io/",
    };
    getURLData() {
        return {
            appId: this.API_APP_ID,
            language: "en",
            os: "WEB",
            platform: "WEB",
            wpf: "pc",
        };
    }
    async createHash(pathname) {
        const timestamp = Date.now();
        const salt = pathname.substring(0, Math.min(255, pathname.length)) + timestamp;
        const sign = await getHmacSha1(this.API_HMAC_KEY, salt);
        if (!sign) {
            throw new VideoHelperError("Failed to get weverse HMAC signature");
        }
        return {
            wmsgpad: timestamp.toString(),
            wmd: sign,
        };
    }
    async getHashURLParams(pathname) {
        const hash = await this.createHash(pathname);
        return new URLSearchParams(hash).toString();
    }
    async getPostPreview(postId) {
        const pathname = `/post/v1.0/post-${postId}/preview?` +
            new URLSearchParams({
                fieldSet: "postForPreview",
                ...this.getURLData(),
            }).toString();
        try {
            const urlParams = await this.getHashURLParams(pathname);
            const res = await fetchWithTimeout(this.API_ORIGIN + pathname + "&" + urlParams, {
                headers: this.HEADERS,
            });
            return (await res.json());
        }
        catch (err) {
            console.error(`Failed to get weverse post preview by postId: ${postId}`, err.message);
            return false;
        }
    }
    async getVideoInKey(videoId) {
        const pathname = `/video/v1.1/vod/${videoId}/inKey?` +
            new URLSearchParams({
                gcc: "RU",
                ...this.getURLData(),
            }).toString();
        try {
            const urlParams = await this.getHashURLParams(pathname);
            const res = await fetchWithTimeout(this.API_ORIGIN + pathname + "&" + urlParams, {
                method: "POST",
                headers: this.HEADERS,
            });
            return (await res.json());
        }
        catch (err) {
            console.error(`Failed to get weverse InKey by videoId: ${videoId}`, err.message);
            return false;
        }
    }
    async getVideoInfo(infraVideoId, inkey, serviceId) {
        const timestamp = Date.now();
        try {
            const urlParams = new URLSearchParams({
                key: inkey,
                sid: serviceId,
                nonce: timestamp.toString(),
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
            }).toString();
            const res = await fetchWithTimeout(`https://global.apis.naver.com/rmcnmv/rmcnmv/vod/play/v2.0/${infraVideoId}?` +
                urlParams, {
                headers: this.HEADERS,
            });
            return (await res.json());
        }
        catch (err) {
            console.error(`Failed to get weverse video info (infraVideoId: ${infraVideoId}, inkey: ${inkey}, serviceId: ${serviceId}`, err.message);
            return false;
        }
    }
    extractVideoInfo(videoList) {
        return videoList.find((video) => video.useP2P === false && video.source.includes(".mp4"));
    }
    async getVideoData(postId) {
        const videoPreview = await this.getPostPreview(postId);
        if (!videoPreview) {
            return undefined;
        }
        const { videoId, serviceId, infraVideoId } = videoPreview.extension.video;
        if (!(videoId && serviceId && infraVideoId)) {
            return undefined;
        }
        const inkeyData = await this.getVideoInKey(videoId);
        if (!inkeyData) {
            return undefined;
        }
        const videoInfo = await this.getVideoInfo(infraVideoId, inkeyData.inKey, serviceId);
        if (!videoInfo) {
            return undefined;
        }
        const videoItem = this.extractVideoInfo(videoInfo.videos.list);
        if (!videoItem) {
            return undefined;
        }
        return {
            url: videoItem.source,
            duration: videoItem.duration,
        };
    }
}
class KodikHelper {
    API_ORIGIN = "https://kodik.biz";
    async getSecureData(videoPath) {
        try {
            const url = this.API_ORIGIN + videoPath;
            const res = await fetchWithTimeout(url, {
                headers: {
                    "User-Agent": config.userAgent,
                    Origin: this.API_ORIGIN,
                    Referer: this.API_ORIGIN,
                },
            });
            const content = await res.text();
            const [videoType, videoId, hash] = videoPath.split("/").filter((a) => a);
            const doc = (0,dist.parseFromString)(content);
            const secureScript = Array.from(doc.getElementsByTagName("script")).filter((s) => s.innerHTML.includes(`videoId = "${videoId}"`));
            if (!secureScript.length) {
                throw new VideoHelperError("Failed to find secure script");
            }
            const secureContent = /'{[^']+}'/.exec(secureScript[0].textContent.trim())?.[0];
            if (!secureContent) {
                throw new VideoHelperError("Secure json wasn't found in secure script");
            }
            const secureJSON = JSON.parse(secureContent.replaceAll("'", ""));
            return {
                videoType: videoType,
                videoId,
                hash,
                ...secureJSON,
            };
        }
        catch (err) {
            console.error(`Failed to get kodik secure data by videoPath: ${videoPath}.`, err.message);
            return false;
        }
    }
    async getFtor(secureData) {
        const { videoType, videoId: id, hash, d, d_sign, pd, pd_sign, ref, ref_sign, } = secureData;
        try {
            const res = await fetchWithTimeout(this.API_ORIGIN + "/ftor", {
                method: "POST",
                headers: {
                    "User-Agent": config.userAgent,
                    Origin: this.API_ORIGIN,
                    Referer: `${this.API_ORIGIN}/${videoType}/${id}/${hash}/360p`,
                },
                body: new URLSearchParams({
                    d,
                    d_sign,
                    pd,
                    pd_sign,
                    ref: decodeURIComponent(ref),
                    ref_sign,
                    bad_user: "false",
                    cdn_is_working: "true",
                    info: "{}",
                    type: videoType,
                    hash,
                    id,
                }),
            });
            return (await res.json());
        }
        catch (err) {
            console.error(`Failed to get kodik video data (type: ${videoType}, id: ${id}, hash: ${hash})`, err.message);
            return false;
        }
    }
    decryptUrl(encryptedUrl) {
        const decryptedUrl = atob(encryptedUrl.replace(/[a-zA-Z]/g, function (e) {
            const charCode = e.charCodeAt(0) + 13;
            return String.fromCharCode((e <= "Z" ? 90 : 122) >= charCode ? charCode : charCode - 26);
        }));
        return "https:" + decryptedUrl;
    }
    async getVideoData(videoPath) {
        const secureData = await this.getSecureData(videoPath);
        if (!secureData) {
            return undefined;
        }
        const videoData = await this.getFtor(secureData);
        if (!videoData) {
            return undefined;
        }
        const videoDataLinks = Object.entries(videoData.links[videoData.default.toString()]);
        const videoLink = videoDataLinks.find(([_, data]) => data.type === "application/x-mpegURL")?.[1];
        if (!videoLink) {
            return undefined;
        }
        return {
            url: this.decryptUrl(videoLink.src),
        };
    }
}
class PatreonHelper {
    async getPosts(postId) {
        try {
            const res = await fetchWithTimeout(`https://www.patreon.com/api/posts/${postId}?json-api-use-default-includes=false`);
            return (await res.json());
        }
        catch (err) {
            console.error(`Failed to get patreon posts by postId: ${postId}.`, err.message);
            return false;
        }
    }
    async getVideoData(postId) {
        const postData = await this.getPosts(postId);
        if (!postData) {
            return undefined;
        }
        const postFileUrl = postData.data.attributes.post_file.url;
        if (!postFileUrl) {
            return undefined;
        }
        return {
            url: postFileUrl,
        };
    }
}
class RedditHelper {
    async getVideoData(videoId) {
        const res = await fetchWithTimeout(`https://www.reddit.com/r/${videoId}`);
        const content = await res.text();
        const contentUrl = /https:\/\/v\.redd\.it\/([^/]+)\/HLSPlaylist\.m3u8\?([^"]+)/
            .exec(content)?.[0]
            ?.replaceAll("&amp;", "&");
        if (!contentUrl) {
            return undefined;
        }
        return {
            url: decodeURIComponent(contentUrl),
        };
    }
}
class VideoHelper {
    static [VideoService.mailru] = new MailRuHelper();
    static [VideoService.weverse] = new WeverseHelper();
    static [VideoService.kodik] = new KodikHelper();
    static [VideoService.patreon] = new PatreonHelper();
    static [VideoService.reddit] = new RedditHelper();
}

;// CONCATENATED MODULE: ../vot.js/dist/utils/videoData.js




class VideoDataError extends Error {
    constructor(message) {
        super(message);
        this.name = "VideoDataError";
        this.message = message;
    }
}
function getService(videoUrl) {
    if (videoUrl.startsWith("file://"))
        return false;
    let enteredURL;
    try {
        enteredURL = new URL(videoUrl);
    }
    catch (e) {
        console.error(`Invalid URL: ${videoUrl}. Have you forgotten https?`);
        return false;
    }
    const hostname = enteredURL.hostname;
    const isMathes = (match) => {
        if (match instanceof RegExp) {
            return match.test(hostname);
        }
        else if (typeof match === "string") {
            return hostname.includes(match);
        }
        else if (typeof match === "function") {
            return match(enteredURL);
        }
        return false;
    };
    return sites.find((e) => {
        return ((Array.isArray(e.match) ? e.match.some(isMathes) : isMathes(e.match)) &&
            e.host &&
            e.url);
    });
}
async function getVideoID(service, videoURL) {
    const url = new URL(videoURL);
    switch (service.host) {
        case VideoService.custom:
            return url.href;
        case VideoService.piped:
        case VideoService.invidious:
        case VideoService.youtube:
            if (url.hostname === "youtu.be") {
                url.search = `?v=${url.pathname.replace("/", "")}`;
                url.pathname = "/watch";
            }
            return (/(?:watch|embed|shorts|live)\/([^/]+)/.exec(url.pathname)?.[1] ??
                url.searchParams.get("v"));
        case VideoService.vk: {
            const pathID = /^\/(video|clip)-?\d{8,9}_\d{9}$/.exec(url.pathname);
            const paramZ = url.searchParams.get("z");
            const paramOID = url.searchParams.get("oid");
            const paramID = url.searchParams.get("id");
            if (pathID) {
                return pathID[0].slice(1);
            }
            else if (paramZ) {
                return paramZ.split("/")[0];
            }
            else if (paramOID && paramID) {
                return `video-${Math.abs(parseInt(paramOID))}_${paramID}`;
            }
            return null;
        }
        case VideoService.nine_gag:
        case VideoService.gag:
            return /gag\/([^/]+)/.exec(url.pathname)?.[1];
        case VideoService.twitch: {
            const clipPath = /([^/]+)\/(?:clip)\/([^/]+)/.exec(url.pathname);
            const isClipsDomain = /^clips\.twitch\.tv$/.test(url.hostname);
            if (/^m\.twitch\.tv$/.test(url.hostname)) {
                return /videos\/([^/]+)/.exec(url.href)?.[0] ?? url.pathname.slice(1);
            }
            else if (/^player\.twitch\.tv$/.test(url.hostname)) {
                return `videos/${url.searchParams.get("video")}`;
            }
            else if (isClipsDomain) {
                const pathname = url.pathname.slice(1);
                const isEmbed = pathname === "embed";
                const res = await fetchWithTimeout(`https://clips.twitch.tv/${isEmbed ? url.searchParams.get("clip") : url.pathname.slice(1)}`, {
                    headers: {
                        "User-Agent": "Googlebot/2.1 (+http://www.googlebot.com/bot.html)",
                    },
                });
                const content = await res.text();
                const channelLink = /"url":"https:\/\/www\.twitch\.tv\/([^"]+)"/.exec(content);
                if (!channelLink) {
                    return null;
                }
                return `${channelLink[1]}/clip/${isEmbed ? url.searchParams.get("clip") : pathname}`;
            }
            else if (clipPath) {
                return clipPath[0];
            }
            return /(?:videos)\/([^/]+)/.exec(url.pathname)?.[0];
        }
        case VideoService.proxitok:
        case VideoService.tiktok:
            return /([^/]+)\/video\/([^/]+)/.exec(url.pathname)?.[0];
        case VideoService.vimeo: {
            const appId = url.searchParams.get("app_id");
            const videoId = /[^/]+\/[^/]+$/.exec(url.pathname)?.[0] ??
                /[^/]+$/.exec(url.pathname)?.[0];
            return appId ? `${videoId}?app_id=${appId}` : videoId;
        }
        case VideoService.xvideos:
            return /[^/]+\/[^/]+$/.exec(url.pathname)?.[0];
        case VideoService.pornhub:
            return (url.searchParams.get("viewkey") ??
                /embed\/([^/]+)/.exec(url.pathname)?.[1]);
        case VideoService.twitter:
            return /status\/([^/]+)/.exec(url.pathname)?.[1];
        case VideoService.rumble:
        case VideoService.facebook:
            return url.pathname.slice(1);
        case VideoService.rutube:
            return /(?:video|embed)\/([^/]+)/.exec(url.pathname)?.[1];
        case VideoService.bilibili: {
            const bvid = url.searchParams.get("bvid");
            if (bvid) {
                return bvid;
            }
            let vid = /video\/([^/]+)/.exec(url.pathname)?.[1];
            if (vid && url.searchParams.get("p") !== null) {
                vid += `/?p=${url.searchParams.get("p")}`;
            }
            return vid;
        }
        case VideoService.mailru: {
            const pathname = url.pathname;
            if (pathname.startsWith("/v/") || pathname.startsWith("/mail/")) {
                return pathname.slice(1);
            }
            const videoId = /video\/embed\/([^/]+)/.exec(pathname)?.[1];
            if (!videoId) {
                return null;
            }
            const videoData = await VideoHelper.mailru.getVideoData(videoId);
            if (!videoData) {
                return null;
            }
            return videoData.meta.url.replace("//my.mail.ru/", "");
        }
        case VideoService.bitchute:
            return /(video|embed)\/([^/]+)/.exec(url.pathname)?.[2];
        case VideoService.eporner:
            return /video-([^/]+)\/([^/]+)/.exec(url.pathname)?.[0];
        case VideoService.peertube:
            return /\/w\/([^/]+)/.exec(url.pathname)?.[0];
        case VideoService.dailymotion: {
            return url.hostname === "dai.ly"
                ? url.pathname.slice(1)
                : /video\/([^/]+)/.exec(url.pathname)?.[1];
        }
        case VideoService.trovo: {
            const vid = url.searchParams.get("vid");
            if (!vid) {
                return null;
            }
            const path = /([^/]+)\/([\d]+)/.exec(url.pathname)?.[0];
            if (!path) {
                return null;
            }
            return `${path}?vid=${vid}`;
        }
        case VideoService.yandexdisk:
            return /\/i\/([^/]+)/.exec(url.pathname)?.[1];
        case VideoService.okru: {
            return /\/video\/(\d+)/.exec(url.pathname)?.[1];
        }
        case VideoService.googledrive:
            return /\/file\/d\/([^/]+)/.exec(url.pathname)?.[1];
        case VideoService.bannedvideo: {
            const videoId = url.searchParams.get("id");
            const res = await fetchWithTimeout(`${service.url}${videoId}`);
            const content = await res.text();
            return /https:\/\/download.assets.video\/videos\/([^.]+).mp4/.exec(content)?.[0];
        }
        case VideoService.weverse:
            return /([^/]+)\/(live|media)\/([^/]+)/.exec(url.pathname)?.[3];
        case VideoService.newgrounds:
            return /([^/]+)\/(view)\/([^/]+)/.exec(url.pathname)?.[0];
        case VideoService.egghead:
            return url.pathname.slice(1);
        case VideoService.youku:
            return /v_show\/id_[\w=]+/.exec(url.pathname)?.[0];
        case VideoService.archive:
            return /(details|embed)\/([^/]+)/.exec(url.pathname)?.[2];
        case VideoService.kodik:
            return /\/(seria|video)\/([^/]+)\/([^/]+)\/([\d]+)p/.exec(url.pathname)?.[0];
        case VideoService.patreon: {
            const fullPostId = /posts\/([^/]+)/.exec(url.pathname)?.[1];
            if (!fullPostId) {
                return undefined;
            }
            return fullPostId.replace(/[^\d.]/g, "");
        }
        case VideoService.reddit:
            return /\/r\/(([^/]+)\/([^/]+)\/([^/]+)\/([^/]+))/.exec(url.pathname)?.[1];
        default:
            return undefined;
    }
}
async function getVideoData(url) {
    const service = getService(url);
    if (!service) {
        throw new VideoDataError(`URL: "${url}" is unknown service`);
    }
    const videoId = await getVideoID(service, url);
    if (!videoId) {
        throw new VideoDataError(`Entered unsupported link: "${url}"`);
    }
    if (service.host === VideoService.peertube) {
        service.url = new URL(url).origin;
    }
    if (service.rawResult) {
        return {
            url: videoId,
            videoId,
            host: service.host,
            duration: undefined,
        };
    }
    if (!service.needExtraData) {
        return {
            url: service.url + videoId,
            videoId,
            host: service.host,
            duration: undefined,
        };
    }
    const result = await VideoHelper[service.host].getVideoData(videoId);
    if (!result) {
        throw new VideoDataError(`Failed to get video raw url for ${service.host}`);
    }
    return {
        url: result.url,
        videoId,
        host: service.host,
        duration: result.duration,
    };
}

;// CONCATENATED MODULE: ../vot.js/dist/utils/vot.js

function convertVOT(service, videoId, url) {
    if (service === VideoService.patreon) {
        return {
            service: "mux",
            videoId: new URL(url).pathname.slice(1),
        };
    }
    return {
        service,
        videoId,
    };
}

;// CONCATENATED MODULE: ../vot.js/dist/client.js









const { /* version */ "rE": version } = package_namespaceObject;
class VOTJSError extends Error {
    data;
    constructor(message, data = undefined) {
        super(message);
        this.data = data;
        this.name = "VOTJSError";
        this.message = message;
    }
}
class VOTClient {
    host;
    hostVOT;
    schema;
    schemaVOT;
    fetch;
    fetchOpts;
    getVideoDataFn;
    sessions = {};
    requestLang;
    responseLang;
    userAgent = config.userAgent;
    componentVersion = config.componentVersion;
    paths = {
        videoTranslation: "/video-translation/translate",
    };
    isCustomFormat(url) {
        return /\.(m3u8|m4(a|v)|mpd)/.exec(url);
    }
    headers = {
        "User-Agent": this.userAgent,
        Accept: "application/x-protobuf",
        "Accept-Language": "en",
        "Content-Type": "application/x-protobuf",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Mode": "no-cors",
    };
    headersVOT = {
        "User-Agent": `vot-cli/${version}`,
        "Content-Type": "application/json",
        Pragma: "no-cache",
        "Cache-Control": "no-cache",
    };
    constructor({ host = config.host, hostVOT = config.hostVOT, fetchFn = fetchWithTimeout, fetchOpts = {}, getVideoDataFn = getVideoData, requestLang = "en", responseLang = "ru", headers = {}, } = {}) {
        const schemaRe = /(http(s)?):\/\//;
        const schema = schemaRe.exec(host)?.[1];
        this.host = schema ? host.replace(`${schema}://`, "") : host;
        this.schema = schema ?? "https";
        const schemaVOT = schemaRe.exec(hostVOT)?.[1];
        this.hostVOT = schemaVOT ? hostVOT.replace(`${schemaVOT}://`, "") : hostVOT;
        this.schemaVOT = schemaVOT ?? "https";
        this.fetch = fetchFn;
        this.fetchOpts = fetchOpts;
        this.getVideoDataFn = getVideoDataFn;
        this.requestLang = requestLang;
        this.responseLang = responseLang;
        this.headers = { ...this.headers, ...headers };
    }
    getOpts(body, headers = {}) {
        return {
            method: "POST",
            headers: {
                ...this.headers,
                ...headers,
            },
            body,
            ...this.fetchOpts,
        };
    }
    async request(path, body, headers = {}) {
        const options = this.getOpts(new Blob([body]), headers);
        try {
            const res = await this.fetch(`${this.schema}://${this.host}${path}`, options);
            const data = await res.arrayBuffer();
            return {
                success: res.status === 200,
                data,
            };
        }
        catch (err) {
            console.error("[vot.js]", err.message);
            return {
                success: false,
                data: null,
            };
        }
    }
    async requestVOT(path, body, headers = {}) {
        const options = this.getOpts(JSON.stringify(body), {
            ...this.headersVOT,
            ...headers,
        });
        try {
            console.log(`${this.schemaVOT}://${this.hostVOT}${path}`);
            const res = await this.fetch(`${this.schemaVOT}://${this.hostVOT}${path}`, options);
            const data = (await res.json());
            return {
                success: res.status === 200,
                data,
            };
        }
        catch (err) {
            console.error("[vot.js]", err.message);
            return {
                success: false,
                data: null,
            };
        }
    }
    async getSession(module) {
        const timestamp = getTimestamp();
        const session = this.sessions[module];
        if (session && session.timestamp + session.expires > timestamp) {
            return session;
        }
        const { secretKey, expires, uuid } = await this.createSession(module);
        this.sessions[module] = {
            secretKey,
            expires,
            timestamp,
            uuid,
        };
        return this.sessions[module];
    }
    async translateVideoYAImpl({ url, duration = config.defaultDuration, requestLang = this.requestLang, responseLang = this.responseLang, translationHelp = null, headers = {}, }) {
        const { secretKey, uuid } = await this.getSession("video-translation");
        const body = yandexProtobuf.encodeTranslationRequest(url, duration, requestLang, responseLang, translationHelp);
        const sign = await getSignature(body);
        const res = await this.request(this.paths.videoTranslation, body, {
            "Vtrans-Signature": sign,
            "Sec-Vtrans-Sk": secretKey,
            "Sec-Vtrans-Token": `${sign}:${uuid}:${this.paths.videoTranslation}:${this.componentVersion}`,
            ...headers,
        });
        if (!res.success) {
            throw new VOTJSError("Failed to request video translation", res);
        }
        const translationData = yandexProtobuf.decodeTranslationResponse(res.data);
        switch (translationData.status) {
            case VideoTranslationStatus.FAILED:
                throw new VOTJSError("Yandex couldn't translate video", translationData);
            case VideoTranslationStatus.FINISHED:
            case VideoTranslationStatus.PART_CONTENT:
                if (!translationData.url) {
                    throw new VOTJSError("Audio link wasn't received from Yandex response", translationData);
                }
                return {
                    translated: true,
                    url: translationData.url,
                    remainingTime: translationData.remainingTime ?? -1,
                };
            case VideoTranslationStatus.WAITING:
                return {
                    translated: false,
                    remainingTime: translationData.remainingTime,
                };
            case VideoTranslationStatus.LONG_WAITING:
            case VideoTranslationStatus.LONG_WAITING_2:
                return {
                    translated: false,
                    remainingTime: translationData.remainingTime ?? -1,
                };
            default:
                console.error("[vot.js] Unknown response", translationData);
                throw new VOTJSError("Unknown response from Yandex", translationData);
        }
    }
    async translateVideoVOTImpl({ url, videoId, service, requestLang = this.requestLang, responseLang = this.responseLang, headers = {}, }) {
        const votData = convertVOT(service, videoId, url);
        const res = await this.requestVOT(this.paths.videoTranslation, {
            provider: "yandex",
            service: votData.service,
            videoId: votData.videoId,
            fromLang: requestLang,
            toLang: responseLang,
            rawVideo: url,
        }, headers);
        if (!res.success) {
            throw new VOTJSError("Failed to request video translation", res);
        }
        const translationData = res.data;
        switch (translationData.status) {
            case "failed":
                throw new VOTJSError("Yandex couldn't translate video", translationData);
            case "success":
                if (!translationData.translatedUrl) {
                    throw new VOTJSError("Audio link wasn't received from VOT response", translationData);
                }
                return {
                    translated: true,
                    url: translationData.translatedUrl,
                    remainingTime: -1,
                };
            case "waiting":
                return {
                    translated: false,
                    remainingTime: translationData.remainingTime,
                    message: translationData.message,
                };
        }
    }
    async translateVideo({ url, duration = config.defaultDuration, requestLang = this.requestLang, responseLang = this.responseLang, translationHelp = null, headers = {}, }) {
        const { url: videoUrl, videoId, host, duration: videoDuration, } = await this.getVideoDataFn(url);
        return this.isCustomFormat(videoUrl)
            ? await this.translateVideoVOTImpl({
                url: videoUrl,
                videoId,
                service: host,
                requestLang,
                responseLang,
                headers,
            })
            : await this.translateVideoYAImpl({
                url: videoUrl,
                duration: videoDuration ?? duration,
                requestLang,
                responseLang,
                translationHelp,
                headers,
            });
    }
    async getSubtitles({ url, requestLang = this.requestLang, headers = {}, }) {
        const { url: videoUrl } = await this.getVideoDataFn(url);
        if (this.isCustomFormat(videoUrl)) {
            throw new VOTJSError("Unsupported video URL for getting subtitles");
        }
        const { secretKey, uuid } = await this.getSession("video-translation");
        const body = yandexProtobuf.encodeSubtitlesRequest(videoUrl, requestLang);
        const sign = await getSignature(body);
        const pathname = "/video-subtitles/get-subtitles";
        const res = await this.request(pathname, body, {
            "Vsubs-Signature": await getSignature(body),
            "Sec-Vsubs-Sk": secretKey,
            "Sec-Vsubs-Token": `${sign}:${uuid}:${pathname}:${this.componentVersion}`,
            ...headers,
        });
        if (!res.success) {
            throw new VOTJSError("Failed to request video subtitles", res);
        }
        return yandexProtobuf.decodeSubtitlesResponse(res.data);
    }
    async pingStream({ pingId, headers = {} }) {
        const { secretKey, uuid } = await this.getSession("video-translation");
        const body = yandexProtobuf.encodeStreamPingRequest(pingId);
        const sign = await getSignature(body);
        const pathname = "/stream-translation/ping-stream";
        const res = await this.request(pathname, body, {
            "Vtrans-Signature": await getSignature(body),
            "Sec-Vtrans-Sk": secretKey,
            "Sec-Vtrans-Token": `${sign}:${uuid}:${pathname}:${this.componentVersion}`,
            ...headers,
        });
        if (!res.success) {
            throw new VOTJSError("Failed to request stream ping", res);
        }
        return true;
    }
    async translateStream({ url, requestLang = this.requestLang, responseLang = this.responseLang, headers = {}, }) {
        const { url: videoUrl } = await this.getVideoDataFn(url);
        if (this.isCustomFormat(videoUrl)) {
            throw new VOTJSError("Unsupported video URL for getting stream translation");
        }
        const { secretKey, uuid } = await this.getSession("video-translation");
        const body = yandexProtobuf.encodeStreamRequest(videoUrl, requestLang, responseLang);
        const sign = await getSignature(body);
        const pathname = "/stream-translation/translate-stream";
        const res = await this.request(pathname, body, {
            "Vtrans-Signature": await getSignature(body),
            "Sec-Vtrans-Sk": secretKey,
            "Sec-Vtrans-Token": `${sign}:${uuid}:${pathname}:${this.componentVersion}`,
            ...headers,
        });
        if (!res.success) {
            throw new VOTJSError("Failed to request stream translation", res);
        }
        const translateResponse = yandexProtobuf.decodeStreamResponse(res.data);
        const interval = translateResponse.interval;
        switch (interval) {
            case StreamInterval.NO_CONNECTION:
            case StreamInterval.TRANSLATING:
                return {
                    translated: false,
                    interval,
                    message: interval === StreamInterval.NO_CONNECTION
                        ? "streamNoConnectionToServer"
                        : "translationTakeFewMinutes",
                };
            case StreamInterval.STREAMING: {
                return {
                    translated: true,
                    interval,
                    pingId: translateResponse.pingId,
                    result: translateResponse.translatedInfo,
                };
            }
            default:
                console.error("[vot.js] Unknown response", translateResponse);
                throw new VOTJSError("Unknown response from Yandex", translateResponse);
        }
    }
    async createSession(module) {
        const uuid = getUUID();
        const body = yandexProtobuf.encodeYandexSessionRequest(uuid, module);
        const res = await this.request("/session/create", body, {
            "Vtrans-Signature": await getSignature(body),
        });
        if (!res.success) {
            throw new VOTJSError("Failed to request create session", res);
        }
        const subtitlesResponse = yandexProtobuf.decodeYandexSessionResponse(res.data);
        return {
            ...subtitlesResponse,
            uuid,
        };
    }
}
class VOTWorkerClient extends VOTClient {
    async request(path, body, headers = {}) {
        const options = this.getOpts(JSON.stringify({
            headers: {
                ...this.headers,
                ...headers,
            },
            body: Array.from(body),
        }), {
            "Content-Type": "application/json",
        });
        try {
            const res = await this.fetch(`${this.schema}://${this.host}${path}`, options);
            const data = await res.arrayBuffer();
            return {
                success: res.status === 200,
                data,
            };
        }
        catch (err) {
            console.error("[vot.js]", err.message);
            return {
                success: false,
                data: null,
            };
        }
    }
}

;// CONCATENATED MODULE: ../vot.js/dist/index.js














;// CONCATENATED MODULE: ./src/config/alternativeUrls.js
// Sites host Invidious. I tested the performance only on invidious.kevin.rocks, youtu.be and inv.vern.cc
const alternativeUrls_sitesInvidious = [
  "invidious.snopyta.org",
  "yewtu.be",
  "invidious.kavin.rocks",
  "vid.puffyan.us",
  "invidious.namazso.eu",
  "inv.riverside.rocks",
  "yt.artemislena.eu",
  "invidious.flokinet.to",
  "invidious.esmailelbob.xyz",
  "y.com.sb",
  "invidious.nerdvpn.de",
  "inv.vern.cc",
  "invidious.slipfox.xyz",
  "invidio.xamh.de",
  "invidious.dhusch.de",
];

// Sites host Piped. I tested the performance only on piped.video
const alternativeUrls_sitesPiped = [
  "piped.video",
  "piped.tokhmi.xyz",
  "piped.moomoo.me",
  "piped.syncpundit.io",
  "piped.mha.fi",
  "watch.whatever.social",
  "piped.garudalinux.org",
  "efy.piped.pages.dev",
  "watch.leptons.xyz",
  "piped.lunar.icu",
  "yt.dc09.ru",
  "piped.mint.lgbt",
  "il.ax",
  "piped.privacy.com.de",
  "piped.esmailelbob.xyz",
  "piped.projectsegfau.lt",
  "piped.in.projectsegfau.lt",
  "piped.us.projectsegfau.lt",
  "piped.privacydev.net",
  "piped.palveluntarjoaja.eu",
  "piped.smnz.de",
  "piped.adminforge.de",
  "piped.qdi.fi",
  "piped.hostux.net",
  "piped.chauvet.pro",
  "piped.jotoma.de",
  "piped.pfcd.me",
  "piped.frontendfriendly.xyz",
];

const alternativeUrls_sitesProxiTok = [
  "proxitok.pabloferreiro.es",
  "proxitok.pussthecat.org",
  "tok.habedieeh.re",
  "proxitok.esmailelbob.xyz",
  "proxitok.privacydev.net",
  "tok.artemislena.eu",
  "tok.adminforge.de",
  "tik.hostux.net", // maybe instance doesn't working
  "tt.vern.cc",
  "cringe.whatever.social",
  "proxitok.lunar.icu",
  "proxitok.privacy.com.de", // maybe instance doesn't working
];

// Sites host Peertube. I tested the performance only on dalek.zone and tube.shanti.cafe
const alternativeUrls_sitesPeertube = [
  "peertube.1312.media",
  "tube.shanti.cafe",
  "bee-tube.fr",
  "video.sadmin.io",
  "dalek.zone",
  "review.peertube.biz",
  "peervideo.club",
  "tube.la-dina.net",
  "peertube.tmp.rcp.tf",
  "peertube.su",
];



;// CONCATENATED MODULE: ./src/config/config.js
// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
const m3u8ProxyHost = "m3u8-proxy.toil.cc"; // used for streaming
const proxyWorkerHost = "vot-worker.toil.cc"; // used for cloudflare version
const votBackendUrl = "https://vot-api.toil.cc/v1";
const yandexHmacKey = "bt8xH3VOlb4mqf0nqAibnDOoiPlXsisf";
const yandexUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 YaBrowser/24.4.0.0 Safari/537.36";
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



;// CONCATENATED MODULE: ./src/config/constants.js
// available languages for translation
const availableLangs = [
  "ru",
  "en",
  "zh",
  "ko",
  "lt",
  "lv",
  "ar",
  "fr",
  "it",
  "es",
  "de",
  "ja",
];

// up-to-date list of TTS working languages
const actualTTS = ["ru", "en", "kk"];

const cfOnlyExtensions = (/* unused pure expression or super */ null && ([
  "Violentmonkey",
  "FireMonkey",
  "Greasemonkey",
  "AdGuard",
  "OrangeMonkey",
]));



;// CONCATENATED MODULE: ./src/localization/locales/en.json
const en_namespaceObject = /*#__PURE__*/JSON.parse('{"__version__":4,"recommended":"recommended","translateVideo":"Translate video","disableTranslate":"Turn off","translationSettings":"Translation settings","subtitlesSettings":"Subtitles settings","about":"About extension","resetSettings":"Reset settings","videoBeingTranslated":"The video is being translated","videoLanguage":"Video language","translationLanguage":"Translation language","translationTake":"The translation will take","translationTakeMoreThanHour":"The translation will take more than an hour","translationTakeAboutMinute":"The translation will take about a minute","translationTakeFewMinutes":"The translation will take a few minutes","translationTakeApproximatelyMinutes":"The translation will take approximately {0} minutes","translationTakeApproximatelyMinute":"The translation will take approximately {0} minutes","unSupportedExtensionError":"Error! {0} is not supported by this version of the extension!\\n\\nPlease use the cloudflare version of the VOT extension.","requestTranslationFailed":"Failed to request video translation","audioNotReceived":"Audio link not received","grantPermissionToAutoPlay":"Grant permission to autoplay","neededAdditionalExtension":"An additional extension is needed to support this site","audioFormatNotSupported":"The audio format is not supported","VOTAutoTranslate":"Translate on open","VOTDontTranslateYourLang":"Do not translate from my language","VOTVolume":"Video volume","VOTVolumeTranslation":"Translation Volume","VOTAutoSetVolume":"Reduce video volume to ","VOTShowVideoSlider":"Video volume slider","VOTSyncVolume":"Link translation and video volume","VOTAudioProxy":"Proxy received audio","VOTDisableFromYourLang":"You have disabled the translation of the video in your language","VOTLiveNotSupported":"Translation of live streams is not supported","VOTPremiere":"Wait for the premiere to end before translating","VOTVideoIsTooLong":"Video is too long","VOTNoVideoIDFound":"No video ID found","VOTSubtitles":"Subtitles","VOTSubtitlesDisabled":"Disabled","VOTSubtitlesMaxLength":"Subtitles max length","VOTHighlightWords":"Highlight words","VOTTranslatedFrom":"translated from","VOTAutogenerated":"autogenerated","VOTSettings":"VOT Settings","VOTMenuLanguage":"Menu language","VOTAuthors":"Authors","VOTVersion":"Version","VOTLoader":"Loader","VOTBrowser":"Browser","VOTShowPiPButton":"Show PiP button","langs":{"auto":"Auto","af":"Afrikaans","ak":"Akan","sq":"Albanian","am":"Amharic","ar":"Arabic","hy":"Armenian","as":"Assamese","ay":"Aymara","az":"Azerbaijani","bn":"Bangla","eu":"Basque","be":"Belarusian","bho":"Bhojpuri","bs":"Bosnian","bg":"Bulgarian","my":"Burmese","ca":"Catalan","ceb":"Cebuano","zh":"Chinese","zh-Hans":"Chinese (Simplified)","zh-Hant":"Chinese (Traditional)","co":"Corsican","hr":"Croatian","cs":"Czech","da":"Danish","dv":"Divehi","nl":"Dutch","en":"English","eo":"Esperanto","et":"Estonian","ee":"Ewe","fil":"Filipino","fi":"Finnish","fr":"French","gl":"Galician","lg":"Ganda","ka":"Georgian","de":"German","el":"Greek","gn":"Guarani","gu":"Gujarati","ht":"Haitian Creole","ha":"Hausa","haw":"Hawaiian","iw":"Hebrew","hi":"Hindi","hmn":"Hmong","hu":"Hungarian","is":"Icelandic","ig":"Igbo","id":"Indonesian","ga":"Irish","it":"Italian","ja":"Japanese","jv":"Javanese","kn":"Kannada","kk":"Kazakh","km":"Khmer","rw":"Kinyarwanda","ko":"Korean","kri":"Krio","ku":"Kurdish","ky":"Kyrgyz","lo":"Lao","la":"Latin","lv":"Latvian","ln":"Lingala","lt":"Lithuanian","lb":"Luxembourgish","mk":"Macedonian","mg":"Malagasy","ms":"Malay","ml":"Malayalam","mt":"Maltese","mi":"Māori","mr":"Marathi","mn":"Mongolian","ne":"Nepali","nso":"Northern Sotho","no":"Norwegian","ny":"Nyanja","or":"Odia","om":"Oromo","ps":"Pashto","fa":"Persian","pl":"Polish","pt":"Portuguese","pa":"Punjabi","qu":"Quechua","ro":"Romanian","ru":"Russian","sm":"Samoan","sa":"Sanskrit","gd":"Scottish Gaelic","sr":"Serbian","sn":"Shona","sd":"Sindhi","si":"Sinhala","sk":"Slovak","sl":"Slovenian","so":"Somali","st":"Southern Sotho","es":"Spanish","su":"Sundanese","sw":"Swahili","sv":"Swedish","tg":"Tajik","ta":"Tamil","tt":"Tatar","te":"Telugu","th":"Thai","ti":"Tigrinya","ts":"Tsonga","tr":"Turkish","tk":"Turkmen","uk":"Ukrainian","ur":"Urdu","ug":"Uyghur","uz":"Uzbek","vi":"Vietnamese","cy":"Welsh","fy":"Western Frisian","xh":"Xhosa","yi":"Yiddish","yo":"Yoruba","zu":"Zulu"},"udemyAccessTokenExpired":"Your entered Udemy Access Token has expired","udemyModuleArgsNotFound":"Could not get udemy module data due to the fact that ModuleArgs was not found","VOTTranslationHelpNull":"Could not get the data required for the translate","enterUdemyAccessToken":"Enter Udemy Access Token","VOTUdemyData":"Udemy Data","streamNoConnectionToServer":"There is no connection to the server","searchField":"Search...","VOTTranslateAPIErrors":"Translate errors from the API","VOTTranslationService":"Translation Service","VOTDetectService":"Detect Service","VOTTranslatingError":"Translating the error","VOTProxyWorkerHost":"Enter the proxy worker address","VOTM3u8ProxyHost":"Enter the address of the m3u8 proxy worker","proxySettings":"Proxy Settings","translationTakeApproximatelyMinute2":"The translation will take approximately {0} minutes","VOTAudioBooster":"Extended translation volume increase"}');
;// CONCATENATED MODULE: ./src/utils/debug.js
const debug = {};
debug.log = (...text) => {
  if (false) {}
  return console.log(
    "%c[VOT DEBUG]",
    "background: #F2452D; color: #fff; padding: 5px;",
    ...text,
  );
};

/* harmony default export */ const utils_debug = (debug);

;// CONCATENATED MODULE: ./src/utils/storage.js


const votStorage = new (class {
  constructor() {
    this.gmSupport = typeof GM_getValue === "function";
    utils_debug.log(`GM Storage Status: ${this.gmSupport}`);
  }

  syncGet(name, def = undefined, toNumber = false) {
    if (this.gmSupport) {
      return GM_getValue(name, def);
    }

    let val = window.localStorage.getItem(name);
    if (name === "udemyData" && typeof val === "string") {
      try {
        val = JSON.parse(val);
      } catch {
        val = def;
      }
    }

    return toNumber ? Number(val) ?? Number(def) : val ?? def;
  }

  async get(name, def = undefined, toNumber = false) {
    if (this.gmSupport) {
      return await GM_getValue(name, def);
    }

    return Promise.resolve(this.syncGet(name, def, toNumber));
  }

  syncSet(name, value) {
    if (this.gmSupport) {
      return GM_setValue(name, value);
    }

    if (name === "udemyData") {
      value = JSON.stringify(value);
    }

    return window.localStorage.setItem(name, value);
  }

  async set(name, value) {
    if (this.gmSupport) {
      return await GM_setValue(name, value);
    }

    return Promise.resolve(this.syncSet(name, value));
  }

  syncDelete(name) {
    if (this.gmSupport) {
      return GM_deleteValue(name);
    }

    return window.localStorage.removeItem(name);
  }

  async delete(name) {
    if (this.gmSupport) {
      return await GM_deleteValue(name);
    }

    return Promise.resolve(this.syncDelete(name));
  }

  syncList() {
    if (this.gmSupport) {
      return GM_listValues();
    }

    return [
      "autoTranslate",
      "dontTranslateLanguage",
      "dontTranslateYourLang",
      "autoSetVolumeYandexStyle",
      "showVideoSlider",
      "syncVolume",
      "subtitlesMaxLength",
      "highlightWords",
      "responseLanguage",
      "defaultVolume",
      "udemyData",
      "audioProxy",
      "showPiPButton",
      "locale-version",
      "locale-lang",
      "locale-phrases",
    ];
  }

  async list() {
    if (this.gmSupport) {
      return await GM_listValues();
    }

    return Promise.resolve(this.syncList());
  }
})();

;// CONCATENATED MODULE: ./src/utils/translateApis.js



const HTTP_TIMEOUT = 3000;

async function translateApis_fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), HTTP_TIMEOUT);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } catch (error) {
    console.error("Fetch timed-out. Error:", error);
    return error;
  } finally {
    clearTimeout(timeoutId);
  }
}

const YandexTranslateAPI = {
  async translate(text, lang) {
    // Limit: 10k symbols
    //
    // Lang examples:
    // en-ru, uk-ru, ru-en...
    // ru, en (instead of auto-ru, auto-en)

    try {
      const response = await translateApis_fetchWithTimeout(
        `${translateUrls.yandex}?${new URLSearchParams({
          text,
          lang,
        })}`,
      );

      if (response instanceof Error) {
        throw response;
      }

      const content = await response.json();

      if (content.code !== 200) {
        throw content.message;
      }

      return content.text[0];
    } catch (error) {
      console.error("Error translating text:", error);
      return text;
    }
  },

  async detect(text) {
    // Limit: 10k symbols
    try {
      const response = await translateApis_fetchWithTimeout(
        `${detectUrls.yandex}?${new URLSearchParams({
          text,
        })}`,
      );

      if (response instanceof Error) {
        throw response;
      }

      const content = await response.json();
      if (content.code !== 200) {
        throw content.message;
      }

      return content.lang ?? "en";
    } catch (error) {
      console.error("Error getting lang from text:", error);
      return "en";
    }
  },
};

const RustServerAPI = {
  async detect(text) {
    try {
      const response = await fetch(detectUrls.rustServer, {
        method: "POST",
        body: text,
      });

      if (response instanceof Error) {
        throw response;
      }

      return await response.text();
    } catch (error) {
      console.error("Error getting lang from text:", error);
      return "en";
    }
  },
};

const DeeplServerAPI = {
  async translate(text, fromLang = "auto", toLang = "ru") {
    try {
      const response = await translateApis_fetchWithTimeout(translateUrls.deepl, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          text,
          source_lang: fromLang,
          target_lang: toLang,
        }),
      });

      if (response instanceof Error) {
        throw response;
      }

      const content = await response.json();

      if (content.code !== 200) {
        throw content.message;
      }

      return content.data;
    } catch (error) {
      console.error("Error translating text:", error);
      return text;
    }
  },
};

async function translate(text, fromLang = "", toLang = "ru") {
  const service = await votStorage.get(
    "translationService",
    defaultTranslationService,
  );
  switch (service) {
    case "yandex": {
      const langPair = fromLang && toLang ? `${fromLang}-${toLang}` : toLang;
      return await YandexTranslateAPI.translate(text, langPair);
    }
    case "deepl": {
      return await DeeplServerAPI.translate(text, fromLang, toLang);
    }
    default:
      return text;
  }
}

async function detect(text) {
  const service = await votStorage.get("detectService", defaultDetectService);
  switch (service) {
    case "yandex":
      return await YandexTranslateAPI.detect(text);
    case "rust-server":
      return await RustServerAPI.detect(text);
    default:
      return "en";
  }
}

const translateServices = Object.keys(translateUrls);
const detectServices = Object.keys(detectUrls).map((k) =>
  k === "rustServer" ? "rust-server" : k,
);



;// CONCATENATED MODULE: ./src/utils/youtubeUtils.js





// Get the language code from the response or the text
async function getLanguage(player, response, title, description) {
  if (
    !window.location.hostname.includes("m.youtube.com") &&
    player?.getAudioTrack
  ) {
    // ! Experimental ! get lang from selected audio track if availabled
    const audioTracks = player.getAudioTrack();
    const trackInfo = audioTracks?.getLanguageInfo(); // get selected track info (id === "und" if tracks are not available)
    if (trackInfo?.id !== "und") {
      return langTo6391(trackInfo.id.split(".")[0]);
    }
  }

  // TODO: If the audio tracks will work fine, transfer the receipt of captions to the audioTracks variable
  // Check if there is an automatic caption track in the response
  const captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (captionTracks?.length) {
    const autoCaption = captionTracks.find((caption) => caption.kind === "asr");
    if (autoCaption && autoCaption.languageCode) {
      return langTo6391(autoCaption.languageCode);
    }
  }

  // If there is no caption track, use detect to get the language code from the description

  const text = cleanText(title, description);

  utils_debug.log(`Detecting language text: ${text}`);

  return detect(text);
}

function isMobile() {
  return /^m\.youtube\.com$/.test(window.location.hostname);
}

function getPlayer() {
  if (window.location.pathname.startsWith("/shorts/")) {
    return isMobile()
      ? document.querySelector("#movie_player")
      : document.querySelector("#shorts-player");
  }

  return document.querySelector("#movie_player");
}

function getPlayerResponse() {
  const player = getPlayer();
  if (player?.getPlayerResponse)
    return player?.getPlayerResponse?.call() ?? null;
  return player?.data?.playerResponse ?? null;
}

function getPlayerData() {
  const player = getPlayer();
  if (player?.getVideoData) return player?.getVideoData?.call() ?? null;
  return player?.data?.playerResponse?.videoDetails ?? null;
}

function getVideoVolume() {
  const player = getPlayer();
  if (player?.getVolume) {
    return player.getVolume.call() / 100;
  }

  return 1;
}

function setVideoVolume(volume) {
  const player = getPlayer();
  if (player?.setVolume) {
    player.setVolume(Math.round(volume * 100));
    return true;
  }
}

function isMuted() {
  const player = getPlayer();
  if (player?.isMuted) {
    return player.isMuted.call();
  }

  return false;
}

function videoSeek(video, time) {
  // * TIME IN MS
  utils_debug.log("videoSeek", time);
  const preTime =
    getPlayer()?.getProgressState()?.seekableEnd || video.currentTime;
  const finalTime = preTime - time; // we always throw it to the end of the stream - time
  video.currentTime = finalTime;
}

function isMusic() {
  // Нужно доработать логику
  const channelName = getPlayerData().author,
    titleStr = getPlayerData().title.toUpperCase(),
    titleWordsList = titleStr.match(/\w+/g),
    playerData = document.body.querySelector("ytd-watch-flexy")?.playerData;

  return (
    [
      titleStr,
      document.URL,
      channelName,
      playerData?.microformat?.playerMicroformatRenderer.category,
      playerData?.title,
    ].some((i) => i?.toUpperCase().includes("MUSIC")) ||
    document.body.querySelector(
      "#upload-info #channel-name .badge-style-type-verified-artist",
    ) ||
    (channelName &&
      /(VEVO|Topic|Records|RECORDS|Recordings|AMV)$/.test(channelName)) ||
    (channelName &&
      /(MUSIC|ROCK|SOUNDS|SONGS)/.test(channelName.toUpperCase())) ||
    (titleWordsList?.length &&
      [
        "🎵",
        "♫",
        "SONG",
        "SONGS",
        "SOUNDTRACK",
        "LYRIC",
        "LYRICS",
        "AMBIENT",
        "MIX",
        "VEVO",
        "CLIP",
        "KARAOKE",
        "OPENING",
        "COVER",
        "COVERED",
        "VOCAL",
        "INSTRUMENTAL",
        "ORCHESTRAL",
        "DUBSTEP",
        "DJ",
        "DNB",
        "BASS",
        "BEAT",
        "ALBUM",
        "PLAYLIST",
        "DUBSTEP",
        "CHILL",
        "RELAX",
        "CLASSIC",
        "CINEMATIC",
      ].some((i) => titleWordsList.includes(i))) ||
    [
      "OFFICIAL VIDEO",
      "OFFICIAL AUDIO",
      "FEAT.",
      "FT.",
      "LIVE RADIO",
      "DANCE VER",
      "HIP HOP",
      "ROCK N ROLL",
      "HOUR VER",
      "HOURS VER",
      "INTRO THEME",
    ].some((i) => titleStr.includes(i)) ||
    (titleWordsList?.length &&
      [
        "OP",
        "ED",
        "MV",
        "OST",
        "NCS",
        "BGM",
        "EDM",
        "GMV",
        "AMV",
        "MMD",
        "MAD",
      ].some((i) => titleWordsList.includes(i)))
  );
}

function getSubtitles() {
  const response = getPlayerResponse();
  let captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks ?? [];
  captionTracks = captionTracks.reduce((result, captionTrack) => {
    if ("languageCode" in captionTrack) {
      const language = captionTrack?.languageCode
        ? langTo6391(captionTrack?.languageCode)
        : undefined;
      const url = captionTrack?.url || captionTrack?.baseUrl;
      language &&
        url &&
        result.push({
          source: "youtube",
          language,
          isAutoGenerated: captionTrack?.kind === "asr",
          url: `${
            url.startsWith("http") ? url : `${window.location.origin}/${url}`
          }&fmt=json3`,
        });
    }
    return result;
  }, []);
  utils_debug.log("youtube subtitles:", captionTracks);
  return captionTracks;
}

// Get the video data from the player
async function youtubeUtils_getVideoData() {
  const player = getPlayer();
  const response = getPlayerResponse(); // null in /embed
  const data = getPlayerData();
  const { title } = data ?? {};
  const { shortDescription: description, isLive } =
    response?.videoDetails ?? {};
  let detectedLanguage = title
    ? await getLanguage(player, response, title, description)
    : "en";
  detectedLanguage = availableLangs.includes(detectedLanguage)
    ? detectedLanguage
    : "en";
  const videoData = {
    isLive: !!isLive,
    title,
    description,
    detectedLanguage,
  };
  utils_debug.log("youtube video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

/* harmony default export */ const youtubeUtils = ({
  isMobile,
  getPlayer,
  getPlayerResponse,
  getPlayerData,
  getVideoVolume,
  getSubtitles,
  getVideoData: youtubeUtils_getVideoData,
  setVideoVolume,
  videoSeek,
  isMuted,
  isMusic,
});

;// CONCATENATED MODULE: ./src/utils/utils.js




const userlang = navigator.language || navigator.userLanguage;
const lang = userlang?.substr(0, 2)?.toLowerCase() ?? "en";

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
        /(?:watch|embed|shorts|live)\/([^/]+)/.exec(url.pathname)?.[1] ||
        url.searchParams.get("v")
      );
    }
    case "vk": {
      const pathID = /^\/(video|clip)-?\d{8,9}_\d{9}$/.exec(url.pathname);
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
      return /gag\/([^/]+)/.exec(url.pathname)?.[1];
    case "twitch": {
      const clipPath = /([^/]+)\/(?:clip)\/([^/]+)/.exec(url.pathname);
      if (/^m\.twitch\.tv$/.test(url.hostname)) {
        return /videos\/([^/]+)/.exec(url.href)?.[0] || url.pathname.slice(1);
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

      return /(?:videos)\/([^/]+)/.exec(url.pathname)?.[0];
    }
    case "proxitok":
      return /([^/]+)\/video\/([^/]+)/.exec(url.pathname)?.[0];
    case "tiktok": {
      let id = /([^/]+)\/video\/([^/]+)/.exec(url.pathname)?.[0];
      if (!id) {
        const playerEl = video.closest(".xgplayer-playing, .tiktok-web-player");
        const itemEl = playerEl?.closest(
          'div[data-e2e="recommend-list-item-container"]',
        );
        const authorEl = itemEl?.querySelector(
          'a[data-e2e="video-author-avatar"]',
        );
        if (playerEl && authorEl) {
          const videoId = playerEl.id?.match(/^xgwrapper-\d+-(.*)$/)?.at(1);
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
        /[^/]+\/[^/]+$/.exec(url.pathname)?.[0] ||
        /[^/]+$/.exec(url.pathname)?.[0];

      return appId ? `${videoId}?app_id=${appId}` : videoId;
    }
    case "xvideos":
      return /[^/]+\/[^/]+$/.exec(url.pathname)?.[0];
    case "pornhub":
      return (
        url.searchParams.get("viewkey") ||
        /embed\/([^/]+)/.exec(url.pathname)?.[1]
      );
    case "twitter":
      return /status\/([^/]+)/.exec(url.pathname)?.[1];
    case "udemy":
    case "rumble":
    case "facebook":
      return url.pathname.slice(1);
    case "rutube":
      return /(?:video|embed)\/([^/]+)/.exec(url.pathname)?.[1];
    case "coub":
      return (
        /(?:view|embed)\/([^/]+)/.exec(url.pathname)?.[1] ||
        document.querySelector(".coub.active")?.dataset?.permalink
      );
    case "bilibili": {
      const bvid = url.searchParams.get("bvid");
      if (bvid) {
        return bvid;
      }

      let vid = /video\/([^/]+)/.exec(url.pathname)?.[1];
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

      const videoId = /video\/embed\/([^/]+)/.exec(pathname)?.[1];
      if (!videoId) {
        return null;
      }

      const referer = document.querySelector(".b-video-controls__mymail-link");
      if (!referer) {
        return false;
      }

      return referer?.href.split("my.mail.ru")?.[1];
    }
    case "bitchute": {
      if (video.src?.startsWith("blob:") || !video.src?.includes(".mp4")) {
        return null;
      }

      return video.src;
      // doesn't want to translate using a bitchute link
      // return /([^/]+)\/([^/]+).mp4/.exec(videoUrl.pathname)?.[2];
    }
    case "coursera":
      // ! LINK SHOULD BE LIKE THIS https://www.coursera.org/learn/learning-how-to-learn/lecture/75EsZ
      // return url.pathname.match(/lecture\/([^/]+)\/([^/]+)/)?.[1]; // <--- COURSE PREVIEW
      return /learn\/([^/]+)\/lecture\/([^/]+)/.exec(url.pathname)?.[0]; // <--- COURSE PASSING (IF YOU LOGINED TO COURSERA)
    case "eporner":
      // ! LINK SHOULD BE LIKE THIS eporner.com/video-XXXXXXXXX/isdfsd-dfjsdfjsdf-dsfsdf-dsfsda-dsad-ddsd
      return /video-([^/]+)\/([^/]+)/.exec(url.pathname)?.[0];
    case "peertube":
      return /\/w\/([^/]+)/.exec(url.pathname)?.[0];
    case "dailymotion": {
      // we work in the context of the player
      // geo.dailymotion.com
      const plainPlayerConfig = Array.from(
        document.querySelectorAll("*"),
      ).filter((s) => s.innerHTML.trim().includes(".m3u8"));
      try {
        let videoUrl = plainPlayerConfig[1].lastChild.src;
        return /\/video\/(\w+)\.m3u8/.exec(videoUrl)?.[1];
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

      const path = /([^/]+)\/(\d+)/.exec(url.pathname)?.[0];
      if (!path) {
        return null;
      }

      return `${path}?vid=${vid}`;
    }
    case "yandexdisk":
      return /\/i\/([^/]+)/.exec(url.pathname)?.[1];
    case "coursehunter": {
      const courseId = /\/course\/([^/]+)/.exec(url.pathname)?.[1];
      return courseId ? courseId + url.search : false;
    }
    case "ok.ru": {
      return /\/video\/(\d+)/.exec(url.pathname)?.[1];
    }
    case "googledrive":
      return url.searchParams.get("docid");
    case "bannedvideo":
      return url.searchParams.get("id");
    case "weverse":
      return /([^/]+)\/(live|media)\/([^/]+)/.exec(url.pathname)?.[0];
    case "newgrounds":
      return /([^/]+)\/(view)\/([^/]+)/.exec(url.pathname)?.[0];
    case "egghead":
      return url.pathname.slice(1);
    case "youku":
      return /v_show\/id_[\w=]+/.exec(url.pathname)?.[0];
    case "archive":
      return /(details|embed)\/([^/]+)/.exec(url.pathname)?.[2];
    // case "sibnet": {
    //   const videoId = url.searchParams.get("videoid");
    //   if (videoId) {
    //     return `video${videoId}`;
    //   }

    //   return /video([^/]+)/.exec(url.pathname)?.[0];
    // }
    case "patreon":
      return /posts\/([^/]+)/.exec(url.pathname)?.[0];
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
        debug: true, // turn it on manually if necessary
        lowLatencyMode: true,
        backBufferLength: 90,
      })
    : undefined;
}

const deletefilter = [
  /(?:https?|ftp):\/\/\S+/g,
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

async function GM_fetch(url, opts = {}) {
  try {
    if (url.includes("api.browser.yandex.ru")) {
      throw new Error("Preventing yandex cors");
    }

    return await fetch(url, opts);
  } catch (err) {
    // Если fetch завершился ошибкой, используем GM_xmlhttpRequest
    // https://greasyfork.org/ru/scripts/421384-gm-fetch/code
    utils_debug.log("GM_fetch preventing cors by GM_xmlhttpRequest", err.message);
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: "GET",
        url: url,
        responseType: "blob",
        ...opts,
        data: opts.body,
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



;// CONCATENATED MODULE: ./src/localization/localizationProvider.js
/* eslint-disable sonarjs/no-duplicate-string */





const localesVersion = 4;
const localesUrl = `https://raw.githubusercontent.com/ilyhalight/voice-over-translation/${
   true ? "dev" : 0
}/src/localization/locales`;

const availableLocales = [
  "auto",
  "en",
  "ru",

  "af",
  "am",
  "ar",
  "az",
  "bg",
  "bn",
  "bs",
  "ca",
  "cs",
  "cy",
  "da",
  "de",
  "el",
  "es",
  "et",
  "eu",
  "fa",
  "fi",
  "fr",
  "gl",
  "hi",
  "hr",
  "hu",
  "hy",
  "id",
  "it",
  "ja",
  "jv",
  "kk",
  "km",
  "kn",
  "ko",
  "lo",
  "mk",
  "ml",
  "mn",
  "ms",
  "mt",
  "my",
  "ne",
  "nl",
  "pa",
  "pl",
  "pt",
  "ro",
  "si",
  "sk",
  "sl",
  "sq",
  "sr",
  "su",
  "sv",
  "sw",
  "tr",
  "uk",
  "ur",
  "uz",
  "vi",
  "zh",
  "zu",
];

const localizationProvider = new (class {
  lang = "en";
  locale = {};
  gmValues = [
    "locale-phrases",
    "locale-lang",
    "locale-version",
    "locale-lang-override",
  ];

  constructor() {
    const langOverride = votStorage.syncGet("locale-lang-override", "auto");
    if (langOverride && langOverride !== "auto") {
      this.lang = langOverride;
    } else {
      this.lang =
        (navigator.language || navigator.userLanguage)
          ?.substr(0, 2)
          ?.toLowerCase() ?? "en";
    }
    this.setLocaleFromJsonString(votStorage.syncGet("locale-phrases", ""));
  }

  reset() {
    for (let i = 0; i < this.gmValues.length; i++) {
      votStorage.syncDelete(this.gmValues[i]);
    }
  }

  async update(force = false) {
    const localeVersion = await votStorage.get("locale-version", 0, true);
    const localeLang = await votStorage.get("locale-lang");
    if (
      !force &&
      localeVersion === localesVersion &&
      localeLang === this.lang
    ) {
      return;
    }

    utils_debug.log("Updating locale...");

    try {
      const response = await GM_fetch(`${localesUrl}/${this.lang}.json`);
      if (response.status !== 200) throw response.status;
      const text = await response.text();
      await votStorage.set("locale-phrases", text);
      this.setLocaleFromJsonString(text);
      const version = this.getFromLocale(this.locale, "__version__");
      if (typeof version === "number")
        await votStorage.set("locale-version", version);
      await votStorage.set("locale-lang", this.lang);
    } catch (error) {
      console.error(
        "[VOT] [localizationProvider] failed get locale, cause:",
        error,
      );
      this.setLocaleFromJsonString(await votStorage.get("locale-phrases", ""));
    }
  }

  setLocaleFromJsonString(json) {
    try {
      this.locale = JSON.parse(json) ?? {};
    } catch (exception) {
      console.error("[VOT] [localizationProvider]", exception);
      this.locale = {};
    }
  }

  getFromLocale(locale, key) {
    const result = key.split(".").reduce((locale, key) => {
      if (typeof locale === "object" && locale) return locale[key];
      return undefined;
    }, locale);
    if (result === undefined) {
      console.warn(
        "[VOT] [localizationProvider] locale",
        locale,
        "doesn't contain key",
        key,
      );
    }
    return result;
  }

  getDefault(key) {
    return this.getFromLocale(en_namespaceObject, key) ?? key;
  }

  get(key) {
    return (
      this.getFromLocale(this.locale, key) ??
      this.getFromLocale(en_namespaceObject, key) ??
      key
    );
  }
})();

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/webpack-monkey/lib/node/deps/style-loader-insertStyleElement.js
var style_loader_insertStyleElement = __webpack_require__("./node_modules/webpack-monkey/lib/node/deps/style-loader-insertStyleElement.js");
var style_loader_insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(style_loader_insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss
var main = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");
;// CONCATENATED MODULE: ./src/styles/main.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (style_loader_insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.A, options);




       /* harmony default export */ const styles_main = (main/* default */.A && main/* default */.A.locals ? main/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/ui.js


const undefinedPhrase = "#UNDEFINED";

function createHeader(html, level = 4) {
  const header = document.createElement("vot-block");
  header.classList.add("vot-header");
  header.classList.add(`vot-header-level-${level}`);
  header.innerHTML = html;

  return header;
}

function createInformation(html, valueHtml) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-info");

  const header = document.createElement("vot-block");
  header.innerHTML = html;

  const value = document.createElement("vot-block");
  value.innerHTML = valueHtml;

  container.appendChild(header);
  container.appendChild(value);

  return {
    container,
    header,
    value,
  };
}

function createButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-button");
  button.innerHTML = html;

  return button;
}

function createTextButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-text-button");
  button.innerHTML = html;

  return button;
}

function createOutlinedButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-outlined-button");
  button.innerHTML = html;

  return button;
}

function createIconButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-icon-button");
  button.innerHTML = html;

  return button;
}

function createCheckbox(html, value = false) {
  const container = document.createElement("label");
  container.classList.add("vot-checkbox");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = Boolean(value);

  const label = document.createElement("span");
  label.innerHTML = html;

  container.appendChild(input);
  container.appendChild(label);

  return { container, input, label };
}

function updateSlider(input) {
  const value = parseFloat(input.value);
  const min = input.min === "" ? 0 : parseFloat(input.min);
  const max = input.max === "" ? 100 : parseFloat(input.max);
  const progress = (value - min) / (max - min);
  input.parentElement.setAttribute("style", `--vot-progress: ${progress}`);
}

function createSlider(html, value = 50, min = 0, max = 100) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-slider");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;

  const label = document.createElement("span");
  label.innerHTML = html;

  container.appendChild(input);
  container.appendChild(label);

  input.addEventListener("input", (e) => updateSlider(e.target));
  updateSlider(input);

  return {
    container,
    input,
    label,
  };
}

function createTextfield(
  html,
  value = "",
  placeholder = " ",
  multiline = false,
) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-textfield");

  const input = document.createElement(multiline ? "textarea" : "input");
  input.placeholder = placeholder;
  input.value = value;

  const label = document.createElement("span");
  label.innerHTML = html;

  container.appendChild(input);
  container.appendChild(label);

  return {
    container,
    input,
    label,
  };
}

function createDialog(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-dialog-container");
  container.hidden = true;

  const backdrop = document.createElement("vot-block");
  backdrop.classList.add("vot-dialog-backdrop");

  const dialog = document.createElement("vot-block");
  dialog.classList.add("vot-dialog");

  const contentWrapper = document.createElement("vot-block");
  contentWrapper.classList.add("vot-dialog-content-wrapper");

  const headerContainer = document.createElement("vot-block");
  headerContainer.classList.add("vot-dialog-header-container");

  const bodyContainer = document.createElement("vot-block");
  bodyContainer.classList.add("vot-dialog-body-container");

  const footerContainer = document.createElement("vot-block");
  footerContainer.classList.add("vot-dialog-footer-container");

  const titleContainer = document.createElement("vot-block");
  titleContainer.classList.add("vot-dialog-title-container");

  const closeButton = createIconButton(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>`,
  );
  closeButton.classList.add("vot-dialog-close-button");

  backdrop.onclick = closeButton.onclick = () => {
    container.hidden = true;
  };

  const title = document.createElement("vot-block");
  title.classList.add("vot-dialog-title");
  title.innerHTML = html;

  container.appendChild(backdrop);
  container.appendChild(dialog);
  dialog.appendChild(contentWrapper);
  contentWrapper.appendChild(headerContainer);
  contentWrapper.appendChild(bodyContainer);
  contentWrapper.appendChild(footerContainer);
  headerContainer.appendChild(titleContainer);
  headerContainer.appendChild(closeButton);
  titleContainer.appendChild(title);

  return {
    container,
    backdrop,
    dialog,
    contentWrapper,
    headerContainer,
    bodyContainer,
    footerContainer,
    titleContainer,
    closeButton,
    title,
  };
}

function createVOTButton(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-segmented-button");

  const translateButton = document.createElement("vot-block");
  translateButton.classList.add("vot-segment");
  translateButton.classList.add("vot-translate-button");
  translateButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path id="vot-translate-icon" fill-rule="evenodd" d="M15.778 18.95L14.903 21.375C14.8364 21.5583 14.7197 21.7083 14.553 21.825C14.3864 21.9417 14.203 22 14.003 22C13.6697 22 13.3989 21.8625 13.1905 21.5875C12.9822 21.3125 12.9447 21.0083 13.078 20.675L16.878 10.625C16.9614 10.4417 17.0864 10.2917 17.253 10.175C17.4197 10.0583 17.603 10 17.803 10H18.553C18.753 10 18.9364 10.0583 19.103 10.175C19.2697 10.2917 19.3947 10.4417 19.478 10.625L23.278 20.7C23.4114 21.0167 23.378 21.3125 23.178 21.5875C22.978 21.8625 22.7114 22 22.378 22C22.1614 22 21.9739 21.9375 21.8155 21.8125C21.6572 21.6875 21.5364 21.525 21.453 21.325L20.628 18.95H15.778ZM19.978 17.2H16.378L18.228 12.25L19.978 17.2Z"></path><path d="M9 14L4.7 18.3C4.51667 18.4833 4.28333 18.575 4 18.575C3.71667 18.575 3.48333 18.4833 3.3 18.3C3.11667 18.1167 3.025 17.8833 3.025 17.6C3.025 17.3167 3.11667 17.0833 3.3 16.9L7.65 12.55C7.01667 11.85 6.4625 11.125 5.9875 10.375C5.5125 9.625 5.1 8.83333 4.75 8H6.85C7.15 8.6 7.47083 9.14167 7.8125 9.625C8.15417 10.1083 8.56667 10.6167 9.05 11.15C9.78333 10.35 10.3917 9.52917 10.875 8.6875C11.3583 7.84583 11.7667 6.95 12.1 6H2C1.71667 6 1.47917 5.90417 1.2875 5.7125C1.09583 5.52083 1 5.28333 1 5C1 4.71667 1.09583 4.47917 1.2875 4.2875C1.47917 4.09583 1.71667 4 2 4H8V3C8 2.71667 8.09583 2.47917 8.2875 2.2875C8.47917 2.09583 8.71667 2 9 2C9.28333 2 9.52083 2.09583 9.7125 2.2875C9.90417 2.47917 10 2.71667 10 3V4H16C16.2833 4 16.5208 4.09583 16.7125 4.2875C16.9042 4.47917 17 4.71667 17 5C17 5.28333 16.9042 5.52083 16.7125 5.7125C16.5208 5.90417 16.2833 6 16 6H14.1C13.75 7.18333 13.275 8.33333 12.675 9.45C12.075 10.5667 11.3333 11.6167 10.45 12.6L12.85 15.05L12.1 17.1L9 14Z"></path><path id="vot-translating-icon" style="display:none" d="M19.8081 16.3697L18.5842 15.6633V13.0832C18.5842 12.9285 18.5228 12.7801 18.4134 12.6707C18.304 12.5613 18.1556 12.4998 18.0009 12.4998C17.8462 12.4998 17.6978 12.5613 17.5884 12.6707C17.479 12.7801 17.4176 12.9285 17.4176 13.0832V15.9998C17.4176 16.1022 17.4445 16.2028 17.4957 16.2915C17.5469 16.3802 17.6205 16.4538 17.7092 16.505L19.2247 17.38C19.2911 17.4189 19.3645 17.4443 19.4407 17.4547C19.5169 17.4652 19.5945 17.4604 19.6688 17.4407C19.7432 17.4211 19.813 17.3869 19.8741 17.3402C19.9352 17.2934 19.9864 17.2351 20.0249 17.1684C20.0634 17.1018 20.0883 17.0282 20.0982 16.952C20.1081 16.8757 20.1028 16.7982 20.0827 16.7239C20.0625 16.6497 20.0279 16.5802 19.9808 16.5194C19.9336 16.4586 19.8749 16.4077 19.8081 16.3697ZM18.0015 10C16.8478 10 15.6603 10.359 14.7011 11C13.7418 11.641 12.9415 12.4341 12.5 13.5C12.0585 14.5659 11.8852 16.0369 12.1103 17.1684C12.3353 18.3 12.8736 19.4942 13.6894 20.31C14.5053 21.1258 15.8684 21.7749 17 22C18.1316 22.2251 19.4341 21.9415 20.5 21.5C21.5659 21.0585 22.359 20.2573 23 19.298C23.641 18.3387 24.0015 17.1537 24.0015 16C23.9998 14.4534 23.5951 13.0936 22.5015 12C21.4079 10.9064 19.5481 10.0017 18.0015 10ZM18.0009 20.6665C17.0779 20.6665 16.1757 20.3928 15.4082 19.88C14.6408 19.3672 14.0427 18.6384 13.6894 17.7857C13.3362 16.933 13.2438 15.9947 13.4239 15.0894C13.604 14.1842 14.0484 13.3527 14.7011 12.7C15.3537 12.0474 16.1852 11.6029 17.0905 11.4228C17.9957 11.2428 18.934 11.3352 19.7867 11.6884C20.6395 12.0416 21.3683 12.6397 21.8811 13.4072C22.3939 14.1746 22.6676 15.0769 22.6676 15.9998C22.666 17.237 22.1738 18.4231 21.299 19.298C20.4242 20.1728 19.2381 20.665 18.0009 20.6665Z"></path></svg>`;

  const separator = document.createElement("vot-block");
  separator.classList.add("vot-separator");

  const pipButton = document.createElement("vot-block");
  pipButton.classList.add("vot-segment-only-icon");
  pipButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-520q-17 0-28.5-11.5T80-560q0-17 11.5-28.5T120-600h104L80-743q-12-12-12-28.5T80-800q12-12 28.5-12t28.5 12l143 144v-104q0-17 11.5-28.5T320-800q17 0 28.5 11.5T360-760v200q0 17-11.5 28.5T320-520H120Zm40 360q-33 0-56.5-23.5T80-240v-160q0-17 11.5-28.5T120-440q17 0 28.5 11.5T160-400v160h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Zm680-280q-17 0-28.5-11.5T800-480v-240H480q-17 0-28.5-11.5T440-760q0-17 11.5-28.5T480-800h320q33 0 56.5 23.5T880-720v240q0 17-11.5 28.5T840-440ZM600-160q-17 0-28.5-11.5T560-200v-120q0-17 11.5-28.5T600-360h240q17 0 28.5 11.5T880-320v120q0 17-11.5 28.5T840-160H600Z"/></svg>`;

  const separator2 = document.createElement("vot-block");
  separator2.classList.add("vot-separator");

  const menuButton = document.createElement("vot-block");
  menuButton.classList.add("vot-segment-only-icon");
  menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>`;

  const label = document.createElement("span");
  label.classList.add("vot-segment-label");
  label.innerHTML = html;

  container.appendChild(translateButton);
  container.appendChild(separator);
  container.appendChild(pipButton);
  container.appendChild(separator2);
  container.appendChild(menuButton);
  translateButton.appendChild(label);

  return {
    container,
    translateButton,
    separator,
    pipButton,
    separator2,
    menuButton,
    label,
  };
}

function createVOTMenu(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-menu");
  container.hidden = true;

  const contentWrapper = document.createElement("vot-block");
  contentWrapper.classList.add("vot-menu-content-wrapper");

  const headerContainer = document.createElement("vot-block");
  headerContainer.classList.add("vot-menu-header-container");

  const bodyContainer = document.createElement("vot-block");
  bodyContainer.classList.add("vot-menu-body-container");

  const footerContainer = document.createElement("vot-block");
  footerContainer.classList.add("vot-menu-footer-container");

  const titleContainer = document.createElement("vot-block");
  titleContainer.classList.add("vot-menu-title-container");

  const title = document.createElement("vot-block");
  title.classList.add("vot-menu-title");
  title.innerHTML = html;

  container.appendChild(contentWrapper);
  contentWrapper.appendChild(headerContainer);
  contentWrapper.appendChild(bodyContainer);
  contentWrapper.appendChild(footerContainer);
  headerContainer.appendChild(titleContainer);
  titleContainer.appendChild(title);

  return {
    container,
    contentWrapper,
    headerContainer,
    bodyContainer,
    footerContainer,
    titleContainer,
    title,
  };
}

function createVOTSelectLabel(text) {
  const label = document.createElement("span");
  label.classList.add("vot-select-label");
  label.innerText = text;
  return label;
}

function createVOTSelect(selectTitle, dialogTitle, items, options = {}) {
  const { onSelectCb = function () {}, labelElement = "" } = options;
  let selectedItems = [];

  const container = document.createElement("vot-block");
  container.classList.add("vot-select");

  if (labelElement) {
    container.appendChild(labelElement);
  }

  const outer = document.createElement("vot-block");
  outer.classList.add("vot-select-outer");

  const title = document.createElement("span");
  title.classList.add("vot-select-title");
  title.innerText = selectTitle;

  if (selectTitle === undefined) {
    title.innerText = items.find((i) => i.selected === true)?.label;
  }

  const arrowIcon = document.createElement("vot-block");
  arrowIcon.classList.add("vot-select-arrow-icon");
  arrowIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"/></svg>`;

  outer.append(title, arrowIcon);
  outer.onclick = () => {
    const votSelectDialog = createDialog(dialogTitle);
    votSelectDialog.container.classList.add("vot-dialog-temp");
    votSelectDialog.container.hidden = false;
    document.documentElement.appendChild(votSelectDialog.container);

    const contentList = document.createElement("vot-block");
    contentList.classList.add("vot-select-content-list");

    for (const item of items) {
      const contentItem = document.createElement("vot-block");
      contentItem.classList.add("vot-select-content-item");
      contentItem.innerText = item.label;
      contentItem.dataset.votSelected = item.selected;
      contentItem.dataset.votValue = item.value;
      if (item.disabled) {
        contentItem.inert = true;
      }

      contentItem.onclick = async (e) => {
        if (e.target.inert) return;

        // removing the selected value for updating
        const contentItems = contentList.childNodes;
        for (let ci of contentItems) {
          ci.dataset.votSelected = false;
        }
        // fixed selection after closing the modal and opening again
        for (let i of items) {
          i.selected = i.value === item.value;
        }

        contentItem.dataset.votSelected = true;
        title.innerText = item.label;

        // !!! use e.target.dataset.votValue instead of e.target.value !!!
        await onSelectCb(e);
      };
      contentList.appendChild(contentItem);
    }

    // search logic
    const votSearchLangTextfield = createTextfield(
      localizationProvider.get("searchField"),
    );

    votSearchLangTextfield.input.oninput = (e) => {
      const searchText = e.target.value.toLowerCase();
      // check if there are lovercase characters in the string. used for smarter search
      for (let i = 0; i < selectedItems.length; i++) {
        const ci = selectedItems[i];
        ci.hidden = !ci.innerText.toLowerCase().includes(searchText);
      }
    };

    votSelectDialog.bodyContainer.append(
      votSearchLangTextfield.container,
      contentList,
    );
    selectedItems = contentList.childNodes;

    // remove the modal so that they do not accumulate
    votSelectDialog.backdrop.onclick = votSelectDialog.closeButton.onclick =
      () => {
        votSelectDialog.container.remove();
        selectedItems = [];
      };
  };

  container.append(outer);

  const setTitle = (newTitle) => {
    title.innerText = newTitle;
  };

  const setSelected = (val) => {
    const selectedItemsArray = Array.from(selectedItems).filter(
      (ci) => !ci.inert,
    );
    for (let i = 0; i < selectedItemsArray.length; i++) {
      const ci = selectedItemsArray[i];
      ci.dataset.votSelected = ci.dataset.votValue === val;
    }

    for (let i = 0; i < items.length; i++) {
      const currentItem = items[i];
      currentItem.selected = String(currentItem.value) === val;
    }
  };

  const updateItems = (newItems) => {
    items = newItems;
  };

  return {
    container,
    title,
    arrowIcon,
    labelElement,
    setTitle,
    setSelected,
    updateItems,
  };
}

function createVOTLanguageSelect(options) {
  const {
    fromTitle = undefinedPhrase,
    fromDialogTitle = undefinedPhrase,
    fromItems = [],
    fromOnSelectCB = null,
    toTitle = undefinedPhrase,
    toDialogTitle = undefinedPhrase,
    toItems = [],
    toOnSelectCB = null,
  } = options;

  const container = document.createElement("vot-block");
  container.classList.add("vot-lang-select");

  const fromSelect = createVOTSelect(fromTitle, fromDialogTitle, fromItems, {
    onSelectCb: fromOnSelectCB,
  });

  const icon = document.createElement("vot-block");
  icon.classList.add("vot-lang-select-icon");
  icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>`;

  const toSelect = createVOTSelect(toTitle, toDialogTitle, toItems, {
    onSelectCb: toOnSelectCB,
  });

  container.append(fromSelect.container, icon, toSelect.container);

  return {
    container,
    fromSelect,
    icon,
    toSelect,
  };
}

/* harmony default export */ const ui = ({
  createHeader,
  createInformation,
  createButton,
  createTextButton,
  createOutlinedButton,
  createIconButton,
  createCheckbox,
  createSlider,
  createTextfield,
  createDialog,
  createVOTButton,
  createVOTMenu,
  createVOTSelectLabel,
  createVOTSelect,
  createVOTLanguageSelect,
  updateSlider,
});

;// CONCATENATED MODULE: ./src/utils/VOTLocalizedError.js


class VOTLocalizedError extends Error {
  constructor(message) {
    super(localizationProvider.getDefault(message));
    this.name = "VOTLocalizedError";
    this.unlocalizedMessage = message;
    this.localizedMessage = localizationProvider.get(message);
  }
}

;// CONCATENATED MODULE: ./src/utils/volume.js
// element - audio / video element
function syncVolume(element, sliderVolume, otherSliderVolume, tempVolume) {
  let finalValue = sliderVolume;
  if (sliderVolume > tempVolume) {
    // sliderVolume = 100
    // tempVolume = 69
    // volume = 15
    // 100 - 69 = 31
    // 15 + 31 = 46 - final video volume
    finalValue = otherSliderVolume + (sliderVolume - tempVolume);
    finalValue = finalValue > 100 ? 100 : Math.max(finalValue, 0);

    element.volume = finalValue / 100;
  } else if (sliderVolume < tempVolume) {
    // sliderVolume = 69
    // tempVolume = 100
    // volume = 15
    // 100 - 69 = 31
    // 15 - 31 = 0 - final video volume
    finalValue = otherSliderVolume - (tempVolume - sliderVolume);
    finalValue = finalValue > 100 ? 100 : Math.max(finalValue, 0);

    element.volume = finalValue / 100;
  }

  return finalValue;
}



;// CONCATENATED MODULE: ./src/subtitles.js



function formatYandexSubtitlesTokens(line) {
  const lineEndMs = line.startMs + line.durationMs;
  return line.tokens.reduce((result, token, index) => {
    const nextToken = line.tokens[index + 1];
    let lastToken;
    if (result.length > 0) {
      lastToken = result[result.length - 1];
    }
    const alignRangeEnd = lastToken?.alignRange?.end ?? 0;
    const newAlignRangeEnd = alignRangeEnd + token.text.length;
    token.alignRange = {
      start: alignRangeEnd,
      end: newAlignRangeEnd,
    };
    result.push(token);
    if (nextToken) {
      const endMs = token.startMs + token.durationMs;
      const durationMs = nextToken.startMs
        ? nextToken.startMs - endMs
        : lineEndMs - endMs;
      result.push({
        text: " ",
        startMs: endMs,
        durationMs,
        alignRange: {
          start: newAlignRangeEnd,
          end: newAlignRangeEnd + 1,
        },
      });
    }
    return result;
  }, []);
}

function createSubtitlesTokens(line, previousLineLastToken) {
  const tokens = line.text.split(/([\n \t])/).reduce((result, tokenText) => {
    if (tokenText.length) {
      const lastToken = result[result.length - 1] ?? previousLineLastToken;
      const alignRangeStart = lastToken?.alignRange?.end ?? 0;
      const alignRangeEnd = alignRangeStart + tokenText.length;
      result.push({
        text: tokenText,
        alignRange: {
          start: alignRangeStart,
          end: alignRangeEnd,
        },
      });
    }
    return result;
  }, []);
  const tokenDurationMs = Math.floor(line.durationMs / tokens.length);
  const lineEndMs = line.startMs + line.durationMs;
  return tokens.map((token, index) => {
    const isLastToken = index === tokens.length - 1;
    const startMs = line.startMs + tokenDurationMs * index;
    const durationMs = isLastToken ? lineEndMs - startMs : tokenDurationMs;
    return {
      ...token,
      startMs,
      durationMs,
    };
  });
}

function getSubtitlesTokens(subtitles, source) {
  const result = [];
  let lastToken;
  for (let i = 0; i < subtitles.subtitles.length; i++) {
    const line = subtitles.subtitles[i];
    let tokens;
    if (line?.tokens?.length) {
      if (source === "yandex") {
        tokens = formatYandexSubtitlesTokens(line);
      } else {
        console.warn("[VOT] Unsupported subtitles tokens type: ", source);
        subtitles.containsTokens = false;
        return null;
      }
    } else {
      tokens = createSubtitlesTokens(line, lastToken);
    }
    lastToken = tokens[tokens.length - 1];
    result.push({
      ...line,
      tokens,
    });
  }
  subtitles.containsTokens = true;
  return result;
}

function formatYoutubeSubtitles(subtitles) {
  const result = {
    containsTokens: false,
    subtitles: [],
  };
  if (
    typeof subtitles !== "object" ||
    !("events" in subtitles) ||
    !Array.isArray(subtitles.events)
  ) {
    console.error("[VOT] Failed to format youtube subtitles", subtitles);
    return result;
  }
  for (let i = 0; i < subtitles.events.length; i++) {
    if (!subtitles.events[i].segs) continue;
    const text = subtitles.events[i].segs
      .map((e) => e.utf8.replace(/^( +| +)$/g, ""))
      .join(" ");
    let durationMs = subtitles.events[i].dDurationMs;
    if (
      subtitles.events[i + 1] &&
      subtitles.events[i].tStartMs + subtitles.events[i].dDurationMs >
        subtitles.events[i + 1].tStartMs
    ) {
      durationMs =
        subtitles.events[i + 1].tStartMs - subtitles.events[i].tStartMs;
    }
    if (text !== "\n") {
      result.subtitles.push({
        text,
        startMs: subtitles.events[i].tStartMs,
        durationMs,
      });
    }
  }
  return result;
}

function convertToSrtTimeFormat(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = Math.floor(seconds % 60);
  let milliseconds = Math.floor((seconds % 1) * 1000);

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")},${milliseconds.toString().padStart(3, "0")}`;
}

function jsonToSrt(jsonData) {
  let srtContent = "";
  let index = 1;
  for (const entry of jsonData.subtitles) {
    let startTime = entry.startMs / 1000.0;
    let endTime = (entry.startMs + entry.durationMs) / 1000.0;

    srtContent += `${index}\n`;
    srtContent += `${convertToSrtTimeFormat(startTime)} --> ${convertToSrtTimeFormat(endTime)}\n`;
    srtContent += `${entry.text}\n\n`;
    index++;
  }

  return srtContent.trim();
}

async function fetchSubtitles(subtitlesObject) {
  const timeoutPromise = new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          containsTokens: false,
          subtitles: [],
        }),
      5000,
    ),
  );

  const fetchPromise = (async () => {
    try {
      const response = await GM_fetch(subtitlesObject.url);
      return await response.json();
    } catch (error) {
      console.error("[VOT] Failed to fetch subtitles. Reason:", error);
      return {
        containsTokens: false,
        subtitles: [],
      };
    }
  })();

  let subtitles = await Promise.race([timeoutPromise, fetchPromise]);

  if (subtitlesObject.source === "youtube") {
    subtitles = formatYoutubeSubtitles(subtitles);
  }

  subtitles.subtitles = getSubtitlesTokens(subtitles, subtitlesObject.source);
  console.log("[VOT] subtitles:", subtitles);
  return subtitles;
}

async function subtitles_getSubtitles(client, site, videoId, requestLang) {
  const ytSubtitles =
    site.host === "youtube" ? youtubeUtils.getSubtitles() : [];
  let resolved = false;
  const yaSubtitles = await Promise.race([
    new Promise((resolve) => {
      setTimeout(() => {
        if (!resolved) {
          console.error("[VOT] Failed get yandex subtitles. Reason: timeout");
          resolve([]);
        }
      }, 5000);
    }),
    new Promise((resolve) => {
      client
        .getSubtitles({
          url: `${site.url}${videoId}`,
          requestLang,
        })
        .then((res) => {
          console.log("[VOT] Subtitles response: ", res);
          if (res.waiting) {
            console.error("[VOT] Failed get yandex subtitles");
            resolved = true;
            resolve([]);
          }

          let subtitles = res.subtitles ?? [];
          subtitles = subtitles.reduce((result, yaSubtitlesObject) => {
            if (
              yaSubtitlesObject.language &&
              !result.find((e) => {
                if (
                  e.source === "yandex" &&
                  e.language === yaSubtitlesObject.language &&
                  !e.translatedFromLanguage
                ) {
                  return e;
                }
              })
            ) {
              result.push({
                source: "yandex",
                language: yaSubtitlesObject.language,
                url: yaSubtitlesObject.url,
              });
            }
            if (yaSubtitlesObject.translatedLanguage) {
              result.push({
                source: "yandex",
                language: yaSubtitlesObject.translatedLanguage,
                translatedFromLanguage: yaSubtitlesObject.language,
                url: yaSubtitlesObject.translatedUrl,
              });
            }
            return result;
          }, []);
          resolved = true;
          resolve(subtitles);
        });
    }),
  ]);

  const subtitles = [...yaSubtitles, ...ytSubtitles].sort((a, b) => {
    if (a.source !== b.source) {
      // sort by source
      return a.source === "yandex" ? -1 : 1;
    }
    if (
      a.language !== b.language &&
      (a.language === lang || b.language === lang)
    ) {
      // sort by user language
      return a.language === lang ? -1 : 1;
    }
    if (a.source === "yandex") {
      // sort by translation
      if (a.translatedFromLanguage !== b.translatedFromLanguage) {
        // sort by translatedFromLanguage
        if (!a.translatedFromLanguage || !b.translatedFromLanguage) {
          // sort by isTranslated
          if (a.language === b.language) {
            return a.translatedFromLanguage ? 1 : -1;
          }
          return !a.translatedFromLanguage ? 1 : -1;
        }
        return a.translatedFromLanguage === requestLang ? -1 : 1;
      }
      if (!a.translatedFromLanguage) {
        // sort non translated by language
        return a.language === requestLang ? -1 : 1;
      }
    }
    if (a.source === "youtube" && a.isAutoGenerated !== b.isAutoGenerated) {
      // sort by isAutoGenerated
      return a.isAutoGenerated ? 1 : -1;
    }
    return 0;
  });
  console.log("[VOT] subtitles list", subtitles);
  return subtitles;
}

class SubtitlesWidget {
  dragging = false;
  subtitlesContainerRect = null;
  containerRect = null;
  offsetX = null;
  offsetY = null;

  lastContent = null;
  highlightWords = false;
  subtitles = null;
  maxLength = 300;
  maxLengthRegexp = /.{1,300}(?:\s|$)/g;

  constructor(video, container, site) {
    this.site = site;
    this.video = video;
    if (this.site.host === "youtube" && this.site.additionalData !== "mobile") {
      this.container = container.parentElement;
    } else {
      this.container = container;
    }

    this.votSubtitlesContainer = document.createElement("vot-block");
    this.votSubtitlesContainer.classList.add("vot-subtitles-widget");
    this.container.appendChild(this.votSubtitlesContainer);

    this.onMouseDownBound = this.onMouseDown.bind(this);
    this.onMouseUpBound = this.onMouseUp.bind(this);
    this.onMouseMoveBound = this.onMouseMove.bind(this);
    this.onTimeUpdateBound = this.onTimeUpdate.bind(this);

    document.addEventListener("mousedown", this.onMouseDownBound);
    document.addEventListener("mouseup", this.onMouseUpBound);
    document.addEventListener("mousemove", this.onMouseMoveBound);

    this.video?.addEventListener("timeupdate", this.onTimeUpdateBound);
  }

  release() {
    this.video?.removeEventListener("timeupdate", this.onTimeUpdateBound);

    document.removeEventListener("mousedown", this.onMouseDownBound);
    document.removeEventListener("mouseup", this.onMouseUpBound);
    document.removeEventListener("mousemove", this.onMouseMoveBound);

    this.votSubtitlesContainer.remove();
  }

  onMouseDown(e) {
    if (this.votSubtitlesContainer.contains(e.target)) {
      this.subtitlesContainerRect =
        this.votSubtitlesContainer.getBoundingClientRect();
      this.containerRect = this.container.getBoundingClientRect();
      this.offsetX = e.clientX - this.subtitlesContainerRect.x;
      this.offsetY = e.clientY - this.subtitlesContainerRect.y;
      this.dragging = true;
    }
  }

  onMouseUp() {
    this.dragging = false;
  }

  onMouseMove(e) {
    if (this.dragging) {
      e.preventDefault();
      const x = e.clientX - this.offsetX;
      const y = e.clientY - this.offsetY;
      const top = y >= this.containerRect.top;
      const bottom =
        y + this.subtitlesContainerRect.height <= this.containerRect.bottom;
      const left = x >= this.containerRect.left;
      const right =
        x + this.subtitlesContainerRect.width <= this.containerRect.right;

      if (top && bottom) {
        this.votSubtitlesContainer.style.top = `${y - this.containerRect.y}px`;
      } else if (!top) {
        this.votSubtitlesContainer.style.top = `${0}px`;
      } else {
        this.votSubtitlesContainer.style.top = `${
          this.containerRect.height - this.subtitlesContainerRect.height
        }px`;
      }

      if (left && right) {
        this.votSubtitlesContainer.style.left = `${x - this.containerRect.x}px`;
      } else if (!left) {
        this.votSubtitlesContainer.style.left = `${0}px`;
      } else {
        this.votSubtitlesContainer.style.left = `${
          this.containerRect.width - this.subtitlesContainerRect.width
        }px`;
      }
    }
  }

  onTimeUpdate() {
    this.update();
  }

  setContent(subtitles) {
    if (subtitles && this.video) {
      this.subtitles = subtitles;
      this.update();
    } else {
      this.subtitles = null;
      this.votSubtitlesContainer.innerHTML = "";
    }
  }

  setMaxLength(len) {
    if (typeof len === "number" && len) {
      this.maxLength = len;
      this.maxLengthRegexp = new RegExp(`.{1,${len}}(?:\\s|$)`, "g");
      this.update();
    }
  }

  setHighlightWords(value) {
    if (this.highlightWords !== !!value) {
      this.highlightWords = !!value;
      this.update();
    }
  }

  update() {
    if (!this.video) return;

    let content = "";
    let highlightWords = this.highlightWords && this.subtitles?.containsTokens;
    const time = this.video.currentTime * 1000;
    const line = this.subtitles?.subtitles?.findLast((e) => {
      return e.startMs < time && time < e.startMs + e.durationMs;
    });
    if (line) {
      let { tokens } = line;
      if (tokens.at(-1).alignRange.end > this.maxLength) {
        let chunks = [];
        let chunkStartIndex = 0;
        let chunkEndIndex = 0;
        let length = 0;
        for (let i = 0; i < tokens.length + 1; i++) {
          length += tokens[i]?.text?.length ?? 0;
          if (!tokens[i] || length > this.maxLength) {
            let t = tokens.slice(chunkStartIndex, chunkEndIndex + 1);
            if (t.at(0) && t.at(0).text === " ") t = t.slice(1);
            if (t.at(-1) && t.at(-1).text === " ") t = t.slice(0, t.length - 1);
            chunks.push({
              startMs: tokens[chunkStartIndex].startMs,
              durationMs:
                tokens[chunkEndIndex].startMs +
                tokens[chunkEndIndex].durationMs -
                tokens[chunkStartIndex].startMs,
              tokens: t,
            });
            chunkStartIndex = i;
            length = 0;
          }
          chunkEndIndex = i;
        }
        for (let index = 0; index < chunks.length; index++) {
          const chunk = chunks[index];
          if (chunk.startMs < time && time < chunk.startMs + chunk.durationMs) {
            tokens = chunk.tokens;
            break;
          }
        }
      }
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const passedMs = token.startMs + token.durationMs / 2;
        content += `<span ${
          highlightWords &&
          (time > passedMs ||
            (time > token.startMs - 100 && passedMs - time < 275))
            ? 'class="passed"'
            : ""
        }>${token.text}</span>`;
      }
    }
    if (content !== this.lastContent) {
      this.lastContent = content;
      this.votSubtitlesContainer.innerHTML = content
        ? `<vot-block class="vot-subtitles">${content.replace(
            "\\n",
            "<br>",
          )}</vot-block>`
        : "";
    }
  }
}

;// CONCATENATED MODULE: ./src/utils/coursehunterUtils.js


async function getCourseData(courseId) {
  const response = await fetch(
    `https://coursehunter.net/api/v1/course/${courseId}/lessons`,
  );
  return await response.json();
}

async function coursehunterUtils_getVideoData() {
  const courseId =
    window.course_id ??
    document.querySelector('input[name="course_id"]')?.value;

  const courseData = window.lessons ?? (await getCourseData(courseId));

  const lessonId = parseInt(
    document.querySelector(".lessons-item_active")?.dataset?.index ?? 1,
  );

  const lessonData = courseData?.[lessonId - 1];

  const { file: videoUrl, duration } = lessonData;

  utils_debug.log("coursehunter course data:", courseData);
  return {
    url: videoUrl,
    duration,
  };
}

/* harmony default export */ const coursehunterUtils = ({
  getVideoData: coursehunterUtils_getVideoData,
});

;// CONCATENATED MODULE: ./src/utils/courseraUtils.js




async function courseraUtils_getCourseData(courseId) {
  const response = await fetch(
    `https://www.coursera.org/api/onDemandCourses.v1/${courseId}`,
  );
  const resJSON = await response.json();
  return resJSON?.elements?.[0];
}

function getSubtitlesFileURL(captions, detectedLanguage, responseLang) {
  let subtitle = captions?.find(
    (caption) => langTo6391(caption.srclang) === detectedLanguage,
  );

  if (!subtitle) {
    subtitle =
      captions?.find(
        (caption) => langTo6391(caption.srclang) === responseLang,
      ) || captions?.[0];
  }

  return subtitle?.src;
}

function getVideoFileURL(sources) {
  // const source = sources?.find((src) => src.type === "video/webm" || src.type === "video/mp4",
  const source = sources?.find((src) => src.type === "video/mp4");

  return source?.src;
}

function courseraUtils_getPlayerData() {
  return courseraUtils_getPlayer()?.player;
}

function courseraUtils_getPlayer() {
  return document.querySelector(".vjs-v6");
}

// Get the video data from the player
async function courseraUtils_getVideoData(responseLang = "en") {
  let translationHelp = null;
  const data = courseraUtils_getPlayerData();

  const { duration } = data?.cache_ || {};
  const { courseId, tracks, sources } = data?.options_ || {};

  const videoURL = getVideoFileURL(sources);
  const courseData = await courseraUtils_getCourseData(courseId);

  let detectedLanguage = courseData?.primaryLanguageCodes?.[0];
  detectedLanguage = detectedLanguage ? langTo6391(detectedLanguage) : "en";

  if (!availableLangs.includes(detectedLanguage)) {
    detectedLanguage = "en";
  }

  const subtitlesURL = getSubtitlesFileURL(
    tracks,
    detectedLanguage,
    responseLang,
  );
  console.log(`videoURL: ${videoURL}, subtitlesURL: ${subtitlesURL}`);

  if (subtitlesURL && videoURL) {
    translationHelp = [
      {
        target: "video_file_url",
        targetUrl: videoURL,
      },
      {
        target: "subtitles_file_url",
        targetUrl: `https://www.coursera.org${subtitlesURL}`,
      },
    ];
  } else if (videoURL && !subtitlesURL) {
    console.warn(
      "[VOT] Subtitles files not found. Using the link only to the video file.",
    );
    translationHelp = {
      url: videoURL,
    };
  } else {
    console.error(
      `Failed to find subtitlesURL or videoURL. videoURL: ${videoURL}, subtitlesURL: ${subtitlesURL}`,
    );
  }

  const videoData = {
    duration,
    detectedLanguage,
    translationHelp,
  };

  utils_debug.log("coursera video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

/* harmony default export */ const courseraUtils = ({
  getPlayer: courseraUtils_getPlayer,
  getPlayerData: courseraUtils_getPlayerData,
  getVideoData: courseraUtils_getVideoData,
});

;// CONCATENATED MODULE: ./src/utils/udemyUtils.js





const udemyAPIURL = "https://www.udemy.com/api-2.0";
const accessTokenLife = 2_592_000_000; // 30 days

async function getCourseLang(courseId) {
  const response = await fetch(
    `${udemyAPIURL}/courses/${courseId}/?` +
      new URLSearchParams({
        "fields[course]": "locale",
        use_remote_version: "true",
        caching_intent: "true",
      }),
  );
  return await response.json();
}

function checkUdemyTokenExpire(expires) {
  return expires + accessTokenLife > new Date().getTime();
}

async function getLectureData(udemyData, courseId, lectureId) {
  // reference: https://greasyfork.org/ru/scripts/422576-udemy-subtitle-downloader-v3/code
  if (!checkUdemyTokenExpire(udemyData.expires) || !udemyData.accessToken) {
    console.error(localizationProvider.get("udemyAccessTokenExpired"));
    return undefined;
  }

  const bearerToken = `Bearer ${udemyData.accessToken}`;
  const response = await fetch(
    `${udemyAPIURL}/users/me/subscribed-courses/${courseId}/lectures/${lectureId}/?` +
      new URLSearchParams({
        "fields[lecture]": "asset",
        "fields[asset]": "length,media_sources,captions",
      }),
    {
      headers: {
        "x-udemy-authorization": bearerToken,
        authorization: bearerToken,
      },
    },
  );
  return await response.json();
}

function udemyUtils_getSubtitlesFileURL(captions, detectedLanguage, responseLang) {
  let subtitle = captions?.find(
    (caption) => langTo6391(caption.locale_id) === detectedLanguage,
  );

  if (!subtitle) {
    subtitle =
      captions?.find(
        (caption) => langTo6391(caption.locale_id) === responseLang,
      ) || captions?.[0];
  }

  return subtitle?.url;
}

function getVideoFileURLFromAPI(sources) {
  const source = sources?.find(
    (src) => src.type === "video/webm" || src.type === "video/mp4",
  );

  return source?.src;
}

function udemyUtils_getPlayerData() {
  return udemyUtils_getPlayer()?.player;
}

function getModuleData() {
  const moduleArgs = document.querySelector(
    ".ud-app-loader[data-module-id='course-taking']",
  )?.dataset?.moduleArgs;
  if (!moduleArgs) {
    console.error(localizationProvider.get("udemyModuleArgsNotFound"));
    return {};
  }
  return JSON.parse(moduleArgs);
}

function getLectureId() {
  return /learn\/lecture\/([^/]+)/.exec(window.location.pathname)?.[1];
}

function udemyUtils_getPlayer() {
  return document.querySelector(".vjs-v7");
}

function getVideoURLFromPlayer() {
  const src = udemyUtils_getPlayer()?.querySelector("video")?.src;
  return src?.startsWith("blob:") ? false : src;
}

// Get the video data from the player
async function udemyUtils_getVideoData(udemyData, responseLang = "en") {
  let translationHelp = null;
  const data = udemyUtils_getPlayerData();
  utils_debug.log("udemyData", udemyData);

  const moduleData = getModuleData();
  utils_debug.log("moduleData: ", moduleData);

  const courseId = moduleData.courseId;
  const lectureId = getLectureId();
  utils_debug.log(`CourseId: ${courseId}, lectureId: ${lectureId}`);

  const courseLang = await getCourseLang(courseId);
  utils_debug.log("courseLang Data:", courseLang);
  const lectureData = await getLectureData(udemyData, courseId, lectureId);
  console.log("lecture Data:", lectureData);

  let detectedLanguage = courseLang?.locale?.locale;
  detectedLanguage = detectedLanguage ? langTo6391(detectedLanguage) : "en";

  if (!availableLangs.includes(detectedLanguage)) {
    detectedLanguage = "en";
  }

  const duration = lectureData?.asset?.length || data?.cache_?.duration;
  const videoURL =
    getVideoFileURLFromAPI(lectureData?.asset?.media_sources) ||
    getVideoURLFromPlayer();
  const subtitlesURL = udemyUtils_getSubtitlesFileURL(
    lectureData?.asset?.captions,
    detectedLanguage,
    responseLang,
  );

  console.log(`videoURL: ${videoURL}, subtitlesURL: ${subtitlesURL}`);

  if (subtitlesURL && videoURL) {
    translationHelp = [
      {
        target: "video_file_url",
        targetUrl: videoURL,
      },
      {
        target: "subtitles_file_url",
        targetUrl: subtitlesURL,
      },
    ];
  } else if (videoURL && !subtitlesURL) {
    console.warn(
      "[VOT] Subtitles files not found. Using the link only to the video file.",
    );
    translationHelp = {
      url: videoURL,
    };
  } else {
    console.error(
      `Failed to find subtitlesURL or videoURL. videoURL: ${videoURL}, subtitlesURL: ${subtitlesURL}`,
    );
  }

  const videoData = {
    duration,
    detectedLanguage,
    translationHelp,
  };

  utils_debug.log("udemy video data:", videoData);
  console.log("[VOT] Detected language: ", videoData.detectedLanguage);
  return videoData;
}

/* harmony default export */ const udemyUtils = ({
  getPlayer: udemyUtils_getPlayer,
  getPlayerData: udemyUtils_getPlayerData,
  getVideoData: udemyUtils_getVideoData,
  getModuleData,
  getCourseLang,
  getLectureData,
});

;// CONCATENATED MODULE: ./src/utils/bannedvideoUtils.js


async function getVideoInfo(videoId) {
  return await fetch(`https://api.banned.video/graphql`, {
    method: "POST",
    body: JSON.stringify({
      operationName: "GetVideo",
      query: `query GetVideo($id: String!) {
          getVideo(id: $id) {
            ...DisplayVideoFields
            videoUrl: directUrl
            live
          }
        }

        fragment DisplayVideoFields on Video {
          title
          description: summary
          duration: videoDuration
        }`,
      variables: {
        id: videoId,
      },
    }),
    headers: {
      "User-Agent": "bannedVideoFrontEnd",
      "apollographql-client-name": "banned-web",
      "apollographql-client-version": "1.3",
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return {
        data: {
          getVideo: {},
        },
      };
    });
}

async function bannedvideoUtils_getVideoData(videoId) {
  const videoData = await getVideoInfo(videoId);

  utils_debug.log("banned.video video data:", videoData);

  const { videoUrl, duration, live, description, title } =
    videoData.data.getVideo;

  // TODO: Add detect language from title + description

  return {
    url: videoUrl,
    duration,
    live,
    title,
    description,
  };
}

/* harmony default export */ const bannedvideoUtils = ({
  getVideoData: bannedvideoUtils_getVideoData,
});

;// CONCATENATED MODULE: ./src/utils/crypto.js
async function crypto_getHmacSha1(hmacKey, salt) {
  try {
    const utf8Encoder = new TextEncoder("utf-8");
    salt = utf8Encoder.encode(salt);
    const key = await window.crypto.subtle.importKey(
      "raw",
      utf8Encoder.encode(hmacKey),
      { name: "HMAC", hash: { name: "SHA-1" } },
      false,
      ["sign", "verify"],
    );
    const signature = await window.crypto.subtle.sign("HMAC", key, salt);
    return btoa(String.fromCharCode(...new Uint8Array(signature)));
  } catch (err) {
    console.error(err);
    return false;
  }
}

;// CONCATENATED MODULE: ./src/utils/weverseUtils.js



const API_ORIGIN = "https://global.apis.naver.com/weverse/wevweb"; // find as REACT_APP_API_GW_ORIGIN in main.<hash>.js
const API_APP_ID = "be4d79eb8fc7bd008ee82c8ec4ff6fd4"; // find as REACT_APP_API_APP_ID in main.<hash>.js
const API_HMAC_KEY = "1b9cb6378d959b45714bec49971ade22e6e24e42"; // find as c.active near `createHmac('sha1'...`  in main.<hash>.js

async function createHash(pathname) {
  // pathname example: /post/v1.0/post-3-142049908/preview?fieldSet=postForPreview...
  const timestamp = Date.now();

  // example salt is /video/v1.1/vod/67134/inKey?gcc=RU&appId=be4d79eb8fc7bd008ee82c8ec4ff6fd4&language=en&os=WEB&platform=WEB&wpf=pc1707527163588
  let salt = pathname.substring(0, Math.min(255, pathname.length)) + timestamp;

  const sign = await crypto_getHmacSha1(API_HMAC_KEY, salt);

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

async function weverseUtils_getVideoInfo(infraVideoId, inkey, serviceId) {
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

async function weverseUtils_getVideoData() {
  // ! When translating using a regular link (like this https://weverse.io/aespa/live/3-142049908),
  // ! we will get an error, so we have to do this

  const postId = /([^/]+)\/(live|media)\/([^/]+)/.exec(
    new URL(window.location).pathname,
  )?.[3];

  const videoPreview = await getVideoPreview(postId);
  if (!videoPreview) {
    return undefined;
  }

  utils_debug.log("weverse video preview data:", videoPreview);

  const { videoId, serviceId, infraVideoId } = videoPreview.extension.video;
  if (!(videoId && serviceId && infraVideoId)) {
    return false;
  }

  const inkeyData = await getVideoInKey(videoId);
  utils_debug.log("weverse video inKey data:", videoPreview);
  if (!inkeyData) {
    return false;
  }

  const videoInfo = await weverseUtils_getVideoInfo(
    infraVideoId,
    inkeyData.inKey,
    serviceId,
  );
  utils_debug.log("weverse video info:", videoInfo);

  const videoItem = extractVideoInfo(videoInfo.videos.list);
  if (!videoItem) {
    return false;
  }

  return {
    url: videoItem.source,
    duration: videoItem.duration,
  };
}

/* harmony default export */ const weverseUtils = ({
  getVideoData: weverseUtils_getVideoData,
});

;// CONCATENATED MODULE: ./src/config/sites.js
/* eslint-disable sonarjs/no-duplicate-string */


const sites_sites = () => {
  return [
    {
      additionalData: "mobile",
      host: "youtube",
      url: "https://youtu.be/",
      match: /^m.youtube.com$/,
      selector: "shorts-video #player",
    },
    {
      additionalData: "mobile",
      host: "youtube",
      url: "https://youtu.be/",
      match: /^m.youtube.com$/,
      selector: ".player-container",
    },
    {
      host: "youtube",
      url: "https://youtu.be/",
      match: /^(www.)?youtube(-nocookie|kids)?.com$/,
      selector: ".html5-video-container:not(#inline-player *)",
    },
    {
      host: "tiktok",
      url: "https://www.tiktok.com/",
      match: /^(www.)?tiktok.com$/,
      selector: null,
    },
    {
      host: "proxitok",
      url: "https://www.tiktok.com/",
      match: alternativeUrls_sitesProxiTok,
      selector: ".column.has-text-centered",
    },
    {
      host: "twitch",
      url: "https://twitch.tv/",
      match: [
        /^m.twitch.tv$/,
        /^www.twitch.tv$/,
        /^clips.twitch.tv$/,
        /^player.twitch.tv$/,
      ],
      selector: ".video-ref, main > div > section > div > div > div",
    },
    {
      host: "xvideos",
      url: "https://www.xvideos.com/",
      match: /^www.(xvideos|xv-ru).com$/,
      selector: ".video-bg-pic",
    },
    {
      host: "pornhub",
      url: "https://rt.pornhub.com/view_video.php?viewkey=",
      match: /^[a-z]+.pornhub.com$/,
      selector: ".mainPlayerDiv > .video-element-wrapper-js > div",
    },
    {
      additionalData: "embed",
      host: "pornhub",
      url: "https://rt.pornhub.com/view_video.php?viewkey=",
      match: (url) =>
        url.host.includes("pornhub.com") && url.pathname.startsWith("/embed/"),
      selector: "#player",
    },
    {
      additionalData: "mobile",
      host: "vk",
      url: "https://vk.com/video?z=",
      match: /^m.vk.(com|ru)$/,
      selector: "vk-video-player",
      shadowRoot: true,
    },
    {
      additionalData: "clips",
      host: "vk",
      url: "https://vk.com/video?z=",
      match: /^(www.|m.)?vk.(com|ru)$/,
      selector: 'div[data-testid="clipcontainer-video"]',
    },
    {
      host: "vk",
      url: "https://vk.com/video?z=",
      match: /^(www.|m.)?vk.(com|ru)$/,
      selector: ".videoplayer_media",
    },
    {
      host: "vimeo",
      url: "https://vimeo.com/",
      match: /^vimeo.com$/,
      selector: ".player",
    },
    {
      additionalData: "embed",
      host: "vimeo",
      url: "https://player.vimeo.com/",
      match: /^player.vimeo.com$/,
      selector: ".player",
    },
    {
      host: "ok.ru",
      url: "https://ok.ru/video/",
      match: /^ok.ru$/,
      selector: ".html5-vpl_vid",
    },
    {
      host: "nine_gag",
      url: "https://9gag.com/gag/",
      match: /^9gag.com$/,
      selector: ".video-post",
    },
    // {
    //   host: "coub",
    //   url: "https://coub.com/view/",
    //   match: /^coub.com$/,
    //   selector: ".viewer__player",
    // },
    {
      host: "bitchute",
      url: "https://www.bitchute.com/video/",
      match: /^(www.)?bitchute.com$/,
      selector: ".video-js",
    },
    {
      host: "rutube",
      url: "https://rutube.ru/video/",
      match: /^rutube.ru$/,
      selector: ".video-player > div > div > div:nth-child(2)",
    },
    {
      additionalData: "embed",
      host: "rutube",
      url: "https://rutube.ru/video/",
      match: /^rutube.ru$/,
      selector: "#app > div > div",
    },
    {
      host: "bilibili",
      url: "https://www.bilibili.com/video/",
      match: /^(www|m|player).bilibili.com$/,
      selector: ".bpx-player-video-wrap",
    },
    // Добавляет лишние видео в обработчик
    {
      additionalData: "old", // /blackboard/webplayer/embed-old.html
      host: "bilibili",
      url: "https://www.bilibili.com/video/",
      match: /^(www|m).bilibili.com$/,
      selector: null,
    },
    {
      host: "twitter",
      url: "https://twitter.com/i/status/",
      match: /^twitter.com$/,
      selector: 'div[data-testid="videoComponent"] > div:nth-child(1) > div',
    },
    {
      host: "mail_ru",
      url: "https://my.mail.ru/",
      match: /^my.mail.ru$/,
      selector: "#b-video-wrapper",
    },
    {
      // ONLY IF YOU LOGINED TO COURSERA /learn/NAME/lecture/XXXX
      host: "coursera",
      url: "https://www.coursera.org/",
      match: /coursera.org$/,
      selector: ".vjs-v6",
    },
    {
      // ONLY IF YOU LOGINED TO UDEMY /course/NAME/learn/lecture/XXXX
      host: "udemy",
      url: "https://www.udemy.com/",
      match: /udemy.com$/,
      selector:
        'div[data-purpose="curriculum-item-viewer-content"] > section > div > div > div > div:nth-of-type(2)',
    },
    {
      // Sites host Invidious. I tested the performance only on invidious.kevin.rocks, youtu.be and inv.vern.cc
      host: "invidious",
      url: "https://youtu.be/",
      match: alternativeUrls_sitesInvidious,
      selector: "#player",
    },
    {
      // Sites host Piped. I tested the performance only on piped.video
      host: "piped",
      url: "https://youtu.be/",
      match: alternativeUrls_sitesPiped,
      selector: ".shaka-video-container",
    },
    {
      host: "rumble",
      url: "https://rumble.com/",
      match: /^rumble.com$/,
      selector: "#videoPlayer > .videoPlayer-Rumble-cls > div",
    },
    {
      host: "eporner",
      url: "https://www.eporner.com/",
      match: /^(www.)?eporner.com$/,
      selector: ".vjs-v7",
    },
    {
      host: "peertube",
      url: "stub", // This is a stub. The present value is set using window.location.origin. Check "src/index.js:videoObserver.onVideoAdded.addListener" to get more info
      match: alternativeUrls_sitesPeertube,
      selector: ".vjs-v7",
    },
    {
      host: "dailymotion",
      url: "https://dai.ly/", // This is a stub. The present value is set using window.location.origin. Check "src/index.js:videoObserver.onVideoAdded.addListener" to get more info
      match: /^geo.dailymotion.com$/,
      selector: ".player",
    },
    {
      host: "trovo",
      url: "https://trovo.live/s/",
      match: /^trovo.live$/,
      selector: ".player-video",
    },
    {
      host: "yandexdisk",
      url: "https://yadi.sk/i/",
      match: /^disk.yandex.ru$/,
      selector: ".video-player__player > div:nth-child(1)",
    },
    {
      host: "coursehunter",
      url: "https://coursehunter.net/course/",
      match: /^coursehunter.net$/,
      selector: "#oframeplayer > pjsdiv:nth-of-type(1)",
    },
    {
      host: "googledrive",
      url: "https://drive.google.com/file/d/",
      match: /^youtube.googleapis.com$/,
      selector: ".html5-video-container",
    },
    {
      host: "bannedvideo",
      url: "https://banned.video/watch?id=",
      match: /^(www.)?banned.video$/,
      selector: ".vjs-v7",
    },
    {
      host: "facebook",
      url: "https://facebook.com/",
      match: (url) =>
        url.host.includes("facebook.com") && url.pathname.includes("/videos/"),
      selector: 'div[role="main"] div[data-pagelet$="video" i]',
    },
    {
      additionalData: "reels",
      host: "facebook",
      url: "https://facebook.com/",
      match: (url) =>
        url.host.includes("facebook.com") && url.pathname.includes("/reel/"),
      selector: 'div[role="main"]',
    },
    {
      host: "weverse",
      url: "https://weverse.io/",
      match: /^weverse.io$/,
      selector: ".webplayer-internal-source-wrapper",
    },
    {
      host: "newgrounds",
      url: "https://www.newgrounds.com/",
      match: /^www.newgrounds.com$/,
      selector: ".ng-video-player",
    },
    {
      // TODO: Добавить поддержку tips (сделать через m3u8 т.к. обычная ссылка не принимается) и платных курсов
      host: "egghead",
      url: "https://egghead.io/",
      match: /^egghead.io$/,
      selector: ".cueplayer-react-video-holder",
    },
    {
      host: "youku",
      url: "https://v.youku.com/",
      match: /^v.youku.com$/,
      selector: "#ykPlayer",
    },
    {
      host: "archive",
      url: "https://archive.org/details/",
      match: /^archive.org$/,
      selector: ".jw-media",
    },
    {
      host: "directlink",
      url: "stub", // This is a stub. The present value is set using window.location.origin. Check "src/index.js:videoObserver.onVideoAdded.addListener" to get more info
      match: (url) => /([^.]+).mp4/.test(url.pathname),
      selector: null,
    },
    {
      host: "patreon",
      url: "https://www.patreon.com/",
      match: /^www.patreon.com$/,
      selector:
        'div[data-tag="post-card"] div[elevation="subtle"] > div > div > div > div',
    },
    // пока рано
    // {
    //   host: "sibnet",
    //   url: "https://video.sibnet.ru/",
    //   match: /^video.sibnet.ru$/,
    //   selector: ".video-js", // #video_html5_wrapper
    // },
    // Нужно куда-то заливать данные о плейлисте
    // {
    //   host: "epicgames",
    //   url: "https://dev.epicgames.com/community/learning/tutorials/",
    //   match: /^dev.epicgames.com$/,
    //   selector: "#vjs_video_3",
    // },
  ];
};

/* harmony default export */ const config_sites = (sites_sites());

// EXTERNAL MODULE: ./node_modules/requestidlecallback-polyfill/index.js
var requestidlecallback_polyfill = __webpack_require__("./node_modules/requestidlecallback-polyfill/index.js");
;// CONCATENATED MODULE: ./src/utils/EventImpl.js
class EventImpl {
  constructor() {
    this.listeners = new Set();
  }
  hasListener(e) {
    return this.listeners.has(e);
  }
  dispatchToListener(handler, ...args) {
    try {
      handler(...args);
    } catch (exception) {
      console.error("[VOT]", exception);
    }
  }
  addListener(handler) {
    if (this.hasListener(handler)) {
      throw new Error("[VOT] The listener has already been added.");
    }
    this.listeners.add(handler);
  }
  removeListener(handler) {
    if (!this.hasListener(handler)) {
      throw new Error("[VOT] The listener has not been added yet.");
    }
    this.listeners.delete(handler);
  }
  dispatch(...args) {
    for (const handler of Array.from(this.listeners)) {
      this.dispatchToListener(handler, ...args);
    }
  }
}

;// CONCATENATED MODULE: ./src/utils/VideoObserver.js




function filterVideoNodes(nodes) {
  return Array.from(nodes).flatMap((node) => {
    if (node instanceof HTMLVideoElement) {
      return [node];
    }
    if (node instanceof HTMLElement) {
      return Array.from(node.querySelectorAll("video"));
    }
    return node.shadowRoot
      ? Array.from(node.shadowRoot.querySelectorAll("video"))
      : [];
  });
}

const adKeywords =
  /advertise|promo|sponsor|banner|commercial|preroll|midroll|postroll|ad-container|sponsored/i;

function isAdVideo(video) {
  if (adKeywords.test(video.className) || adKeywords.test(video.title)) {
    return true;
  }

  let parent = video.parentElement;
  while (parent) {
    if (adKeywords.test(parent.className) || adKeywords.test(parent.id)) {
      return true;
    }
    parent = parent.parentElement;
  }

  return false;
}

function isVideoReady(video) {
  return video.readyState >= 3;
}

function waitForVideoReady(video, callback) {
  function checkVideoState() {
    if (isVideoReady(video)) {
      callback(video);
    } else {
      requestAnimationFrame(checkVideoState);
    }
  }

  checkVideoState();
}

class VideoObserver {
  constructor() {
    this.videoCache = new Set();
    this.onVideoAdded = new EventImpl();
    this.onVideoRemoved = new EventImpl();
    this.observer = new MutationObserver((mutationsList) => {
      window.requestIdleCallback(
        () => {
          for (let i = 0; i < mutationsList.length; i++) {
            const mutation = mutationsList[i];
            if (mutation.type !== "childList") continue;

            const addedNodes = filterVideoNodes(mutation.addedNodes);
            for (let j = 0; j < addedNodes.length; j++) {
              this.checkAndHandleVideo(addedNodes[j]);
            }

            const removedNodes = filterVideoNodes(mutation.removedNodes);
            for (let k = 0; k < removedNodes.length; k++) {
              this.handleVideoRemoved(removedNodes[k]);
            }
          }
        },
        { timeout: 1000 },
      );
    });

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            this.handleIntersectingVideo(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );
  }

  enable() {
    this.observer.observe(document, {
      childList: true,
      subtree: true,
    });
    const videos = document.querySelectorAll("video");
    for (let i = 0; i < videos.length; i++) {
      this.checkAndHandleVideo(videos[i]);
    }
  }

  disable() {
    this.observer.disconnect();
    this.intersectionObserver.disconnect();
  }

  checkAndHandleVideo(video) {
    if (this.videoCache.has(video)) {
      return;
    }
    this.videoCache.add(video);
    this.intersectionObserver.observe(video);
  }

  handleIntersectingVideo(video) {
    this.intersectionObserver.unobserve(video);
    if (isAdVideo(video)) {
      utils_debug.log("The promotional video was ignored", video);
      return;
    }
    waitForVideoReady(video, (readyVideo) => {
      this.handleVideoAdded(readyVideo);
    });
  }

  handleVideoAdded = (video) => {
    this.onVideoAdded.dispatch(video);
  };

  handleVideoRemoved = (video) => {
    if (!document.contains(video)) {
      this.videoCache.delete(video);
      this.onVideoRemoved.dispatch(video);
    }
  };
}

;// CONCATENATED MODULE: ./src/index.js




























const browserInfo = es5.getParser(window.navigator.userAgent).getResult();
const dontTranslateMusic = false; // Пока не придумал как стоит реализовать
const sitesChromiumBlocked = [...alternativeUrls_sitesInvidious, ...alternativeUrls_sitesPiped];
const videoLipSyncEvents = [
  "playing",
  "ratechange",
  "play",
  "waiting",
  "pause",
];

function genOptionsByOBJ(obj, conditionString) {
  return obj.map((code) => ({
    label: localizationProvider.get("langs")[code] ?? code.toUpperCase(),
    value: code,
    selected: conditionString === code,
  }));
}

const votOpts = {
  headers:
     true
      ? {}
      : 0,
  fetchFn: GM_fetch,
  hostVOT: votBackendUrl,
  host:  true ? proxyWorkerHost : 0,
};

class VideoHandler {
  // translate properties
  translateFromLang = "en"; // default language of video
  translateToLang = lang; // default language of audio response

  timer;

  ytData = "";
  videoData = "";
  firstPlay = true;
  audio = new Audio();
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = this.audioContext.createGain();

  hls = initHls(); // debug enabled only in dev mode
  votClient = new ( true ? VOTWorkerClient : 0)(
    votOpts,
  );

  videoTranslations = [];
  videoTranslationTTL = 7200;

  downloadTranslationUrl = null;
  downloadSubtitlesUrl = null;

  autoRetry;
  streamPing;
  volumeOnStart;
  tempOriginalVolume; // temp video volume for syncing
  tempVolume; // temp translation volume for syncing
  firstSyncVolume = true; // used for skip 1st syncing with observer

  subtitlesList = [];
  subtitlesListVideoId = null;

  videoLastSrcObject = null;

  // button move
  dragging;

  constructor(video, container, site) {
    utils_debug.log(
      "[VideoHandler] add video:",
      video,
      "container:",
      container,
      this,
    );
    this.video = video;
    this.container = container;
    this.site = site;
    this.stopTranslationBound = this.stopTranslation.bind(this);
    this.handleVideoEventBound = this.handleVideoEvent.bind(this);
    this.changeOpacityOnEventBound = this.changeOpacityOnEvent.bind(this);
    this.resetTimerBound = this.resetTimer.bind(this);
    this.init();
  }

  async translateVideoImpl(
    url,
    videoId,
    duration,
    requestLang,
    responseLang,
    translationHelp = null,
  ) {
    clearTimeout(this.autoRetry);
    utils_debug.log(
      `Translate video (url: ${url}, duration: ${duration}, requestLang: ${requestLang}, responseLang: ${responseLang})`,
    );

    if (getVideoId(this.site.host, this.video) !== videoId) {
      return null;
    }

    try {
      const res = await this.votClient.translateVideo({
        url,
        duration,
        requestLang,
        responseLang,
        translationHelp,
      });
      utils_debug.log("Translate video result", res);
      if (res.translated && res.remainingTime < 1) {
        utils_debug.log("Video translation finished with this data: ", res);
        return res;
      }

      await this.updateTranslationErrorMsg(
        res.remainingTime > 0
          ? secsToStrTime(res.remainingTime)
          : res.message ??
              localizationProvider.get("translationTakeFewMinutes"),
      );
    } catch (err) {
      console.error("[VOT] Failed to translate video", err);
      await this.updateTranslationErrorMsg(err.res?.message ?? err.message);
      return null;
    }

    return new Promise((resolve) => {
      const timeoutDuration = this.subtitlesList.some(
        (item) => item.source === "yandex",
      )
        ? 20_000
        : 30_000;
      this.autoRetry = setTimeout(async () => {
        const res = await this.translateVideoImpl(
          url,
          videoId,
          duration,
          requestLang,
          responseLang,
          translationHelp,
        );
        if (!res || (res.translated && res.remainingTime < 1)) {
          resolve(res);
        }
      }, timeoutDuration);
    });
  }

  async translateStreamImpl(url, videoId, requestLang, responseLang) {
    clearTimeout(this.autoRetry);
    utils_debug.log(
      `Translate stream (url: ${url}, requestLang: ${requestLang}, responseLang: ${responseLang})`,
    );

    if (getVideoId(this.site.host, this.video) !== videoId) {
      return null;
    }

    try {
      const res = await this.votClient.translateStream({
        url,
        requestLang,
        responseLang,
      });
      utils_debug.log("Translate stream result", res);
      if (!res.translated && res.interval === 10) {
        await this.updateTranslationErrorMsg(
          localizationProvider.get("translationTakeFewMinutes"),
        );
        return new Promise((resolve) => {
          this.autoRetry = setTimeout(async () => {
            const res = await this.translateStreamImpl(
              url,
              videoId,
              requestLang,
              responseLang,
            );
            if (!res || !(!res.translated && res.interval === 10)) {
              resolve(res);
            }
          }, res.interval * 1000);
        });
      }

      if (res.message) {
        utils_debug.log(`Stream translation aborted! Message: ${res.message}`);
        throw new VOTLocalizedError("streamNoConnectionToServer");
      }

      if (!res.result) {
        utils_debug.log("Failed to find translation result! Data:", res);
        throw new VOTLocalizedError("audioNotReceived");
      }

      utils_debug.log("Stream translated successfully. Running...", res);

      this.streamPing = setInterval(async () => {
        utils_debug.log("Ping stream translation", res.pingId);
        this.votClient.pingStream({
          pingId: res.pingId,
        });
      }, res.interval * 1000);

      return res;
    } catch (err) {
      console.error("[VOT] Failed to translate stream", err);
      await this.updateTranslationErrorMsg(err.res?.message ?? err.message);
      return null;
    }
  }

  async autoTranslate() {
    if (
      this.site.host === "youtube" &&
      dontTranslateMusic &&
      youtubeUtils.isMusic()
    ) {
      return;
    }
    if (
      !(
        this.firstPlay &&
        this.data.autoTranslate === 1 &&
        this.videoData.videoId
      )
    )
      return;
    this.firstPlay = false;
    try {
      await this.translateExecutor(this.videoData.videoId);
    } catch (err) {
      console.error("[VOT]", err);
      this.transformBtn(
        "error",
        err?.name === "VOTLocalizedError" ? err.localizedMessage : err,
      );
    }
  }

  async init() {
    if (this.initialized) return;

    const audioProxyDefault =
      lang === "uk" && "cloudflare" === "cloudflare" ? 1 : 0;

    const dataPromises = {
      autoTranslate: votStorage.get("autoTranslate", 0, true),
      dontTranslateLanguage: votStorage.get("dontTranslateLanguage", lang),
      dontTranslateYourLang: votStorage.get("dontTranslateYourLang", 1, true),
      autoSetVolumeYandexStyle: votStorage.get(
        "autoSetVolumeYandexStyle",
        1,
        true,
      ),
      autoVolume: votStorage.get("autoVolume", defaultAutoVolume, true),
      buttonPos: votStorage.get("buttonPos", "default"),
      showVideoSlider: votStorage.get("showVideoSlider", 1, true),
      syncVolume: votStorage.get("syncVolume", 0, true),
      subtitlesMaxLength: votStorage.get("subtitlesMaxLength", 300, true),
      highlightWords: votStorage.get("highlightWords", 0, true),
      responseLanguage: votStorage.get("responseLanguage", lang),
      defaultVolume: votStorage.get("defaultVolume", 100, true),
      udemyData: votStorage.get("udemyData", { accessToken: "", expires: 0 }),
      audioProxy: votStorage.get("audioProxy", audioProxyDefault, true),
      showPiPButton: votStorage.get("showPiPButton", 0, true),
      translateAPIErrors: votStorage.get("translateAPIErrors", 1, true),
      translationService: votStorage.get(
        "translationService",
        defaultTranslationService,
      ),
      detectService: votStorage.get("detectService", defaultDetectService),
      m3u8ProxyHost: votStorage.get("m3u8ProxyHost", m3u8ProxyHost),
      proxyWorkerHost: votStorage.get("proxyWorkerHost", proxyWorkerHost),
      audioBooster: votStorage.get("audioBooster", 0, true),
    };

    this.data = Object.fromEntries(
      await Promise.all(
        Object.entries(dataPromises).map(async ([key, promise]) => [
          key,
          await promise,
        ]),
      ),
    );

    console.log("[db] data from db: ", this.data);

    this.subtitlesWidget = new SubtitlesWidget(
      this.video,
      this.container,
      this.site,
    );
    this.subtitlesWidget.setMaxLength(this.data.subtitlesMaxLength);
    this.subtitlesWidget.setHighlightWords(this.data.highlightWords);

    // audio booster
    this.audio.crossOrigin = "anonymous";
    this.gainNode.connect(this.audioContext.destination);
    this.audioSource = this.audioContext.createMediaElementSource(this.audio);
    this.audioSource.connect(this.gainNode);

    this.initUI();
    this.initUIEvents();

    if (true) {
      this.votClient.host = this.data.proxyWorkerHost;
    }

    const videoHasNoSource =
      !this.video.src && !this.video.currentSrc && !this.video.srcObject;
    this.votButton.container.hidden = videoHasNoSource;
    if (videoHasNoSource) {
      this.votMenu.container.hidden = true;
    } else {
      this.videoData = await this.getVideoData();
      this.setSelectMenuValues(
        this.videoData.detectedLanguage,
        this.data.responseLanguage ?? "ru",
      );
    }

    await this.updateSubtitles();
    await this.changeSubtitlesLang("disabled");
    await this.autoTranslate();
    this.translateToLang = this.data.responseLanguage ?? "ru";

    this.initExtraEvents();

    this.initialized = true;
  }

  transformBtn(status = "none", text) {
    this.votButton.container.dataset.status = status;
    this.votButton.container.dataset.translating =
      status === "error"
        ? text.includes(localizationProvider.get("translationTake"))
        : false;
    this.votButton.label.innerHTML = text;
    this.votButton.container.title = status === "error" ? text : "";
  }

  initUI() {
    // VOT Button
    {
      this.votButton = ui.createVOTButton(
        localizationProvider.get("translateVideo"),
      );
      // use an additional check because sometimes this.video.clientWidth = 0

      if (
        this.data?.buttonPos &&
        this.data?.buttonPos !== "default" &&
        this.container.clientWidth &&
        this.container.clientWidth > 550
      ) {
        this.votButton.container.dataset.direction = "column";
        this.votButton.container.dataset.position = this.data?.buttonPos;
      } else {
        this.votButton.container.dataset.direction = "row";
        this.votButton.container.dataset.position = "default";
      }
      this.container.appendChild(this.votButton.container);

      this.votButton.pipButton.hidden =
        !isPiPAvailable() || !this.data?.showPiPButton;
      this.votButton.separator2.hidden =
        !isPiPAvailable() || !this.data?.showPiPButton;

      this.votButton.container.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      });
    }

    // VOT Menu
    {
      this.votMenu = ui.createVOTMenu(localizationProvider.get("VOTSettings"));
      this.votMenu.container.dataset.position =
        this.container.clientWidth && this.container.clientWidth > 550
          ? this.data?.buttonPos
          : "default";
      this.container.appendChild(this.votMenu.container);

      this.votDownloadButton = ui.createIconButton(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"/></svg>`,
      );
      this.votDownloadButton.hidden = true;
      this.votMenu.headerContainer.appendChild(this.votDownloadButton);

      this.votDownloadSubtitlesButton = ui.createIconButton(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 0 24 24"><path d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm2-4h8v-2H6v2Zm10 0h2v-2h-2v2ZM6 12h2v-2H6v2Zm4 0h8v-2h-8v2Z"/></svg>`,
      );
      this.votDownloadSubtitlesButton.hidden = true;
      this.votMenu.headerContainer.appendChild(this.votDownloadSubtitlesButton);

      this.votSettingsButton = ui.createIconButton(
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M555-80H405q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 5-28 1t-22-17L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q7-14 21.5-17.5T220-761l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-5 28-1t22 17l74 129q8 13 5 28t-15 24l-75 57q1 7 1 13.5v27q0 6.5-2 13.5l75 57q12 9 15 24t-5 28l-74 128q-8 13-22.5 17.5T738-199l-85-36q-11 8-23 15t-24 12l-12 93q-2 15-13 25t-26 10Zm-73-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422-480q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 25-17.5 42.5T482-420Zm-2-60Zm-40 320h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Z"/></svg>`,
      );
      this.votMenu.headerContainer.appendChild(this.votSettingsButton);

      this.votTranslationLanguageSelect = ui.createVOTLanguageSelect({
        fromTitle:
          localizationProvider.get("langs")[this.video.detectedLanguage],
        fromDialogTitle: localizationProvider.get("videoLanguage"),
        fromItems: [
          {
            label: localizationProvider.get("langs")["auto"],
            value: "auto",
            selected: "",
          },
          ...genOptionsByOBJ(availableLangs, this.videoData.detectedLanguage),
        ],
        fromOnSelectCB: async (e) => {
          utils_debug.log(
            "[fromOnSelectCB] select from language",
            e.target.dataset.votValue,
          );
          this.videoData = await this.getVideoData();
          this.setSelectMenuValues(
            e.target.dataset.votValue,
            this.videoData.responseLanguage,
          );
        },
        toTitle: localizationProvider.get("langs")[this.video.responseLanguage],
        toDialogTitle: localizationProvider.get("translationLanguage"),
        toItems: genOptionsByOBJ(actualTTS, this.videoData.responseLanguage),
        toOnSelectCB: async (e) => {
          const newLang = e.target.dataset.votValue;
          utils_debug.log("[toOnSelectCB] select to language", newLang);
          this.data.responseLanguage = this.translateToLang = newLang;
          await votStorage.set("responseLanguage", this.data.responseLanguage);
          utils_debug.log(
            "Response Language value changed. New value: ",
            this.data.responseLanguage,
          );
          this.videoData = await this.getVideoData();
          this.setSelectMenuValues(
            this.videoData.detectedLanguage,
            this.data.responseLanguage,
          );
        },
      });

      this.votMenu.bodyContainer.appendChild(
        this.votTranslationLanguageSelect.container,
      );

      this.votSubtitlesSelect = ui.createVOTSelect(
        localizationProvider.get("VOTSubtitlesDisabled"),
        localizationProvider.get("VOTSubtitles"),
        [
          {
            label: localizationProvider.get("VOTSubtitlesDisabled"),
            value: "disabled",
            selected: true,
            disabled: false,
          },
        ],
        {
          onSelectCb: async (e) => {
            await this.changeSubtitlesLang(e.target.dataset.votValue);
          },
          labelElement: ui.createVOTSelectLabel(
            localizationProvider.get("VOTSubtitles"),
          ),
        },
      );

      this.votMenu.bodyContainer.appendChild(this.votSubtitlesSelect.container);

      this.votVideoVolumeSlider = ui.createSlider(
        `${localizationProvider.get("VOTVolume")}: <strong>${
          this.getVideoVolume() * 100
        }%</strong>`,
        this.getVideoVolume() * 100,
      );
      this.votVideoVolumeSlider.container.hidden =
        this.data.showVideoSlider !== 1 ||
        this.votButton.container.dataset.status !== "success";
      this.votMenu.bodyContainer.appendChild(
        this.votVideoVolumeSlider.container,
      );

      this.votVideoTranslationVolumeSlider = ui.createSlider(
        `${localizationProvider.get("VOTVolumeTranslation")}: <strong>${
          this.data?.defaultVolume ?? 100
        }%</strong>`,
        this.data?.defaultVolume ?? 100,
        0,
        this.data.audioBooster ? maxAudioVolume : 100,
      );
      this.votVideoTranslationVolumeSlider.container.hidden =
        this.votButton.container.dataset.status !== "success";
      this.votMenu.bodyContainer.appendChild(
        this.votVideoTranslationVolumeSlider.container,
      );

      this.votMenu.container.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      });
    }

    // VOT Settings
    {
      this.votSettingsDialog = ui.createDialog(
        localizationProvider.get("VOTSettings"),
      );
      document.documentElement.appendChild(this.votSettingsDialog.container);

      this.votTranslationHeader = ui.createHeader(
        localizationProvider.get("translationSettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votTranslationHeader,
      );

      this.votAutoTranslateCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTAutoTranslate"),
        this.data?.autoTranslate ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAutoTranslateCheckbox.container,
      );

      this.votDontTranslateYourLangSelect = ui.createVOTSelect(
        localizationProvider.get("langs")[
          votStorage.syncGet("dontTranslateLanguage", lang)
        ],
        localizationProvider.get("VOTDontTranslateYourLang"),
        genOptionsByOBJ(
          availableLangs,
          votStorage.syncGet("dontTranslateLanguage", lang),
        ),
        {
          onSelectCb: async (e) => {
            this.data.dontTranslateLanguage = e.target.dataset.votValue;
            await votStorage.set(
              "dontTranslateLanguage",
              this.data.dontTranslateLanguage,
            );
          },
          labelElement: ui.createCheckbox(
            localizationProvider.get("VOTDontTranslateYourLang"),
            this.data?.dontTranslateYourLang ?? true,
          ).container,
        },
      );

      this.votSettingsDialog.bodyContainer.appendChild(
        this.votDontTranslateYourLangSelect.container,
      );

      this.votAutoSetVolumeCheckbox = ui.createCheckbox(
        `${localizationProvider.get("VOTAutoSetVolume")}`,
        this.data?.autoSetVolumeYandexStyle ?? true,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAutoSetVolumeCheckbox.container,
      );
      this.votAutoSetVolumeSlider = ui.createSlider(
        `<strong>${(this.data?.autoVolume ?? defaultAutoVolume) * 100}%</strong>`,
        (this.data?.autoVolume ?? defaultAutoVolume) * 100,
        0,
        100,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAutoSetVolumeSlider.container,
      );

      this.votShowVideoSliderCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTShowVideoSlider"),
        this.data?.showVideoSlider ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votShowVideoSliderCheckbox.container,
      );

      this.votAudioBoosterCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTAudioBooster"),
        this.data?.audioBooster ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAudioBoosterCheckbox.container,
      );

      // udemy only
      this.votUdemyDataTextfield = ui.createTextfield(
        localizationProvider.get("VOTUdemyData"),
        this.data?.udemyData?.accessToken ?? "",
      );
      this.votUdemyDataTextfield.container.hidden = this.site.host !== "udemy";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votUdemyDataTextfield.container,
      );

      this.votSyncVolumeCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTSyncVolume"),
        this.data?.syncVolume ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votSyncVolumeCheckbox.container,
      );

      this.votTranslationServiceSelect = ui.createVOTSelect(
        votStorage
          .syncGet("translationService", defaultTranslationService)
          .toUpperCase(),
        localizationProvider.get("VOTTranslationService"),
        genOptionsByOBJ(
          translateServices,
          votStorage.syncGet("translationService", defaultTranslationService),
        ),
        {
          onSelectCb: async (e) => {
            this.data.translationService = e.target.dataset.votValue;
            await votStorage.set(
              "translationService",
              this.data.translationService,
            );
          },
          labelElement: ui.createCheckbox(
            localizationProvider.get("VOTTranslateAPIErrors"),
            this.data.translateAPIErrors ?? true,
          ).container,
        },
      );
      this.votTranslationServiceSelect.container.hidden =
        localizationProvider.lang === "ru";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votTranslationServiceSelect.container,
      );

      this.votDetectServiceSelect = ui.createVOTSelect(
        votStorage.syncGet("detectService", defaultDetectService).toUpperCase(),
        localizationProvider.get("VOTDetectService"),
        genOptionsByOBJ(
          detectServices,
          votStorage.syncGet("detectService", defaultDetectService),
        ),
        {
          onSelectCb: async (e) => {
            this.data.detectService = e.target.dataset.votValue;
            await votStorage.set("detectService", this.data.detectService);
          },
          labelElement: ui.createVOTSelectLabel(
            localizationProvider.get("VOTDetectService"),
          ),
        },
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votDetectServiceSelect.container,
      );

      // SUBTITLES

      this.votSubtitlesHeader = ui.createHeader(
        localizationProvider.get("subtitlesSettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(this.votSubtitlesHeader);

      this.votSubtitlesMaxLengthSlider = ui.createSlider(
        `${localizationProvider.get("VOTSubtitlesMaxLength")}: <strong>${
          this.data?.subtitlesMaxLength ?? 300
        }</strong>`,
        this.data?.subtitlesMaxLength ?? 300,
        50,
        300,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votSubtitlesMaxLengthSlider.container,
      );

      this.votSubtitlesHighlightWordsCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTHighlightWords"),
        this.data?.highlightWords ?? false,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votSubtitlesHighlightWordsCheckbox.container,
      );

      // PROXY

      this.votProxyHeader = ui.createHeader(
        localizationProvider.get("proxySettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(this.votProxyHeader);

      this.votM3u8ProxyHostTextfield = ui.createTextfield(
        localizationProvider.get("VOTM3u8ProxyHost"),
        this.data?.m3u8ProxyHost,
        m3u8ProxyHost,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votM3u8ProxyHostTextfield.container,
      );

      // cf version only
      this.votProxyWorkerHostTextfield = ui.createTextfield(
        localizationProvider.get("VOTProxyWorkerHost"),
        this.data?.proxyWorkerHost,
        proxyWorkerHost,
      );
      this.votProxyWorkerHostTextfield.container.hidden =
        "cloudflare" !== "cloudflare";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votProxyWorkerHostTextfield.container,
      );

      // cf version only
      this.votAudioProxyCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTAudioProxy"),
        this.data?.audioProxy ?? false,
      );
      this.votAudioProxyCheckbox.container.hidden = "cloudflare" !== "cloudflare";
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAudioProxyCheckbox.container,
      );

      // ABOUT

      this.votAboutHeader = ui.createHeader(localizationProvider.get("about"));
      this.votSettingsDialog.bodyContainer.appendChild(this.votAboutHeader);

      this.votLanguageSelect = ui.createVOTSelect(
        localizationProvider.get("langs")[
          // eslint-disable-next-line sonarjs/no-duplicate-string
          votStorage.syncGet("locale-lang-override", "auto")
        ],
        localizationProvider.get("VOTMenuLanguage"),
        genOptionsByOBJ(
          availableLocales,
          votStorage.syncGet("locale-lang-override", "auto"),
        ),
        {
          onSelectCb: async (e) => {
            await votStorage.set(
              "locale-lang-override",
              e.target.dataset.votValue,
            );
          },
          labelElement: ui.createVOTSelectLabel(
            localizationProvider.get("VOTMenuLanguage"),
          ),
        },
      );

      this.votSettingsDialog.bodyContainer.appendChild(
        this.votLanguageSelect.container,
      );

      this.votShowPiPButtonCheckbox = ui.createCheckbox(
        localizationProvider.get("VOTShowPiPButton"),
        this.data?.showPiPButton ?? false,
      );
      this.votShowPiPButtonCheckbox.container.hidden = !isPiPAvailable();
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votShowPiPButtonCheckbox.container,
      );

      this.votVersionInfo = ui.createInformation(
        `${localizationProvider.get("VOTVersion")}:`,
         true
          ? `cloudflare ${GM_info.script.version}`
          : 0,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votVersionInfo.container,
      );

      this.votAuthorsInfo = ui.createInformation(
        `${localizationProvider.get("VOTAuthors")}:`,
        GM_info.script.author,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votAuthorsInfo.container,
      );

      this.votLoaderInfo = ui.createInformation(
        `${localizationProvider.get("VOTLoader")}:`,
        `${GM_info.scriptHandler} v${GM_info.version}`,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votLoaderInfo.container,
      );

      this.votBrowserInfo = ui.createInformation(
        `${localizationProvider.get("VOTBrowser")}:`,
        `${browserInfo.browser.name} ${browserInfo.browser.version} (${browserInfo.os.name} ${browserInfo.os.version})`,
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votBrowserInfo.container,
      );

      this.votResetSettingsButton = ui.createButton(
        localizationProvider.get("resetSettings"),
      );
      this.votSettingsDialog.bodyContainer.appendChild(
        this.votResetSettingsButton,
      );
    }
  }

  initUIEvents() {
    // VOT Button
    {
      this.votButton.translateButton.addEventListener("click", () => {
        (async () => {
          if (this.audio.src) {
            utils_debug.log("[click translationBtn] audio.src is not empty");
            this.stopTranslate();
            return;
          }

          if (this.hls.url) {
            utils_debug.log("[click translationBtn] hls is not empty");
            this.stopTranslate();
            return;
          }

          try {
            utils_debug.log("[click translationBtn] trying execute translation");

            if (!this.videoData.videoId) {
              throw new VOTLocalizedError("VOTNoVideoIDFound");
            }

            // при скролле ленты клипов в вк сохраняется старый айди видео для перевода,
            // но для субтитров используется новый, поэтому перед запуском перевода необходимо получить актуальный айди
            if (
              this.site.host === "vk" &&
              this.site.additionalData === "clips"
            ) {
              this.videoData = await this.getVideoData();
            }
            await this.translateExecutor(this.videoData.videoId);
          } catch (err) {
            console.error("[VOT]", err);
            if (err?.name === "VOTLocalizedError") {
              this.transformBtn("error", err.localizedMessage);
            } else {
              this.transformBtn("error", err);
            }
          }
        })();
      });

      this.votButton.pipButton.addEventListener("click", () => {
        (async () => {
          if (this.video !== document.pictureInPictureElement) {
            await this.video.requestPictureInPicture();
          } else {
            await document.exitPictureInPicture();
          }
        })();
      });

      this.votButton.menuButton.addEventListener("click", () => {
        this.votMenu.container.hidden = !this.votMenu.container.hidden;
      });

      this.votButton.container.addEventListener("mousedown", () => {
        this.dragging = true;
      });

      this.container.addEventListener("mouseup", () => {
        this.dragging = false;
      });

      this.container.addEventListener("mousemove", async (e) => {
        if (this.dragging) {
          e.preventDefault();

          const percentX = (e.clientX / this.container.clientWidth) * 100;
          // const percentY = (e.clientY / this.video.clientHeight) * 100;

          this.data.buttonPos =
            this.container.clientWidth && this.container.clientWidth > 550
              ? percentX <= 44
                ? "left"
                : percentX >= 66
                  ? "right"
                  : "default"
              : "default";
          this.votButton.container.dataset.direction =
            this.data.buttonPos === "default" ? "row" : "column";
          this.votButton.container.dataset.position = this.data.buttonPos;
          this.votMenu.container.dataset.position = this.data.buttonPos;
          if (this.container.clientWidth && this.container.clientWidth > 550) {
            await votStorage.set("buttonPos", this.data.buttonPos);
          }
        }
      });
    }

    // VOT Menu
    {
      this.votDownloadButton.addEventListener("click", () => {
        if (this.downloadTranslationUrl) {
          window.open(this.downloadTranslationUrl, "_blank").focus();
        }
      });

      this.votDownloadSubtitlesButton.addEventListener("click", async () => {
        const srtContent = jsonToSrt(this.YandexSubtitles);
        const blob = new Blob([srtContent], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `subtitles_${this.videoData.videoId}.srt`;
        a.click();
        URL.revokeObjectURL(url);
      });

      this.votSettingsButton.addEventListener("click", () => {
        this.votSettingsDialog.container.hidden =
          !this.votSettingsDialog.container.hidden;
        if (document.fullscreenElement || document.webkitFullscreenElement) {
          document.webkitExitFullscreen && document.webkitExitFullscreen();
          document.exitFullscreen && document.exitFullscreen();
        }
      });

      this.votVideoVolumeSlider.input.addEventListener("input", (e) => {
        const value = Number(e.target.value);
        this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
          `${value}%`;
        this.setVideoVolume(value / 100);
        if (this.data.syncVolume) {
          this.syncVolumeWrapper("video", value);
        }
      });

      this.votVideoTranslationVolumeSlider.input.addEventListener(
        "input",
        (e) => {
          (async () => {
            this.data.defaultVolume = Number(e.target.value);
            await votStorage.set("defaultVolume", this.data.defaultVolume);
            this.votVideoTranslationVolumeSlider.label.querySelector(
              "strong",
            ).innerHTML = `${this.data.defaultVolume}%`;
            this.gainNode.gain.value = this.data.defaultVolume / 100;
            if (!this.data.syncVolume) {
              return;
            }

            this.syncVolumeWrapper("translation", this.data.defaultVolume);
            if (
              ["youtube", "googledrive"].includes(this.site.host) &&
              this.site.additionalData !== "mobile"
            ) {
              // fix update youtube volume slider
              this.setVideoVolume(this.tempOriginalVolume / 100);
            }
          })();
        },
      );
    }

    // VOT Settings
    {
      this.votAutoTranslateCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.autoTranslate = Number(e.target.checked);
          await votStorage.set("autoTranslate", this.data.autoTranslate);
          await this.autoTranslate();
          utils_debug.log(
            "autoTranslate value changed. New value: ",
            this.data.autoTranslate,
          );
        })();
      });

      this.votDontTranslateYourLangSelect.labelElement.addEventListener(
        "change",
        (e) => {
          (async () => {
            this.data.dontTranslateYourLang = Number(e.target.checked);
            await votStorage.set(
              "dontTranslateYourLang",
              this.data.dontTranslateYourLang,
            );
            utils_debug.log(
              "dontTranslateYourLang value changed. New value: ",
              this.data.dontTranslateYourLang,
            );
          })();
        },
      );

      this.votAutoSetVolumeCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.autoSetVolumeYandexStyle = Number(e.target.checked);
          await votStorage.set(
            "autoSetVolumeYandexStyle",
            this.data.autoSetVolumeYandexStyle,
          );
          utils_debug.log(
            "autoSetVolumeYandexStyle value changed. New value: ",
            this.data.autoSetVolumeYandexStyle,
          );
        })();
      });

      this.votAutoSetVolumeSlider.input.addEventListener("input", (e) => {
        (async () => {
          const presetAutoVolume = Number(e.target.value);
          this.data.autoVolume = (presetAutoVolume / 100).toFixed(2);
          await votStorage.set("autoVolume", this.data.autoVolume);
          this.votAutoSetVolumeSlider.label.querySelector("strong").innerHTML =
            `${presetAutoVolume}%`;
        })();
      });

      this.votShowVideoSliderCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.showVideoSlider = Number(e.target.checked);
          await votStorage.set("showVideoSlider", this.data.showVideoSlider);
          utils_debug.log(
            "showVideoSlider value changed. New value: ",
            this.data.showVideoSlider,
          );
          this.votVideoVolumeSlider.container.hidden =
            this.data.showVideoSlider !== 1 ||
            this.votButton.container.dataset.status !== "success";
        })();
      });

      this.votAudioBoosterCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.audioBooster = Number(e.target.checked);
          await votStorage.set("audioBooster", this.data.audioBooster);
          utils_debug.log(
            "audioBooster value changed. New value: ",
            this.data.audioBooster,
          );

          const currentAudioVolume =
            this.votVideoTranslationVolumeSlider.input.value;
          this.votVideoTranslationVolumeSlider.input.max = this.data
            .audioBooster
            ? maxAudioVolume
            : 100;
          if (!this.data.audioBooster) {
            this.votVideoTranslationVolumeSlider.input.value =
              currentAudioVolume > 100 ? 100 : currentAudioVolume;
            this.votVideoTranslationVolumeSlider.input.dispatchEvent(
              new Event("input"),
            );
          }
        })();
      });

      this.votUdemyDataTextfield.input.addEventListener("change", (e) => {
        (async () => {
          this.data.udemyData = {
            accessToken: e.target.value,
            expires: new Date().getTime(),
          };
          await votStorage.set("udemyData", this.data.udemyData);
          utils_debug.log(
            "udemyData value changed. New value: ",
            this.data.udemyData,
          );
          window.location.reload();
        })();
      });

      this.votSyncVolumeCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.syncVolume = Number(e.target.checked);
          await votStorage.set("syncVolume", this.data.syncVolume);
          utils_debug.log(
            "syncVolume value changed. New value: ",
            this.data.syncVolume,
          );
        })();
      });

      this.votTranslationServiceSelect.labelElement.addEventListener(
        "change",
        (e) => {
          (async () => {
            this.data.translateAPIErrors = Number(e.target.checked);
            await votStorage.set(
              "translateAPIErrors",
              this.data.translateAPIErrors,
            );
            utils_debug.log(
              "translateAPIErrors value changed. New value: ",
              this.data.translateAPIErrors,
            );
          })();
        },
      );

      // SUBTITLES

      this.votSubtitlesMaxLengthSlider.input.addEventListener("input", (e) => {
        (async () => {
          this.data.subtitlesMaxLength = Number(e.target.value);
          await votStorage.set(
            "subtitlesMaxLength",
            this.data.subtitlesMaxLength,
          );
          this.votSubtitlesMaxLengthSlider.label.querySelector(
            "strong",
          ).innerHTML = `${this.data.subtitlesMaxLength}`;
          this.subtitlesWidget.setMaxLength(this.data.subtitlesMaxLength);
        })();
      });

      this.votSubtitlesHighlightWordsCheckbox.input.addEventListener(
        "change",
        (e) => {
          (async () => {
            this.data.highlightWords = Number(e.target.checked);
            await votStorage.set("highlightWords", this.data.highlightWords);
            utils_debug.log(
              "highlightWords value changed. New value: ",
              this.data.highlightWords,
            );
            this.subtitlesWidget.setHighlightWords(this.data.highlightWords);
          })();
        },
      );

      this.votShowPiPButtonCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.showPiPButton = Number(e.target.checked);
          await votStorage.set("showPiPButton", this.data.showPiPButton);
          utils_debug.log(
            "showPiPButton value changed. New value: ",
            this.data.showPiPButton,
          );
          this.votButton.pipButton.hidden =
            !isPiPAvailable() || !this.data.showPiPButton;
          this.votButton.separator2.hidden =
            !isPiPAvailable() || !this.data.showPiPButton;
        })();
      });

      // PROXY

      this.votM3u8ProxyHostTextfield.input.addEventListener("change", (e) => {
        (async () => {
          this.data.m3u8ProxyHost = e.target.value || m3u8ProxyHost;
          await votStorage.set("m3u8ProxyHost", this.data.m3u8ProxyHost);
          utils_debug.log(
            "m3u8ProxyHost value changed. New value: ",
            this.data.m3u8ProxyHost,
          );
        })();
      });

      this.votProxyWorkerHostTextfield.input.addEventListener("change", (e) => {
        (async () => {
          this.data.proxyWorkerHost = e.target.value || proxyWorkerHost;
          await votStorage.set("proxyWorkerHost", this.data.proxyWorkerHost);
          utils_debug.log(
            "proxyWorkerHost value changed. New value: ",
            this.data.proxyWorkerHost,
          );
          window.location.reload();
        })();
      });

      this.votAudioProxyCheckbox.input.addEventListener("change", (e) => {
        (async () => {
          this.data.audioProxy = Number(e.target.checked);
          await votStorage.set("audioProxy", this.data.audioProxy);
          utils_debug.log(
            "audioProxy value changed. New value: ",
            this.data.audioProxy,
          );
        })();
      });

      this.votResetSettingsButton.addEventListener("click", () => {
        (async () => {
          localizationProvider.reset();
          const valuesForClear = await votStorage.list();
          for (let i = 0; i < valuesForClear.length; i++) {
            const v = valuesForClear[i];
            if (!localizationProvider.gmValues.includes(v)) {
              votStorage.syncDelete(v);
            }
          }
          window.location.reload();
        })();
      });
    }
  }

  releaseExtraEvents() {
    this.resizeObserver?.disconnect();
    if (
      ["youtube", "googledrive"].includes(this.site.host) &&
      this.site.additionalData !== "mobile"
    ) {
      this.syncVolumeObserver?.disconnect();
    }

    if (this.extraEvents) {
      for (let i = 0; i < this.extraEvents.length; i++) {
        const e = this.extraEvents[i];
        e.element.removeEventListener(e.event, e.handler);
      }
    }
  }

  initExtraEvents() {
    this.extraEvents = [];

    const addExtraEventListener = (element, event, handler) => {
      this.extraEvents.push({
        element,
        event,
        handler,
      });
      element.addEventListener(event, handler);
    };

    const addExtraEventListeners = (element, events, handler) => {
      for (const event of events) {
        addExtraEventListener(element, event, handler);
      }
    };

    this.resizeObserver = new ResizeObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const e = entries[i];
        this.votMenu.container.setAttribute(
          "style",
          `--vot-container-height: ${e.contentRect.height}px`,
        );
      }

      const isBigWidth =
        this.container.clientWidth && this.container.clientWidth > 550;

      this.votButton.container.dataset.position =
        this.votMenu.container.dataset.position = isBigWidth
          ? this.data?.buttonPos
          : "default";
      this.votButton.container.dataset.direction =
        this.data?.buttonPos && this.data?.buttonPos !== "default" && isBigWidth
          ? "column"
          : "row";
    });

    this.resizeObserver.observe(this.video);
    this.votMenu.container.setAttribute(
      "style",
      `--vot-container-height: ${this.video.getBoundingClientRect().height}px`,
    );
    // Sync menu volume slider with youtube original video (youtube only)
    if (
      ["youtube", "googledrive"].includes(this.site.host) &&
      this.site.additionalData !== "mobile"
    ) {
      this.syncVolumeObserver = new MutationObserver((mutations) => {
        if (!this.audio.src || !this.data.syncVolume) {
          return;
        }

        for (let i = 0; i < mutations.length; i++) {
          const mutation = mutations[i];
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "aria-valuenow"
          ) {
            if (this.firstSyncVolume) {
              // disable sync if it's sync when the translation is enabled
              this.firstSyncVolume = false;
              return;
            }

            // youtube sets setMuted and returns the old value if the slider is moved to 0
            // also fixes the operation if the video is muted via the hotkey
            const videoVolume = this.isMuted()
              ? 0
              : this.getVideoVolume() * 100;

            const finalVolume = Math.round(videoVolume);
            this.data.defaultVolume = finalVolume;
            this.gainNode.gain.value = this.data.defaultVolume / 100;
            this.syncVolumeWrapper("video", finalVolume);
          }
        }
      });

      const ytpVolumePanel = document.querySelector(".ytp-volume-panel");
      if (ytpVolumePanel) {
        this.syncVolumeObserver.observe(ytpVolumePanel, {
          attributes: true,
          childList: false,
          subtree: true,
          attributeOldValue: true,
        });
      }
    }

    document.addEventListener("click", (event) => {
      const e = event.target;

      const button = this.votButton.container;
      const menu = this.votMenu.container;
      const container = this.container;
      const settings = this.votSettingsDialog.container;
      const tempDialog = document.querySelector(".vot-dialog-temp");

      const isButton = button.contains(e);
      const isMenu = menu.contains(e);
      const isVideo = container.contains(e);
      const isSettings = settings.contains(e);
      const isTempDialog = tempDialog?.contains(e) ?? false;

      utils_debug.log(
        `[document click] ${isButton} ${isMenu} ${isVideo} ${isSettings} ${isTempDialog}`,
      );
      if (!(!isButton && !isMenu && !isSettings && !isTempDialog)) return;
      if (!isVideo) this.logout(0);

      this.votMenu.container.hidden = true;
    });

    let eContainer;
    if (this.site.host === "pornhub") {
      if (this.site.additionalData === "embed") {
        eContainer = document.querySelector("#player");
      } else {
        // const e = document.querySelector(".original.mainPlayerDiv > video-element > div");
        eContainer = this.container.querySelector(
          ".video-element-wrapper-js > div",
        );
      }
    } else if (this.site.host === "twitter") {
      eContainer = document.querySelector('div[data-testid="videoPlayer"]');
    } else if (this.site.host === "yandexdisk") {
      eContainer = document.querySelector(".video-player__player");
    } else {
      eContainer = this.container;
    }
    if (eContainer)
      addExtraEventListeners(
        eContainer,
        ["mousemove", "mouseout"],
        this.resetTimerBound,
      );

    addExtraEventListener(
      this.votButton.container,
      "mousemove",
      this.changeOpacityOnEventBound,
    );
    addExtraEventListener(
      this.votMenu.container,
      "mousemove",
      this.changeOpacityOnEventBound,
    );
    addExtraEventListeners(
      document,
      ["touchstart", "touchmove", "touchend"],
      this.changeOpacityOnEventBound,
    );

    // fix youtube hold to fast
    addExtraEventListener(this.votButton.container, "mousedown", (e) => {
      e.stopImmediatePropagation();
    });
    addExtraEventListener(this.votMenu.container, "mousedown", (e) => {
      e.stopImmediatePropagation();
    });

    // fix draggable menu in youtube (#394, #417)
    if (this.site.host === "youtube") {
      this.container.draggable = false;
    }

    if (this.site.host === "googledrive") {
      this.container.style.height = "100%";
    }

    addExtraEventListener(this.video, "canplaythrough", async () => {
      // Временное решение
      if (this.site.host === "rutube" && this.video.src) {
        return;
      }
      if (getVideoId(this.site.host, this.video) === this.videoData.videoId)
        return;
      await this.handleSrcChanged();
      utils_debug.log("lipsync mode is loadeddata");
      await this.autoTranslate();
    });

    addExtraEventListener(this.video, "emptied", () => {
      if (
        this.video.src &&
        getVideoId(this.site.host, this.video) === this.videoData.videoId
      )
        return;
      utils_debug.log("lipsync mode is emptied");
      this.videoData = "";
      this.stopTranslation();
    });

    if (!["rutube", "ok"].includes(this.site.host)) {
      addExtraEventListener(this.video, "volumechange", () => {
        this.syncVideoVolumeSlider();
      });
    }
  }

  logout(n) {
    if (!this.votMenu.container.hidden) return;
    this.votButton.container.style.opacity = n;
  }

  resetTimer() {
    clearTimeout(this.timer);
    this.logout(1);
    this.timer = setTimeout(() => {
      this.logout(0);
    }, 1000);
  }

  changeOpacityOnEvent(event) {
    clearTimeout(this.timer);
    this.logout(1);
    event.stopPropagation();
  }

  async changeSubtitlesLang(subs) {
    utils_debug.log("[onchange] subtitles", subs);
    this.votSubtitlesSelect.setSelected(subs);
    if (subs === "disabled") {
      this.votSubtitlesSelect.setTitle(
        localizationProvider.get("VOTSubtitlesDisabled"),
      );
      this.subtitlesWidget.setContent(null);
      this.votDownloadSubtitlesButton.hidden = true;
      this.YandexSubtitles = null;
    } else {
      const fetchedSubs = await fetchSubtitles(
        this.subtitlesList.at(parseInt(subs)),
      );
      this.subtitlesWidget.setContent(fetchedSubs);
      this.votDownloadSubtitlesButton.hidden = false;
      this.YandexSubtitles = fetchedSubs;
    }
  }

  async updateSubtitlesLangSelect() {
    const updatedOptions = [
      {
        label: localizationProvider.get("VOTSubtitlesDisabled"),
        value: "disabled",
        selected: true,
        disabled: false,
      },
      ...this.subtitlesList.map((s, idx) => ({
        label:
          (localizationProvider.get("langs")[s.language] ??
            s.language.toUpperCase()) +
          (s.translatedFromLanguage
            ? ` ${localizationProvider.get("VOTTranslatedFrom")} ${
                localizationProvider.get("langs")[s.translatedFromLanguage] ??
                s.translatedFromLanguage.toUpperCase()
              }`
            : "") +
          (s.source !== "yandex" ? ` ${s.source}` : "") +
          (s.isAutoGenerated
            ? ` (${localizationProvider.get("VOTAutogenerated")})`
            : ""),
        value: idx,
        selected: false,
        disabled: false,
      })),
    ];

    this.votSubtitlesSelect.updateItems(updatedOptions);

    await this.changeSubtitlesLang(updatedOptions[0].value);
  }

  async updateSubtitles() {
    await this.changeSubtitlesLang("disabled");

    if (!this.videoData.videoId) {
      console.error(
        `[VOT] ${localizationProvider.getDefault("VOTNoVideoIDFound")}`,
      );
      this.subtitlesList = [];
      this.subtitlesListVideoId = null;
      this.votButton.container.hidden = true;
      await this.updateSubtitlesLangSelect();
      return;
    }

    this.votButton.container.hidden = false;

    if (this.subtitlesListVideoId === this.videoData.videoId) {
      return;
    }

    this.subtitlesList = await subtitles_getSubtitles(
      this.votClient,
      this.site,
      this.videoData.videoId,
      this.videoData.detectedLanguage,
    );
    if (!this.subtitlesList) {
      await this.changeSubtitlesLang("disabled");
    } else {
      this.subtitlesListVideoId = this.videoData.videoId;
    }
    await this.updateSubtitlesLangSelect();
  }

  // Get video volume in 0.00-1.00 format
  getVideoVolume() {
    let videoVolume = this.video?.volume;
    if (["youtube", "googledrive"].includes(this.site.host)) {
      videoVolume = youtubeUtils.getVideoVolume() ?? videoVolume;
    }
    return videoVolume;
  }

  // Set video volume in 0.00-1.00 format
  setVideoVolume(volume) {
    if (["youtube", "googledrive"].includes(this.site.host)) {
      const videoVolume = youtubeUtils.setVideoVolume(volume);
      if (videoVolume) {
        return;
      }
    }
    this.video.volume = volume;
  }

  isMuted() {
    return ["youtube", "googledrive"].includes(this.site.host)
      ? youtubeUtils.isMuted()
      : this.video?.muted;
  }

  // Sync volume slider with original video
  syncVideoVolumeSlider() {
    const videoVolume = this.isMuted() ? 0 : this.getVideoVolume() * 100;
    const newSlidersVolume = Math.round(videoVolume);

    this.votVideoVolumeSlider.input.value = newSlidersVolume;
    this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
      `${newSlidersVolume}%`;
    ui.updateSlider(this.votVideoVolumeSlider.input);

    if (this.data.syncVolume === 1) {
      this.tempOriginalVolume = Number(newSlidersVolume);
    }
  }

  setSelectMenuValues(from, to) {
    this.votTranslationLanguageSelect.fromSelect.setTitle(
      localizationProvider.get("langs")[from],
    );
    this.votTranslationLanguageSelect.toSelect.setTitle(
      localizationProvider.get("langs")[to],
    );
    this.votTranslationLanguageSelect.fromSelect.setSelected(from);
    this.votTranslationLanguageSelect.toSelect.setSelected(to);
    console.log(`[VOT] Set translation from ${from} to ${to}`);
    this.videoData.detectedLanguage = from;
    this.videoData.responseLanguage = to;
  }

  /**
   * wrap over syncVolume to make it easier to work with sliders
   * @constructor
   * @param {"translation" | "video"} fromType - the initiator of sync
   * @param {number} newVolume - new volume of sliders
   */
  syncVolumeWrapper(fromType, newVolume) {
    const slider =
      fromType === "translation"
        ? this.votVideoVolumeSlider
        : this.votVideoTranslationVolumeSlider;

    const currentSliderValue = Number(slider.input.value);

    const finalValue = syncVolume(
      fromType === "translation" ? this.video : this.audio,
      newVolume,
      currentSliderValue,
      fromType === "translation" ? this.tempVolume : this.tempOriginalVolume,
    );

    slider.input.value = finalValue;
    slider.label.querySelector("strong").innerHTML = `${finalValue}%`;
    ui.updateSlider(slider.input);

    // Update the temp variables for future syncing
    this.tempOriginalVolume =
      fromType === "translation" ? finalValue : newVolume;
    this.tempVolume = fromType === "translation" ? newVolume : finalValue;
  }

  async getVideoData() {
    const videoData = {
      // ! should be null for ALL websites except coursera and udemy !
      // else use direct link: `{url: xxx.mp4}`
      translationHelp: null,
      isStream: false, // by default, we request the translation of the video
      duration: this.video?.duration || 343, // ! if 0 - we get 400 error
      videoId: getVideoId(this.site.host, this.video),
      detectedLanguage: this.translateFromLang,
      responseLanguage: this.translateToLang,
    };

    if (!videoData.videoId) {
      this.ytData = {};
      return videoData;
    }

    if (this.site.host === "youtube") {
      this.ytData = await youtubeUtils.getVideoData();
      videoData.isStream = this.ytData.isLive;
      if (this.ytData.title) {
        videoData.detectedLanguage = this.ytData.detectedLanguage;
        videoData.responseLanguage = this.translateToLang;
      }
    } else if (["rutube", "ok.ru", "mail_ru"].includes(this.site.host)) {
      videoData.detectedLanguage = "ru";
    } else if (this.site.host === "youku") {
      videoData.detectedLanguage = "zh";
    } else if (this.site.host === "vk") {
      const trackLang = document.getElementsByTagName("track")?.[0]?.srclang;
      videoData.detectedLanguage = trackLang || "auto";
    } else if (this.site.host === "coursera") {
      const courseraData = await courseraUtils.getVideoData(
        this.translateToLang,
      );
      videoData.duration = courseraData.duration || videoData.duration; // courseraData.duration sometimes it can be equal to NaN
      videoData.detectedLanguage = courseraData.detectedLanguage;
      videoData.translationHelp = courseraData.translationHelp;
    } else if (this.site.host === "coursehunter") {
      const coursehunterData = await coursehunterUtils.getVideoData();
      videoData.translationHelp = {
        // use direct link
        url: coursehunterData.url,
      };
      videoData.duration = coursehunterData.duration || videoData.duration;
    } else if (this.site.host === "bannedvideo") {
      const bannedvideoData = await bannedvideoUtils.getVideoData(
        videoData.videoId,
      );
      videoData.translationHelp = {
        url: bannedvideoData.url,
      };

      videoData.duration = bannedvideoData.duration || videoData.duration;
      videoData.isStream = bannedvideoData.live;
    } else if (this.site.host === "weverse") {
      const weverseData = await weverseUtils.getVideoData();
      videoData.detectedLanguage = "ko";
      if (weverseData) {
        videoData.translationHelp = {
          url: weverseData.url,
        };
        videoData.duration = weverseData.duration || videoData.duration;
      }
    } else if (this.site.host === "udemy") {
      const udemyData = await udemyUtils.getVideoData(
        this.data.udemyData,
        this.translateToLang,
      );
      videoData.duration = udemyData.duration || videoData.duration;
      videoData.detectedLanguage = udemyData.detectedLanguage;
      videoData.translationHelp = udemyData.translationHelp;
    } else if (this.site.host === "bitchute") {
      // to avoid creating a separate file with the same functionality
      videoData.translationHelp = {
        url: videoData.videoId,
      };
    } else if (
      [
        "bilibili",
        "piped",
        "invidious",
        "bitchute",
        "rumble",
        "peertube",
        "dailymotion",
        "trovo",
        "yandexdisk",
        "coursehunter",
        "archive",
        "directlink",
      ].includes(this.site.host)
    ) {
      videoData.detectedLanguage = "auto";
    }
    return videoData;
  }

  videoValidator() {
    if (["youtube", "ok.ru", "vk"].includes(this.site.host)) {
      utils_debug.log("VideoValidator videoData: ", this.videoData);
      if (
        this.data.dontTranslateYourLang === 1 &&
        this.videoData.detectedLanguage === this.data.dontTranslateLanguage
      ) {
        throw new VOTLocalizedError("VOTDisableFromYourLang");
      }
    }

    if (!this.videoData.isStream && this.videoData.duration > 14_400) {
      throw new VOTLocalizedError("VOTVideoIsTooLong");
    }

    return true;
  }

  lipSync(mode = false) {
    utils_debug.log("lipsync video", this.video);
    if (!this.video) {
      return;
    }
    this.audio.currentTime = this.video.currentTime;
    this.audio.playbackRate = this.video.playbackRate;

    if (!mode) {
      utils_debug.log("lipsync mode is not set");
      return;
    }

    if (mode == "play") {
      utils_debug.log("lipsync mode is play");
      const audioPromise = this.audio.play();
      if (audioPromise !== undefined) {
        audioPromise.catch((e) => {
          console.error("[VOT]", e);
          if (e.name === "NotAllowedError") {
            this.transformBtn(
              "error",
              localizationProvider.get("grantPermissionToAutoPlay"),
            );
            throw new VOTLocalizedError("grantPermissionToAutoPlay");
          } else if (e.name === "NotSupportedError") {
            this.transformBtn(
              "error",
              sitesChromiumBlocked.includes(window.location.hostname)
                ? localizationProvider.get("neededAdditionalExtension")
                : localizationProvider.get("audioFormatNotSupported"),
            );
            throw sitesChromiumBlocked.includes(window.location.hostname)
              ? new VOTLocalizedError("neededAdditionalExtension")
              : new VOTLocalizedError("audioFormatNotSupported");
          }
        });
      }
      return;
    }
    // video is inactive
    if (["pause", "stop", "waiting"].includes(mode)) {
      utils_debug.log(`lipsync mode is ${mode}`);
      this.audio.pause();
    }

    if (mode == "playing") {
      utils_debug.log("lipsync mode is playing");
      this.audio.play();
    }
  }

  // Define a function to handle common events
  handleVideoEvent(event) {
    utils_debug.log(`video ${event.type}`);
    this.lipSync(event.type);
  }

  // Default actions on stop translate
  stopTranslate() {
    for (const e of videoLipSyncEvents) {
      this.video.removeEventListener(e, this.handleVideoEventBound);
    }
    this.audio.pause();
    this.audio.src = "";
    this.audio.removeAttribute("src");
    this.votVideoVolumeSlider.container.hidden = true;
    this.votVideoTranslationVolumeSlider.container.hidden = true;
    this.votDownloadButton.hidden = true;
    this.downloadTranslationUrl = null;
    this.transformBtn("none", localizationProvider.get("translateVideo"));
    utils_debug.log(`Volume on start: ${this.volumeOnStart}`);
    if (this.volumeOnStart) {
      this.setVideoVolume(this.volumeOnStart);
    }
    this.volumeOnStart = "";
    clearInterval(this.streamPing);
    clearTimeout(this.autoRetry);
    this.hls?.destroy();
    this.hls = initHls();
    this.firstSyncVolume = true;
  }

  async translateExecutor(VIDEO_ID) {
    utils_debug.log("Run translateFunc", VIDEO_ID);
    await this.translateFunc(
      VIDEO_ID,
      this.videoData.isStream,
      this.videoData.detectedLanguage,
      this.videoData.responseLanguage,
      this.videoData.translationHelp,
    );
  }

  async updateTranslationErrorMsg(errorMessage) {
    const translationTake = localizationProvider.get("translationTake");
    const VOTTranslatingError = localizationProvider.get("VOTTranslatingError");
    const lang = localizationProvider.lang;

    if (errorMessage?.name === "VOTLocalizedError") {
      this.transformBtn("error", errorMessage.localizedMessage);
    } else if (
      this.data.translateAPIErrors === 1 &&
      !errorMessage.includes(translationTake) &&
      lang !== "ru"
    ) {
      const translatedMessage = await translate(errorMessage, "ru", lang);
      this.transformBtn("error", VOTTranslatingError);
      this.transformBtn("error", translatedMessage);
    } else {
      this.transformBtn("error", errorMessage);
    }
  }

  afterUpdateTranslation(audioUrl) {
    this.votVideoVolumeSlider.container.hidden =
      this.data.showVideoSlider !== 1 ||
      this.votButton.container.dataset.status !== "success";
    this.votVideoTranslationVolumeSlider.container.hidden =
      this.votButton.container.dataset.status !== "success";

    if (this.data.autoSetVolumeYandexStyle === 1) {
      this.votVideoVolumeSlider.input.value = this.data.autoVolume * 100;
      this.votVideoVolumeSlider.label.querySelector("strong").innerHTML =
        `${this.data.autoVolume * 100}%`;
      ui.updateSlider(this.votVideoVolumeSlider.input);
    }

    this.votDownloadButton.hidden = false;
    this.downloadTranslationUrl = audioUrl;
  }

  // update translation audio src
  updateTranslation(audioUrl) {
    // ! Don't use this function for streams
    this.audio.src = audioUrl;

    // cf version only
    if (
       true &&
      this.data.audioProxy === 1 &&
      audioUrl.startsWith("https://vtrans.s3-private.mds.yandex.net/tts/prod/")
    ) {
      const audioPath = audioUrl.replace(
        "https://vtrans.s3-private.mds.yandex.net/tts/prod/",
        "",
      );
      const proxiedAudioUrl = `https://${this.data.proxyWorkerHost}/video-translation/audio-proxy/${audioPath}`;
      console.log(`[VOT] Audio proxied via ${proxiedAudioUrl}`);
      this.audio.src = proxiedAudioUrl;
    }

    this.volumeOnStart = this.getVideoVolume();
    if (typeof this.data.defaultVolume === "number") {
      this.gainNode.gain.value = this.data.defaultVolume / 100;
    }
    if (
      typeof this.data.autoSetVolumeYandexStyle === "number" &&
      this.data.autoSetVolumeYandexStyle
    ) {
      this.setVideoVolume(this.data.autoVolume);
    }

    switch (this.site.host) {
      case "twitter":
        document
          .querySelector('button[data-testid="app-bar-back"][role="button"]')
          .addEventListener("click", this.stopTranslationBound);
        break;
      case "invidious":
      case "piped":
        break;
    }

    if (this.video && !this.video.paused) this.lipSync("play");
    for (const e of videoLipSyncEvents) {
      this.video.addEventListener(e, this.handleVideoEventBound);
    }
    this.transformBtn("success", localizationProvider.get("disableTranslate"));
    this.afterUpdateTranslation(audioUrl);
  }

  // Define a function to translate a video and handle the callback
  async translateFunc(
    VIDEO_ID,
    isStream,
    requestLang,
    responseLang,
    translationHelp,
  ) {
    console.log("[VOT] Video Data: ", this.videoData);
    let videoURL = `${this.site.url}${VIDEO_ID}`;
    if (translationHelp?.url) {
      videoURL = translationHelp.url;
      translationHelp = null;
    }

    // fix enabling the old requested voiceover when changing the language to the native language (#414)
    utils_debug.log("Run videoValidator");
    this.videoValidator();

    if (isStream) {
      let translateRes = await this.translateStreamImpl(
        videoURL,
        VIDEO_ID,
        requestLang,
        responseLang,
      );

      if (!translateRes) {
        utils_debug.log("Skip translation");
        return;
      }

      this.transformBtn(
        "success",
        localizationProvider.get("disableTranslate"),
      );

      const streamURL = `https://${
        this.data.m3u8ProxyHost
      }/?all=yes&origin=${encodeURIComponent(
        "https://strm.yandex.ru",
      )}&referer=${encodeURIComponent(
        "https://strm.yandex.ru",
      )}&url=${encodeURIComponent(translateRes.result.url)}`;

      if (this.hls) {
        this.hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          utils_debug.log("audio and hls.js are now bound together !");
        });
        this.hls.on(Hls.Events.MANIFEST_PARSED, function (data) {
          utils_debug.log(
            "manifest loaded, found " + data?.levels?.length + " quality level",
          );
        });
        this.hls.loadSource(streamURL);
        this.hls.attachMedia(this.audio);
        this.hls.on(Hls.Events.ERROR, function (data) {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.log("fatal media error encountered, try to recover");
                this.hls.recoverMediaError();
                break;
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.error("fatal network error encountered", data);
                // All retries and media options have been exhausted.
                // Immediately trying to restart loading could cause loop loading.
                // Consider modifying loading policies to best fit your asset and network
                // conditions (manifestLoadPolicy, playlistLoadPolicy, fragLoadPolicy).
                break;
              default:
                // cannot recover
                this.hls.destroy();
                break;
            }
          }
        });
        utils_debug.log(this.hls);
      } else if (this.audio.canPlayType("application/vnd.apple.mpegurl")) {
        // safari
        this.audio.src = streamURL;
      } else {
        // browser doesn't support m3u8 (hls unsupported and it isn't a safari)
        throw new VOTLocalizedError("audioFormatNotSupported");
      }

      if (this.site.host === "youtube") {
        youtubeUtils.videoSeek(this.video, 10); // 10 is the most successful number for streaming. With it, the audio is not so far behind the original
      }

      this.volumeOnStart = this.getVideoVolume();
      if (typeof this.data.defaultVolume === "number") {
        this.gainNode.gain.value = this.data.defaultVolume / 100;
      }

      if (
        typeof this.data.autoSetVolumeYandexStyle === "number" &&
        this.data.autoSetVolumeYandexStyle
      ) {
        this.setVideoVolume(this.data.autoVolume);
      }

      if (!this.video.src && !this.video.currentSrc && !this.video.srcObject) {
        return this.stopTranslation();
      }

      if (this.video && !this.video.paused) this.lipSync("play");
      for (const e of videoLipSyncEvents) {
        this.video.addEventListener(e, this.handleVideoEventBound);
      }

      return this.afterUpdateTranslation(streamURL);
    }

    if (["udemy", "coursera"].includes(this.site.host) && !translationHelp) {
      throw new VOTLocalizedError("VOTTranslationHelpNull");
    }

    const cachedTranslation = this.videoTranslations.find(
      (t) =>
        t.videoId === VIDEO_ID &&
        t.expires > Date.now() / 1000 &&
        t.from === requestLang &&
        t.to === responseLang,
    );

    if (cachedTranslation) {
      this.updateTranslation(cachedTranslation.url);
      utils_debug.log("[translateFunc] Cached translation was received");
      return;
    }

    let translateRes = await this.translateVideoImpl(
      videoURL,
      VIDEO_ID,
      this.videoData.duration,
      requestLang,
      responseLang,
      translationHelp,
    );

    if (!translateRes) {
      utils_debug.log("Skip translation");
      return;
    }

    this.updateTranslation(translateRes.url);
    if (
      !this.subtitlesList.some(
        (item) =>
          item.source === "yandex" &&
          item.translatedFromLanguage === this.videoData.detectedLanguage &&
          item.language === this.videoData.responseLanguage,
      )
    ) {
      this.subtitlesList = await subtitles_getSubtitles(
        this.votClient,
        this.site,
        this.videoData.videoId,
        this.videoData.detectedLanguage,
      );
      await this.updateSubtitlesLangSelect();
    }

    this.videoTranslations.push({
      videoId: VIDEO_ID,
      from: requestLang,
      to: responseLang,
      url: translateRes.url,
      expires: Date.now() / 1000 + this.videoTranslationTTL,
    });
  }

  // Define a function to stop translation and clean up
  stopTranslation() {
    this.stopTranslate();
    this.syncVideoVolumeSlider();
  }

  async handleSrcChanged() {
    utils_debug.log("[VideoHandler] src changed", this);

    this.firstPlay = true;

    this.videoData = await this.getVideoData();
    this.setSelectMenuValues(
      this.videoData.detectedLanguage,
      this.videoData.responseLanguage,
    );

    const hide =
      !this.video.src && !this.video.currentSrc && !this.video.srcObject;
    this.votButton.container.hidden = hide;
    hide && (this.votMenu.container.hidden = hide);

    if (!this.site.selector) {
      this.container = this.video.parentElement;
    }

    if (!this.container.contains(this.votButton.container)) {
      this.container.appendChild(this.votButton.container);
      this.container.appendChild(this.votMenu.container);
    }

    await this.updateSubtitles();
    await this.changeSubtitlesLang("disabled");
    this.translateToLang = this.data.responseLanguage ?? "ru";
  }

  async release() {
    utils_debug.log("[VideoHandler] release");

    this.initialized = false;
    this.releaseExtraEvents();
    this.subtitlesWidget.release();
    this.votButton.container.remove();
    this.votMenu.container.remove();
  }
}

function getSites() {
  const hostname = window.location.hostname;
  const currentURL = new URL(window.location);

  const isMathes = (match) => {
    if (match instanceof RegExp) {
      return match.test(hostname);
    } else if (typeof match === "string") {
      return hostname.includes(match);
    } else if (typeof match === "function") {
      return match(currentURL);
    }
    return false;
  };

  return config_sites.filter((e) => {
    return (
      (Array.isArray(e.match) ? e.match.some(isMathes) : isMathes(e.match)) &&
      e.host &&
      e.url
    );
  });
}

const videoObserver = new VideoObserver();
const videosWrappers = new WeakMap();

function findContainer(site, video) {
  if (site.shadowRoot) {
    let container = site.selector
      ? Array.from(document.querySelectorAll(site.selector)).find((e) =>
          e.shadowRoot.contains(video),
        )
      : video.parentElement;
    return container && container.shadowRoot
      ? container.parentElement
      : container;
  } else {
    const browserVersion = browserInfo.browser.version.split(".")[0];
    if (
      site.selector?.includes(":not") &&
      site.selector?.includes("*") &&
      browserVersion &&
      ((browserInfo.browser.name === "Chrome" && Number(browserVersion) < 88) ||
        (browserInfo.browser.name === "Firefox" && Number(browserVersion) < 84))
    ) {
      const selector = site.selector.split(" *")[0];
      return selector
        ? Array.from(document.querySelectorAll(selector)).find((e) =>
            e.contains(video),
          )
        : video.parentElement;
    } else {
      return site.selector
        ? Array.from(document.querySelectorAll(site.selector)).find((e) =>
            e.contains(video),
          )
        : video.parentElement;
    }
  }
}

async function src_main() {
  utils_debug.log("Loading extension...");

  await localizationProvider.update();

  utils_debug.log(`Selected menu language: ${localizationProvider.lang}`);

  if (
    false
  ) {}

  utils_debug.log("Extension compatibility passed...");

  videoObserver.onVideoAdded.addListener((video) => {
    for (const site of getSites()) {
      if (!site) continue;

      let container = findContainer(site, video);
      if (!container) continue;

      if (site.host === "rumble" && !video.style.display) {
        continue; // fix multiply translation buttons in rumble.com
      }

      // if (
      //   site.host === "youku" &&
      //   !video.parentElement?.classList.contains("video-layer")
      // ) {
      //   continue;
      // }

      if (["peertube", "directlink"].includes(site.host)) {
        site.url = window.location.origin; // set the url of the current site for peertube and directlink
      }

      if (!videosWrappers.has(video)) {
        videosWrappers.set(video, new VideoHandler(video, container, site));
        break;
      }
    }
  });

  videoObserver.onVideoRemoved.addListener(async (video) => {
    if (videosWrappers.has(video)) {
      await videosWrappers.get(video).release();
      videosWrappers.delete(video);
    }
  });
  videoObserver.enable();
}

src_main().catch((e) => {
  console.error("[VOT]", e);
});

})();

/******/ })()
;