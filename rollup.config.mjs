import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: {
    main: 'src/main.tsx', // Your main entry point
    generateUtilities: 'src/scripts/generateUtilities.ts', // Your CLI entry point
  },
  output: [
    {
      dir: 'dist', // Output directory for all files
      format: 'cjs', // CommonJS format for all outputs
      sourcemap: true,
    },
    {
      dir: 'dist', // Output directory for ES module format
      format: 'es', // ES module format for all outputs
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    terser(), // Optional: Minify the output
  ],
  external: ['react', 'react-native'], // Mark these as external dependencies
};
