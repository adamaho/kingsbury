import * as styledComponents from 'styled-components';

export interface ITheme {
  animations: {
    [key: string]: {
      [key: string]: string | any
    }
  };
  buttons: {
    [key: string]: any
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
  drawer: {
    [key: string]: string
  };
  header: {
    [key: string]: string
  };
  input: {
    [key: string]: string
  };
  notice: {
    [key: string]: string
  };
  tag: {
    [key: string]: string
  };
  typeography: {
    h1: {
      [key: string]: string
    },
    h2: {
      [key: string]: string
    },
    h3: {
      [key: string]: string
    },
    h4: {
      [key: string]: string
    },
    p: {
      [key: string]: string
    }
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
  danger: '#FF130D',
  dangerRGB: '255, 19, 13',
  info: '#0C95FF',
  infoRGB: '12, 149, 255',
  warning: '#FF9F0C',
  warningRGB: '255, 159, 12',
  success: '#0BE894',
  successRGB: '11, 232, 148',
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
    backgroundDisabled: colors.lightGrey,
    border: 'none',
    borderRadius: '4px',
    boxShadow: `0px 2px 4px rgba(${colors.blackRGB}, 0.5)`,
    color: colors.white,
    height: 38,
    padding: '5px 15px 5px 15px'
  },
  card: {
    background: colors.white,
    borderRadius: '20px',
    boxShadow: `0px 0px 7px rgba(${colors.blackRGB}, 0.20)`,
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
    dangerRGB: colors.dangerRGB,
    darkGrey: colors.darkGrey,
    darkGreyRGB: colors.darkGreyRGB,
    default: colors.lightGrey,
    defaultRGB: colors.lightGreyRGB,
    info: colors.info,
    infoRGB: colors.infoRGB,
    lightGrey: colors.lightGrey,
    lightGreyRGB: colors.lightGreyRGB,
    primary: colors.primary,
    primaryRGB: colors.primaryRGB,
    secondary: colors.secondary,
    secondaryRGB: colors.secondaryRGB,
    success: colors.success,
    successRGB: colors.successRGB,
    title: colors.white,
    warning: colors.warning,
    warningRGB: colors.warningRGB,
    white: colors.white,
    whiteRGB: colors.whiteRGB
  },
  display: {
    desktop: '880px',
    tablet: '670px',
    phone: '475px'
  },
  drawer: {
    borderRadius: '8px',
    boxShadow: `0px 0px 7px rgba(${colors.blackRGB}, 0.20)`
  },
  header: {
    height: '50px;'
  },
  input: {
    background: 'transparent',
    border: '1px solid',
    borderColor: `${colors.lightGrey}`,
    borderRadius: '7px',
    color: `${colors.black}`,
    fontSize: '16px',
    height: '40px',
    placeholderColor: `${colors.lightGrey}`,
  },
  notice: {
    avatarwidth: '25px',
    avatarheight: '25px',
    pillWidth: '4px',
    pillRadius: '2px',
    pillMinHeight: '20px',
    titleFontSize: '16px',
    titleFontWeight: '700',
    titleFontColor: colors.black,
    descriptionFontSize: '16px',
    descriptionFontWeight: '400',
    descriptionFontColor: colors.lightGrey
  },
  tag: {
    padding: '0px 10px',
    height: '20px',
    color: colors.black,
    borderRadius: '10px',
    textFontSize: '14px'
  },
  typeography: {
    h1: {
      margin: '0px'
    },
    h2: {
      margin: '0px'
    },
    h3: {
      margin: '0px'
    },
    h4: {
      margin: '0px'
    },
    p: {
      margin: '0px'
    }
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