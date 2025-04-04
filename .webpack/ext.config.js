import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "url";

import webpack from "webpack";

import { styleLoaderInsertStyleElement } from "webpack-monkey/lib/client/css.js";
import ESLintPlugin from "eslint-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

import configShared from "./shared.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "..");
const localesDir = path.resolve(__dirname, "src", "localization", "locales");
const priorityLocales = ["auto", "en", "ru"];

const dev = process.env.NODE_ENV === "development";
const availableLocales = getAvailableLocales();

function getAvailableLocales() {
  const files = fs.readdirSync(localesDir);
  const locales = files.reduce((result, file) => {
    if (!file.endsWith(".json")) {
      return result;
    }

    const locale = file.replace(".json", "");
    if (priorityLocales.includes(locale)) {
      return result;
    }

    result.push(locale);
    return result;
  }, []);

  return [...priorityLocales, ...locales];
}

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "ext.js",
  },
  plugins: [
    new ESLintPlugin({
      configType: "flat",
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new webpack.DefinePlugin({
      DEBUG_MODE: dev,
      // DEBUG_MODE: true,
      IS_BETA_VERSION: false,
      AVAILABLE_LOCALES: JSON.stringify(availableLocales),
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
    new webpack.IgnorePlugin({
      resourceRegExp: /^node:crypto$/,
    }),
  ],
  optimization: {
    emitOnErrors: true,
    moduleIds: "named",
    minimize: false,
    minimizer: [new TerserPlugin()],
  },
  ...configShared,
};

export default config;
