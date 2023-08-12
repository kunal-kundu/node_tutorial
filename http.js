
//creating server using hhtp module
const http = require('http')
//req is what client is requesting to our server(it's a large object by default)
//res is the respond that server sends
    /*
        const server = http.createServer((req,res)=>{

            console.log(req)
            res.write('welcome to our home page')
            //to end the response
            res.end()
        })
    */

    const server = http.createServer((req,res)=>{
        if(req.url === '/'){
            res.end('welcome to our home page')
        }
        else if(req.url === '/about'){
            res.end('this is what we do here')
        }
        else{
        res.end(`
            <h1>Oops!</h1>
            <p>couldn't find the page you were looking for</p>
            <a href="/">return home</a>
        `)
        }
    })

//5000 is arbitory can be something else
server.listen(5000)









