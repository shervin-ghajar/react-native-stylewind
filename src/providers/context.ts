import { defaultTheme } from '../configs';
import shakenUtilities from '../configs/generated/utilities/shakenUtilities';
import { ThemeContextType } from './types';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  utilities: shakenUtilities,
  isDarkMode: defaultTheme.mode === 'dark',
  setMode: (mode) => mode,
});
