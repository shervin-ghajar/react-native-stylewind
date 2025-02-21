'use strict';

var path = require('path');
var child_process = require('child_process');
var fs = require('fs');

const CONSUMER_ROOT_PATH = path.resolve(process.cwd());
const THEME_CONFIG_FILE = 'theme.config.mjs';

function withRNStylewind(metroConfigs) {
    // Watch for changes in the specific file  execSync('npx init-rn-stylewind');
    if (process.env.NODE_ENV === 'production') {
        console.log('[RNT]: Production build detected. Running tree-shake command...');
        try {
            // Run your tree-shaking command here
            child_process.execSync('npx compile-rn-stylewind', { stdio: 'inherit' });
        }
        catch (error) {
            console.error('Error during RNT tree-shaking:', error);
        }
    }
    else {
        console.log('[RNT]: Development build detected');
        const fileToWatch = path.resolve(CONSUMER_ROOT_PATH, THEME_CONFIG_FILE); // Change to your file path
        child_process.execSync('npx generate-rn-stylewind', { stdio: 'inherit' });
        fs.watch(fileToWatch, (eventType) => {
            if (eventType === 'change') {
                console.log(`Regenerating react-native-stylewind utilities...`);
                try {
                    child_process.execSync('npx generate-rn-stylewind', { stdio: 'inherit' });
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

module.exports = withRNStylewind;
//# sourceMappingURL=withRNStylewind.cjs.map
