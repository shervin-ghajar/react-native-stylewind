import { UtilityKeys } from '../configs/generated/utilities';
import { ThemeViewStyle } from '../types';
import RN from 'react-native';
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
export declare const styles: <T extends UtilityKeys | RN.StyleProp<ThemeViewStyle>>(stylesArray: T[]) => RN.StyleSheet.NamedStyles<unknown>;
