var url = require('url'); // import url module

let parsedUrl = url.parse('http://localhost:3000/?name=Joe&age=20',true)
//console.log(parsedUrl)
console.log(parsedUrl.query)
console.log(parsedUrl.query.name)
console.log(parsedUrl.query.age)
console.log(parsedUrl.hostname)

// __dirname
console.log(__dirname)
console.log(__filename)

// path module
var path = require('path');
// const { writeFile, writeFileSync } = require('fs');
// console.log(path.basename(__dirname)) // last part of path
// console.log(path.dirname(__dirname),'test')
// console.log(path.join('/company','tool.js'))

// writeFile(path.join(__dirname,'/tool.txt'),'hello',(err)=>{
//     console.log('file is created')
// })

console.log(path.join(__dirname,'/downloaded'))

console.log(path.win32)


