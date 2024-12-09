import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3000 });

let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
  allSockets.push(socket);

  socket.on("message", (event) => {
    for (let i = 0; i < allSockets.length; i++) {
      let s = allSockets[i];
      s.send(event.toString());
    }
  });
  socket.on("disconnect",()=>{
    allSockets = allSockets.filter(x => x!= socket)
  })
});
