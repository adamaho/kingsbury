import colors from "./colors";

export interface AnimationTheme {
  time: {
    veryFast: string;
    fast: string;
    medium: string;
    slow: string;
  };
  milliseconds: {
    veryFast: number;
    fast: number;
    medium: number;
    slow: number;
  };
}

export interface ButtonTheme {
  border: string;
  borderRadius: string;
  color: string;
  height: string;
  padding: string;
}

export interface CardTheme {
  background: string;
  borderRadius: string;
  boxShadow: string;
  footerHeight: string;
  footerMinHeight: string;
  footerBackground: string;
  headerHeight: string;
  headerBackground: string;
  height: string;
  innerBorder: string;
  outerBorder: string;
  width: string;
}

export interface CollapseTheme {
  borderRadius: string;
  boxShadow: string;
  contentPadding: string;
  contentBackground: string;
  headerBackground: string;
  headerHeight: string;
  headerPadding: string;
}

export interface Colors {
  black: string;
  blackRGB: string;
  borderColor: string;
  danger: string;
  dangerRGB: string;
  darkGrey: string;
  darkGreyRGB: string;
  disabled: string;
  disabledRGB: string;
  info: string;
  infoRGB: string;
  lightGrey: string;
  lightGreyRGB: string;
  primary: string;
  primaryRGB: string;
  secondary: string;
  secondaryRGB: string;
  success: string;
  successRGB: string;
  warning: string;
  warningRGB: string;
  white: string;
  whiteRGB: string;
}

export interface InputTheme {
  background: string;
  border: string;
  borderColor: string;
  borderRadius: string;
  color: string;
  fontSizeSmall: string;
  fontSizeLarge: string;
  heightSmall: string;
  heightLarge: string;
  placeholderColor: string;
  prefixWidth: number;
  prefixLeft: string;
  suffixWidth: number;
  suffixRight: string;
}

export interface PaperTheme {
  background: string;
  border: string;
  borderColor: string;
  borderRadius: string;
  boxShadow: string;
}

export interface SelectTheme {
  borderRadius: string;
  option: {
    background: string;
    padding: string;
    hoverBackground: string;
    selectBackground: string;
    selectedFontWeight: string;
  };
}

export interface TypeographyTheme {
  h1: {
    fontSize: string;
  };
  h2: {
    fontSize: string;
  };
  h3: {
    fontSize: string;
  };
  h4: {
    fontSize: string;
  };
  p: {
    fontSize: string;
  };
}

export interface GlobalTheme {
  animations: AnimationTheme;
  button: ButtonTheme;
  card: CardTheme;
  collapse: CollapseTheme;
  colors: Colors;
  input: InputTheme;
  paper: PaperTheme;
  select: SelectTheme;
  typeography: TypeographyTheme;
}
