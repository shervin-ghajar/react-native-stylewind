import { ThemeViewStyle } from '../types';
import { StyleProp } from 'react-native';

/* -------------------------------------------------------------------------- */
export const createStyle = <T extends string>(
  styles: Record<T, StyleProp<ThemeViewStyle>>,
): Record<T, StyleProp<ThemeViewStyle>> => styles;
