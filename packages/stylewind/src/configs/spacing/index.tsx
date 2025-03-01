import { ThemeSpacing } from './types';

/* -------------------------------------------------------------------------- */
const defaultSpacing = 8;
/* -------------------------------------------------------------------------- */
/**
 * Configuration for theme spacing values.
 * Each key corresponds to a predefined spacing size and its numeric value.
 *
 * @type {{ none: number, default: number, xSmall: number, small: number, medium: number, large: number, xLarge: number, xxLarge: number }}
 * @property {number} none - Spacing value: 0.
 * @property {number} default - Default spacing value: {@link defaultSpacing}.
 * @property {number} xSmall - Extra small spacing value: {@link defaultSpacing} * 0.5.
 * @property {number} small - Small spacing value: {@link defaultSpacing}.
 * @property {number} medium - Medium spacing value: {@link defaultSpacing} * 2.
 * @property {number} large - Large spacing value: {@link defaultSpacing} * 3.
 * @property {number} xLarge - Extra large spacing value: {@link defaultSpacing} * 4.
 * @property {number} xxLarge - Double extra large spacing value: {@link defaultSpacing} * 5.
 */
export const spacingConfigs: ThemeSpacing = {
  none: 0,
  default: defaultSpacing,
  xSmall: defaultSpacing * 0.5,
  small: defaultSpacing,
  medium: defaultSpacing * 2,
  large: defaultSpacing * 3,
  xLarge: defaultSpacing * 4,
  xxLarg: defaultSpacing * 5,
};
