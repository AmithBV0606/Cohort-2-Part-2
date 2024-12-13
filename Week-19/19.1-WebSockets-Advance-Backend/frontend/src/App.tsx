import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const newConnection = new WebSocket("ws://localhost:8080");

    newConnection.onopen = () => {
      console.log("Connected");
      setSocket(newConnection);
    };

    newConnection.onmessage = (message) => {
      console.log("Received message : ", message.data);
      setLatestMessage(message.data);
    };

    return () => {
      newConnection.close();
    }
  }, []);

  if (!socket) {
    return <div>Connecting to socket server....</div>;
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />

      <button
        onClick={() => {
          socket.send(message);
        }}
      >
        Send
      </button>
      {latestMessage}
    </div>
  );
}

export default App;