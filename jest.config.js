const path = require('path');

module.exports = {
  transform: {
    '^.+\\.jsx?$': path.resolve(__dirname, './jest.config.babel.js'),
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
};
