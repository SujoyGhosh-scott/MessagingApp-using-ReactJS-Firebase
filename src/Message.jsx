import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message-user"}`}>
      {username !== message.username ? (
        <p className="nametags">{message.username}</p>
      ) : (
        <p></p>
      )}
      <div className={isUser ? "message-userCard" : "message-guestCard"}>
        <h3>{message.message}</h3>
      </div>
    </div>
  );
});

export default Message;
