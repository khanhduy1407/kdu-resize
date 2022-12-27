# kdu-resize

Detect DOM element resizing

# Installation

```
npm install --save kdu-resize
```

## Module import

**⚠️ You need to include the package CSS:**

```js
import 'kdu-resize/dist/kdu-resize.css'
```

Then import the package and install it into Kdu:

```javascript
import Kdu from 'kdu'
import KduResize from 'kdu-resize'

Kdu.use(KduResize)
```

Or:

```javascript
import Kdu from 'kdu'
import { ResizeObserver } from 'kdu-resize'

Kdu.component('resize-observer', ResizeObserver)
```

## Browser

```html
<link rel="stylesheet" href="kdu-resize/dist/kdu-resize.css"/>

<script src="kdu.js"></script>
<script src="kdu-resize/dist/kdu-resize.min.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually:

```javascript
Kdu.use(KduResize)
```

Or:

```javascript
Kdu.component('resize-observer', KduResize.ResizeObserver)
```

# Usage

Add the `<resize-observer>` inside a DOM element and make its position to something other than `'static'` (for example `'relative'`), so that the observer can fill it.

Listen to the `notify` event that is fired when the above DOM element is resized.

# Example

```html
<template>
  <div class="demo">
    <h1>Hello world!</h1>
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
export default {
  methods: {
    handleResize ({ width, height }) {
      console.log('resized', width, height)
    }
  }
}
</script>

<style scoped>
.demo {
  position: relative;
}
</style>
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
