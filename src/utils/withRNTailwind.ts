import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export default function withRNTailwind(metroConfigs: any) {
  // Watch for changes in the specific file
  console.log('withRNTailwind');
  execSync('npx init-rn-tailwind');
  const fileToWatch = path.resolve(process.cwd(), 'theme.config.js'); // Change to your file path
  console.log('fileToWatch', fileToWatch);
  fs.watch(fileToWatch, (eventType) => {
    if (eventType === 'change') {
      console.log(`File ${fileToWatch} has been changed. Running command...`);
      try {
        execSync('npx generate-rn-Tailwind', { stdio: 'inherit' });
        console.log('Command executed successfully.');
      } catch (error) {
        console.error('Error executing command:', error);
      }
    }
  });
  return metroConfigs;
}
