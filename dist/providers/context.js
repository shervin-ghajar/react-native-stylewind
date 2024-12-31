"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeContext = void 0;
const configs_1 = require("../configs");
const react_1 = require("react");
exports.ThemeContext = (0, react_1.createContext)({
    theme: configs_1.defaultTheme,
    isDarkMode: configs_1.defaultTheme.mode === 'dark',
    setMode: (mode) => mode,
});
