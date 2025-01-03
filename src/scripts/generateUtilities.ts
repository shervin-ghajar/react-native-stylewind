#!/usr/bin/env node
import { ThemeColorValues } from '../configs/colors/types';
import { CONSUMER_ROOT_PATH, THEME_CONFIG_FILE } from '../configs/constatns';
import { defaultUtilities } from '../configs/index';
import { theme } from '../theme';
import { Theme } from '../types';
import { isColorShade } from '../utils/isColorShade';
import { spacing } from '../utils/spacing';
import chalk from 'chalk';
import fs from 'fs';
import { capitalize } from 'lodash-es';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const PATH = path.resolve(fileURLToPath(import.meta.url));
const isDir = PATH.includes('dist');
/* -------------------------------------------------------------------------- */
type ThemeColors = NonNullable<typeof theme.colors>;
// Generates Theme Utilities
export async function generateUtilities() {
  try {
    const themeConfigPath = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE);
    const themeConfigFile = await import(themeConfigPath);
    const theme = themeConfigFile.default as Theme;
    const { colors } = theme;
    const utilities: Record<string, unknown> = defaultUtilities;

    const types: Set<string> = new Set([...Object.keys(defaultUtilities).map((du) => `'${du}'`)]);

    // /* -------------------------- Color-based Utilities ------------------------- */
    const colorKeyWhiteList: Array<keyof ThemeColors> = ['grey'];
    const colorKeyBlackList: Array<keyof ThemeColors> = ['text'];
    const addColorUtilities = (colorKey: keyof ThemeColors, colorValue: ThemeColorValues) => {
      if (
        (isColorShade(colorValue) || colorKeyWhiteList.includes(colorKey)) &&
        !colorKeyBlackList.includes(colorKey)
      ) {
        for (const shadeKey in colorValue) {
          const shadeValue = colorValue[shadeKey as keyof ThemeColorValues];
          const capitalizedShadeKey = shadeKey === 'default' ? '' : capitalize(shadeKey);
          const capitalizedColorKey = capitalize(colorKey);
          utilities[`bg${capitalizedColorKey}${capitalizedShadeKey}`] = {
            backgroundColor: shadeValue,
          };
          utilities[`border${capitalizedColorKey}${capitalizedShadeKey}`] = {
            borderColor: shadeValue,
          };
          utilities[`text${capitalizedColorKey}${capitalizedShadeKey}`] = { color: shadeValue };

          // Add type definitions
          types.add(`'bg${capitalizedColorKey}${capitalizedShadeKey}'`);
          types.add(`'border${capitalizedColorKey}${capitalizedShadeKey}'`);
          types.add(`'text${capitalizedColorKey}${capitalizedShadeKey}'`);
        }
      }
    };
    for (const colorKey in colors) {
      const typedColorKey = colorKey as keyof ThemeColors;

      addColorUtilities(typedColorKey, colors[typedColorKey]);
    }

    /* ------------------------- Spacing-based Utilities ------------------------ */
    const spacingLimit = 10;
    for (let i = 0; i <= spacingLimit; i++) {
      const spacingValue = spacing(i);

      // Padding & Margin Utilities
      const pmDictionary = { p: 'padding', m: 'margin' }; // Padding & Margin dictionary
      const directionsDictionary = {
        '': '',
        t: 'Top',
        r: 'Right',
        b: 'Bottom',
        l: 'Left',
        x: 'Horizontal',
        y: 'Vertical',
      }; // Margin & Padding directions
      for (const [pmKey, pmValue] of Object.entries(pmDictionary)) {
        for (const [dirKey, dirValue] of Object.entries(directionsDictionary)) {
          const utilityKey = `${pmKey}${dirKey}-${i}`;
          utilities[utilityKey] = { [`${pmValue}${dirValue}`]: spacingValue };

          // Add type definitions
          types.add(`"${utilityKey}"`);
        }
      }
    }

    const warningText = `/**\n* AUTO GENERATED\n* <---DO NOT MODIFY THIS FILE--->\n*/\n\n`;
    /* --------------------------- Write utility & theme files -------------------------- */
    const generatedUtilsDirPath = resolve('./src/configs/generated/utilities'); // utils path
    const generatedThemeDirPath = resolve('./src/configs/generated/theme'); // theme path
    const generatedDistThemeDirPath = resolve('./dist'); // theme path

    // Utility files dir
    const utilitiesFilePath = resolve(generatedUtilsDirPath, 'utilities.ts');
    const shakenUtilitiesFilePath = resolve(generatedUtilsDirPath, 'shakenUtilities.ts');
    const typesFilePath = resolve(generatedUtilsDirPath, 'types.ts');
    const utilitiesIndexFilePath = resolve(generatedUtilsDirPath, 'index.ts');
    const utilitiesIndexFile = `${warningText}export * from './types';

// Use dynamic import instead of require
// Define the function to get utilities
const utilitiesConfig = {
  production: () => import('./shakenUtilities'),
  development: () => import('./utilities'),
};

export async function getUtilities() {
  const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';
  const utilsFile = await utilitiesConfig[environment]();
  return utilsFile.utilities;
}
// Define the type for UtilitiesType
export type UtilitiesType = Awaited<ReturnType<typeof getUtilities>>;
`;

    // Theme file dir
    const themeFilePath = resolve(generatedThemeDirPath, 'index.ts');
    const distThemeFilePath = resolve(generatedDistThemeDirPath, 'theme.js');

    // Make direction and write files
    if (!isDir) {
      if (!fs.existsSync(generatedUtilsDirPath)) {
        fs.mkdirSync(generatedUtilsDirPath, { recursive: true });
        console.log(chalk.greenBright('Utilities directory created successfully.'));
      }
      if (!fs.existsSync(generatedThemeDirPath)) {
        fs.mkdirSync(generatedThemeDirPath, { recursive: true });
        console.log(chalk.greenBright('Theme directory created successfully.'));
      }
      // Wrtie all utilities
      fs.writeFileSync(
        utilitiesFilePath,
        `${warningText}\nexport const utilities = ${JSON.stringify(utilities, null, 2)};\n`,
      );

      // Write all utility keys type
      fs.writeFileSync(
        typesFilePath,
        `${warningText}export type UtilityKeys = ${[...types].join(' | ')};\n`,
      );

      // Write duplicated utilities for tree shaking
      fs.writeFileSync(
        shakenUtilitiesFilePath,
        `${warningText}\nexport const utilities = ${JSON.stringify(utilities, null, 2)};\n`,
      );

      // Write index file for handling utilities dynamic import
      fs.writeFileSync(utilitiesIndexFilePath, utilitiesIndexFile, 'utf8');

      // Write theme index file
      fs.writeFileSync(
        themeFilePath,
        `${warningText}\nexport const theme = ${JSON.stringify(theme, null, 2)};\n`,
      );

      fs.writeFileSync(
        distThemeFilePath,
        `${warningText}\nexport const theme = ${JSON.stringify(theme, null, 2)};\n`,
      );
    } else {
      fs.writeFileSync(
        path.resolve(PATH, '../', 'utilities.js'),
        `${warningText}\nexport const theme = ${JSON.stringify(utilities, null, 2)};\n`,
      );
      fs.writeFileSync(
        path.resolve(PATH, '../', 'theme.js'),
        `${warningText}\nexport const theme = ${JSON.stringify(theme, null, 2)};\n`,
      );
    }

    console.log(chalk.greenBright('Theme utilities and types generated successfully!'));
  } catch (error) {
    console.log(chalk.red(`Utilitie generator faild! \nError:${error}`));
  }
}

generateUtilities();
