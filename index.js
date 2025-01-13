import cypressConfig from "eslint-plugin-cypress";
import vueConfig from "eslint-plugin-vue";
import typescriptEslintConfig from "@typescript-eslint/eslint-plugin";
import prettierConfig from "eslint-plugin-prettier";
import promiseConfig from "eslint-plugin-promise";
import cssConfig from "eslint-plugin-css";
import recommendedVueConfig from "@vue/eslint-config-typescript/recommended";
import eslintRecommendedConfig from "eslint/conf/eslint-recommended";
import recommendedTSConfig from "@typescript-eslint/eslint-plugin/dist/configs/recommended";

import cypressRules from "./rules/cypress";
import vueRules from "./rules/vue";
import importRules from "./rules/import";

export default [
  {
    ignores: ["dist", "node_modules"],
  },
  // Base ESLint configurations and recommended configs
  ...eslintRecommendedConfig,
  ...recommendedTSConfig,
  ...recommendedVueConfig,
  {
    files: ["**/*.js", "**/*.ts", "**/*.vue"],
    languageOptions: {
      ecmaVersion: "latest",
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintConfig,
      "vue": vueConfig,
      "css": cssConfig,
      "prettier": prettierConfig,
      "promise": promiseConfig,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          format: ["PascalCase"],
          selector: "interface",
        },
        {
          format: ["PascalCase"],
          selector: "typeAlias",
        },
        {
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          selector: "variable",
        },
        {
          format: ["PascalCase"],
          selector: "typeLike",
        },
        {
          format: ["camelCase"],
          selector: "function",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-shadow": "error",
      "camelcase": "error",
      "capitalized-comments": "error",
      "complexity": ["error", 50],
      "default-param-last": "error",
      "func-style": ["error", "expression"],
      "multiline-comment-style": "error",
      "no-console": [
        "error",
        {
          allow: ["error"],
        },
      ],
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-nested-ternary": ["error", { max: 2 }],
      "no-shadow": "error",
      "no-unneeded-ternary": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "operator-assignment": "error",
      "prefer-const": "error",
      "prefer-destructuring": [
        "error",
        { array: false, object: true },
        { enforceForRenamedProperties: false },
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          quoteProps: "consistent",
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          useTabs: false,
        },
      ],
      "promise/prefer-await-to-callbacks": "error",
      "promise/prefer-await-to-then": "error",
      "quotes": ["error", "single", { avoidEscape: true }],
      ...vueRules,
      ...importRules,
    },
  },
  {
    files: ["**/*.cy.spec.ts"],
    plugins: {
      cypress: cypressConfig,
    },
    rules: cypressRules,
  },
  {
    files: [
      "**/main.ts",
      "**/components/{v1,v2}/index.ts",
      "**/registerComponent.util.ts",
    ],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-reserved-component-names": "off",
    },
  },
  {
    files: ["vue.config.js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
    },
  },
];
