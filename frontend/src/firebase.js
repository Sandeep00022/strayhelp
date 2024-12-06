// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxS8rkbyM8grKKAfg_Lh7NCJ-d31K4dd4",
  authDomain: "stray-help.firebaseapp.com",
  projectId: "stray-help",
  storageBucket: "stray-help.firebasestorage.app",
  messagingSenderId: "807287060751",
  appId: "1:807287060751:web:35929b6312de747214667a",
  measurementId: "G-C12D3TGC88"
};

// Initialize Firebase
export const storage = initializeApp(firebaseConfig);
const analytics = getAnalytics(storage);