const webpackConfig = require('./webpack.config.prod');
const babelConfig = require('./babel.config');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    babelOptions: babelConfig,
  },
  plugins: ['prettier', 'react-hooks'],
  settings: {
    'import/resolver': {
      webpack: {
        config: webpackConfig,
      }
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    /* prettier */
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],

    /* eslint-plugin-react-hooks */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
