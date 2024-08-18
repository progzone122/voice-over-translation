import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import webpack from "webpack";

import { monkey } from "webpack-monkey";
import { styleLoaderInsertStyleElement } from "webpack-monkey/lib/client/css.js";
import ESLintPlugin from "eslint-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

import {
  sitesInvidious,
  sitesPiped,
  sitesProxiTok,
  sitesPeertube,
  sitesPoketube,
} from "vot.js/alternativeUrls";
import configShared from "./config.shared.js";

const repo =
  "https://raw.githubusercontent.com/ilyhalight/voice-over-translation";
const dev = process.env.NODE_ENV === "development";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "..");
let isBeta = getHeaders().version.includes("beta");

console.log("development mode: ", dev);

function getHeaders(lang) {
  const headersPath = path.resolve(
    __dirname,
    "src",
    lang ? `locales/${lang}` : "",
    "headers.json",
  );
  return JSON.parse(fs.readFileSync(headersPath).toString());
}

export default (env) => {
  const build_type = env.build_type;
  console.log("build type: ", build_type);

  function getFilename() {
    let name = "vot";
    if (build_type === "minify") {
      name += "-min";
    }

    return name + ".user.js";
  }

  function altUrlsToMatch() {
    // autogenerating match list by alternative urls sites
    return [
      sitesInvidious,
      sitesPiped,
      sitesProxiTok,
      sitesPeertube,
      sitesPoketube,
    ]
      .map((sites) =>
        sites.map((site) => {
          const isSubdomain = site.match(/\./g)?.length > 1;
          return `*://${isSubdomain ? "" : "*."}${site}/*`;
        }),
      )
      .flat();
  }

  return monkey({
    mode: dev ? "development" : "production",
    ...configShared,
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      ...(!dev ? { filename: getFilename() } : {}),
    },
    monkey: {
      debug: dev,
      meta: {
        resolve: path.resolve(__dirname, "src", "headers.json"),
        transform({ meta }) {
          const extFileName = getFilename().slice(0, -8);
          const finalURL = `${repo}/${
            isBeta ? "dev" : "master"
          }/dist/${extFileName}.user.js`;

          meta.namespace = extFileName;
          meta.updateURL = meta.downloadURL = finalURL;

          const files = fs.readdirSync(
            path.resolve(__dirname, "src", "locales"),
          );

          meta.name = {
            default: meta.name,
          };

          meta.description = {
            default: meta.description,
          };

          for (const file of files) {
            const localeHeaders = getHeaders(file);
            const lang = file.substring(0, 2);

            meta.name[lang] = localeHeaders.name;
            meta.description[lang] = localeHeaders.description;
          }

          meta.match = Array.from(
            new Set([...meta.match, ...altUrlsToMatch()]),
          );

          return meta;
        },
      },
    },
    plugins: [
      new ESLintPlugin({
        configType: "flat",
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
      new webpack.DefinePlugin({
        DEBUG_MODE: true,
        IS_BETA_VERSION: isBeta,
        ...(() => {
          if (!dev) {
            return {
              __MK_GLOBAL__: {
                styleLoaderInsertStyleElement,
              },
            };
          }
        })(),
      }),
    ],
    optimization: {
      emitOnErrors: true,
      moduleIds: "named",
      minimize: build_type === "minify",
      minimizer: [new TerserPlugin()],
    },
  });
};
