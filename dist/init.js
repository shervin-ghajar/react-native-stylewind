#!/usr/bin/env node
import { C as CONSUMER_ROOT_PATH, T as THEME_CONFIG_FILE, N as NODEMON_CONFIG_FILE } from './index.js';
import { c as chalk } from './index2.js';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import 'url';
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
    console.log(chalk.greenBright(`CREATE:${THEME_CONFIG_FILE} created on ${themeConfigPath}`));
    //Init nodemon
    const nodemonConfigPath = path.resolve(CONSUMER_ROOT_PATH, NODEMON_CONFIG_FILE);
    const nodemonConfigFile = `{
  "watch": ["${THEME_CONFIG_FILE}"],
  "ext": "ts,tsx",
  "exec": "npx generate-rn-tailwind",
  "ignore": ["node_modules/*"],
  "delay": "1000"
}
`;
    fs.writeFileSync(nodemonConfigPath, nodemonConfigFile);
    console.log(chalk.greenBright(`CREATE:${NODEMON_CONFIG_FILE} created on ${nodemonConfigPath}`));
    // Modify consumer package.json
    const packageJsonPath = path.resolve(CONSUMER_ROOT_PATH, 'package.json');
    fs.readFile(packageJsonPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading package.json:', err);
            return;
        }
        try {
            // Parse the JSON data
            const packageJson = JSON.parse(data);
            // Add a new script command
            packageJson.scripts = packageJson.scripts || {};
            packageJson.scripts = {
                ...packageJson.scripts,
                'theme:compile': 'npx compile-rn-tailwind',
                'theme:watch': 'nodemon',
            };
            // Convert the updated object back to JSON
            const updatedData = JSON.stringify(packageJson, null, 2);
            // Write the updated JSON back to package.json
            fs.writeFile(packageJsonPath, updatedData, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing package.json:', err);
                    return;
                }
                console.log(chalk.yellow('MODIFY:theme:watch added to package.json'));
            });
        }
        catch (parseError) {
            console.error('Error parsing package.json:', parseError);
        }
    });
    exec('npx generate-rn-tailwind', (error) => {
        if (error)
            return console.error('Error executing generate command:', error);
        console.log(chalk.greenBright('react-native-tailwind configuration completed!'));
    });
})();
//# sourceMappingURL=init.js.map
