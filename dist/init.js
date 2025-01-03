#!/usr/bin/env node
import { C as CONSUMER_ROOT_PATH, T as THEME_CONFIG_FILE } from './index-BtSyWlPe.js';
import { c as chalk } from './index-D0Mvf1ZH.js';
import { execSync } from 'child_process';
import fs from 'fs';
import require$$0 from 'path';

(function init() {
    const themeConfigPath = require$$0.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE);
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
    console.log(chalk.greenBright(`theme.config.mjs created on ${themeConfigPath}`));
    execSync('npm run generate-rn-tailwind');
    console.log(chalk.greenBright('react-native-tailwind configuration completed!'));
})();
//# sourceMappingURL=init.js.map
