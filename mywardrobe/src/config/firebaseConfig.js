// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAKg9Eia46HuhzRBhH33x_6S_F-n8ZBpA",
  authDomain: "my-wardrobe-5b853.firebaseapp.com",
  projectId: "my-wardrobe-5b853",
  storageBucket: "my-wardrobe-5b853.appspot.com",
  messagingSenderId: "483188065937",
  appId: "1:483188065937:web:3745963269a5aaf01ce130",
  measurementId: "G-2FH19P6GW0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
