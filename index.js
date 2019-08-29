const colors = require('colors')
const config = require('./package')

exports.printMsg = function(color='red', msg) {
  console.log(config.version, msg[color])
}
