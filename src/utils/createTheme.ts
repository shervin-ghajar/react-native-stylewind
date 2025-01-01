import chalk from 'chalk';
import { CONSUMER_ROOT_PATH, THEME_CONFIG_FILE } from '../configs/constatns/index';
import { defaultTheme } from '../configs/defaultTheme';
import { Theme } from '../types';
import _ from 'lodash';
import path from 'path';
import fs from 'fs';
/* -------------------------------------------------------------------------- */
export const createTheme = async (): Promise<Theme> => {
  let theme = {};
  try {
    // Try to import theme.config.ts
    const themeConfigPath = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE);
    console.log("resolve", themeConfigPath, { existsSync: fs.existsSync(themeConfigPath) });
    console.log("PATH", themeConfigPath, CONSUMER_ROOT_PATH, THEME_CONFIG_FILE);

    // Use dynamic import
    const themeConfigFile = await import(themeConfigPath);
    console.log({ themeConfigFile });
    theme = themeConfigFile.default; // Access the default export
  } catch (error) {
    console.warn('No theme.config.ts found, using default theme configs.');
    console.log(chalk.yellow(`WARN: No theme.config.ts found, using default theme configs.`));
    console.error(error);
  }
  console.log('createTheme', { theme });
  return _.merge(defaultTheme, theme);
};
