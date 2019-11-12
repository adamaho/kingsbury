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
    prefixWidth: 30, // used for calcs, must be a number
    prefixLeft: '5px',
    suffixWidth: 30, // used for calcs, must be a number
    suffixRight: '5px'
  },
  icons: {
    close: {
      color: colors.darkGrey
    }
  },
  paper: {
    background: colors.white,
    border: 'none',
    borderColor: 'none',
    borderRadius: '7px',
    boxShadow: `0px 0px 4px rgba(${colors.blackRGB},0.20)`,
  },
  select: {
    borderRadius: '7px',
    option: {
      background: colors.white,
      padding: '5px 10px',
      hoverBackground: `rgba(${colors.primaryRGB}, 0.1)`,
      selectBackground: `rgba(${colors.primaryRGB}, 0.4)`,
      fontWeight: 'bold'
    }
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
