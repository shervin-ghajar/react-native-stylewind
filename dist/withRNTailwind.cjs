'use strict';

var child_process = require('child_process');

function withRNTailwind(metroConfigs) {
    // Watch for changes in the specific file
    console.log('withRNTailwind');
    child_process.execSync('npx init-rn-tailwind');
    return metroConfigs;
}

module.exports = withRNTailwind;
//# sourceMappingURL=withRNTailwind.cjs.map
