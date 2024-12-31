"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.THEME_CONFIG_FILE = exports.CONSUMER_ROOT_PATH = void 0;
const path_1 = __importDefault(require("path"));
exports.CONSUMER_ROOT_PATH = path_1.default.resolve(path_1.default.dirname(''));
exports.THEME_CONFIG_FILE = 'theme.config.ts';
