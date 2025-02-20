#!/usr/bin/env node
import { C as CONSUMER_ROOT_PATH, T as THEME_CONFIG_FILE, c as chalk } from './index.js';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import 'node:process';
import 'node:os';
import 'node:tty';
import './utilities.js';

(function init() {
    // Init theme.config.mjs
    const themeConfigPath = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE);
    const themeConfigFile = `import { createTheme } from 'react-native-tailwind';\n\nexport default await createTheme({
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
    exec('yarn generate', (error) => {
        if (error)
            return console.error('Error executing generate command:', error);
        console.log(chalk.greenBright('COMPLETE: react-native-tailwind configuration completed!'));
    });
})();
//# sourceMappingURL=init.js.map
