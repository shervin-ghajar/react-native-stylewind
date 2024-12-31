"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
const context_1 = require("../providers/context");
const react_1 = require("react");
/* -------------------------------------------------------------------------- */
const useTheme = () => {
    const themeContext = (0, react_1.useContext)(context_1.ThemeContext);
    return themeContext;
};
exports.useTheme = useTheme;
