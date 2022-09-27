// import express module
const express = require('express')
const app = express();

// import env variables
require('dotenv').config()

// import body-parser
const bodyParser = require('body-parser');

// use body-parser middleware
app.use(bodyParser({
    extended:true
}))

// check if token exist
function isTokenExist(req,res,next){
   // console.log(req.headers.authorization.split(' ')[1])
   console.log(req.headers['x-access-token'])
}

// middleware 
function isUserLogged(req,res,next){
    const {username} = req.query
    if(username !=='admin'){
        res.status(401).send('Fail')
    }else{
        next()
    }
    
}

// get request
app.get('/',isTokenExist,(req,res)=>{
    res.json({id:1,title:'lorem ipsum',body:'lorem ipsum content'})
})

// post request
app.post('/',isUserLogged,(req,res)=>{
    // mongo should save req body here
    const {id,title,body} = req.body
    res.json({
        id,
        title,
        body
    })
})

// PUT request
app.put('/',(req,res)=>{
    const {id} = req.query
    const {title,body} = req.body
    res.json({
        title,
        body,
        message: `${id} is updated`
    })
})

// delete
app.delete('/',(req,res)=>{
    const {id} = req.query
    const {_id} = req.body
    res.json({
        message: `${id} deleted | ${_id} deleted`
    })
})



// set listening port number
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on ${process.env.PORT}`)
})