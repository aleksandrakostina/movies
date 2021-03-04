import { DELETE_FAVORITE_MOVIE, ADD_FAVORITE_MOVIE, GET_ALL_MOVIES_DETAILS_ERROR, GET_ALL_MOVIES_DETAILS_SUCCESS, 
  GET_ALL_MOVIES_DETAILS_INIT } from "../actions";
import { defaultValueDataMovie } from "../movieConstants";

const initialState = {
  favoriteMovieIds: JSON.parse(localStorage.getItem('movie-favourites')) || [],
  favoriteMovies: defaultValueDataMovie([])
};

export const favoriteMoviesReducer = (state = initialState, action) => {
  switch(action.type) {
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
    default:
      return state;
  }
}