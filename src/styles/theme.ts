import * as styledComponents from 'styled-components';

export interface ITheme {
  animations: {
    [key: string]: {
      [key: string]: string | any
    }
  };
  buttons: {
    [key: string]: {
      [key: string]: string | any
    }
  };
  card: {
    [key: string]: string
  };
  colors: {
    [key: string]: string
  };
  display: {
    [key: string]: string
  };
  fontFamily: string;
  header: {
    [key: string]: string
  };
  input: {
    [key: string]: string
  };
  notice: {
    [key: string]: string
  };
}

interface IColors {
  [key: string]: string;
}

const colors: IColors = {
  primary: '#5C6AC4',
  primaryRGB: '92, 106, 196',
  secondary: '#0B1D35',
  secondaryRGB: '11, 29, 33',
  white: '#FFFFFF',
  whiteRGB: '255, 255, 255',
  black: '#000000',
  blackRGB: '0, 0, 0',
  lightGrey: '#C4C4C4',
  lightGreyRGB: '196, 196, 196',
  darkGrey: '#C4C4C4',
  darkGreyRGB: '196, 196, 196',
  border: '#C4C4C4',
  danger: 'red',
  info: 'blue',
  warning: 'yellow',
  success: 'green',
  default: '#C4C4C4'
}

export const theme: ITheme = {
  animations: {
    time: {
      fast: '0.25s',
      medium: '0.5s',
      slow: '1s'
    }
  },
  buttons: {
    default: {
      borderRadius: '4px',
      height: 38,
      padding: '5px 15px 5px 15px'
    },
    primary: {
      background: colors.primary,
      backgroundDisabled: colors.lightGrey,
      border: 'none',
      borderDisabled: 'none',
      boxShadow: `0px 2px 4px rgba(${colors.blackRGB}, 0.5)`,
      color: colors.white,
      cursor: 'pointer'
    },
    ghost: {
      background: 'transparent',
      backgroundDisabled: 'transparent',
      border: `1px solid ${colors.white}`,
      borderDisabled: `1px solid ${colors.lightGrey}`, 
      boxShadow: 'none',
      color: colors.white,
      cursor: 'pointer'
    }
  },
  card: {
    background: colors.white,
    borderRadius: '5px',
    boxShadow: `0px 4px 4px rgba(${colors.blackRGB}, 0.25)`,
    footerHeight: 'auto',
    footerBackground: colors.white,
    headerHeight: '50px',
    headerBackground: colors.white,
    height: 'auto',
    innerBorder: `1px solid ${colors.lightGrey}`,
    outerBorder: 'none',
    width: '100%'
  },
  colors: {
    black: colors.black,
    blackRGB: colors.blackRGB,
    border: colors.border,
    danger: colors.danger,
    darkGrey: colors.darkGrey,
    darkGreyRGB: colors.darkGreyRGB,
    default: colors.default,
    info: colors.info,
    lightGrey: colors.lightGrey,
    lightGreyRGB: colors.lightGreyRGB,
    primary: colors.primary,
    primaryRGB: colors.primaryRGB,
    secondary: colors.secondary,
    secondaryRGB: colors.secondaryRGB,
    success: colors.success,
    title: colors.white,
    warning: colors.warning,
    white: colors.white,
    whiteRGB: colors.whiteRGB,
    
  },
  display: {
    desktop: '880px',
    tablet: '670px',
    phone: '475px'
  },
  fontFamily: "'Nunito', sans-serif",
  header: {
    height: '50px;'
  },
  input: {
    height: '38px',
    color: `${colors.black}`,
    background: 'transparent',
    border: '1px solid',
    borderColor: `${colors.lightGrey}`,
    borderRadius: '5px',
    placeholderColor: `${colors.lightGrey}`,
  },
  notice: {

  }
}

// Adds types for the theme to the ThemeProvider context
// see https://www.styled-components.com/docs/api#typescript

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  ServerStyleSheet
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet };
export default styled;