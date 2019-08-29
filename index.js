const colors = require('colors')
const fetch  = require('node-fetch')

const config = require('./package')

const container = {

	weather : function(onSuccess){
		const URL    = 'http://www.henrikdemant.com/weather/realtime.txt'

		let response = fetch(URL)
		.then( res  => res.text())
		.then( data => {
			const temperaturArray  = data.split(/(\s+)/)
			const temperaturObject = {
				Version         : config.version,
			 	Dato    		: temperaturArray[0],
			 	Tid     		: temperaturArray[2],
			 	temperatur 		: temperaturArray[4]
			}
				onSuccess (temperaturObject)
			})
	}
}


module.exports = container

