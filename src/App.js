import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import MovieProvider from './MovieProvider';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <MovieProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/" component={NotFound} />
          </Switch>
        </MovieProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;