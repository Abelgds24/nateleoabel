import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Message.css";
const Message2 = ({ message2 }) => {
  const [user] = useAuthState(auth);

  return (
    <div
      className={`chat-bubble ${message2.uid === user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble__left"
        src={message2.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message2.name}</p>
        <p className="user-message">{message2.text}</p>
      </div>
    </div>
  );
};
export default Message2;