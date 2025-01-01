import { CONSUMER_ROOT_PATH, THEME_CONFIG_FILE } from '../configs/constatns/index';
import { defaultTheme } from '../configs/defaultTheme';
import { Theme } from '../types';
import _ from 'lodash';
import path from 'path';

/* -------------------------------------------------------------------------- */
export const createTheme = (): Theme => {
  let theme = {};
  try {
    // Try to import theme.config.ts
    console.log("PATH",path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE),CONSUMER_ROOT_PATH,THEME_CONFIG_FILE)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    theme = require(path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE)).default; // Adjust the path based on your app structure
  } catch {
    console.warn('No theme.config.ts found, using default theme configs.');
  }
  console.log('createTheme', { theme });
  return _.merge(defaultTheme, theme);
};
