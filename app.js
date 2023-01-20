const http = require('http')
const path = require('path')
const fs = require('fs')
const { resolveNaptr } = require('dns')

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html'});
    //         res.end(content);
    //     })
    // }

    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html'});
    //         res.end(content);
    //     })
    // }

    //build file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    let extname = path.extname(filePath);

    //set initial content type
    let contentType = 'text/html'

    //Check the extension and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json': 
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png'
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == "ENOENT") {
                //PAGE NOT FOUND
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-type': 'text/html'})
                    res.end(content, 'utf8')
                })
            } else {
                //some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`)
            }
        }  else {
            //Success
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content, 'utf8')
        }
    })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))