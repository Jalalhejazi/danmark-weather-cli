<<<<<<< HEAD
const colors = require('colors')
const config = require('./package')

exports.printMsg = function(color, msg) {
  if (!color) color = 'red'
  console.log(config.version, msg[color])
=======
var colors = require('colors')

exports.printMsg = function(color, msg) {
  if (!color) color = 'red'
  console.log(msg[color])
>>>>>>> bd1dc640c9754834bd8e00e64681b842c45955cf
}
