const fetch  = require('node-fetch')

vejret = function(onSuccess){
    const URL    = 'http://www.henrikdemant.com/weather/realtime.txt'

    let response = fetch(URL)
    .then( res  => res.text())
    .then( data => {
        const temperaturArray  = data.split(/(\s+)/)
        const temperaturObject = {
            Lokation        : 'Odense',
            Dato    		: temperaturArray[0],
            Tid     		: temperaturArray[2],
            Temperatur 		: temperaturArray[4]
        }
            onSuccess (temperaturObject)
        })
}

module.exports = vejret