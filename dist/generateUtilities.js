#!/usr/bin/env node
import { C as CONSUMER_ROOT_PATH, T as THEME_CONFIG_FILE, c as chalk } from './index.js';
import { d as defaultUtilities, i as isColorShade, a as spacing } from './isColorShade.js';
import fs from 'fs';
import path, { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import 'node:process';
import 'node:os';
import 'node:tty';
import './utilities.js';
import './theme.js';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$1 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$1 + rsVarRange$1 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

const PATH = path.resolve(fileURLToPath(import.meta.url));
const isDist = PATH.includes('dist');
// Generates Theme Utilities
async function generateUtilities() {
    try {
        const themeConfigPath = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE);
        const themeConfigFile = await import(pathToFileURL(themeConfigPath).href);
        const theme = themeConfigFile.default;
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
            fs.writeFileSync(utilitiesFilePath, `${warningText}\nexport default ${JSON.stringify(utilities, null, 2)};\n`);
            // Write all utility keys type
            fs.writeFileSync(typesFilePath, `${warningText}export type UtilityKeys = ${[...types].join(' | ')};\n`);
            // Write index file for handling utilities dynamic import
            fs.writeFileSync(utilitiesIndexFilePath, utilitiesIndexFile, 'utf8');
            // Write theme index file
            fs.writeFileSync(themeFilePath, `${warningText}\nexport const theme = ${JSON.stringify(theme, null, 2)};\n`);
        }
        else {
            // Regenerating inside /dist folder
            const utilitiesFilePath = path.resolve(PATH, '../', 'utilities.js');
            const themeFilePath = path.resolve(PATH, '../', 'theme.js');
            if (!(fs.existsSync(utilitiesFilePath) && fs.existsSync(themeFilePath)))
                throw new Error('Utilities and Theme files not exist.\nPlease contact us!');
            fs.readFile(utilitiesFilePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading the file:', err);
                    return;
                }
                // Replace the existing variables with new data
                const updatedUtilities = data.replace(/(var utilities =)[\s\S]*?(;)/, `$1 ${JSON.stringify(utilities, null, 4)}$2`);
                // Write the updated data back to the file
                fs.writeFile(utilitiesFilePath, updatedUtilities, 'utf8', (err) => {
                    if (err) {
                        console.error('Error generate utilities:', err);
                        return;
                    }
                });
            });
            fs.writeFileSync(themeFilePath, `${warningText}\nexport const theme = ${JSON.stringify(theme, null, 2)};\n`);
        }
        console.log(chalk.greenBright('Theme utilities and types generated successfully!'));
    }
    catch (error) {
        console.log(chalk.red(`Utilitie generator faild! \nError:${error}`));
    }
}
generateUtilities();

export { generateUtilities };
//# sourceMappingURL=generateUtilities.js.map
