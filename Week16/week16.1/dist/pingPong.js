"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
wss.on("connection", (socket) => {
    console.log("Welcome to the ping pong game");
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
        else {
            socket.send(e);
        }
    });
});
