import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": "warn", // was "error"
      "no-undef": "warn",       // was "error"
      "no-console": "off",
    },
  },
];
