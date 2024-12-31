import { defaultTheme } from '../configs/defaultTheme';
import { theme } from '../theme';
import { ThemeMode } from '../types';
import { ThemeContextType, ThemeProviderType } from './types';
import { createContext, useState } from 'react';

export const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  isDarkMode: defaultTheme.mode === 'dark',
  setMode: (mode) => mode,
});

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [mode, setMode] = useState<ThemeMode>(theme.mode);
  const isDarkMode = mode === 'dark';
  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setMode }}>{children}</ThemeContext.Provider>
  );
};
