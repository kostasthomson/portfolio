import './App.css';
import { Header, Main, Footer } from './Components/Structure';
import { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { database } from './Firebase';

function App() {
  const [data, setData] = useState([]);
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    const starCountRef = ref(database, 'content/');
    const unsubscribe = onValue(starCountRef, (snapshot) => {
      setData(snapshot.val());
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <Header />
      <Main conversation={data} showFooter={setShowFooter} />
      <Footer show={showFooter} />
    </>
  );
}

export default App;
