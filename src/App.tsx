import './App.css';
import conversation from './Data/content.json';
import { Header, Main } from './Components/Structure';

function App() {
  return (
    <>
      <Header />
      <Main conversation={conversation} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
