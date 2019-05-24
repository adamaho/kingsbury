import * as React from 'react';

import {
  RenderFunction
} from '@storybook/react';

import {
  theme,
  ThemeProvider
} from '../src/styles/theme';

export default (storyFn: RenderFunction) => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
);