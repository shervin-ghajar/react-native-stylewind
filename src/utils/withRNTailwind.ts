import { CONSUMER_ROOT_PATH, THEME_CONFIG_FILE } from '../configs/constatns';
import { execSync } from 'child_process';
import fs from 'fs';
import { ConfigT } from 'metro-config';
import path from 'path';

export default function withRNTailwind(metroConfigs: ConfigT) {
  // Watch for changes in the specific file  execSync('npx init-rn-tailwind');
  if (process.env.NODE_ENV === 'production') {
    console.log('[RNT]: Production build detected. Running tree-shake command...');
    try {
      // Run your tree-shaking command here
      execSync('npx compile-rn-tailwind', { stdio: 'inherit' });
    } catch (error) {
      console.error('Error during RNT tree-shaking:', error);
    }
  } else {
    console.log('[RNT]: Development build detected');
    const fileToWatch = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE); // Change to your file path
    execSync('npx generate-rn-tailwind', { stdio: 'inherit' });
    fs.watch(fileToWatch, (eventType) => {
      if (eventType === 'change') {
        console.log(`Regenerating react-native-tailwind utilities...`);
        try {
          execSync('npx generate-rn-tailwind', { stdio: 'inherit' });
          console.log('Command executed successfully.');
        } catch (error) {
          console.error('Error executing command:', error);
        }
      }
    });
  }
  return metroConfigs;
}
