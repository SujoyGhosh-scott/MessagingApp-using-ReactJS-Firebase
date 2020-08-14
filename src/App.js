import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <header>
        <img
          className="app-logo"
          src="https://t4.ftcdn.net/jpg/02/26/53/09/240_F_226530917_ALZR3hKRMurGpsEUJRXi8ppLMbn0JTBJ.jpg"
          alt=""
        />
        <h2>group messaging app</h2>
      </header>

      <p className="welcome-text">welcome {username}</p>

      <form className="app-form">
        <input
          className="message-box"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter message here..."
        />
        <button
          className="send-button"
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          <i className="fas fa-paper-plane fa-lg"></i>
        </button>
      </form>

      <FlipMove className="all-messages">
        {/* displaying all messages */}
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
