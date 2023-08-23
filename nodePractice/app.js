const fs = require('fs')
/*
// ********** Blocking  code executing 
// CRUD
// creat file dinamically
fs.writeFileSync('index.text','hey i am here to practicing')

// read file dinamically
let read = fs.readFileSync('index.text','utf-8')
console.log(read);


// update file dinamically
fs.appendFileSync('index.text','   node js (and its is updated data)')

let againRead = fs.readFileSync('index.text','utf-8')

console.log(againRead);

// delete file dinamically

fs.unlinkSync('index.text')

*/

// ******non-Blocking code executing

/*

fs.writeFile('node.text', 'data asyncronyslly',(err,data)=>{
    console.log(err);
    console.log(data);
})

fs.readFile('node.text','utf-8',(err,data)=>{
    console.log(data);
    console.log(err);
})

fs.appendFile('node.text','    ye async updated kia hai',(data)=>{
    console.log(data);
})

fs.readFile('node.text','utf-8' ,(err,data)=>{
    console.log(data);
})


// async may file delete nhi hoti
fs.unlink('index.text',(err,data)=>{
    console.log(err);
})
*/




const port = 8000;

const https = require('http')

const url = require('url')

const server = https.createServer((req,res)=>{
    const pathName = req.url

    console.log(pathName);
    if (pathName === '/') {
        res.end('ye hamara home page hai')
    }
    else if (pathName === '/about') {
        res.end('ye hamara about page hai')
    }
    else if (pathName === '/services') {
        res.end('ye hamara services page hai')
    }
    else if (pathName === '/contact') {
        res.end('ye hamara contact page hai')
    }
    else if (pathName === '/resume') {
        res.end('ye hamara resume abhi nhi banai page hai')
    }
    else{
        res.end('bhai galat jagha a gaya to too')
    }

})

server.listen(port,'127.0.0.1',()=>{
    console.log(`listening to request on port number ${port}`);
})