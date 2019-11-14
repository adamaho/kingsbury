import * as styledComponents from 'styled-components';

import {
  GlobalTheme
} from "../theme/types";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  ServerStyleSheet
} = styledComponents as styledComponents.ThemedStyledComponentsModule<GlobalTheme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider, ThemeConsumer, ThemeContext, ServerStyleSheet };
