import { SET_SEARCH_VALUE, GET_MOVIES_INIT, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, DELETE_FAVORITE_MOVIE, 
  ADD_FAVORITE_MOVIE, GET_MOVIES_NEXT_PAGE_ERROR, GET_MOVIES_NEXT_PAGE_SUCCESS, GET_MOVIES_NEXT_PAGE_INIT, 
  GET_MOVIE_DETAILS_ERROR, GET_MOVIE_DETAILS_SUCCESS, GET_MOVIE_DETAILS_INIT, GET_ALL_MOVIES_DETAILS_ERROR, 
  GET_ALL_MOVIES_DETAILS_SUCCESS, GET_ALL_MOVIES_DETAILS_INIT, SET_CURRENT_PAGE } from "./actions";

const defaultValueDataMovie = (data = {}) => ({data: data, isLoading: false, error: false, errorMessage: ''});

const initialState = {
  movies: defaultValueDataMovie({Response: '', Search: [], totalResults: ''}),
  movie: defaultValueDataMovie(),
  search: '',
  favoriteMovieIds: JSON.parse(localStorage.getItem('movie-favourites')) || [],
  favoriteMovies: defaultValueDataMovie([]),
  episodes: defaultValueDataMovie(),
  currentPage: 1,
  pageLimit: 10
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
    case ADD_FAVORITE_MOVIE:
      localStorage.setItem('movie-favourites', JSON.stringify([...state.favoriteMovieIds, action.id]));
      return {
        ...state,
        favoriteMovieIds: [...state.favoriteMovieIds, action.id]
      }
    case DELETE_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovieIds: state.favoriteMovieIds.filter(movie => movie !== action.id)
      }
    case GET_MOVIE_DETAILS_INIT:
      return {
        ...state,
        movie: {
          isLoading: true,
          error: false,
          errorMessage: '',
          data: {}
        }
      }
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movie: {
          ...state.movie,
          isLoading: false,
          data: action.data
        }
      }
    case GET_MOVIE_DETAILS_ERROR:
      return {
        ...state,
        movie: {
          ...state.movie,
          isLoading: false,
          error: true,
          errorMessage: action.data.Error,
        }
      }
    case GET_MOVIES_NEXT_PAGE_INIT:
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: true,
          error: false,
          errorMessage: ''
        }
      }
    case GET_MOVIES_NEXT_PAGE_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: {
            ...state.movies.data,
            Search: [...state.movies.data.Search, ...action.data.Search]
          },
          isLoading: false
        }
      }
    case GET_MOVIES_NEXT_PAGE_ERROR:
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: false,
          error: true,
          errorMessage: action.data.Error
        }
      }
    case GET_ALL_MOVIES_DETAILS_INIT:
      return {
        ...state,
        favoriteMovies: {
          ...state.favoriteMovies,
          isLoading: true,
          error: false,
          errorMessage: ''
        }
      }
    case GET_ALL_MOVIES_DETAILS_SUCCESS:
      return {
        ...state,
        favoriteMovies: {
          data: action.data,
          isLoading: false
        }
      }
    case GET_ALL_MOVIES_DETAILS_ERROR:
      return {
        ...state,
        favoriteMovies: {
          ...state.favoriteMovies,
          isLoading: false,
          error: true,
          errorMessage: action.data.Error
        }
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state;
  }
}