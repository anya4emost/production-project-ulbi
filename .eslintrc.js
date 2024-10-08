module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    indent: [2, 4],
    "react/jsx-indent": [2, 4],
    "react/jsx-indent-props": [
      2,
      { indentMode: 4, ignoreTernaryOperator: true },
    ],
    "react/jsx-filename-extension": [
      2,
      { extensions: ["js", "jsx", "ts", "tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "no-undef": "warn",
    "import/extensions": "off",
    "object-curly-spacing": ["warn", "always"],
    "react/jsx-curly-brace-presence": "off",
    "react/jsx-tag-spacing": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react/button-has-type": "off",
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": "off",
    "max-len": [ 'error', {
      ignoreComments: true,
      code: 100
    }]
  },
};
