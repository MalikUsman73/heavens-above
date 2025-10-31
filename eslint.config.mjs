// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",
    },
  },
  pluginJs.configs.recommended,
];
