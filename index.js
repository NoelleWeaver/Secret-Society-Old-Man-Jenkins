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
    else if(req.url === '/puzzle1hint'){
        fs.readFile('./puzzle1hint.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/keyboard'){
        fs.readFile('./puzzle2.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/puzzle2hint'){
        fs.readFile('./puzzle2hint.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/needle'){
        fs.readFile('./puzzle3.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/puzzle3hint'){
        fs.readFile('./puzzle3hint.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/egg'){
        fs.readFile('./puzzle4.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/puzzle4hint'){
        fs.readFile('./puzzle4hint.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/sponge'){
        fs.readFile('./puzzle5.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/puzzle5hint'){
        fs.readFile('./puzzle5hint.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/piano'){
        fs.readFile('./puzzle6.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/puzzle6hint'){
        fs.readFile('./puzzle6hint.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/breath'){
        fs.readFile('./puzzle7.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/puzzle7hint'){
        fs.readFile('./puzzle7hint.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/indexOf'){
        fs.readFile('./puzzle8.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/puzzle8hint'){
        fs.readFile('./puzzle8hint.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/typeOf'){
        fs.readFile('./puzzle9.html', (error,data) => {
            res.end(data)
        })
    }else if(req.url === '/puzzle9hint'){
        fs.readFile('./puzzle9hint.html', (error,data) => {
            res.end(data)
        })
    }
    else if(req.url === '/map'){
        fs.readFile('./youwon.html', (error,data) => {
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