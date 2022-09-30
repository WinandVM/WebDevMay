// npm install --save-dev http-proxy-middleware
const express = require('express')
const cors = require('cors')
const {createProxyMiddleware} = require('http-proxy-middleware')
const app = express()

// use middleware
app.use(cors())
app.use(express.json())
// proxy server
app.use('/api',createProxyMiddleware({
    target:"https://newsapi.org/v2",
    pathRewrite:{['/api']:''}, // http://localhost:4000/news
    changeOrigin:true,
    secure:true
}))

// example of retrieve data in reactjs from backend-proxy-service
// useEffect(()=>{
//     fetch('/jsonplaceholder/todos')
// })

app.use('/jsonplaceholder',createProxyMiddleware({
    target:"https://jsonplaceholder.typicode.com",
    pathRewrite:{['/jsonplaceholder']:''},
    changeOrigin:true,
    secure:true
}))


app.listen(4000,()=>console.log('server is running...'))
