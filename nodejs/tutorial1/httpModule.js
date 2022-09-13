// http module
const http = require('http')
const fetch = require('node-fetch')
// create server
http.createServer(function(req,res){
    
    res.writeHead(200,{'Content-Type':'text/html'})
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res=>res.json())
    .then(data=>{
        if(req.rawHeaders[3].includes('curl')){
            res.write(data.name + " Terminaalll i see you")
        }else{
            res.write(`<h1>${data.name}</h1>`)
        }
        res.end()
    })
    // res.write(`
    // <h1>Hello Node.js</h1>
    // <script>alert('helooooo')</script>
    // <script>console.log('hello browser console')</script>
    // `)
    
}).listen(8080,()=>{
    console.log('Server is running... Port number is 8080')
}).on('connection',()=>{
    console.log('New connection')
})