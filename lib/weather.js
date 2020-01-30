const fetch  = require('node-fetch')
const package = require('../package')

weather = function(onSuccess){
    const URL    = 'http://www.henrikdemant.com/weather/realtime.txt'

    let response = fetch(URL)
    .then( res  => res.text())
    .then( data => {
        const temperaturArray  = data.split(/(\s+)/)
        const temperaturObject = {
             "weather" : {
                location     : 'DK', 
                date    	 : temperaturArray[0],
                time     	 : temperaturArray[2],
                temp       : temperaturArray[4]
            },
            "program": {
                 sourcecode  :  package.repository.url
                ,version : package.version
            }
        }
            onSuccess (temperaturObject)
        })
}

weather_by_city = async function(cityName = 'odense',onSuccess) {
    
    const url = `https://vejr.eu/api.php?location=${cityName}&degree=C`

    let response = await fetch(url)
    let body = await response.json()
    
    onSuccess(body)
}



module.exports = {weather, weather_by_city}