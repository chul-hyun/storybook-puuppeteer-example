const path = require('path');

const { SRC_PATH } = require('./build.constants');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      Components: path.resolve(SRC_PATH, 'components/'),
      Styles: path.resolve(SRC_PATH, 'styles/'),
    },
  },
};
