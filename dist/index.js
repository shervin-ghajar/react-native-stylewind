import path from 'path';
import { fileURLToPath } from 'url';

path.resolve(fileURLToPath(import.meta.url), '../../../../');
const CONSUMER_ROOT_PATH = path.resolve(path.dirname(''));
const THEME_CONFIG_FILE = 'theme.config.mjs';
const NODEMON_CONFIG_FILE = 'nodemon.json';

export { CONSUMER_ROOT_PATH as C, NODEMON_CONFIG_FILE as N, THEME_CONFIG_FILE as T };
//# sourceMappingURL=index.js.map
