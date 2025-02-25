import { Theme, ThemeViewStyle } from '../types';
import { StyleProp } from 'react-native';

/* -------------------------------------------------------------------------- */
/**
 * Defines the styles for a component using a theming system.
 * The styles are based on the provided theme, allowing for
 * consistent and dynamic styling throughout the application.
 *
 * @type {Record<string, StyleProp<ThemeViewStyle>>}
 * @property {Object} container - The style for the container element.
 * @property {StyleProp<ThemeViewStyle>} container.padding - The padding applied to the container,
 *   derived from the theme's spacing.
 * @property {string} container.backgroundColor - The background color of the container,
 *   sourced from the theme's utility styles.
 *
 * @property {Object} text - The style for the text element.
 * @property {string} text.color - The color of the text, derived from the theme's primary color.
 * @property {StyleProp<ThemeViewStyle>} text - Additional utility styles applied to the text,
 *   using the utility style defined in the theme.
 *
 * @example
 * const styles = {
 *   container: {
 *     padding: theme.spacing.md,
 *     backgroundColor: theme.utilities.bgBackground.backgroundColor,
 *   },
 *   text: {
 *     color: theme.colors.primary,
 *     ...theme.utilities['p-1'], // using utility style
 *   },
 * };
 */
export const createStyle = <T extends string>(
  styles: Record<T, StyleProp<ThemeViewStyle> | ((theme: Theme) => StyleProp<ThemeViewStyle>)>,
): Record<T, StyleProp<ThemeViewStyle> | ((theme: Theme) => StyleProp<ThemeViewStyle>)> => styles;
