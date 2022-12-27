import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'kdu-resize',
    file: 'dist/kdu-resize.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config
