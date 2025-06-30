http 1.0
req, res 
built on top of tcp
client always initiates the communication

client sends a request GET/index.html
server responds with the page
close connection

example a web page consists of 100 imgs then 100 connections are opened and closed which kills the performance

http 1.1 
websockets are built on top of http1.1
persistant tcp connection
header keep-alive
keep connection open
req,res

there are usecases where server to act in real time and send res without actually requesting

websocket handshake, where server and the client knows each other
client,server send each the info
bidirectional

websocket handshake ws:// wss://
req -> GET 1.1 upgrade (protocol)
res -> 101 switching protocols

full duplex bidirectional connection
use cases

chatting
ex: whatsapp you don't always check for whether there is a message
Live feed, notifications
multiplayer gaming


chrome console

let ws = new WebSocket("ws://localhost:8080")
ws.onmessage = message => console.log(`we received a message from server ${message.data}`)
ws.send("")
ws.close()
