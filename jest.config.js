const path = require('path');

const ROOT = __dirname;

const mockModulePath = path.resolve(ROOT, './__mocks__/fileMock.js');
const imageFileRegex =
  '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$';
const cssFileRegex = '\\.(css|scss)$';

module.exports = {
  transform: {
    '^.+\\.jsx?$': path.resolve(__dirname, './jest.config.babel.js'),
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  setupFilesAfterEnv: [path.resolve(ROOT, './jest.setup.js')],
  moduleNameMapper: {
    [imageFileRegex]: mockModulePath,
    [cssFileRegex]: mockModulePath,
  },
};
