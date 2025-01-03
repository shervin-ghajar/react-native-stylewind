import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: {
    main: 'src/main.tsx', // Your main entry point
    init: 'src/scripts/init.ts', // Your CLI entry point
    generateUtilities: 'src/scripts/generateUtilities.ts', // Your CLI entry point
    treeShakeUtilities: 'src/scripts/treeShakeUtilities.ts', // Your CLI entry point
    rebuild: 'src/scripts/rebuild.ts', // Your CLI entry point
    theme: 'src/configs/generated/theme/index.ts',
  },
  output: [
    {
      dir: 'dist', // Output directory for ES module format
      format: 'es', // ES module format for all outputs
      sourcemap: true,
    },
  ],
  external: [
    'react', // Exclude React
    'react-native', // Exclude React Native
  ],
  plugins: [
    peerDepsExternal(), // Automatically mark peer dependencies as external
    resolve(), // Helps Rollup find external modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript({
      tsconfig: './tsconfig.json',
    }),
    del({ targets: 'dist/*' }),
    // terser(), // Optional: Minify the output
  ],
  external: ['react', 'react-native'], // Mark these as external dependencies
};
