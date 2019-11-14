import * as React from 'react';

import {
  ThemeProvider
} from "../../src/styled";

import {
  theme
} from "../../src/theme";


const testTheme:object = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#ff00ff',
    primaryRGB: '255,0,255'
  }
};

export default (storyFn: any) => (
  <ThemeProvider theme={testTheme}>
    {storyFn()}
  </ThemeProvider>
);
