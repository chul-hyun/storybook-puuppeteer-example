import React from 'react';
import { storiesOf } from '@storybook/react';

import AppWrapper from '../src/components/AppWrapper';
import Footer from '../src/components/Footer';

storiesOf('Footer', module).add('basic', () => (
  <AppWrapper>
    <Footer />
  </AppWrapper>
));
