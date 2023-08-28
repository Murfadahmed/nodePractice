console.log("murfad")
const fs = require('fs')

fs.readFile('index.html', 'utf-8', (err, data) => {
    // console.log(data);
});   

const http = require('http')

const server = http.createServer((req,res)=>{   
    const path = req.url;
    console.log(path);
    if(path === "/home")
    {
        res.end("this is home page")

    }
    else if(path === "/service")
    {
        res.end("this is services page")
        
    }
    else if(path === "/aboutUs")
    {
        res.end("this is AboutUS page")
        
    }
    else{
        res.writeHead(404,{'Content-type':"text/html"})
        res.end('<h1>ohh no its not the correct page</h1>')
    }
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('listen to port number 8000');
})
