module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["standard", "plugin:react/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
