import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const externalDependencies = ['react', 'react-native']; // External dependencies

const createConfig = (input, output, format) => ({
  input,
  output: {
    ...output,
    sourcemap: true,
  },
  external: externalDependencies,
  plugins: [
    peerDepsExternal(),
    resolve({ exportConditions: ['node'] }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    del({ targets: output.file || 'dist', hook: 'buildEnd' }), // Clean output directory or specific file
    // terser(), // Uncomment to enable minification
  ],
});

export default [
  createConfig(
    {
      main: 'src/main.tsx',
      init: 'src/scripts/init.ts',
      generateUtilities: 'src/scripts/generateUtilities.ts',
      theme: 'src/configs/generated/theme/index.ts',
    },
    {
      dir: 'dist',
      format: 'es',
      exports: 'named',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
      assetFileNames: '[name].[ext]',
      manualChunks(id) {
        if (id.includes('utilities')) {
          return 'utilities';
        }
      },
    },
    'es',
  ),
  createConfig(
    'src/utils/withRNStylewind.ts',
    {
      file: 'dist/withRNStylewind.cjs',
      format: 'cjs',
    },
    'cjs',
  ),
  createConfig(
    'src/scripts/treeShakeUtilities.ts',
    {
      file: 'dist/treeShakeUtilities.cjs',
      format: 'cjs',
    },
    'cjs',
  ),
];
