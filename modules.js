//every file in node is a module
//using modules
//require is used as import

const {name1, name2} = require('./names.js')
const name = require('./names.js')
const sayHi = require('./utils.js')

sayHi(name1)
sayHi(name2)

sayHi(name.name1)
sayHi(name.name2)



//using modules without variable
require('./add.js')