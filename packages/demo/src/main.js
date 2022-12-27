import 'kdu-resize/dist/kdu-resize.css'
import Kdu from 'kdu'
import Resize, { install, ResizeObserver } from 'kdu-resize'
import App from './App.kdu'

Kdu.use(Resize)

console.log(Resize, install, ResizeObserver)

/* eslint-disable no-new */
new Kdu({
  el: '#app',
  render: h => h(App),
})
