import { ThemeColors } from './configs/colors/types';
import { ThemeSpacing } from './configs/spacing/types';
import { ThemeTypography } from './configs/typography/types';
import { ViewStyle } from 'react-native';

/* -------------------------------------------------------------------------- */
export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
}

export type ThemeConfig = Partial<{ [P in keyof Theme]: Partial<Theme[P]> }>;

export type ThemeMode = 'light' | 'dark' | 'default';
//platform: typeof Platform
export type ThemeViewStyle = {
  [P in keyof ViewStyle]: ((theme: Theme) => ViewStyle[P]) | ViewStyle[P] | number | string;
};
