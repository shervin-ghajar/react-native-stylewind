#!/usr/bin/env node
import { R as ROOT_PATH } from './index-DLednyAs.js';
import { execSync } from 'child_process';
import path from 'path';
import 'url';

try {
    console.log('Regenerating theme...');
    const configPath = path.resolve(ROOT_PATH, 'rollup.config.mjs');
    console.log({ ROOT_PATH });
    // Run the build script defined in package.json
    console.log('Regenerating theme...');
    execSync(`npx rollup -c ${configPath}`, { stdio: 'inherit' });
    console.log('Theme regeneration complete!');
}
catch (error) {
    console.error('Error during theme regeneration:', error);
    process.exit(1);
}
//# sourceMappingURL=rebuild.js.map
