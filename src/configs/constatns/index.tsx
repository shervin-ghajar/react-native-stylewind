import path from 'path';
import { fileURLToPath } from 'url';

export const ROOT_PATH = path.resolve(fileURLToPath(import.meta.url), '../../../../');
export const CONSUMER_ROOT_PATH = path.resolve(path.dirname(''));
export const THEME_CONFIG_FILE = 'theme.config.mjs';
