// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, updatePassword } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9j5sRAaNy2AMzvunSSEnQSmWR6FcYlnQ",
  authDomain: "spotmet-451af.firebaseapp.com",
  projectId: "spotmet-451af",
  storageBucket: "spotmet-451af.firebasestorage.app",
  messagingSenderId: "846519206059",
  appId: "1:846519206059:web:14b2b5a5697ddfc264f7ee",
};

class Firebase {
  constructor() {
    if (!Firebase.instance) {
      this.app = initializeApp(firebaseConfig);
      this.auth = getAuth(this.app);
      this.googleProvider = new GoogleAuthProvider();
      this.db = getFirestore(this.app);
      this.storage = getStorage(this.app);
      
      // Métodos de autenticación
      this.updatePassword = updatePassword;
      
      // Métodos de Firestore
      this.doc = doc;
      this.getDoc = getDoc;
      this.updateDoc = updateDoc;
      
      // Métodos de Storage
      this.storageRef = ref;
      this.uploadBytes = uploadBytes;
      this.getDownloadURL = getDownloadURL;
      
      Firebase.instance = this;
    }
    return Firebase.instance;
  }

  // Métodos de conveniencia
  getUserDoc(uid) {
    return this.doc(this.db, "users", uid);
  }

  getProfileImageRef(uid) {
    return this.storageRef(this.storage, `profileImages/${uid}`);
  }

  static getInstance() {
    if (!Firebase.instance) {
      Firebase.instance = new Firebase();
    }
    return Firebase.instance;
  }
}

// Inicialización
const firebase = new Firebase();

// Exporta la instancia como default
export default firebase;

// Exportaciones individuales para compatibilidad
export const auth = firebase.auth;
export const db = firebase.db;
export const storage = firebase.storage;
export const googleProvider = firebase.googleProvider;