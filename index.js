const colors = require('colors')
const config = require('./package')

exports.printMsg = function(color, msg) {
  if (!color) color = 'red'
  console.log(config.version, msg[color])
}
