// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD-_CjcOZ4Q1VK2GEOD9iUcqdgJRV-PJw",
    authDomain: "react-forum-51b86.firebaseapp.com",
    projectId: "react-forum-51b86",
    storageBucket: "react-forum-51b86.appspot.com",
    messagingSenderId: "326500072811",
    appId: "1:326500072811:web:cdeb17336a79303c05202e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);