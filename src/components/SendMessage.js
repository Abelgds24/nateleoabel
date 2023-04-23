import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./SendMessage.css";

const SendMessage = ({}) => {
  const [message, setMessage] = useState("");
  const bottomRef = React.useRef(); // add a reference to the bottom of the page

  const sendMessage = async (event) => {
    event.preventDefault();

    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    bottomRef.current.scrollIntoView({ behavior: "smooth" }); // scroll to the bottom reference
  };

  return (
    <form onSubmit={sendMessage} className="send-message">

      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Join the Discussion..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="send" type="submit">
        Send
      </button>
      <div ref={bottomRef} /> {}
      
    </form>
    
  );
};

export default SendMessage;
