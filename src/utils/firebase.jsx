// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmOj37di-T4GwrtVcFwIazvwOwsbKSlL0",
  authDomain: "netflixgpt-6cd54.firebaseapp.com",
  projectId: "netflixgpt-6cd54",
  storageBucket: "netflixgpt-6cd54.firebasestorage.app",
  messagingSenderId: "1090164301070",
  appId: "1:1090164301070:web:f8631f1d6e4937533b8b5f",
  measurementId: "G-WB1RTSK7SX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
