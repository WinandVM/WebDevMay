// npm i express mongoose --save

// import express and mongoose
const express = require('express')
const mongoose = require('mongoose')

const app = express();

// db connection
mongoose.connect('mongodb://localhost:27017/expressmongo',(err)=>{
    console.log("connected to db")
})

// create post schema 
const postSchema = mongoose.Schema({
    title:{
        required:true
    },
    content:String,
    date:String
})

// compile it to model
const Post = mongoose.model('Posts',postSchema)

// import middlewares
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Newspaper restfulAPIv1.0")
})

app.get('/posts',(req,res)=>{
    // retrieve all posts from mongodb and response them as json
    Post.find({})
    .then(posts=>{
        console.log(posts)
        res.json({
            message:'ok',
            data:posts
        })
    })
})

app.post('/post',(req,res)=>{
    const {title,content} = req.body
    const post = new Post({title,content,date:new Date()})
    post.save()
    .then(answer=>{
        res.json({
            message:'saved',
            data:answer
        })
    })
})
// http://localhost:8080/post/6332a8ab98c716d534121a28
app.put('/post/:id',(req,res)=>{
    const {id} = req.params
    Post.findByIdAndUpdate(id,req.body)
    .then(result=>{
        res.json({
            message:'updated',
            data:result
        })
    })
})

// http://localhost:8080/post/6332a8ab98c716d534121a28
app.delete('/post/:id',(req,res)=>{
    const {id} = req.params
    Post.findByIdAndDelete(id)
    .then(result=>{
        res.json({
            message:'deleted',
            data:result
        })
    })
})


// not found
app.all('*',(req,res)=>{
    res.json({
        message:'not found!'
    })
})


// set listen port
app.listen(8080,()=>console.log("Server is running on 8080"))