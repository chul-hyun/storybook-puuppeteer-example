const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

const { SRC_PATH, DIST_PATH } = require('./build.constants');

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.jsx'),
  output: {
    filename: 'index.js',
    path: DIST_PATH,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      bodyHtmlSnippet: '<div id="root"></div>',
      mobile: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
