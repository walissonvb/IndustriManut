import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node // Adiciona as variáveis globais do Node.js
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
