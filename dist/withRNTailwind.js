import { execSync } from 'child_process';

function withRNTailwind(metroConfigs) {
    // Watch for changes in the specific file
    console.log('withRNTailwind');
    execSync('npx init-rn-tailwind');
    return metroConfigs;
}

export { withRNTailwind as default };
//# sourceMappingURL=withRNTailwind.js.map
