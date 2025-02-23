import path from 'path';
import { fileURLToPath } from 'url';

export const CONSUMER_ROOT_PATH = path.resolve(process.cwd());
export const ROOT_PATH = path.resolve(fileURLToPath(import.meta.url), '../'); //dist path
export const THEME_CONFIG_FILE = 'theme.config.mjs';
