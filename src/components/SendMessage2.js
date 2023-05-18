import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./SendMessage.css";

const SendMessage2 = ({}) => {
  const [message2, setMessage2] = useState("");
  const bottomRef = React.useRef(); // add a reference to the bottom of the page

  const sendMessage2 = async (event) => {
    event.preventDefault();

    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages2"), {
      text: message2,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage2("");
    bottomRef.current.scrollIntoView({ behavior: "smooth" }); // scroll to the bottom reference
  };

  return (
    <form onSubmit={sendMessage2} className="send-message">

      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Join the Discussion..."
        value={message2}
        onChange={(e) => setMessage2(e.target.value)}
      />
      <button className="send" type="submit">
        Send
      </button>
      <div ref={bottomRef} /> {}
      
    </form>
    
  );
};

export default SendMessage2;
