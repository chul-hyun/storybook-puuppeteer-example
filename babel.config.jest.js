const mrege = require('babel-merge');

const babelConfig = require('./babel.config');

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
});
