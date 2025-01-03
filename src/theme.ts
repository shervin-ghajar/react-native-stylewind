import { theme as modifiedTheme } from './configs/generated/theme';
import { Theme } from './types';
import { themeConfigWatcher } from './utils/themeWatcher';

export const theme: Theme = modifiedTheme as Theme;

if (process.env.NODE_ENV !== 'production') themeConfigWatcher();
