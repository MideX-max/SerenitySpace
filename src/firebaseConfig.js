import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth"; // Authentication
import {getFirestore} from "firebase/firestore"; // Firestore Database
import {getStorage} from "firebase/storage"; // Storage/ file uploads 
import { GoogleAuthProvider, signInWithPopup }from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB2qrx0Nylt7gzZqVw0fpl8_AHY5rhiTnI",
  authDomain: "serenity-18ecd.firebaseapp.com",
  projectId: "serenity-18ecd",
  storageBucket: "serenity-18ecd.firebasestorage.app",
  messagingSenderId: "476108924743",
  appId: "1:476108924743:web:4b948ad8d96a677a774e62",
  measurementId: "G-19E9SJDBGJ"
};

//intialize firebase app
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const  googleProvider = new GoogleAuthProvider();

//export firebase services
export const auth = getAuth(app); // Authentication service
export const db = getFirestore(app); // Firestore Database service
export const storage = getStorage(app); // Storage service for file uploads

export { googleProvider, signInWithPopup }; // Google authentication provider and sign-in function

