import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc
} 
from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import './ChatBox.css'

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  
  const deleteMessage = async (id) => {
    try{
      await deleteDoc(doc(db, "messages", id))
    } catch (error) {
      console.error("Error removing document ", error)
    }
  }
  
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <div key={message.id}>
            <Message message={message} />
            <button className='delete' onClick={() => deleteMessage(message.id)}>Delete</button>
          </div>
        ))}
      </div>
      <SendMessage />
    </main>
  );
};
export default ChatBox;