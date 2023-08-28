const https = require('http')
const url = require('url')
const port = 8000;
const fs  = require('fs');
const { error } = require('console');
const { json } = require('stream/consumers');

 

const server = https.createServer((req,res)=>{

    const path  = req.url
    console.log(path);
    if (path === '/') {
        res.end('this is home page ')
    }
    else if(path === "/API")
    {
         fs.readFile('index.json','utf-8',(err,data)=>{
            if(err)
            {
                console.log(err);
            }
            else{
                const ObjData = JSON.parse(data)
                res.end(ObjData[0].title)


            }
        })
    }
    else{
        res.end("bhai ye to home page nhi hai",error)
    }
})
// console.log(typeof(port));
server.listen(port,"127.0.0.1",()=>{
    console.log(`listening to  port number ${port}`);
})