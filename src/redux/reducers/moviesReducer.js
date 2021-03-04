import { GET_MOVIES_INIT, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR, GET_MOVIES_NEXT_PAGE_ERROR, 
  GET_MOVIES_NEXT_PAGE_SUCCESS, GET_MOVIES_NEXT_PAGE_INIT } from "../actions";
import { defaultValueDataMovie } from "../movieConstants";

const initialState = {
  movies: defaultValueDataMovie({Response: '', Search: [], totalResults: ''}),
};

export const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
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
    default:
      return state;
  }
}