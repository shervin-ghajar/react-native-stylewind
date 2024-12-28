import { colors } from '../configs/colors';
import { spacingConfigs } from '../configs/spacing';
import { typography } from '../configs/typography';
import { Theme } from '../types';

/* -------------------------------------------------------------------------- */
export const defaultTheme: Theme = {
  mode: 'default',
  colors,
  spacing: spacingConfigs,
  typography,
};
