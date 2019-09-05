import colors from './colors';

export const theme = {
  animations: {
    time: {
      veryFast: '0.1s',
      fast: '0.25s',
      medium: '0.5s',
      slow: '1s'
    },
    milliseconds: {
      veryFast: 100,
      fast: 250,
      medium: 500,
      slow: 1000
    }
  },
  button: {
    border: 'none',
    borderRadius: '4px',
    color: colors.white,
    height: '38px',
    padding: '5px 15px 5px 15px'
  },
  card: {
    background: colors.white,
    borderRadius: '20px',
    boxShadow: `0px 0px 7px rgba(${colors.blackRGB},0.20)`,
    footerHeight: 'auto',
    footerMinHeight: '50px',
    footerBackground: colors.white,
    headerHeight: '50px',
    headerBackground: colors.white,
    height: 'auto',
    innerBorder: `1px solid ${colors.lightGrey}`,
    outerBorder: 'none',
    width: 'auto'
  },
  collapse: {
    borderRadius: '8px',
    boxShadow: `0px 0px 4px rgba(${colors.blackRGB},0.20)`,
    contentPadding: '10px',
    contentBackground: colors.white,
    headerBackground: colors.white,
    headerHeight: '40px',
    headerPadding: '0px 10px',
  },
  colors: {
    ...colors
  },
  display: {
    desktop: '880px',
    tablet: '670px',
    phone: '475px'
  },
  drawer: {
    borderRadius: '8px',
    boxShadow: `0px 0px 7px rgba(${colors.blackRGB},0.20)`,
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

export {
  colors
};
