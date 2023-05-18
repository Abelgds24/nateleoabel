import React from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div>
      <main className="welcome">
        <h1 className="header">Welcome To Coffee Hub</h1>
        <img className="pic" src="https://clipartix.com/wp-content/uploads/2016/04/Coffee-clip-art-free-clipart-images.png" alt="Coffee" />
       
      </main>
    </div>
  );
};

export default Welcome;