'use strict';

var path = require('path');
var child_process = require('child_process');
var fs = require('fs');

const CONSUMER_ROOT_PATH = path.resolve(process.cwd());
const THEME_CONFIG_FILE = 'theme.config.mjs';

function withRNTailwind(metroConfigs) {
    // Watch for changes in the specific file  execSync('npx init-rn-tailwind');
    if (process.env.NODE_ENV === 'production') {
        console.log('[RNT]: Production build detected. Running tree-shake command...');
        try {
            // Run your tree-shaking command here
            child_process.execSync('npx compile-rn-tailwind', { stdio: 'inherit' });
        }
        catch (error) {
            console.error('Error during RNT tree-shaking:', error);
        }
    }
    else {
        console.log('[RNT]: Development build detected');
        const fileToWatch = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE); // Change to your file path
        child_process.execSync('npx generate-rn-tailwind', { stdio: 'inherit' });
        fs.watch(fileToWatch, (eventType) => {
            if (eventType === 'change') {
                console.log(`Regenerating react-native-tailwind utilities...`);
                try {
                    child_process.execSync('npx generate-rn-tailwind', { stdio: 'inherit' });
                    console.log('Command executed successfully.');
                }
                catch (error) {
                    console.error('Error executing command:', error);
                }
            }
        });
    }
    return metroConfigs;
}

module.exports = withRNTailwind;
//# sourceMappingURL=withRNTailwind.cjs.map
