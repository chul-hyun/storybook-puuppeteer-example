module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
      },
    ],
  ],
  plugins: [],
  inputSourceMap: true,
  sourceMaps: true,
  sourceType: 'module',
};
