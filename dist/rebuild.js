#!/usr/bin/env node
import { execSync } from 'child_process';

try {
    console.log('Regenerating theme...');
    // Run the build script defined in package.json
    execSync('npm run build', { stdio: 'inherit' });
    console.log('Theme regeneration complete!');
}
catch (error) {
    console.error('Error during theme regeneration:', error);
    process.exit(1);
}
//# sourceMappingURL=rebuild.js.map
