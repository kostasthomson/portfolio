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
    let unsubscribe = () => {}; // default no-op, in case fetch fails

    const fetchData = async () => {
      try {
        if (database) {
          const starCountRef = ref(database, 'content/');
          // onValue returns an unsubscribe function
          unsubscribe = onValue(starCountRef, (snapshot) => {
            setData(snapshot.val());
          });
        } else if (error) throw error;
      } catch (error) {
        console.error('Firebase fetch error:', error);
      }
    };

    fetchData();

    return () => {
      unsubscribe(); // Clean up listener on unmount
    };
  }, []);

  useEffect(() => {
    if (showFooter) {
      if (footerRef.current) {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [showFooter]);
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
