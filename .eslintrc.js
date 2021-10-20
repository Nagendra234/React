module.exports = {
  
  parser: '@babel/eslint-parser',
  parser: "babel-eslint",
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
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'babel',
    // '@babel'
    
    
  ],
  rules: {
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: 0,
    'indent': 0,
    'react/jsx-indent': 0,
  },
};
