import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    languageOptions: {
      parser: tsParser,
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // ここにすべてのルールを記述
    },
    plugins: {
      ...pluginJs.configs.recommended.plugins,
      ...tseslint.configs.recommended.plugins,
      ...fixupConfigRules(pluginReactConfig).plugins,
    },
    settings: {
      ...pluginJs.configs.recommended.settings,
      ...tseslint.configs.recommended.settings,
      ...fixupConfigRules(pluginReactConfig).settings,
    },
  },
];
