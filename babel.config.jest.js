const path = require('path');
const mrege = require('babel-merge');

const babelConfig = require('./babel.config');

const webpackConfigPath = path.resolve(__dirname, './webpack.config.common.js');

module.exports = mrege(babelConfig, {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        modules: 'cjs',
      },
    ],
  ],
  plugins: ['require-context-hook', ['babel-plugin-webpack-alias', { config: webpackConfigPath }]],
});
