import { ThemeColors } from './configs/colors/types';
import { ThemeSpacing } from './configs/spacing/types';
import { ThemeTypography } from './configs/typography/types';
import { Platform, ViewStyle } from 'react-native';

/* -------------------------------------------------------------------------- */
export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
}

export type ThemeConfig = Partial<{ [P in keyof Theme]: Partial<Theme[P]> }>;

export type ThemeMode = 'light' | 'dark' | 'default';

export type ThemeViewStyle = {
  [P in keyof ViewStyle]:
    | ((theme: Theme, platform: typeof Platform) => ViewStyle[P])
    | ViewStyle[P]
    | number
    | string;
};
