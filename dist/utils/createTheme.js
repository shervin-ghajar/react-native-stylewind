import { PROJECT_ROOT_PATH } from '../configs/constatns';
import { defaultTheme } from '../configs/defaultTheme';
import debug from 'debug';
import merge from 'lodash/merge';
const log = debug('react-native-tailwind');
/* -------------------------------------------------------------------------- */
export const createTheme = () => {
    let theme = {};
    try {
        // Try to import theme.config.ts
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        theme = require(PROJECT_ROOT_PATH).default; // Adjust the path based on your app structure
        log('createTheme');
        log('Current theme configuration:', { PROJECT_ROOT_PATH, theme });
    }
    catch (_a) {
        console.warn('No theme.config.ts found, using default theme configs.');
    }
    console.log('createTheme', { theme });
    return merge(defaultTheme, theme);
};
