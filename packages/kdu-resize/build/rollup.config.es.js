import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'kdu-resize',
    file: 'dist/kdu-resize.esm.js',
    format: 'es',
    sourcemap: true,
  },
  external: [
    ...base.external,
    // Additional externals here
  ],
})

export default config
