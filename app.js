//package.json describes our project
//npm init (used to install package.json manually)
//npm init -y (used to install package.json with default settings)
//npm i lodash - to install dependency lodahs
//npm i bootstrap - to install bootstarp dependency

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)