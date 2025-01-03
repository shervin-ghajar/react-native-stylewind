import { Theme } from './types';
import { configuredTheme } from './utils/createTheme';
import { themeConfigWatcher } from './utils/themeWatcher';

export const theme: Theme = configuredTheme;

if (process.env.NODE_ENV !== 'production') themeConfigWatcher();
