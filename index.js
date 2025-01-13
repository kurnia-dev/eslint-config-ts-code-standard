import cypress from "./rules/cypress";
import vue from "./rules/vue";
import importRules from "./rules/import";

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "@vue/typescript/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:css/recommended",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
  ],
  globals: {
    defineEmits: "readonly",
    defineExpose: "readonly",
    defineProps: "readonly",
    withDefaults: "readonly",
  },
  ignorePatterns: ["dist"],
  overrides: [
    {
      extends: ["plugin:cypress/recommended"],
      files: ["**/*.cy.spec.ts"],
      rules: cypress,
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
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "vue", "import"],
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
    "no-nested-ternary": "error",
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
    ...vue,
    ...importRules,
  },
};
