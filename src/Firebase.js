// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOqt0pOoWEJetoxWvOlB2idfL6ufrreGI",
  authDomain: "netflix-sandeep-80aba.firebaseapp.com",
  projectId: "netflix-sandeep-80aba",
  storageBucket: "netflix-sandeep-80aba.appspot.com",
  messagingSenderId: "763642668420",
  appId: "1:763642668420:web:2a3dc61ecc2f8b535929d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
