import { GET_MOVIES_ERROR, GET_MOVIES_INIT, GET_MOVIES_SUCCESS, SET_SEARCH_VALUE } from "./actions";
import { fetchGetMovies } from './../api/apiMovies';

const setSearchValue = (search) => {
  return { type: SET_SEARCH_VALUE, search };
}

const getMoviesInit = () => {
  return { type: GET_MOVIES_INIT }
}
const getMoviesError = (data) => {
  return { type: GET_MOVIES_ERROR, data }
}
const getMoviesSuccess = (data) => {
  return { type: GET_MOVIES_SUCCESS, data }
}

export const getMovies = (search, page) => {
  return (dispatch) => {
    dispatch(setSearchValue(search)); 
    dispatch(getMoviesInit());
    fetchGetMovies(search, page)
    .then(data => {
      if(data.Response === "True") {
        dispatch(getMoviesSuccess(data));
      } else {
        dispatch(getMoviesError(data));
      } 
    })
    .catch(e => {
      dispatch(getMoviesError({Error: 'Oppps! Something went wrong'}));
    })
  }
}