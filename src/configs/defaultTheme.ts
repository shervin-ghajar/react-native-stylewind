import { Theme } from '../types';
import { colors } from './colors/index';
import { spacingConfigs } from './spacing/index';
import { typography } from './typography/index';

/* -------------------------------------------------------------------------- */
export const defaultTheme: Theme = {
  mode: 'default',
  colors,
  spacing: spacingConfigs,
  typography,
};

export type DefaultThemeType = typeof defaultTheme;
