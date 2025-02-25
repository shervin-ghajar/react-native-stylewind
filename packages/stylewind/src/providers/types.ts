import { Theme, ThemeMode } from '../types';
import { ReactNode } from 'react';

export interface ThemeProviderType {
  children: ReactNode;
}

export interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}
