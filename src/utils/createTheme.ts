import { defaultTheme } from '../configs/defaultTheme';
import { Theme, ThemeConfig } from '../types';
import _ from 'lodash';

/* ---------------------------- CONFIGURED THEME ---------------------------- */
export let configuredTheme: Theme = defaultTheme;
/* -------------------------------------------------------------------------- */
export const createTheme = async (theme: ThemeConfig): Promise<Theme> => {
  const mergedTheme = _.merge(defaultTheme, theme);
  configuredTheme = mergedTheme;
  return mergedTheme;
};
