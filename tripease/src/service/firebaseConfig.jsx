// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirebase} from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "ai-trip-planner-653f3.firebaseapp.com",
  projectId: "ai-trip-planner-653f3",
  storageBucket: "ai-trip-planner-653f3.firebasestorage.app",
  messagingSenderId: "893864916529",
  appId: "1:893864916529:web:6727c6741686de9e9f0710",
  measurementId: "G-X8FED1ZB8F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);