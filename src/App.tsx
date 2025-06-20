import './App.css';
import { Header, Main, Footer } from './Components/Structure';
import { useEffect, useRef, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { AlertProvider } from './Components/Elements/Alert/AlertContext';
import { Alert } from './Components/Elements';
import useFirebaseDatabase from './Firebase';

function App() {
  const [data, setData] = useState([]);
  const [showFooter, setShowFooter] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const { database, loading, error } = useFirebaseDatabase();

  useEffect(() => {
    if (!database) return; // Wait for database to be ready

    const starCountRef = ref(database, 'content/');
    const unsubscribe = onValue(
      starCountRef,
      (snapshot) => {
        setData(snapshot.val());
      },
      (err) => {
        console.error('Firebase onValue error:', err);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [database]);

  useEffect(() => {
    if (showFooter) {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [showFooter]);

  if (loading) return <p>Loading Firebase...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <AlertProvider>
      <Header />
      <Main
        conversation={data}
        hasFooter={showFooter}
        showFooter={setShowFooter}
      />
      <Footer ref={footerRef} show={showFooter} />
      <Alert />
    </AlertProvider>
  );
}

export default App;
