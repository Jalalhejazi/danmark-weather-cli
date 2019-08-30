#!/usr/bin/env node

const program = require('commander');
const pkg     = require('./package');

program
  .version(pkg.version)
  .option('-t, --temp',    'show temperature in celcius degrees')
  .option('-w, --weather', 'show weather in Denmark (Odense)')
  .parse(process.argv)

if (program.temp) {
    require('./lib/weather') ( data => console.log(data.weather.temp) )
}


if (program.weather) {
    require('./lib/weather') ( data => console.log(data.weather) )
}
