require('./lib/weather') ( test => {

    if (test.weather.location == 'DK') {
        console.log("Test OK")
    }else {
        console.log("Test Not OK")
    }

})