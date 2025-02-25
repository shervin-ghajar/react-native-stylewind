import { Theme } from '../types';
import { colors } from './colors/index';
import { defaultUtilities } from './defaultUtilities';
import { spacingConfigs } from './spacing/index';
import { typography } from './typography/index';

/* -------------------------------------------------------------------------- */
export const defaultTheme: Theme = {
  mode: 'default',
  colors,
  spacing: spacingConfigs,
  typography,
  utilities: defaultUtilities,
};

export type DefaultThemeType = typeof defaultTheme;
