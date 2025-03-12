export interface ThemeColors {
  primary: ColorShade;
  secondary: ColorShade;
  error: ColorShade;
  warning: ColorShade;
  success: ColorShade;
  info: ColorShade;
  background: ColorShade;
  text: ColorShade;
  grey: GreyColor;
  common: CommonColor;
  [key: string]: { [key: string]: string } | ColorShade | GreyColor;
}
/* -------------------------------------------------------------------------- */
export type ColorShade = {
  default: string;
  light?: string;
  dark?: string;
};

type GreyColor = {
  default: string;
  0: string;
  10: string;
  20: string;
  30: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  100: string;
};

type CommonColor = {
  white: string;
  black: string;
};

export type ThemeColorValues = Partial<ColorShade & GreyColor & CommonColor>;
