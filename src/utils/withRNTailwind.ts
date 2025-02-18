import { execSync } from 'child_process';

export default function withRNTailwind(metroConfigs: any) {
  // Watch for changes in the specific file
  console.log('withRNTailwind');
  execSync('npx init-rn-tailwind');
  return metroConfigs;
}
