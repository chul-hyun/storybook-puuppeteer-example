import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const devices = require('puppeteer/DeviceDescriptors');

const iPhone = devices['iPhone 6'];

const customizePage = page => page.emulate(iPhone);

const getScreenshotOptions = () => ({
  fullPage: true,
});

const getGotoOptions = () => ({
  waitUntil: 'networkidle2',
});

// React renederer 테스트
initStoryshots();

// screenshot image 테스트
initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    customizePage,
    getScreenshotOptions,
    getGotoOptions,
  }),
});
