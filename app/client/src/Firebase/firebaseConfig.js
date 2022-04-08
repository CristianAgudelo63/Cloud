import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/*
  Configuración de FIREBASE versión 9.
  process.env. -> significa que esta protegida la clave en un archivo .env.local
*/
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Iniciando FireBase y servicios
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
