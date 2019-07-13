const babelJest = require('babel-jest');
const babelConfigJest = require('./babel.config.jest');

module.exports = babelJest.createTransformer(babelConfigJest);

// TODO 아래 PR이 최신버전에 적용 된다면 이 파일을 삭제할수 있음.
// https://github.com/facebook/jest/pull/7288
