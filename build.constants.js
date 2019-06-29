const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '.');
const SRC_PATH = path.resolve(ROOT_PATH, './src/');
const DIST_PATH = path.resolve(ROOT_PATH, './dist/');

module.exports = {
  SRC_PATH,
  DIST_PATH
}