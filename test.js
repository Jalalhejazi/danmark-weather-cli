const source  = require('./lib/weather') 

source.weather( test => {

    if (test.weather.location == 'Odense') {
        console.log("Test is OK")
    }else {
        console.log("Test Not OK")
    }

})