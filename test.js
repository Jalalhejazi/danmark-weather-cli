const vejret = require('./lib/weather')
const pkg = require('./package')

vejret( (d) => {
    if (d.Lokation == 'Odense') {
    const message =  `package version: ${pkg.version}
vejret: ${JSON.stringify(d)}        
    `
        console.log(message)
    }
})
