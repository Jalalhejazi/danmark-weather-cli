const argv = require('minimist')(process.argv.slice(2));

const pkg  = require('./package')
const f    = require('./lib/weather') 

if(argv.help)
{
    let helpMessage =`
                ${pkg.name} --temp
                ${pkg.name} --version
                ${pkg.name} --sourcecode
` 
    f((d) => console.log(helpMessage) )   
}

if(argv.temp)
    f(d => console.log(d.weather.temp) )   

if(argv.version)
    f(d => console.log(pkg.version) )   

if(argv.sourcecode)
    f(d => console.log(d.program.sourcecode) )   
