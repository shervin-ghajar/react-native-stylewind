import { CONSUMER_ROOT_PATH, THEME_CONFIG_FILE } from '../configs/constatns';
import { execSync } from 'child_process';
import fs from 'fs';
import { ConfigT } from 'metro-config';
import path from 'path';

export default function withRNStylewind(metroConfigs: ConfigT) {
  // Watch for changes in the specific file  execSync('npx init-rn-stylewind');
  if (process.env.NODE_ENV === 'production') {
    console.log('[Stylewind]: Production build detected. Running tree-shake command...');
    try {
      // Run your tree-shaking command here
      execSync('npx compile-rn-stylewind', { stdio: 'inherit' });
    } catch (error) {
      console.error('Error during Stylewind tree-shaking:', error);
    }
  } else {
    console.log('[Stylewind]: Development build detected');
    const fileToWatch = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE); // Change to your file path
    execSync('npx generate-rn-stylewind', { stdio: 'inherit' });
    fs.watchFile(fileToWatch, { interval: 200 }, () => {
      console.log(`Regenerating stylewind theme & utilities...`);
      try {
        execSync('npx generate-rn-stylewind', { stdio: 'inherit' });
      } catch (error) {
        console.error('Error regenerating stylewind:', error);
      }
    });
  }
  return metroConfigs;
}
