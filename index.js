const http = require('http')
//websocket handshake
const WebSocketServer = require('websocket').server
const express = require('express')
const app = express();
let connection = null;

const httpserver = http.createServer((req, res) => {
    console.log("We received your request")
})

app.get('/',(req,res)=>res.sendFile(`${__dirname}/index.html`))

app.listen(3000, ()=> console.log('Listening on port 3000'))

const websocket = new WebSocketServer({
    "httpServer": httpserver
})

//request on upgrading protocol and switching protocol
websocket.on("request", request => {
    connection = request.accept(null, request.origin)
    connection.on("open", () => console.log('Opened!!'))
    connection.on("close", () => console.log('Closed!!'))
    connection.on("message", message => {
        console.log(`Received message ${message.utf8Data}`)
    })
    sendevery5seconds();
})

httpserver.listen(8080, () => console.log('Server listening on port 8080'))

function sendevery5seconds () {
    connection.send(`Message ${Math.random()}`)
    setTimeout(sendevery5seconds, 5000)
}