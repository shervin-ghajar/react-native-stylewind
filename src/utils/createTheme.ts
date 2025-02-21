import { defaultTheme } from '../configs/defaultTheme';
import { Theme, ThemeConfig } from '../types';
import _ from 'lodash';

/* -------------------------------------------------------------------------- */
export const createTheme = async (theme: ThemeConfig): Promise<Theme> => {
  return _.merge(defaultTheme, theme);
};
