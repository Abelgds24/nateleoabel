import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import "./Welcome.css";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

  return (
    <div>
    <main className="welcome">
     <h1>Welcome To Coffee Hub</h1>
     
     <img class='pic' src='https://clipartix.com/wp-content/uploads/2016/04/Coffee-clip-art-free-clipart-images.png'></img>

    
    </main>
  
    </div>
    
  );
};

export default Welcome;


