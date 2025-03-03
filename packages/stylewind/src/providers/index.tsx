import { theme as mainTheme } from '../theme';
import { Theme, ThemeMode } from '../types';
import { ThemeContext } from './context';
import { ThemeProviderType } from './types';
import { useState } from 'react';
import { Appearance } from 'react-native';

/* -------------------------------------------------------------------------- */
export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [theme, setTheme] = useState<Theme>(mainTheme);
  const mode = theme.mode;
  const isDarkMode = mode === 'dark';

  const toggleMode = () => {
    const colorScheme = Appearance.getColorScheme();
    setMode(colorScheme === 'light' ? 'dark' : 'light');
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
