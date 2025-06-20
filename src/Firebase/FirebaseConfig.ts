import { useEffect, useState } from 'react';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getDatabase, Database } from 'firebase/database';

interface FirebaseConfigResponse {
  FIREBASE_ApiKey: string;
  FIREBASE_AuthDomain: string;
  FIREBASE_DatabaseURL: string;
  FIREBASE_ProjectId: string;
  FIREBASE_StorageBucket: string;
  FIREBASE_MessagingSenderId: string;
  FIREBASE_AppId: string;
  FIREBASE_MeasurementId: string;
}

interface UseFirebaseDatabaseResult {
  database: Database | null;
  loading: boolean;
  error: Error | null;
}

export default function useFirebaseDatabase(): UseFirebaseDatabaseResult {
  const [database, setDatabase] = useState<Database | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initFirebase() {
      try {
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

        const firebase: FirebaseConfigResponse = await response.json();

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
        console.log('Firebase Config:', firebaseConfig);
        const app: FirebaseApp = initializeApp(firebaseConfig);
        const db: Database = getDatabase(app);

        if (isMounted) {
          setDatabase(db);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
          setLoading(false);
        }
      }
    }

    initFirebase();

    return () => {
      isMounted = false;
    };
  }, []);

  return { database, loading, error };
}
