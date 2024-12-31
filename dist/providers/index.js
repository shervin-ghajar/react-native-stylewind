"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const theme_1 = require("../theme");
const context_1 = require("./context");
const react_1 = require("react");
const ThemeProvider = ({ children }) => {
    const [mode, setMode] = (0, react_1.useState)(theme_1.theme.mode);
    const isDarkMode = mode === 'dark';
    return ((0, jsx_runtime_1.jsx)(context_1.ThemeContext.Provider, { value: { theme: theme_1.theme, isDarkMode, setMode }, children: children }));
};
exports.ThemeProvider = ThemeProvider;
