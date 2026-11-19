import { useState, useEffect } from 'react'
import MusicPlayer from './pages/MusicPlayer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [socket, setSocket] = useState<WebSocket>();
  

  useEffect(()=>{
    setSocket(new WebSocket("ws://192.168.4.1:81"));

    socket?.addEventListener("open", (event)=> {
      console.log("Connected to the server");
    })

    socket?.addEventListener("close", (event)=> {
      console.log("Closed connection");
    })
  }, [])

  const onClickButton = () => {
    setCount((count) => count + 1);
    socket?.send(JSON.stringify({type: "led", count: count}));
  }

  return (
    <div className="app-wrapper">
      <MusicPlayer />
    </div>
  )
}

export default App
