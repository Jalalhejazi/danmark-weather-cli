#!/usr/bin/env node

const program = require('commander');
const pkg     = require('./package');

program
  .version(pkg.version)
  .option('-t, --temp',    'show temperature in celcius degrees')
  .option('-d, --details', 'show weather in Denmark (Odense)')
  .parse(process.argv)

if (program.temp) {
    require('./lib/weather') ( data => console.log(data.weather.temp) )
}


if (program.details) {
    require('./lib/weather') ( data => console.log(data.weather) )
}
