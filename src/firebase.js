// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA9j5sRAaNy2AMzvunSSEnQSmWR6FcYlnQ",
  authDomain: "spotmet-451af.firebaseapp.com",
  projectId: "spotmet-451af",
  storageBucket: "spotmet-451af.firebasestorage.app",
  messagingSenderId: "846519206059",
  appId: "1:846519206059:web:14b2b5a5697ddfc264f7ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export default app;