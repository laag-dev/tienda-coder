// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRwl2a7VUVU4XNh7GA-tI4OiEnjm8fj3s",
  authDomain: "tienda-coder-c509f.firebaseapp.com",
  projectId: "tienda-coder-c509f",
  storageBucket: "tienda-coder-c509f.appspot.com",
  messagingSenderId: "699094067921",
  appId: "1:699094067921:web:3b8b59d830f8e529c673f0",
  measurementId: "G-2F3PTC1Z3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//npm install firebase

//npm install -g firebase-tools

//firebase login

//firebase init 

//firebase deploy