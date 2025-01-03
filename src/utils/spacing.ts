import { spacingConfigs } from '../configs/spacing/index';
import { SpacingTypes } from '../configs/spacing/types';
import { theme as mainTheme } from '../theme';
import { Theme } from '../types';

/* -------------------------------------------------------------------------- */
export const spacing = (space: SpacingTypes, theme?: Theme) => {
  if (typeof space === 'number') return (theme ?? mainTheme).spacing.default * space;
  return spacingConfigs[space];
};
