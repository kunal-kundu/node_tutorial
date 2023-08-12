const sayHi = (name) =>{
    console.log(`hi ${name}`)
}

module.exports = sayHi
//alternate ways -> 

//1-> module.exports.welcome = sayHi

//2-> module.export.sayHi=(name)=>{
//     console.log(`hi ${name}`)
// }