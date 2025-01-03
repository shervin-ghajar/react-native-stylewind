import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { fileURLToPath } from 'url';

export const ROOT_PATH = path.resolve(fileURLToPath(import.meta.url), '../');
console.log({ ROOT_PATH });
export default {
  input: {
    main: path.resolve(ROOT_PATH, 'src/main.tsx'), // Your main entry point
    init: path.resolve(ROOT_PATH, 'src/scripts/init.ts'), // Your CLI entry point
    generateUtilities: path.resolve(ROOT_PATH, 'src/scripts/generateUtilities.ts'), // Your CLI entry point
    treeShakeUtilities: path.resolve(ROOT_PATH, 'src/scripts/treeShakeUtilities.ts'), // Your CLI entry point
    rebuild: path.resolve(ROOT_PATH, 'src/scripts/rebuild.ts'), // Your CLI entry point
    theme: path.resolve(ROOT_PATH, 'src/configs/generated/theme/index.ts'),
  },
  output: [
    {
      dir: path.resolve(ROOT_PATH, 'dist'), // Output directory for ES module format
      format: 'es', // ES module format for all outputs
      sourcemap: true,
      entryFileNames: '[name].js', // Ensure entry files do not include hashes
      chunkFileNames: '[name].js', // Ensure dynamically generated chunks do not include hashes
      assetFileNames: '[name].[ext]', // Ensure assets (like CSS) do not include hashes
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
