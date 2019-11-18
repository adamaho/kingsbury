import * as React from 'react';

import {
  ThemeProvider
} from "../../src/styled";

import {
  Button
} from "../../src/components";

import {
  theme
} from "../../src/theme";

import {
  GlobalTheme
} from "../../src/theme/types";

interface Themes {
  [key: string]: GlobalTheme
}

const themes: Themes = {
  light: {
    ...theme,
    colors: {
      ...theme.colors,
      // primary: '#24557d',
      // primaryRGB: '36,85,125'
    }
  },
  dark: {
    ...theme,
    colors: {
      ...theme.colors,
      // primary: '#ff0000',
      // primaryRGB: '255,0, 0'
    }
  }
};

const Foo = ({ storyFn, setTheme, theme } : any) => {
  return (
    <div>
      <Button buttonType={'info'} onClick={setTheme}> {`${theme} Theme`} </Button>
      {storyFn()}
    </div>
  )
};

export default (storyFn: any) => {
  return (
    <ThemeProvider theme={themes.light}>
      {storyFn()}
    </ThemeProvider>
  );
};
