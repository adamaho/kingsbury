import colors from './colors';

export const theme: any = {
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
  popover: {
    background: colors.white,
    boxShadow: `0px 0px 7px rgba(${colors.blackRGB},0.20)`,
    border: 'none',
    borderColor: 'none',
    borderRadius: '7px',
    margin: '5px 0 0 0'
  },
  select: {
    border: '1px solid',
    borderColor: `${colors.lightGrey}`,
    borderRadius: '7px',
    fontSizeSmall: '16px',
    fontSizeLarge: '20px',
    heightSmall: '40px',
    heightLarge: '50px'
  },
  typeography: {
    h1: {
      fontSize: '32px'
    },
    h2: {
      fontSize: '24px'
    },
    h3: {
      fontSize: '18px'
    },
    h4: {
      fontSize: '16px'
    },
    p: {
      fontSize: '14px'
    }
  }
};
