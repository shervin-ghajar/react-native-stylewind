import { theme } from '../theme';
import { ThemeMode } from '../types';
import { ThemeContext } from './context';
import { ThemeProviderType } from './types';
import { useState } from 'react';

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [mode, setMode] = useState<ThemeMode>(theme.mode);
  const isDarkMode = mode === 'dark';
  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setMode }}>{children}</ThemeContext.Provider>
  );
};
