"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
const createTheme_1 = require("./utils/createTheme");
const themeWatcher_1 = require("./utils/themeWatcher");
exports.theme = (0, createTheme_1.createTheme)();
if (process.env.NODE_ENV !== 'production')
    (0, themeWatcher_1.themeConfigWatcher)();
