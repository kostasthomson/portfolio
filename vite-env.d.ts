/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Declare any other environment variables you're using
  VITE_FIREBASE_ApiKey: string;
  VITE_FIREBASE_AuthDomain: string;
  VITE_FIREBASE_DatabaseURL: string;
  VITE_FIREBASE_ProjectId: string;
  VITE_FIREBASE_StorageBucket: string;
  VITE_FIREBASE_MessagingSenderId: string;
  VITE_FIREBASE_AppId: string;
  VITE_FIREBASE_MeasurementId: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
