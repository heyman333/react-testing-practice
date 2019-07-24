module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
  },
};

// module.exports = {
//   extends: ['standard', 'prettier'],
//   parser: '@typescript-eslint/parser',
//   env: {
//     browser: true,
//     jest: true,
//   },
//   parserOptions: {
//     ecmaVersion: 2017,
//     sourceType: 'module',
//   },
//   rules: {
//     'no-unused-vars': 0,
//     'comma-dangle': ['error', 'always-multiline'],
//     semi: [2, 'always'],
//     'space-before-function-paren': ['error', 'never'],
//     'no-new-object': 'error',
//     'no-array-constructor': 'error',
//     'space-before-function-paren': [
//       'error',
//       {
//         anonymous: 'never',
//         named: 'never',
//         asyncArrow: 'always',
//       },
//     ],
//   },
// }