// eslint-disable-next-line
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['gulpfile.js'],
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-var': 'error',
    'prettier/prettier': 'error',
  },
};
