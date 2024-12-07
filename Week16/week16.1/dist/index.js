"use strict";
// import { WebSocketServer } from 'ws';
Object.defineProperty(exports, "__esModule", { value: true });
// const wss = new WebSocketServer({ port: 8080 });
// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);
//   ws.on('message', function message(data) {
//     console.log('received: %s', data);
//   });
//   ws.send('something');
// });
// import { WebSocketServer } from "ws";
// const wss = new WebSocketServer({port:3000})
// wss.on('connection',function(socket){
//     socket.send("Hello ");
// })
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 3000 });
// Event handler
wss.on('connection', (socket) => {
    console.log("User Connected");
    setInterval(() => {
        socket.send("The Current Price Of The Stock is " + Math.random());
    }, 1000);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
