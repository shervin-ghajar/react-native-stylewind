"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
const index_1 = require("./colors/index");
const index_2 = require("./spacing/index");
const index_3 = require("./typography/index");
/* -------------------------------------------------------------------------- */
exports.defaultTheme = {
    mode: 'default',
    colors: index_1.colors,
    spacing: index_2.spacingConfigs,
    typography: index_3.typography,
};
