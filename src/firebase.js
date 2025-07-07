import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // ¡Asegúrate de importar getStorage!

const firebaseConfig = {
  apiKey: "AIzaSyA9j5sRAaNy2AMzvunSSEnQSmWR6FcYlnQ",
  authDomain: "spotmet-451af.firebaseapp.com",
  projectId: "spotmet-451af",
  storageBucket: "spotmet-451af.appspot.com",
  messagingSenderId: "846519206059",
  appId: "1:846519206059:web:14b2b5a5697ddfc264f7ee",
};

class FirebaseSingleton {
  static instance = null;

  constructor() {
    if (!FirebaseSingleton.instance) {
      this.app = initializeApp(firebaseConfig);
      this.auth = getAuth(this.app);
      this.googleProvider = new GoogleAuthProvider();
      this.db = getFirestore(this.app);
      this.storage = getStorage(this.app); // ¡Nueva línea para inicializar storage!
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

  // Puedes añadir más métodos o propiedades aquí si los necesitas
  // Por ejemplo, para obtener la aplicación, autenticación, etc.
  getApp() {
    return this.app;
  }

  getAuth() {
    return this.auth;
  }

  getDb() {
    return this.db;
  }

  getStorage() {
    return this.storage;
  }
}

// Exporta las instancias directamente para facilitar la importación en otros archivos
const firebaseInstance = FirebaseSingleton.getInstance();
const db = firebaseInstance.getDb();
const auth = firebaseInstance.getAuth();
const googleProvider = firebaseInstance.googleProvider;
const storage = firebaseInstance.getStorage(); // ¡Nueva línea para exportar storage!

export { db, auth, googleProvider, storage }; // ¡Asegúrate de exportar storage aquí!