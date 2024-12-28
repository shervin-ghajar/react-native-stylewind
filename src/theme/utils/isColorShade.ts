import { ColorShade, ThemeColorValues } from '../configs/colors/types';

export function isColorShade(value: ThemeColorValues): value is ColorShade {
  return (
    typeof value === 'object' &&
    value !== null &&
    value.default !== undefined &&
    typeof value.default === 'string' &&
    value.light !== undefined &&
    typeof value.light === 'string' &&
    value.dark !== undefined &&
    typeof value.dark === 'string'
  );
}
