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

const testTheme: GlobalTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#ff00ff',
    primaryRGB: '255,0,255'
  }
};

interface Themes {
  [key: string]: GlobalTheme
}

const themes: Themes = {
  light: {
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#ff00ff',
      primaryRGB: '255,0,255'
    }
  },
  dark: {
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#ff0000',
      primaryRGB: '255,0, 0'
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
