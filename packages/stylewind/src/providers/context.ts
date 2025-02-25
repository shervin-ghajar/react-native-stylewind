import { defaultTheme } from '../configs';
import { ThemeContextType } from './types';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  isDarkMode: defaultTheme.mode === 'dark',
  setMode: (mode) => mode,
  toggleMode: () => null,
});
