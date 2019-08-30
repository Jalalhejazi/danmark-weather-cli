## About Semantic Versioning

- This repo is Proof Of Concept for Azure Pipeline deployment to NPM registry

## Build Status

[![Build Status](https://dev.azure.com/superusers-kursus/nodejs/_apis/build/status/about-semantic-versioning-demo-2019?branchName=master)](https://dev.azure.com/superusers-kursus/nodejs/_build/latest?definitionId=34&branchName=master)


## How to install, update and test

```
npm install superusers-semversion-demo

npm version
npm outdated
npm update | node .\node_modules\superusers-semversion-demo\test.js  

```


## How to use

```
const  weather = require('./lib/weather')

weather( (d) => console.log(d) )

```



