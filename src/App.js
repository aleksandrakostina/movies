import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetails from './components/movieDetails/MovieDetails';
import NotFound from './components/notFound/NotFound';
import WatchlistContainer from './components/watchlist/WatchlistContainer';
import MovieProvider from './MovieProvider';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <MovieProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/title/:id" component={MovieDetails} />
            <Route path="/watchlist" exact component={WatchlistContainer} />
            <Route path="/" component={NotFound} />
          </Switch>
        </MovieProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;