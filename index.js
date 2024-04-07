const express = require('express')
const { dirname } = require('path')
const app = express()
const http = require('http').createServer(app)
const PORT = process.env.PORT || 4000

http.listen(PORT,()=>{
    console.log(`Server Started on ${PORT}`)
})
app.use(express.static(__dirname + "/public"))

app.get('/',(req,res)=>{
 res.sendFile(__dirname + '/index.html')
})