"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTheme = void 0;
const index_1 = require("../configs/constatns/index");
const defaultTheme_1 = require("../configs/defaultTheme");
const merge_1 = __importDefault(require("lodash/merge"));
const path_1 = __importDefault(require("path"));
/* -------------------------------------------------------------------------- */
const createTheme = () => {
    let theme = {};
    try {
        // Try to import theme.config.ts
        console.log(111);
        console.log('Current theme configuration:1', path_1.default.resolve(path_1.default.dirname('')));
        console.log(222);
        console.log(333);
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        theme = require(index_1.PROJECT_ROOT_PATH).default; // Adjust the path based on your app structure
        console.log('Current theme configuration:1', { PROJECT_ROOT_PATH: index_1.PROJECT_ROOT_PATH, theme });
    }
    catch {
        console.warn('No theme.config.ts found, using default theme configs.');
    }
    console.log('createTheme', { theme });
    return (0, merge_1.default)(defaultTheme_1.defaultTheme, theme);
};
exports.createTheme = createTheme;
