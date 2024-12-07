import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port:8000});


wss.on('connection',(socket)=>{
    console.log("Welcome to the ping pong game");
    socket.on('message',(e)=>{
        if(e.toString() === "ping"){
            socket.send("pong");
        }
    })
})