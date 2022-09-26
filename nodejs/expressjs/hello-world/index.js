// import express module
const express = require('express')
const server = express()

// homepage http get request endpoint
server.get('/',(request,response)=>{
    // display html
    //response.send('Hello World')
    // display json
    // response.json({
    //     id:1,
    //     username:'admin'
    // })
    response.json([{id:1},{id:2}])

})



server.listen(8080,()=>{ // set port number 
    console.log('Server is running on 8080')
})