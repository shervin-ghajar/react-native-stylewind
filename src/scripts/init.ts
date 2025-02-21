#!/usr/bin/env node
import { CONSUMER_ROOT_PATH, THEME_CONFIG_FILE } from '../configs/constatns';
import chalk from 'chalk';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

(function init() {
  // Init theme.config.mjs
  const themeConfigPath = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE);
  const themeConfigFile = `import { createTheme } from 'rn-stylewind';\n\nexport default await createTheme({
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

  `;
  fs.writeFileSync(themeConfigPath, themeConfigFile);
  console.log(chalk.white(`CREATE: ${THEME_CONFIG_FILE} created on ${themeConfigPath}`));

  exec('npx generate-rn-stylewind', (error) => {
    if (error) return console.error('Error executing generate command:', error);
    console.log(chalk.greenBright('COMPLETE: rn-stylewind configuration completed!'));
  });
})();
