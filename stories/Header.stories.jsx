import React from 'react';
import { storiesOf } from '@storybook/react';

import AppWrapper from '../src/components/AppWrapper';
import Header from '../src/components/Header';

storiesOf('Header', module).add('basic', () => (
  <AppWrapper>
    <Header />
  </AppWrapper>
));
