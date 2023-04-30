const express = require('express')
const path = require('path')

const app = express()

const datosDir = path.resolve(__dirname,`../client` )

const http = require('http')
const server = http.createServer(app)

app.get('/', (req, res)=> {
    res.sendFile(`${datosDir}/cliente.html`)
})

server.listen(5050, ()=>{
    console.log('El servidor esta en linea')
    console.log('link: http://localhost:5050')
})