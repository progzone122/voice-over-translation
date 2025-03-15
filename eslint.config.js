import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import oxlint from "eslint-plugin-oxlint";

export default defineConfig([
  {
    ignores: ["dist/*"],
  },
  js.configs.recommended,
  {
    rules: {
      "no-control-regex": 0,
      "no-async-promise-executor": 0,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.greasemonkey,
        // IMPORTED SCRIPTS
        protobuf: "readonly",
        Hls: "readonly",
        anime: "readonly",
        // WEBPACK ENVIRONMENT
        DEBUG_MODE: "readonly",
        AVAILABLE_LOCALES: "readonly",
        IS_BETA_VERSION: "readonly",
        __MK_GLOBAL__: "readonly",
        // YOUTUBE PAGE API
        ytplayer: "readonly",
      },
    },
  },
  oxlint.configs["flat/recommended"], // oxlint should be the last one
]);
