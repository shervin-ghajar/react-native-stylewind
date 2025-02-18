'use strict';

var child_process = require('child_process');
var fs = require('fs');
var path = require('path');

function withRNTailwind(metroConfigs) {
    // Watch for changes in the specific file
    console.log('withRNTailwind');
    child_process.execSync('npx init-rn-tailwind');
    const fileToWatch = path.resolve(process.cwd(), 'theme.config.js'); // Change to your file path
    console.log('fileToWatch', fileToWatch);
    fs.watch(fileToWatch, (eventType) => {
        if (eventType === 'change') {
            console.log(`File ${fileToWatch} has been changed. Running command...`);
            try {
                child_process.execSync('npx generate-rn-Tailwind', { stdio: 'inherit' });
                console.log('Command executed successfully.');
            }
            catch (error) {
                console.error('Error executing command:', error);
            }
        }
    });
    return metroConfigs;
}

module.exports = withRNTailwind;
//# sourceMappingURL=withRNTailwind.cjs.map
