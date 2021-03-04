import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './reducers/moviesReducer';
import { favoriteMoviesReducer } from './reducers/favoriteMoviesReducer';
import { movieDetailsReducer } from './reducers/movieDetailsReducer';
import { pageReducer } from './reducers/pageReducer';
import { searchReducer } from './reducers/searchReducer';


const reducers = combineReducers({
  movies: moviesReducer,
  favorite: favoriteMoviesReducer,
  movieDetails: movieDetailsReducer,
  page: pageReducer,
  search: searchReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;