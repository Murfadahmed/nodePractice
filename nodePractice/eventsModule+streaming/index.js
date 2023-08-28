const EventEmitter = require('events')
// Events module 
const events = new EventEmitter();

events.on("myName", () => {
    console.log("its me MUrfad Ahmed");
})
events.on("myName", (num, FNAme, LName) => {
    console.log(`my first name is ${FNAme} and last Name is ${LName} this page is ${num}`);
})

events.emit("myName", 200, 'murfad ', 'malik')

// streamed
const fs = require('fs')
const http = require('http')
const server = http.createServer();

server.on('request', (req, res) => {

    // fs.readFile('text.text',(err,data)=>{
    //     if(err){
    //         return console.error(err);

    //     }
    //     else{
    //         res.end(data.toString());
    //     }
    // })

    // const startStream = fs.createReadStream('text.text')

    // startStream.on('data', (chunksData) => {
        //     res.write(chunksData)
        // })
        // startStream.on('end', (chunksData) => {
            //     res.end(chunksData)
            // })
            // startStream.on('error', (err) => {
                //     console.log(err);
                //     res.end('file doesn,t exist')
                // })
                // /pipi method
                console.log(req.url);
                const startStream = fs.createReadStream('text.text')

                startStream.pipe(res)
})

server.listen(8000, '127.0.0.1', () => {
    console.log("srever chal gaya hai");
})





