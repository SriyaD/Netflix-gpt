// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl4UnvXzMk7lg_UY3ZH9wAkb6-2QhZo8s",
  authDomain: "netflixgpt-f352c.firebaseapp.com",
  projectId: "netflixgpt-f352c",
  storageBucket: "netflixgpt-f352c.appspot.com",
  messagingSenderId: "934770055585",
  appId: "1:934770055585:web:ca7272ce81733badeb13e0",
  measurementId: "G-30H363C0BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();