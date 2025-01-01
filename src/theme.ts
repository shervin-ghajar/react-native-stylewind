import { Theme } from './types';
import { createTheme } from './utils/createTheme';
import { themeConfigWatcher } from './utils/themeWatcher';

export const theme: Theme = await createTheme();

if (process.env.NODE_ENV !== 'production') themeConfigWatcher();
