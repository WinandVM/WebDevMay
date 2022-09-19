var url = require('url'); // import url module

let parsedUrl = url.parse('http://localhost:3000/?name=Joe&age=20',true)
//console.log(parsedUrl)
console.log(parsedUrl.query)
console.log(parsedUrl.query.name)
console.log(parsedUrl.query.age)
console.log(parsedUrl.hostname)