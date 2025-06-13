import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

async function setupFirebase() {
  const response = await fetch(
    'https://reliable-belekoy-ddd42b.netlify.app/.netlify/functions/main',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.statusText}`);
  }

  const firebase = await response.json();

  const firebaseConfig = {
    apiKey: firebase.FIREBASE_ApiKey,
    authDomain: firebase.FIREBASE_AuthDomain,
    databaseURL: firebase.FIREBASE_DatabaseURL,
    projectId: firebase.FIREBASE_ProjectId,
    storageBucket: firebase.FIREBASE_StorageBucket,
    messagingSenderId: firebase.FIREBASE_MessagingSenderId,
    appId: firebase.FIREBASE_AppId,
    measurementId: firebase.FIREBASE_MeasurementId,
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  return database;
}

export default setupFirebase;
