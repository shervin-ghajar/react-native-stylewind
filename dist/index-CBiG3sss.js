import path from 'path';
import { fileURLToPath } from 'url';

path.resolve(fileURLToPath(import.meta.url), '../../../');
const CONSUMER_ROOT_PATH = path.resolve(path.dirname(''));
const THEME_CONFIG_FILE = 'theme.config.mjs';

export { CONSUMER_ROOT_PATH as C, THEME_CONFIG_FILE as T };
//# sourceMappingURL=index-CBiG3sss.js.map
