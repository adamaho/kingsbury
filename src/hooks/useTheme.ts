import * as React from 'react';

import {
  theme
} from "../theme";

import {
  ThemeContext
} from "../styled";

// theme hook to get the current theme;
export const useTheme = () => {
  return React.useContext(ThemeContext) || theme
};
