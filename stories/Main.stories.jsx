import React from 'react';
import { storiesOf } from '@storybook/react';

import AppWrapper from '../src/components/AppWrapper';
import Main from '../src/components/Main';

storiesOf('Main', module).add('basic', () => (
  <AppWrapper>
    <Main />
  </AppWrapper>
));
