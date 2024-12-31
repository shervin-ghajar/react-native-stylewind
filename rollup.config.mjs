// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/main.tsx', // Your entry point
  output: [
    {
      file: 'dist/main.js', // CommonJS format
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/main.esm.js', // ES module format
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json', // Path to your tsconfig.json
    }),
    terser(), // Optional: Minify the output
  ],
  external: ['react', 'react-native'], // Mark these as external dependencies
};
