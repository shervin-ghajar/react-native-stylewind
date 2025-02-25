import { theme } from '../theme';
import { ThemeMode } from '../types';
import { ThemeContext } from './context';
import { ThemeProviderType } from './types';
import { useState } from 'react';

/* -------------------------------------------------------------------------- */
export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [mode, setMode] = useState<ThemeMode>(theme.mode);
  const isDarkMode = mode === 'dark';

  const toggleMode = () => {
    setMode((prev) => (prev === 'default' || prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
