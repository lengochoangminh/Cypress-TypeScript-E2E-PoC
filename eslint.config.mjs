import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  { ignores: ["cypress.config.ts", "src/*", "allure-report"] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
