#!/usr/bin/env node
import { ThemeColorValues } from '../configs/colors/types';
import { CONSUMER_ROOT_PATH, ROOT_PATH, THEME_CONFIG_FILE } from '../configs/constatns';
import { DefaultThemeType, defaultUtilities } from '../configs/index';
import { Theme } from '../types';
import { isColorShade } from '../utils/isColorShade';
import { spacing } from '../utils/spacing';
import chalk from 'chalk';
import fs from 'fs';
import { capitalize } from 'lodash-es';
import path, { resolve } from 'path';
import { pathToFileURL } from 'url';

const isDist = ROOT_PATH.includes('dist');
/* -------------------------------------------------------------------------- */
type ThemeColors = NonNullable<DefaultThemeType['colors']>;
// Generates Theme Utilities
export async function generateUtilities() {
  try {
    const themeConfigPath = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE);
    const themeConfigFile = await import(pathToFileURL(themeConfigPath).href);
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
      const spacingValue = spacing(i, theme);

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

    // Utility files dir
    const utilitiesFilePath = resolve(generatedUtilsDirPath, 'utilities.ts');
    const typesFilePath = resolve(generatedUtilsDirPath, 'types.ts');
    const utilitiesIndexFilePath = resolve(generatedUtilsDirPath, 'index.ts');
    const utilitiesIndexFile = `
    ${warningText}export * from './types';
import utilities from './utilities';
export {utilities}
export type UtilitiesType = typeof utilities;
    
    `;

    // Theme file dir
    const themeFilePath = resolve(generatedThemeDirPath, 'index.ts');
    if (!isDist) {
      // Make direction and write files
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
        `${warningText}\nexport default ${JSON.stringify(utilities, null, 2)};\n`,
      );

      // Write all utility keys type
      fs.writeFileSync(
        typesFilePath,
        `${warningText}export type UtilityKeys = ${[...types].join(' | ')};\n`,
      );

      // Write index file for handling utilities dynamic import
      fs.writeFileSync(utilitiesIndexFilePath, utilitiesIndexFile, 'utf8');

      // Write theme index file
      fs.writeFileSync(
        themeFilePath,
        `${warningText}\nexport const theme = ${JSON.stringify(theme, null, 2)};\n`,
      );
    } else {
      // Regenerating inside /dist folder

      const utilitiesFilePath = path.resolve(ROOT_PATH, 'utilities.js');
      const themeFilePath = path.resolve(ROOT_PATH, 'theme.js');
      if (!(fs.existsSync(utilitiesFilePath) && fs.existsSync(themeFilePath)))
        throw new Error('Utilities and Theme files not exist.\nPlease contact us!');
      fs.readFile(utilitiesFilePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }

        // Replace the existing variables with new data
        const updatedUtilities = data.replace(
          /(var utilities =)[\s\S]*?(;)/,
          `$1 ${JSON.stringify(utilities, null, 4)}$2`,
        );

        // Write the updated data back to the file
        fs.writeFile(utilitiesFilePath, updatedUtilities, 'utf8', (err) => {
          if (err) {
            console.error('Error generate utilities:', err);
            return;
          }
        });
      });

      fs.writeFileSync(
        themeFilePath,
        `${warningText}\nexport const theme = ${JSON.stringify(theme, null, 2)};\n`,
      );
    }

    console.log(chalk.greenBright('Theme utilities and types generated successfully!'));
  } catch (error) {
    console.log(chalk.red(`Utilitie generator faild! \nError:${error}`));
  }
}

generateUtilities();
