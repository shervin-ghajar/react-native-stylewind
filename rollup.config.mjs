import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: {
      main: 'src/main.tsx', // Your main entry point
      init: 'src/scripts/init.ts', // Your CLI entry point
      generateUtilities: 'src/scripts/generateUtilities.ts', // Your CLI entry point
      theme: 'src/configs/generated/theme/index.ts',
    },
    output: {
      dir: 'dist', // Output directory for ES module format
      format: 'es', // ES module format for all outputs
      sourcemap: true,
      entryFileNames: '[name].js', // Ensure entry files do not include hashes
      chunkFileNames: '[name].js', // Ensure dynamically generated chunks do not include hashes
      assetFileNames: '[name].[ext]', // Ensure assets (like CSS) do not include hashes
      manualChunks(id) {
        if (id.includes('utilities')) {
          return 'utilities';
        }
      },
    },
    external: [
      'react', // Exclude React
      'react-native', // Exclude React Native
    ],
    plugins: [
      peerDepsExternal(), // Automatically mark peer dependencies as external
      resolve({ exportConditions: ['node'] }), // Helps Rollup find external modules
      commonjs(), // Converts CommonJS modules to ES6
      typescript({
        tsconfig: './tsconfig.json',
      }),
      del({ targets: 'dist' }), // Clean ES output directory
      // terser(), // Optional: Minify the output
    ],
  },
  {
    input: 'src/utils/withRNTailwind.ts', // Input for the CJS module
    output: {
      file: 'dist/withRNTailwind.cjs', // Output file for CJS format
      format: 'cjs', // CommonJS format
      sourcemap: true,
    },
    external: [
      'react', // Exclude React
      'react-native', // Exclude React Native
    ],
    plugins: [
      peerDepsExternal(), // Automatically mark peer dependencies as external
      resolve({ exportConditions: ['node'] }), // Helps Rollup find external modules
      commonjs(), // Converts CommonJS modules to ES6
      typescript({
        tsconfig: './tsconfig.json',
      }),
      del({ targets: 'dist/withRNTailwind.cjs', hook: 'buildEnd' }), // Clean specific CJS output file
      // terser(), // Optional: Minify the output
    ],
  },
  {
    input: 'src/scripts/treeShakeUtilities.ts', // Input for the CJS module
    output: {
      file: 'dist/treeShakeUtilities.cjs', // Output file for CJS format
      format: 'cjs', // CommonJS format
      sourcemap: true,
    },
    external: [
      'react', // Exclude React
      'react-native', // Exclude React Native
    ],
    plugins: [
      peerDepsExternal(), // Automatically mark peer dependencies as external
      resolve({ exportConditions: ['node'] }), // Helps Rollup find external modules
      commonjs(), // Converts CommonJS modules to ES6
      typescript({
        tsconfig: './tsconfig.json',
      }),
      del({ targets: 'dist/treeShakeUtilities.cjs', hook: 'buildEnd' }), // Clean specific CJS output file
      // terser(), // Optional: Minify the output
    ],
  },
];
