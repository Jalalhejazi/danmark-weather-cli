const colors = require('colors')
const config = require('./package')

exports.printMsg = (color='red', msg) => console.log(config.version, msg[color])

