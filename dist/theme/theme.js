import { createTheme } from './utils/createTheme';
import { themeConfigWatcher } from './utils/themeWatcher';
export const theme = createTheme();
if (process.env.NODE_ENV !== 'production')
    themeConfigWatcher();
