import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config({
  files: ['**/*.{ts,tsx}'],
  extends: [pluginJs.configs.recommended, ...tseslint.configs.recommended],
  languageOptions: {
    globals: globals.browser, // window, console, alert 같은 browser 변수를 사용할 수 있도록 함.
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
});
