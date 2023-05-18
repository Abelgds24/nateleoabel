import { useState } from "react";
import { auth, db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React from 'react';

import "./SendMessage.css";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const bottomRef = React.useRef();

  const sendMessage = async (event) => {
    event.preventDefault();

    const { uid, displayName, photoURL } = auth.currentUser;

    
    if (file) {
     
      const fileRef = ref(storage, `images/${file.name}`);
      await uploadBytes(fileRef, file);

    
      const url = await getDownloadURL(fileRef);
      setFileURL(url);

     
      await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
        fileURL: url,
      });

      
      setFile(null);
    } else {
     
      await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    }

   
    setMessage("");
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
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
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      {fileURL && <img src={fileURL} alt="sent image" />}
      <button className="send" type="submit">
        Send
      </button>
      <div ref={bottomRef} />
    </form>
  );
};

export default SendMessage;
