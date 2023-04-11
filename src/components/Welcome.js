import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import "./App.css";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

  return (
    <main className="welcome">
      <h2>Welcome to Coffee Hub.</h2>
      <img class='love' src='https://www.nicepng.com/png/detail/0-9700_drinking-coffee-clipart-coffee-clipart.png'></img>
      <p>Sign in with Google to join the disscussion!</p>
      
    </main>
  );
};

export default Welcome;
