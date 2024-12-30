import { PROJECT_ROOT_PATH } from '../configs/constatns';
import { defaultTheme } from '../configs/defaultTheme';
import merge from 'lodash/merge';
/* -------------------------------------------------------------------------- */
export const createTheme = () => {
    let theme = {};
    try {
        // Try to import theme.config.ts
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        theme = require(PROJECT_ROOT_PATH).default; // Adjust the path based on your app structure
    }
    catch (_a) {
        console.warn('No theme.config.ts found, using default theme configs.');
    }
    console.log("createTheme", { theme });
    return merge(defaultTheme, theme);
};
