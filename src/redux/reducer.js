import { SET_SEARCH_VALUE, GET_MOVIES_INIT, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from "./actions";

const defaultValueDataMovie = (data = {}) => ({data: data, isLoading: false, error: false, errorMessage: ''});

const initialState = {
  movies: defaultValueDataMovie({Response: '', Search: [], totalResults: ''}),
  movie: defaultValueDataMovie(),
  search: '',
  favoriteMovies: JSON.parse(localStorage.getItem('movie-favourites')) || [],
  favorite: defaultValueDataMovie([]),
  episodes: defaultValueDataMovie()
};

export const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        search: action.search
      }
    case GET_MOVIES_INIT:
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: true,
          error: false,
          errorMessage: ''
        }
      }
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: false,
          data: action.data
        }
      }
    case GET_MOVIES_ERROR:
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: false,
          error: true,
          errorMessage: action.data.Error,
        }
      }
    default:
      return state;
  }
}