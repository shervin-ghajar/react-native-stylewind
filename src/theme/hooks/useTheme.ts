import { ThemeContext } from "../providers";
import { useContext } from "react";

/* -------------------------------------------------------------------------- */
export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext;
};
