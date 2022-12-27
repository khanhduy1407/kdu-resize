import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'KduResize',
    file: 'dist/kdu-resize.min.js',
    format: 'iife',
    sourcemap: true,
  },
})

config.plugins.push(terser({}))

export default config
