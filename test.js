require('./lib/weather') ( test => {

    if (test.weather.location == 'DK') {
        console.log("Test is OK")
    }else {
        console.log("Test Not OK")
    }

})