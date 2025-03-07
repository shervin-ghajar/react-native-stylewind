import { theme as mainTheme } from '../theme';
import { Theme, ThemeMode } from '../types';
import { ThemeContext } from './context';
import { ThemeProviderType } from './types';
import { useState } from 'react';

/* -------------------------------------------------------------------------- */
export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState<Theme>(mainTheme);
  const mode = theme.mode;
  const isDarkMode = mode === 'dark';

  const toggleMode = () => {
    setMode(isDarkMode ? 'light' : 'dark');
  };

  const setMode = (mode: ThemeMode) => {
    setTheme((prev) => ({ ...prev, mode }));
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
