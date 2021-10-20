/* eslint-disable no-dupe-keys */
module.exports = {

  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      module: true,
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'babel',
    'eslint-plugin'

  ],
  rules: {
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: 0,
    indent: 0,
    'react/jsx-indent': 0,
    'array-element-newline': 0,
    'import/newline-after-import': 0,
    'comma-dangle': 0,
    'import/no-named-as-default': 0,
  },
};
