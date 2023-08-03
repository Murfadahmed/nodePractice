// let a =  "assalam o alikum "
// console.log(a);

// const fs = require('fs')
const https = require('http')
const url = require('url')

// ********** Blocking  code executing 


// const text = fs.readFileSync('./node.text', 'utf-8')
// console.log(text);

// let tsxtChang = `changing text by node.js ${Date.now()}`

// fs.writeFileSync('./node.text', tsxtChang)

// console.log('file is changed', text);

// ******non-Blocking code executing

// fs.readFile('./node.text', 'utf-8', (err, data) => {
//     console.log(data, err);
// })

// console.log('reading file successfull');


const server = https.createServer((req, res) => {
    console.log(req.url, "requst url");
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('good deeds from the server this is over view')
    }
    else if (pathName === '/product') {
        res.end('this is product page')
    }
    else if (pathName === '/catoluge') {
        res.end('this is catoluge page')
    }
    else if (pathName === '/contact and details') {
        res.end('this is others contact and details page')
    }
    else {
        res.end('page not fount')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to request on port  8000 ');
})

