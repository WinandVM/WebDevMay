const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()
const TodoModel = require("./model")
mongoose.connect(process.env.MONGO_URI, (err) => console.log("connected"))

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to todos restful api v1.0")
})

// get all todos
app.get('/todos', (req, res) => {
    console.log(req.query.username)
    if (req.query.title !== undefined && req.query.username !== undefined) {
        TodoModel.find({ title: { $regex: req.query.title }, username: req.query.username })
            .then(results => {
                res.json({
                    message: 'ok',
                    todos: results
                })
            })
    } else if (req.query.title !== undefined) {
        TodoModel.find({ title: { $regex: req.query.title } })
            .then(results => {
                res.json({
                    message: 'ok',
                    todos: results
                })
            })

    } else {
        TodoModel.find({})
            .then(todos => res.json({ message: 'ok', todos: todos }))
    }
})

// // search a todo by keyword
// app.get('/search', (req, res) => {
//     if (req.query.title !== undefined) {
//         TodoModel.find({ title: { $regex: req.query.title } })
//             .then(results => {
//                 res.json({
//                     message: 'ok',
//                     todos: results
//                 })
//             })
//     }else{
//         res.send('use ?title=keyword')
//     }
// })



// save a todo
app.post('/todo', (req, res) => {
    let todo = new TodoModel(req.body)
    todo.save()
        .then(result => {
            res.json({
                message: 'ok',
                todo: result
            })
        })
})



// not found endpoint
app.get('*', (req, res) => {
    res.json({ message: 'not found' })
})

app.listen(process.env.PORT)


