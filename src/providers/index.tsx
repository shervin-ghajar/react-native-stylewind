import { getUtilities, UtilitiesType } from '../configs/generated/utilities';
import { utilities as defaultutilities } from '../configs/generated/utilities/shakenUtilities';
import { theme } from '../theme';
import { ThemeMode } from '../types';
import { ThemeContext } from './context';
import { ThemeProviderType } from './types';
import { useEffect, useState } from 'react';

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [utilities, setUtilities] = useState<UtilitiesType>(defaultutilities);
  const [mode, setMode] = useState<ThemeMode>(theme.mode);
  const isDarkMode = mode === 'dark';
  useEffect(() => {
    getUtilities()
      .then((utilities) => {
        console.log('provider', { utilities });
        setUtilities(utilities);
      })
      .catch((err) => {
        console.log('provider err', err);
      });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, utilities, isDarkMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
