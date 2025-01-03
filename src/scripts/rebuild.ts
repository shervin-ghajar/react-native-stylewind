#!/usr/bin/env node
import { ROOT_PATH } from '../configs/constatns';
import { execSync } from 'child_process';
import path from 'path';

try {
  console.log('Regenerating theme...');
  const configPath = path.resolve(ROOT_PATH, 'rollup.config.mjs');
  // Run the build script defined in package.json
  console.log('Regenerating theme...');
  execSync(`npx rollup -c ${configPath}`, { stdio: 'inherit' });

  console.log('Theme regeneration complete!');
} catch (error) {
  console.error('Error during theme regeneration:', error);
  process.exit(1);
}
