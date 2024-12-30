import { defaultUtilities } from '../configs';
import { theme } from '../theme';
import { isColorShade } from '../utils/isColorShade';
import { spacing } from '../utils/spacing';
import chalk from 'chalk';
import fs from 'fs';
import { capitalize } from 'lodash';
import { resolve } from 'path';
// Generates Theme Utilities
export function generateUtilities() {
    try {
        const { colors } = theme;
        const utilities = defaultUtilities;
        const types = new Set([...Object.keys(defaultUtilities).map((du) => `'${du}'`)]);
        // /* -------------------------- Color-based Utilities ------------------------- */
        const colorKeyWhiteList = ['grey'];
        const colorKeyBlackList = ['text'];
        const addColorUtilities = (colorKey, colorValue) => {
            if ((isColorShade(colorValue) || colorKeyWhiteList.includes(colorKey)) &&
                !colorKeyBlackList.includes(colorKey)) {
                for (const shadeKey in colorValue) {
                    const shadeValue = colorValue[shadeKey];
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
            const typedColorKey = colorKey;
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
        /* ------------------------------- Write file ------------------------------- */
        const generatedDirPath = resolve('./src/theme/configs/generated/utilities');
        const utilitiesFilePath = resolve(generatedDirPath, 'utilities.ts');
        const shakenUtilitiesFilePath = resolve(generatedDirPath, 'shakenUtilities.ts');
        const typesFilePath = resolve(generatedDirPath, 'types.ts');
        const warningText = `/**\n* AUTO GENERATED\n* <---DO NOT MODIFY THIS FILE--->\n*/\n\n`;
        const utilitiesIndexFilePath = resolve(generatedDirPath, 'index.ts');
        const utilitiesIndexFile = `/* eslint-disable @typescript-eslint/no-require-imports */\n${warningText}export  * from './types';\nlet utilities: typeof import('./utilities');\n
if (process.env.NODE_ENV === 'production') {
  utilities = require('./shakenUtilities').utilities;
} else {
  utilities = require('./utilities').utilities;
}

export { utilities };

export type UtilitiesType = typeof utilities;
`;
        if (!fs.existsSync(generatedDirPath)) {
            fs.mkdirSync(generatedDirPath, { recursive: true });
            console.log(chalk.greenBright('Directory created successfully.'));
        }
        // Wrtie all utilities
        fs.writeFileSync(utilitiesFilePath, `${warningText}\nexport const utilities = ${JSON.stringify(utilities, null, 2)};\n`);
        // Write all utility keys type
        fs.writeFileSync(typesFilePath, `${warningText}export type UtilityKeys = ${[...types].join(' | ')};\n`);
        // Write duplicated utilities for tree shaking
        fs.writeFileSync(shakenUtilitiesFilePath, `${warningText}\nexport const utilities = ${JSON.stringify(utilities, null, 2)};\n`);
        // Write index file for handling utilities dynamic import
        fs.writeFileSync(utilitiesIndexFilePath, utilitiesIndexFile, 'utf8');
        console.log(chalk.greenBright('Theme utilities and types generated successfully!'));
    }
    catch (error) {
        console.log(chalk.red(`Utilitie generator faild! \nError:${error}`));
    }
}
generateUtilities();
