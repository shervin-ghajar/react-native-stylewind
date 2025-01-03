import { createTheme } from './src/utils/createTheme';

export default await createTheme({
  mode: 'light',
  colors: {
    primary: {
      default: '#1D4ED8',
      light: '#93C5FD',
      dark: '#1E3A8A',
    },
  },
  spacing: {
    default: 8,
  },
  // Modify other theme settings if needed
});
