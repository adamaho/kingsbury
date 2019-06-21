import * as React from 'react';

import {
  theme,
  ThemeProvider
} from '../src/styles/theme';

export default (storyFn: any) => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
);