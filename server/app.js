const express = require('express')
const app = express()

const path = require('path')

const http = require('http')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server)

const datosDir = path.resolve(__dirname,`../client` )

io.on('connection', (socket)=>{
    console.log('Un usuario se ha conectado')

    socket.on('disconnect', ()=>{
       console.log('Un usuario se ha desconectado')
    })

    socket.on('chat', (msg)=>{
        io.emit('chat', msg)
   })
})

app.get('/', (req, res)=> {
    res.sendFile(`${datosDir}/cliente.html`)
})

server.listen(5050, ()=>{
    console.log('El servidor esta en linea')
    console.log('link: http://localhost:5050')
})