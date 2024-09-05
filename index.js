const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer((req,res) => {
    //Conditional Rendering
    if(req.url === '/'){
        fs.readFile('./index.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/puzzle1'){
        fs.readFile('./puzzle1.html', (error,data) => {
            res.end(data)
        })
    }
    else{
        fs.readFile('./404.html', (error,data) => {
            res.end(data)
        })
    }
})

server.listen(5000, (err) =>{
    if (err){
        console.log(err)
    }
    console.log('listening on port 5000')
});