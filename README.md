# compute-magic

Just a simple very slow function that can be used to showcase perf bottlenecks

## Usage

```js
const computeMagic = require('@nearform/compute-magic')

const magic = computeMagic(someInput)
console.log(magic)
```

## API

#### `magic = computeMagic(...args)`

Computes a sha512 of 1000x the args

## License

MIT
