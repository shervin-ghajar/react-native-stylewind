import { spacingConfigs } from '../configs/spacing';
import { SpacingTypes } from '../configs/spacing/types';
import { theme } from '../theme';

/* -------------------------------------------------------------------------- */
export const spacing = (space: SpacingTypes) => {
  if (typeof space === 'number') return theme.spacing.default * space;
  return spacingConfigs[space];
};
