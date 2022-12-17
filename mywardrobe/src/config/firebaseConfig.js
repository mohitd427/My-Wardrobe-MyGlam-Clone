// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SD Ks for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPv4v0-Rrju4BugNIcpl_GzBoh9r7-IjM",
  authDomain: "my-wordrobe.firebaseapp.com",
  projectId: "my-wordrobe",
  storageBucket: "my-wordrobe.appspot.com",
  messagingSenderId: "150138559185",
  appId: "1:150138559185:web:40a84ea9c502852c0a03f0",
  measurementId: "G-WW6Q264N9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export default app;