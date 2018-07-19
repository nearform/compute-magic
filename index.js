const { createHash } = require('crypto')

module.exports = computeMagic

function computeMagic () {
  const hash = createHash('sha512')
  for (var i = 0; i < 1000; i++) {
    for (var j = 0; j < arguments.length; j++) {
      hash.update(JSON.stringify(arguments[j]))
    }
  }
  return hash.digest('hex')
}
