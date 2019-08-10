import colors from './colors';

export const theme = {
  animations: {
    time: {
      fast: '0.25s',
      medium: '0.5s',
      slow: '1s'
    }
  },
  button: {
    backgroundDisabled: colors.lightGrey,
    border: 'none',
    borderRadius: '4px',
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
    boxShadow: `0px 0px 7px rgba(${colors.blackRGB}, 0.20)`,
    toggleColor: colors.darkGrey
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
    fontSizeSmall: '16px',
    fontSizeLarge: '20px',
    heightSmall: '40px',
    heightLarge: '50px',
    placeholderColor: `${colors.lightGrey}`,
  },
  icons: {
    close: {
      color: colors.darkGrey
    }
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
};
