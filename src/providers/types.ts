import { UtilitiesType } from '../configs/generated/utilities';
import { Theme, ThemeMode } from '../types';
import { ReactNode } from 'react';

export interface ThemeProviderType {
  children: ReactNode;
}

export interface ThemeContextType {
  theme: Theme;
  utilities: UtilitiesType;
  isDarkMode: boolean;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}
