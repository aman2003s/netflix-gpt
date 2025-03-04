// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD35mEsvVeBknUUL6LF7gvj7LdNeWzZRk0",
  authDomain: "netflix-gpt-55f0b.firebaseapp.com",
  projectId: "netflix-gpt-55f0b",
  storageBucket: "netflix-gpt-55f0b.firebasestorage.app",
  messagingSenderId: "280841114553",
  appId: "1:280841114553:web:8318bf767f2e55fc7adc68",
  measurementId: "G-C6GR3VJP5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);