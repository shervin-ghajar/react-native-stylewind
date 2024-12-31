"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUtilities = generateUtilities;
const index_1 = require("../configs/index");
const theme_1 = require("../theme");
const isColorShade_1 = require("../utils/isColorShade");
const spacing_1 = require("../utils/spacing");
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const lodash_es_1 = require("lodash-es");
const path_1 = require("path");
// Generates Theme Utilities
function generateUtilities() {
    try {
        const { colors } = theme_1.theme;
        const utilities = index_1.defaultUtilities;
        const types = new Set([...Object.keys(index_1.defaultUtilities).map((du) => `'${du}'`)]);
        // /* -------------------------- Color-based Utilities ------------------------- */
        const colorKeyWhiteList = ['grey'];
        const colorKeyBlackList = ['text'];
        const addColorUtilities = (colorKey, colorValue) => {
            if (((0, isColorShade_1.isColorShade)(colorValue) || colorKeyWhiteList.includes(colorKey)) &&
                !colorKeyBlackList.includes(colorKey)) {
                for (const shadeKey in colorValue) {
                    const shadeValue = colorValue[shadeKey];
                    const capitalizedShadeKey = shadeKey === 'default' ? '' : (0, lodash_es_1.capitalize)(shadeKey);
                    const capitalizedColorKey = (0, lodash_es_1.capitalize)(colorKey);
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
            const spacingValue = (0, spacing_1.spacing)(i);
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
        const generatedDirPath = (0, path_1.resolve)('./src/theme/configs/generated/utilities');
        const utilitiesFilePath = (0, path_1.resolve)(generatedDirPath, 'utilities.ts');
        const shakenUtilitiesFilePath = (0, path_1.resolve)(generatedDirPath, 'shakenUtilities.ts');
        const typesFilePath = (0, path_1.resolve)(generatedDirPath, 'types.ts');
        const warningText = `/**\n* AUTO GENERATED\n* <---DO NOT MODIFY THIS FILE--->\n*/\n\n`;
        const utilitiesIndexFilePath = (0, path_1.resolve)(generatedDirPath, 'index.ts');
        const utilitiesIndexFile = `/* eslint-disable @typescript-eslint/no-require-imports */\n${warningText}export  * from './types';\nlet utilities: typeof import('./utilities');\n
if (process.env.NODE_ENV === 'production') {
  utilities = require('./shakenUtilities').utilities;
} else {
  utilities = require('./utilities').utilities;
}

export { utilities };

export type UtilitiesType = typeof utilities;
`;
        if (!fs_1.default.existsSync(generatedDirPath)) {
            fs_1.default.mkdirSync(generatedDirPath, { recursive: true });
            console.log(chalk_1.default.greenBright('Directory created successfully.'));
        }
        // Wrtie all utilities
        fs_1.default.writeFileSync(utilitiesFilePath, `${warningText}\nexport const utilities = ${JSON.stringify(utilities, null, 2)};\n`);
        // Write all utility keys type
        fs_1.default.writeFileSync(typesFilePath, `${warningText}export type UtilityKeys = ${[...types].join(' | ')};\n`);
        // Write duplicated utilities for tree shaking
        fs_1.default.writeFileSync(shakenUtilitiesFilePath, `${warningText}\nexport const utilities = ${JSON.stringify(utilities, null, 2)};\n`);
        // Write index file for handling utilities dynamic import
        fs_1.default.writeFileSync(utilitiesIndexFilePath, utilitiesIndexFile, 'utf8');
        console.log(chalk_1.default.greenBright('Theme utilities and types generated successfully!'));
    }
    catch (error) {
        console.log(chalk_1.default.red(`Utilitie generator faild! \nError:${error}`));
    }
}
generateUtilities();
