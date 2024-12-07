import { useEffect, useRef, useState } from "react"

export default function App() {
  const[socket,Setsocket] = useState();
  const inputRef = useRef()
  const sendMessage = ()=>{
    // code for sending messages
      //@ts-ignore
      const messages = inputRef.current.value;
      //@ts-ignore
    socket.send(messages)
  }
  //@ts-ignore

useEffect(()=>{
  const ws = new WebSocket("ws://localhost:8000")
    //@ts-ignore
  Setsocket(ws)
  ws.onmessage=(e)=>{
    alert(e.data)
  }
},[])



  return (
    <div>  
        
      <input ref={inputRef} type="text" placeholder='Enter Your Messages' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}
