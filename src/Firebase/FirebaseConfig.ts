import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_ApiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AuthDomain,
  databaseURL: import.meta.env.VITE_FIREBASE_DatabaseURL,
  projectId: import.meta.env.VITE_FIREBASE_ProjectId,
  storageBucket: import.meta.env.VITE_FIREBASE_StorageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MessagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_AppId,
  measurementId: import.meta.env.VITE_FIREBASE_measurementId,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
