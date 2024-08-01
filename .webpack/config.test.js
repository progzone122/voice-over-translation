import path from "path";
import { fileURLToPath } from "url";

import webpack from "webpack";

import { monkey } from "webpack-monkey";
import { styleLoaderInsertStyleElement } from "webpack-monkey/lib/client/css.js";
import ESLintPlugin from "eslint-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(path.dirname(__filename), "..");

export default () => {
  return monkey({
    mode: "production",
    resolve: {
      extensions: [".js"],
    },
    performance: {
      hints: "error",
      maxEntrypointSize: 2000 * 10 ** 3,
      maxAssetSize: 2000 * 10 ** 3,
    },
    entry: path.resolve(__dirname, "tests", "ui.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "test-ui.user.js",
    },
    monkey: {
      debug: false,
      meta: {
        resolve: path.resolve(__dirname, "tests", "headers.json"),
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
        IS_BETA_VERSION: false,
        __MK_GLOBAL__: {
          styleLoaderInsertStyleElement,
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(css|scss|sass)$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    optimization: {
      emitOnErrors: true,
      moduleIds: "named",
      minimize: false,
      minimizer: [new TerserPlugin()],
    },
  });
};
