const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const { DIST_PATH } = require('./build.constants');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: DIST_PATH,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
  devtool: 'eval-source-map',
});
