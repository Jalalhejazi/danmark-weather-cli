const colors = require('colors')
const config = require('./package')


const container = {

	helloWorld : (color='red', msg) => console.log(config.version, msg[color]),

	helloWorld2 : (color='red', msg) => console.log(config.version[color], msg[color])
}


module.exports = container

