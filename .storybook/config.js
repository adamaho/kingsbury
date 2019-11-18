import * as React from 'react';

import {
  addDecorator,
  addParameters,
  configure
} from '@storybook/react';

import ThemeDecorator from './components/ThemeDecorator';
import yourTheme from './yourTheme';

addParameters({
  options: {
    theme: yourTheme,
    showPanel: false
  },
});

addDecorator(story => ThemeDecorator(story));

configure(require.context('../src', true, /\.stories\.(tsx|mdx)$/), module);
