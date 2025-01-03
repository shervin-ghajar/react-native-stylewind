import { ThemeViewStyle } from '../types';
import RN from 'react-native';

/* -------------------------------------------------------------------------- */
export const createStyle = <T extends string>(
  styles: Record<T, RN.StyleProp<ThemeViewStyle>>,
): Record<T, RN.StyleProp<ThemeViewStyle>> => styles;
