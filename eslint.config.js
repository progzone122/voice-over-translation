import js from "@eslint/js";
import globals from "globals";
import oxlint from "eslint-plugin-oxlint";
import sonarjs from "eslint-plugin-sonarjs";
import github from "eslint-plugin-github";

export default [
  {
    ignores: ["dist/*", "wiki/*"],
  },
  js.configs.recommended,
  sonarjs.configs.recommended,
  {
    plugins: {
      github: github,
    },
    rules: {
      "no-control-regex": 0,
      "no-async-promise-executor": 0,
      "sonarjs/max-switch-cases": 0,
      "github/no-innerText": "error",
      "github/no-inner-html": "error",
      "github/no-useless-passive": "error",
      "github/prefer-observers": "error",
      "github/require-passive-events": "error",
      // "github/unescaped-html-literal": "error",
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
