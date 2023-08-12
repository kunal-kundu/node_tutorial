//open termial and move to build in modules -> cd 'build in modules' // use quotation bcoz folder name contain spaces

//read and write files
//here fs is a imbuild module 
//This is synchronus bcoz callback is not used. So line by line execuiton
const {readFileSync, writeFileSync} = require('fs')
//here utf8 is the encoding method.
const first = readFileSync('./content/subfolder/first.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')

console.log(first,second)
//{flag :'a'} its used when u want to append the new text with previous text.
writeFileSync('./content/subfolder/result.txt',`here is the result : ${first} and ${second}`,{flag : 'a'})




//we can also use readFile and writeFile which returns a callback fnc.
const {readFile , writeFile} = require('fs')
const one = readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})
//we can also make a series of call back
//This is asynchronus bcoz callback is used. So no line by line execuiton
readFile('./content/subfolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        writeFile('./content/subfolder/result.txt',`here is the result using callback : ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            readFile('./content/subfolder/result.txt','utf8',(err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            })
        })
    })
})


