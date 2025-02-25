import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

// Define external dependencies
const externalDependencies = ['react', 'react-native'];

// Function to create Rollup configuration
const createConfig = (input, output, format, additionalPlugins = []) => ({
  input,
  output: {
    ...output,
    sourcemap: false, // Disable sourcemaps for production
  },
  external: externalDependencies,
  plugins: [
    peerDepsExternal(), // Automatically externalize peer dependencies
    resolve({ exportConditions: ['node'] }), // Resolve node modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({ tsconfig: './tsconfig.json' }), // Compile TypeScript
    del({ targets: output.file || 'dist', hook: 'buildEnd' }), // Clean output directory or specific file
    ...additionalPlugins, // Include any additional plugins
  ],
});

// Export Rollup configurations
export default [
  // Main application bundle
  createConfig(
    {
      main: 'src/main.tsx',
      init: 'src/scripts/init.ts',
      generateUtilities: 'src/scripts/generateUtilities.ts',
      treeShakeUtilities: 'src/scripts/treeShakeUtilities.ts',
      theme: 'src/configs/generated/theme/index.ts',
      utilities: 'src/configs/generated/utilities/index.ts',
    },
    {
      dir: 'dist',
      format: 'es',
      exports: 'named',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
      assetFileNames: '[name].[ext]',
    },
    'es',
    [
      terser({
        mangle: {
          reserved: ['theme', 'utilities'], //Exceptions
        },
      }),
    ], // Minify the output
  ),

  // CommonJS utility for React Native Stylewind
  createConfig(
    'src/utils/withRNStylewind.ts',
    {
      file: 'dist/withRNStylewind.cjs',
      format: 'cjs',
    },
    'cjs',
    [terser()], // Minify the output
  ),
];
