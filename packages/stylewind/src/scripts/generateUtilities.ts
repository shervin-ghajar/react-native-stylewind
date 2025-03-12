#!/usr/bin/env node
import { colors as defaultColors } from '../configs/colors';
import { ThemeColorValues } from '../configs/colors/types';
import { CONSUMER_ROOT_PATH, ROOT_PATH, THEME_CONFIG_FILE } from '../configs/constatns';
import { defaultTheme, DefaultThemeType } from '../configs/index';
import { Theme } from '../types';
import { isColorShade } from '../utils/isColorShade';
import { spacing } from '../utils/spacing';
import chalk from 'chalk';
import fs from 'fs';
import { capitalize, cloneDeep } from 'lodash-es';
import path, { resolve } from 'path';
import { pathToFileURL } from 'url';

const isDist = ROOT_PATH.includes('dist');
/* -------------------------------------------------------------------------- */
type ThemeColors = NonNullable<DefaultThemeType['colors']>;
// Generates Theme Utilities
export async function generateUtilities() {
  try {
    const themeConfigPath = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE);
    let theme = cloneDeep(defaultTheme);
    if (fs.existsSync(themeConfigPath)) {
      const themeConfigFile = await import(pathToFileURL(themeConfigPath).href);
      theme = themeConfigFile.default as Theme;
    }
    const { colors, utilities: themeUtilities } = theme;
    const utilities: Record<string, unknown> = cloneDeep(themeUtilities);
    // /* -------------------------- Color-based Utilities ------------------------- */
    const colorKeyWhiteList: Array<keyof ThemeColors> = ['grey'];
    const colorKeyBlackList: Array<keyof ThemeColors> = ['text']; // prevent creating textText utilitie
    const addColorUtilities = (colorKey: keyof ThemeColors, colorValue: ThemeColorValues) => {
      if (
        ((isColorShade(colorValue) || colorKeyWhiteList.includes(colorKey)) &&
          !colorKeyBlackList.includes(colorKey)) ||
        !Object.keys(defaultColors).includes(colorKey.toString()) //for custom color keys
      ) {
        for (const shadeKey in colorValue) {
          const shadeValue = colorValue[shadeKey as keyof ThemeColorValues];
          const capitalizedShadeKey =
            shadeKey === 'default'
              ? ''
              : isNaN(Number(shadeKey))
                ? capitalize(shadeKey)
                : `-${shadeKey}`; // for number shade keys like grey color
          const capitalizedColorKey = capitalize(colorKey.toString());
          utilities[`bg${capitalizedColorKey}${capitalizedShadeKey}`] = {
            backgroundColor: shadeValue,
          };
          utilities[`border${capitalizedColorKey}${capitalizedShadeKey}`] = {
            borderColor: shadeValue,
          };
          utilities[`text${capitalizedColorKey}${capitalizedShadeKey}`] = { color: shadeValue };
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
        }
      }
    }

    // update theme.utilities with last updates
    theme.utilities = utilities as Theme['utilities'];

    /* -------------------------------------------------------------------------- */
    const warningText = `/**\n* AUTO GENERATED\n* <---DO NOT MODIFY THIS FILE--->\n*/\n\n`;
    /* --------------------------- Write utility & theme files -------------------------- */
    const generatedUtilsDirPath = resolve('./src/configs/generated/utilities'); // utils path
    const generatedThemeDirPath = resolve('./src/configs/generated/theme'); // theme path

    // Utility files dir
    const utilitiesFilePath = resolve(generatedUtilsDirPath, 'index.ts');

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
      // Wrtie utilities & types
      fs.writeFileSync(
        utilitiesFilePath,
        `${warningText}\nexport const utilities = ${JSON.stringify(utilities, null, 2)};\n\nexport type UtilitiesType = typeof utilities;\n\nexport type UtilityKeys = keyof UtilitiesType;\n`,
      );

      // Write theme index file
      fs.writeFileSync(
        themeFilePath,
        `${warningText}\nexport const theme = ${JSON.stringify(theme, null, 2)};\n`,
      );
    } else {
      // Regenerating inside /dist folder

      const utilitiesFilePath = path.resolve(ROOT_PATH, 'utilities.js');
      const themeFilePath = path.resolve(ROOT_PATH, 'theme.js');
      const utilitiesTypesPath = path.resolve(ROOT_PATH, 'configs/generated/utilities/index.d.ts');

      if (!(fs.existsSync(utilitiesFilePath) && fs.existsSync(themeFilePath)))
        throw new Error('Utilities and Theme files not exist.\nPlease contact us!');
      //utilities.js
      fs.readFile(utilitiesFilePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }

        // Replace the existing variables with new data
        const updatedUtilities = data.replace(
          /(const utilities=)[\s\S]*?(;)/,
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

      //utilities.d.ts
      fs.readFile(utilitiesTypesPath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return;
        }

        // Dynamically create the type definitions for the utilities object
        let newUtilityesTypes = '';
        for (const [key, value] of Object.entries(utilities)) {
          if (value && Object.keys(value).length > 0) {
            const valueType = Object.entries(value)
              .map(([prop, propValue]) => `${prop}: ${typeof propValue};`)
              .join('\n        ');
            newUtilityesTypes += `    "${key}": {\n        ${valueType}\n    }\n`;
          }
        }
        // Replace the existing variables with new data
        const updatedUtilitiesTypes = data.replace(
          /(\s*export declare const utilities: {)[\s\S]*?(};)/,
          `$1\n${newUtilityesTypes}\n$3`,
        );
        // Write the updated data back to the file
        fs.writeFile(utilitiesTypesPath, updatedUtilitiesTypes, 'utf8', (err) => {
          if (err) {
            console.error('Error generate utilities:', err);
            return;
          }
        });
      });
    }

    console.log(chalk.greenBright('Theme utilities and types generated successfully!'));
  } catch (error) {
    console.log(chalk.red(`Utilitie generator faild! \nError:${error}`));
  }
}

generateUtilities();
