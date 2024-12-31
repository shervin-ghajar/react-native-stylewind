"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacing = void 0;
const index_1 = require("../configs/spacing/index");
const theme_1 = require("../theme");
/* -------------------------------------------------------------------------- */
const spacing = (space) => {
    if (typeof space === 'number')
        return theme_1.theme.spacing.default * space;
    return index_1.spacingConfigs[space];
};
exports.spacing = spacing;
