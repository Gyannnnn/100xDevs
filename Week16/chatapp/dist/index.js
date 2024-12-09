"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 3000 });
let allSockets = [];
wss.on("connection", (socket) => {
    allSockets.push(socket);
    socket.on("message", (event) => {
        for (let i = 0; i < allSockets.length; i++) {
            let s = allSockets[i];
            s.send(event.toString());
        }
    });
    socket.on("disconnect", () => {
        allSockets = allSockets.filter(x => x != socket);
    });
});
