// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9j5sRAaNy2AMzvunSSEnQSmWR6FcYlnQ",
  authDomain: "spotmet-451af.firebaseapp.com",
  projectId: "spotmet-451af",
  storageBucket: "spotmet-451af.firebasestorage.app",
  messagingSenderId: "846519206059",
  appId: "1:846519206059:web:14b2b5a5697ddfc264f7ee",
};

class FirebaseSingleton {
  static instance = null;

  constructor() {
    if (!FirebaseSingleton.instance) {
      this.app = initializeApp(firebaseConfig);
      this.auth = getAuth(this.app);
      this.googleProvider = new GoogleAuthProvider(this.app);
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

// Inicialización y exportaciones
const firebase = new FirebaseSingleton();

// Exporta la instancia completa si la necesitas
export default firebase;

// Exporta los métodos individuales para compatibilidad con tu código existente
export const auth = firebase.auth;
export const googleProvider = firebase.googleProvider;
export const db = firebase.db;