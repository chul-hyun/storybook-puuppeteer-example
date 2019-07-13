const path = require('path');

const ROOT = __dirname;

module.exports = {
  transform: {
    '^.+\\.jsx?$': path.resolve(__dirname, './jest.config.babel.js'),
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(
      ROOT,
      './__mocks__/fileMock.js'
    ),
    '\\.(css|less)$': path.resolve(ROOT, './__mocks__/fileMock.js'),
  },
};
