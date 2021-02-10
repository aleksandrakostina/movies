import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
