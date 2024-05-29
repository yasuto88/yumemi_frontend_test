import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import testingLibrary from 'eslint-plugin-testing-library';
import { fixupConfigRules } from '@eslint/compat';

const config = [
  {
    languageOptions: {
      parser: tsParser,
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'testing-library/no-node-access': [
        'error',
        { allowContainerFirstChild: true },
      ],
    },
    plugins: {
      ...pluginJs.configs.recommended.plugins,
      ...tseslint.configs.recommended.plugins,
      ...fixupConfigRules(pluginReactConfig).plugins,
      'testing-library': testingLibrary,
    },
    settings: {
      ...pluginJs.configs.recommended.settings,
      ...tseslint.configs.recommended.settings,
      ...fixupConfigRules(pluginReactConfig).settings,
    },
  },
];

export default config;
