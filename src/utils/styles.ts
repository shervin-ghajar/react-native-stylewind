import { utilities, UtilitiesType, UtilityKeys } from '../configs/generated/utilities';
import { useTheme } from '../hooks';
import { ThemeViewStyle } from '../types';
import { capitalize } from 'lodash';
import { StyleProp, StyleSheet } from 'react-native';

/* -------------------------------------------------------------------------- */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Combines utility styles and custom styles into a single style object.
 *
 * @param styles - An array of utility style names or custom styles. Utility style names should be keys of the `utilities` object. Custom styles can be any valid `StyleProp<ViewStyle>`.
 * @returns A style object combining the utility styles and custom styles.
 *
 * Example usage:
 * ```typescript
 * styles(["absolute", { color: "red",backgroundColor:(theme)=> theme.colors.primary.light }]);
 * ```
 */

export const styles = <T extends UtilityKeys | StyleProp<ThemeViewStyle>>(
  stylesArray: T[],
): StyleSheet.NamedStyles<unknown> => {
  const { theme } = useTheme();
  console.log({ theme, utilities });
  const styleAccumulator: StyleSheet.NamedStyles<unknown> = {};

  for (const style of stylesArray) {
    if (typeof style === 'string') {
      // Add utility style if it exists
      const capitalizedMode = theme.mode !== 'default' ? capitalize(theme.mode) : '';

      // Retrieve utilitie based on theme mode(Light/Dark)
      const utilityStyle =
        (utilities as UtilitiesType)?.[(style + capitalizedMode) as keyof UtilitiesType] ??
        utilities[style as keyof UtilitiesType];
      if (utilityStyle) {
        Object.assign(styleAccumulator, utilityStyle);
      }
    } else if (typeof style === 'object') {
      for (const [attrKey, atrrValue] of Object.entries(style!)) {
        if (typeof atrrValue !== 'function') continue;

        // (style as any)[attrKey] = atrrValue(theme, Platform);
        (style as any)[attrKey] = atrrValue(theme);
      }

      // Merge custom style objects
      Object.assign(styleAccumulator, style);
    }
  }
  return StyleSheet.create({ styleAccumulator }).styleAccumulator;
};
