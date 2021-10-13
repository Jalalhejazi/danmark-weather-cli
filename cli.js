#!/usr/bin/env node

const program  = require('commander');
const pkg      = require('./package');
const source   = require('./lib/weather')

program
  .version(pkg.version)
  .option('-t, --temp',    'show temperature in celcius degrees')
  .option('-d, --details', 'show weather in Denmark (--city Odense)')
  .option('-c, --city cityName', 'show weather in any city')
  .option('-s, --sourcecode', 'show sourcecode repo')
  .option('-i, --info', 'show information about the dev team')
  .parse(process.argv)


if (program.temp) {
    source.weather(data => console.log(data.weather.temp) )
}

if (program.details) {
    source.weather( data => console.log(data.weather) )
}

if  (program.city) {
    let city = 'odense'
    if (program.args.length !== 0){
        city = program.args
    }

    source.weather_by_city(  city , data  => console.log(data) )
    
}


if (program.sourcecode) {
    console.log(pkg.repository.url)
}


if (program.automation) {
    console.log(pkg.scripts)
}

if (program.info) {
    console.log(pkg.author)
}
