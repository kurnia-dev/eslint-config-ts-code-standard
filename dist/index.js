(() => {
  // rules/cypress.js
  var cypress_default = {
    "cypress/no-force": "error",
    "promise/catch-or-return": "off",
    "promise/always-return": "off",
    "promise/prefer-await-to-then": "off"
  };

  // rules/vue.js
  var vue_default = {
    "vue/attributes-order": [
      "error",
      {
        order: [
          ["GLOBAL", "UNIQUE", "SLOT"],
          "DEFINITION",
          "CONDITIONALS",
          "LIST_RENDERING",
          "RENDER_MODIFIERS",
          "CONTENT",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "ATTR_DYNAMIC",
          "EVENTS",
          ["ATTR_SHORTHAND_BOOL", "ATTR_STATIC"]
        ],
        alphabetical: true
      }
    ],
    "vue/block-lang": ["error", { script: { lang: "ts" } }],
    "vue/block-order": [
      "error",
      {
        order: ["script", "template", "style"]
      }
    ],
    "vue/component-api-style": ["error", ["script-setup", "composition"]],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/component-tags-order": [
      "error",
      {
        order: ["script[setup]", "script", "template", "style"]
      }
    ],
    "vue/custom-event-name-casing": "error",
    "vue/define-emits-declaration": ["error", "type-based"],
    "vue/define-macros-order": [
      "error",
      {
        order: ["defineProps", "defineEmits", "defineModel"],
        defineExposeLast: true
      }
    ],
    "vue/define-props-declaration": ["error", "type-based"],
    "vue/html-comment-content-newline": "error",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/max-attributes-per-line": "off",
    "vue/multi-word-component-names": "error",
    "vue/new-line-between-multi-line-property": "error",
    "vue/next-tick-style": ["error", "callback"],
    "vue/no-dupe-keys": "error",
    "vue/no-export-in-script-setup": "error",
    "vue/no-lone-template": "error",
    "vue/no-reserved-component-names": "error",
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
    "vue/no-static-inline-styles": ["error", { allowBinding: false }],
    "vue/no-unused-emit-declarations": "error",
    "vue/no-unused-refs": "error",
    "vue/no-useless-v-bind": [
      "error",
      { ignoreIncludesComment: false, ignoreStringEscape: false }
    ],
    "vue/padding-line-between-blocks": ["error", "always" | "never"],
    "vue/prefer-import-from-vue": "error",
    "vue/prefer-true-attribute-shorthand": ["error", "always"],
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/require-explicit-emits": [
      "error",
      {
        allowProps: false
      }
    ],
    "vue/require-typed-ref": "error",
    "vue/script-setup-uses-vars": "error",
    "vue/singleline-html-element-content-newline": "off",
    "vue/v-on-event-hyphenation": [
      "error",
      "always",
      {
        autofix: true
      }
    ]
  };

  // rules/import.js
  var import_default = {
    "import/newline-after-import": ["error", { count: 2 }],
    "import/order": [
      "error",
      {
        "groups": [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"]
        ],
        "named": true,
        "newlines-between": "always",
        "alphabetize": { order: "asc", caseInsensitive: true }
      }
    ]
  };

  // index.js
  var eslint_config_code_standard_default = {
    env: {
      browser: true,
      es2021: true,
      node: true
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
      "plugin:vue/vue3-strongly-recommended"
    ],
    globals: {
      defineEmits: "readonly",
      defineExpose: "readonly",
      defineProps: "readonly",
      withDefaults: "readonly"
    },
    ignorePatterns: ["dist"],
    overrides: [
      {
        extends: ["plugin:cypress/recommended"],
        files: ["**/*.cy.spec.ts"],
        rules: cypress_default
      },
      {
        files: [
          "**/main.ts",
          "**/components/{v1,v2}/index.ts",
          "**/registerComponent.util.ts"
        ],
        rules: {
          "vue/multi-word-component-names": "off",
          "vue/no-reserved-component-names": "off"
        }
      },
      {
        files: ["vue.config.js"],
        rules: {
          "@typescript-eslint/no-var-requires": "off"
        }
      }
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
      ecmaVersion: "latest",
      parser: "@typescript-eslint/parser"
    },
    plugins: ["@typescript-eslint", "vue"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          format: ["PascalCase"],
          selector: "interface"
        },
        {
          format: ["PascalCase"],
          selector: "typeAlias"
        },
        {
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          selector: "variable"
        },
        {
          format: ["PascalCase"],
          selector: "typeLike"
        },
        {
          format: ["camelCase"],
          selector: "function"
        }
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
          allow: ["error"]
        }
      ],
      "no-debugger": false ? "error" : "warn",
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
        { enforceForRenamedProperties: false }
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          quoteProps: "consistent",
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          useTabs: false
        }
      ],
      "promise/prefer-await-to-callbacks": "error",
      "promise/prefer-await-to-then": "error",
      "quotes": ["error", "single", { avoidEscape: true }],
      ...vue_default,
      ...import_default
    }
  };
})();
