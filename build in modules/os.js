const os = require('os')

//to print the current user info
console.log(os.userInfo())
    //alternate way --> 
    // const user = os.userInfo();
    // console.log(user)

//to print the uptime(how long comp is on) 
console.log(os.uptime())

//to print a series of info. 
const obj= {
    osname : os.type(),
    release : os.release(),
    totalmemmory : os.totalmem(),
    freememmory : os.freemem() 
}

console.log(obj)