import { configure } from '@storybook/react';
import '../src/common';

function loadStories() {
  // require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);