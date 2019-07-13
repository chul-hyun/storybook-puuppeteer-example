const path = require('path');
const mrege = require('babel-merge');

const babelConfig = require('./babel.config');

const webpackConfigPath = path.resolve(__dirname, './webpack.config.common.js');

module.exports = mrege(babelConfig, {
  plugins: ['require-context-hook', ['babel-plugin-webpack-alias', { config: webpackConfigPath }]],
});
