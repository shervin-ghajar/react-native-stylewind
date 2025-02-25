import { UtilitiesType, UtilityKeys } from '../configs/generated/utilities';
import { useTheme } from '../hooks';
import { Theme, ThemeViewStyle } from '../types';
import { capitalize } from 'lodash';
import { StyleProp } from 'react-native';

/* -------------------------------------------------------------------------- */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Combines multiple style definitions into a single style object,
 * allowing for the use of utility styles, dynamic styles based on the theme,
 * and custom style objects. This function is useful for creating
 * consistent and theme-aware styles in a React application.
 *
 * ***Note:*** This function must be used within a **`<ThemeProvider>`** context
 * to access the current **`theme`**.
 *
 * @template T - A type that can be a utility key, a style property, or a function
 * that returns a style based on the current theme.
 *
 * @param {T[]} stylesArray - An array of styles to be combined. Each element can be:
 * - A string representing a utility key to retrieve styles from the theme.
 * - A function that takes the current theme as an argument and returns a style object.
 * - An object representing custom styles, which may contain functions for dynamic values.
 *
 * @returns {Record<string, any>} A combined style object that merges all provided styles,
 * ensuring that utility styles are applied based on the current theme mode.
 *
 * @example
 * const combinedStyles = styles([
 *   'flex-1', // Utility style
 *   (theme) => ({
 *     backgroundColor: theme.colors.primary,
 *   }),
 *   {
 *     padding: 10,
 *     margin: 5,
 *     borderColor: (theme) => theme.colors.border,
 *   },
 * ]);
 */
export const styles = <
  T extends UtilityKeys | StyleProp<ThemeViewStyle> | ((theme: Theme) => StyleProp<ThemeViewStyle>),
>(
  stylesArray: T[],
) => {
  const { theme } = useTheme();
  const styleAccumulator: any = {};

  for (const style of stylesArray) {
    if (typeof style === 'string') {
      // Add utility style if it exists
      const capitalizedMode = theme.mode !== 'default' ? capitalize(theme.mode) : '';

      // Retrieve utilitie based on theme mode(Light/Dark)
      const utilityStyle =
        (theme.utilities as UtilitiesType)?.[(style + capitalizedMode) as keyof UtilitiesType] ??
        theme.utilities[style as keyof UtilitiesType];
      if (utilityStyle) {
        Object.assign(styleAccumulator, utilityStyle);
      }
    } else if (typeof style === 'function') {
      Object.assign(styleAccumulator, style(theme)); // for using createStyle
    } else if (typeof style === 'object') {
      for (const [attrKey, atrrValue] of Object.entries(style!)) {
        if (typeof atrrValue !== 'function') continue;
        //TODO any
        (style as any)[attrKey] = atrrValue(theme);
      }

      // Merge custom style objects
      Object.assign(styleAccumulator, style);
    }
  }
  return styleAccumulator;
};
