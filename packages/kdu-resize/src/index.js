import ResizeObserver from './components/ResizeObserver.kdu'

// Install the components
export function install (Kdu) {
  // eslint-disable-next-line kdu/component-definition-name-casing
  Kdu.component('resize-observer', ResizeObserver)
  Kdu.component('ResizeObserver', ResizeObserver)
}

export {
  ResizeObserver,
}

// Plugin
const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalKdu = null
if (typeof window !== 'undefined') {
  GlobalKdu = window.Kdu
} else if (typeof global !== 'undefined') {
  GlobalKdu = global.Kdu
}
if (GlobalKdu) {
  GlobalKdu.use(plugin)
}
