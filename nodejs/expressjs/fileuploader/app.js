// import modules
const express = require('express')
const cors = require("cors")
const multer = require("multer")

// server 
const server = express()

// use middlewares
server.use(cors())
server.use(express.json())
server.use('/uploads',express.static('./uploads'))
// http://localhost:4000/uploads/filename.jpg
server.get('/', (request, response) => {
    response.json({
        message: "Welcome to restful api"
    })
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

const uploader = multer({ 
    storage,
    fileFilter:(req,file,callback)=>{
        let arr = ['image/jpeg','image/jpg','image/png','image/gif']
        let isValidImg = arr.filter(img=>img===file.mimetype)
        console.log(isValidImg.length>0)
        if(isValidImg.length>0){
            callback(null,true)
        }else{
            callback(new Error("Not allowed!!!"))
        }
    }
 })

server.post('/',uploader.single('document'),(request, response) => {
    console.log(request.file.path) // display file location out
    response.json({
        msg: 'ok'
    })
})

// port number for server
server.listen(4000, () => console.log("Server is running on 4000"))