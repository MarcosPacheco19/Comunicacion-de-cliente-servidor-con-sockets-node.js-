const express = require('express')
const path = require('path')
const http = require('http')

const server = http.createServer(app)
const { server } = require('socket.io')
const io = new Server(server)

const app = express()
const datosDir = path.resolve(__dirname,`../client` )

io.on('connection', (socket)=>{
    //console.log('Un usuario se ha conectado')

    //socket.on('disconnect', ()=>{
      //  console.log('Un usuario se ha desconectado')
    //})
    socket.on('chat', (msg)=>{
        //console.log(msg)
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