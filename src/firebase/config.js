// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvS0D0fe2EwqeERdJuSyZkkW2e9CezLfw",
  authDomain: "e-commerce-66f95.firebaseapp.com",
  projectId: "e-commerce-66f95",
  storageBucket: "e-commerce-66f95.firebasestorage.app",
  messagingSenderId: "382745313987",
  appId: "1:382745313987:web:6728fad0d22c243346d876",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
