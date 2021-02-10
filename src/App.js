import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
