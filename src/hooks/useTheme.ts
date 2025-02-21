import { ThemeContext } from '../providers/context';
import { useContext } from 'react';

/* -------------------------------------------------------------------------- */
export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};
