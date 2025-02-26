import './App.css';
import conversation from './Data/content.json';
import { Header, Main, Footer } from './Components/Structure';
import { useState } from 'react';

function App() {
  const [showFooter, setShowFooter] = useState(false);
  return (
    <>
      <Header />
      <Main conversation={conversation} showFooter={setShowFooter} />
      <Footer show={showFooter} />
    </>
  );
}

export default App;
