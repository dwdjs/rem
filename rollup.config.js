import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

const config = {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'flexible'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
  ]
}

const minifyConfig = Object.assign({}, config, {
  output: {
    ...config.output,
    file: 'dist/index.min.js'
  },
  plugins: [
    ...config.plugins,
    terser()
  ]
})

export default [
  config,
  minifyConfig
];
