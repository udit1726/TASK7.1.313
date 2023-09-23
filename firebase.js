import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCb1taJYaUz687Bi8pB9rY0DyJG90MWN04",
    authDomain: "sit313ud.firebaseapp.com",
    projectId: "sit313ud",
    storageBucket: "sit313ud.appspot.com",
    messagingSenderId: "943334878563",
    appId: "1:943334878563:web:1401a8961c83c305dcf756",
    measurementId: "G-JQBP5C322Q"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };