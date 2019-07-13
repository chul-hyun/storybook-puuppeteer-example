import { configure } from '@storybook/react';
import '../src/common';

function loadStories() {
  const req = require.context('../stories', true, /^((?![\\/]node_modules|vendor[\\/]).)*\.stories\.[jt]sx?$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);