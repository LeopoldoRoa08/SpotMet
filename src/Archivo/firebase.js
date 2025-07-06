
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9j5sRAaNy2AMzvunSSEnQSmWR6FcYlnQ",
  authDomain: "spotmet-451af.firebaseapp.com",
  projectId: "spotmet-451af",
  storageBucket: "spotmet-451af.appspot.com", // 🔧 CORREGIDO
  messagingSenderId: "846519206059",
  appId: "1:846519206059:web:14b2b5a5697ddfc264f7ee",
};

class FirebaseSingleton {
  static instance = null;

  constructor() {
    if (!FirebaseSingleton.instance) {
      this.app = initializeApp(firebaseConfig);
      this.auth = getAuth(this.app);
      this.googleProvider = new GoogleAuthProvider(); // 🔧 CORREGIDO
      this.db = getFirestore(this.app);
      FirebaseSingleton.instance = this;
    }
    return FirebaseSingleton.instance;
  }

  static getInstance() {
    if (!FirebaseSingleton.instance) {
      FirebaseSingleton.instance = new FirebaseSingleton();
    }
    return FirebaseSingleton.instance;
  }
}

const firebase = new FirebaseSingleton();
export default firebase;
export const auth = firebase.auth;
export const googleProvider = firebase.googleProvider;
export const db = firebase.db;
