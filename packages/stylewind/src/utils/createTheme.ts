import { defaultTheme } from '../configs/defaultTheme';
import { Theme, ThemeConfig } from '../types';
import _ from 'lodash';
import { cloneDeep } from 'lodash-es';

/* -------------------------------------------------------------------------- */
export const createTheme = async (theme: ThemeConfig): Promise<Theme> => {
  return _.merge(cloneDeep(defaultTheme), theme);
};
