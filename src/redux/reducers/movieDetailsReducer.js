import { defaultValueDataMovie } from "../movieConstants";
import { GET_MOVIE_DETAILS_ERROR, GET_MOVIE_DETAILS_SUCCESS, GET_MOVIE_DETAILS_INIT } from "../actions";

const initialState = {
  movie: defaultValueDataMovie()
};

export const movieDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
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
    default:
      return state;
  }
}