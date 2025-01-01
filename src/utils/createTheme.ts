import chalk from 'chalk';
import { CONSUMER_ROOT_PATH, THEME_CONFIG_FILE } from '../configs/constatns/index';
import { defaultTheme } from '../configs/defaultTheme';
import { Theme } from '../types';
import _ from 'lodash';
import path from 'path';
import fs from 'fs';

/* -------------------------------------------------------------------------- */
export const createTheme = (): Theme => {
  let theme = {};
  try {
    // Try to import theme.config.ts
    const themConfigPath=path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE)
    console.log("resolve",themConfigPath,{existsSync:fs.existsSync(themConfigPath)})
    console.log("PATH",themConfigPath,CONSUMER_ROOT_PATH,THEME_CONFIG_FILE)
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    theme = require(themConfigPath).default; // Adjust the path based on your app structure
  } catch {
    console.warn('No theme.config.ts found, using default theme configs.');
    console.log(chalk.yellow(`WARN: No theme.config.ts found, using default theme configs.`));
  }
  console.log('createTheme', { theme });
  return _.merge(defaultTheme, theme);
};
