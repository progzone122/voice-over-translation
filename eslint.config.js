import js from "@eslint/js";
import globals from "globals";
import oxlint from "eslint-plugin-oxlint";
import sonarjs from "eslint-plugin-sonarjs";

export default [
  {
    ignores: ["dist/*", "wiki/*"],
  },
  js.configs.recommended,
  sonarjs.configs.recommended,
  {
    rules: {
      "no-control-regex": 0,
      "no-async-promise-executor": 0,
      "sonarjs/max-switch-cases": 0,
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
        // WEBPACK ENVIRONMENT
        BUILD_MODE: "readonly",
        DEBUG_MODE: "readonly",
        IS_BETA_VERSION: "readonly",
        __MK_GLOBAL__: "readonly",
        // YOUTUBE PAGE API
        ytplayer: "readonly",
      },
    },
  },
  oxlint.configs["flat/recommended"], // oxlint should be the last one
];
