import './App.css';
import { Header, Main, Footer } from './Components/Structure';
import { useEffect, useRef, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { database } from './Firebase';
import { AlertProvider } from './Components/Elements/Alert/AlertContext';
import { Alert } from './Components/Elements';

function App() {
  const [data, setData] = useState([]);
  const [showFooter, setShowFooter] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const starCountRef = ref(database, 'content/');
    const unsubscribe = onValue(starCountRef, (snapshot) => {
      setData(snapshot.val());
    });
    return () => {
      unsubscribe();
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
