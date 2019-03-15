import * as styledComponents from 'styled-components';

export interface ITheme {
  fontFamily: string;
  header: {
    [key: string]: string
  }

  colors: {
    [key: string]: string
  }

  buttons: {
    [key: string]: {
      [key: string]: string | any
    }
  },
  input: {
    [key: string]: string
  },
  animations: {
    [key: string]: {
      [key: string]: string | any
    }
  }
  display: {
    [key: string]: string
  }
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
  darkGreyRGB: '196, 196, 196'
}

export const theme: ITheme = {
  fontFamily: "'Nunito' sans-serif",
  header: {
    height: '50px;'
  },
  colors: {
    white: colors.white,
    whiteRGB: colors.whiteRGB,
    lightGrey: colors.lightGrey,
    lightGreyRGB: colors.lightGreyRGB,
    darkGrey: colors.darkGrey,
    darkGreyRGB: colors.darkGreyRGB,
    black: colors.black,
    blackRGB: colors.blackRGB,
    primary: colors.primary,
    primaryRGB: colors.primaryRGB,
    secondary: colors.secondary,
    secondaryRGB: colors.secondaryRGB,
    title: colors.white
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
      boxShadow: `0px 2px 4px rgba(${colors.blackRGB} 0.5)`,
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
  input: {
    height: '38px',
    color: `${colors.black}`,
    background: 'transparent',
    border: '1px solid',
    borderColor: `${colors.lightGrey}`,
    borderRadius: '5px',
    placeholderColor: `${colors.lightGrey}`,
  },
  animations: {
    time: {
      fast: '0.25s',
      medium: '0.5s',
      slow: '1s'
    }
  },
  display: {
    desktop: '880px',
    tablet: '670px',
    phone: '475px'
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