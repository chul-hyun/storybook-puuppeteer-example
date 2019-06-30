import { configure } from '@storybook/react';
import '../src/common';

function loadStories() {
  require('../stories/Header.stories');
  require('../stories/Main.stories');
  require('../stories/Footer.stories');
  // You can require as many stories as you need.
}

configure(loadStories, module);