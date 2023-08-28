const express = require('express');
const { dirname } = require('path');
const path = require('path')
const app = express()

console.log(__dirname);
 const publicFile = path.join(__dirname,"../public")
app.use(express.static(publicFile))
//  console.log(app);

app.get('/', (req, res) => {
    console.log(req.url);
    res.send("ASSALAM O ALIKUM FROM HOME PAGE THIS IS EXPRESS js")
})
app.get('/murfad', (req, res) => {
    res.status(200).send("ASSALAM O ALIKUM FROM HOME PAGE THIS IS EXPRESS js murfad is my name ")
})
app.get('/malik', (req, res) => {
    res.send("ASSALAM O ALIKUM FROM malik PAGE THIS IS EXPRESS js anfd malik is the cast")
})
// as the html tags
app.get('/name', (req, res) => {
    res.write(`<h1>"ASSALAM O ALIKUM FROM malik PAGE THIS IS EXPRESS js anfd malik is the cast"</h1>`)
    res.end()
})
// as a object
app.get('/obj', (req, res) => {
    // res.json([{
    //     id:1,
    //     name:"murfad"
    // },
    // {
    //     id:1,
    //     name:"murfad"
    // },
    // {
    //     id:1,
    //     name:"murfad"
    // }])
    res.send([{
        id: 1,
        name: "murfad"
    },
    {
        id: 1,
        name: "murfad"
    },
    {
        id: 1,
        name: "murfad"
    }])
    // res.end()
})


app.listen(8000, () => {

    console.log('listenig to the port 8000 Express JS');
})

console.log(__dirname);