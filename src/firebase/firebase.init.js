// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0wJlZzC01HYKaoVENrexK_ScEKccE2dA",
  authDomain: "email-password-authin.firebaseapp.com",
  projectId: "email-password-authin",
  storageBucket: "email-password-authin.appspot.com",
  messagingSenderId: "1087486731400",
  appId: "1:1087486731400:web:990bc6be2f4fbd6edf6b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;