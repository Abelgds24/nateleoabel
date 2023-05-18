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
import Message2 from "./Message";
import SendMessage2 from "./SendMessage";
import './ChatBox.css'

const ChatBox2 = () => {
  const [messages2, setMessages2] = useState([]);
  
  const deleteMessage = async (id) => {
    try{
      await deleteDoc(doc(db, "messages2", id))
    } catch (error) {
      console.error("Error removing document ", error)
    }
  }
  
  useEffect(() => {
    const q = query(
      collection(db, "messages2"),
      orderBy("createdAt"),
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages2 = [];
      QuerySnapshot.forEach((doc) => {
        messages2.push({ ...doc.data(), id: doc.id });
      });
      setMessages2(messages2);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages2?.map((message2) => (
          <div key={message2.id}>
            <Message2 message={message2} />
            <button className='delete' onClick={() => deleteMessage(message2.id)}>Delete</button>
          </div>
        ))}
      </div>
      <SendMessage2 />
    </main>
  );
};
export default ChatBox2;