import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet
} = styledComponents as styledComponents.ThemedStyledComponentsModule<any>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet };
export default styled;