// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Oz3W9LNvtVIUP_zNbp9ximc7ciagydY",
  authDomain: "fir-auth2-d4cbf.firebaseapp.com",
  projectId: "fir-auth2-d4cbf",
  storageBucket: "fir-auth2-d4cbf.firebasestorage.app",
  messagingSenderId: "674196460013",
  appId: "1:674196460013:web:8079db28f388e0737f57e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)