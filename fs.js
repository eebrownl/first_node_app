const fs = require('fs')
const path = require('path')

//Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//     if(err) throw err;
//     console.log('Folder created...')
// })

// //Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('file written to...')
// })

// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love nodeJS', err => {
//     if(err) throw err;
//     console.log('file written to again')
// })

//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})