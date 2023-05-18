import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const googleSignIn2 = () => {
    const provider = new GoogleAuthProvider();
  
    signInWithRedirect(auth, provider);
  };

  const googleSignIn3 = () => {
    const provider = new GoogleAuthProvider();
  
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="omega">
   
      {user ? (
        <>
          <button onClick={signOut} className="sign-out" type="button">
            Sign Out
          </button>
        </>
      ) : (
        <>

        
          <button className="sign-in">
            <img onClick={googleSignIn} alt="Best Coffee Blends" />
          </button>
         
          <button className="sign-in2">
            <img onClick={googleSignIn2} alt="Hot Takes!" />
          </button>

          <button className="sign-in3">
            <img onClick={googleSignIn3} alt="Cafe Discussion" />
          </button>
         
          <Link to="/map">
          <button className="mapbutton">Go to Maps</button>
        </Link>
       
        <Link to="/Welcome">
          <button className="homebutton">Go to home</button>
        </Link>

        <Link to="/AboutUs">
          <button className="aboutus">About Us</button>
        </Link>
        </>
      )}
   
    </div>
  );
};

export default NavBar;
