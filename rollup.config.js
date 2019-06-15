import { terser } from "rollup-plugin-terser";
export default {
  input: 'index.js',
  output: {
    file: 'dist/index.min.js',
    format: 'umd',
    // compact: true,
    name: 'flexible'
  },
  plugins: [terser()]
};
