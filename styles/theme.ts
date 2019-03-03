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
  lightGrey: '#E7E7E7',
  lightGreyRGB: '231, 231, 231',
  darkGrey: '#C4C4C4',
  darkGreyRGB: '196, 196, 196'
}

export const theme: ITheme = {
  fontFamily: 'Tajawal',
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
      height: 38
    },
    primary: {
      background: colors.primary,
      border: 'none',
      color: '#FFFFFF',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
    },
    ghost: {
      background: 'transparent',
      border: '1px solid #FFFFFF',
      color: '#FFFFFF',
      boxShadow: 'none'
    },
    disabled: {
      background: 'grey',
      border: 'none'
    }
  },
  input: {
    height: '38px',
    background: 'transparent',
    border: '1px solid',
    borderColor: `rgba(${colors.whiteRGB}, 0.1)`,
    borderRadius: '5px',
    placeholderColor: `rgba(${colors.whiteRGB}, 0.1)`,
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
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;