import { jsx as _jsx } from "react/jsx-runtime";
import { defaultTheme } from '../configs/defaultTheme';
import { theme } from '../theme';
import { createContext, useState } from 'react';
export const ThemeContext = createContext({
    theme: defaultTheme,
    isDarkMode: defaultTheme.mode === 'dark',
    setMode: (mode) => mode,
});
export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(theme.mode);
    const isDarkMode = mode === 'dark';
    return (_jsx(ThemeContext.Provider, { value: { theme, isDarkMode, setMode }, children: children }));
};
