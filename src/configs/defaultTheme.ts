import { Theme } from '../types';
import { colors } from './colors';
import { spacingConfigs } from './spacing';
import { typography } from './typography';

/* -------------------------------------------------------------------------- */
export const defaultTheme: Theme = {
  mode: 'default',
  colors,
  spacing: spacingConfigs,
  typography,
};
