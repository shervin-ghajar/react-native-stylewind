import path from 'path';
import { fileURLToPath } from 'url';

const ROOT_PATH = path.resolve(fileURLToPath(import.meta.url), '../../../');
const CONSUMER_ROOT_PATH = path.resolve(path.dirname(''));
const THEME_CONFIG_FILE = 'theme.config.mjs';

export { CONSUMER_ROOT_PATH as C, ROOT_PATH as R, THEME_CONFIG_FILE as T };
//# sourceMappingURL=index-DLednyAs.js.map
