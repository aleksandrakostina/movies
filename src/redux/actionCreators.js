import { ADD_FAVORITE_MOVIE, DELETE_FAVORITE_MOVIE, GET_MOVIES_ERROR, GET_MOVIES_INIT, GET_MOVIES_SUCCESS, 
  SET_SEARCH_VALUE, GET_MOVIE_DETAILS_INIT, GET_MOVIE_DETAILS_ERROR, GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIES_NEXT_PAGE_INIT, GET_MOVIES_NEXT_PAGE_SUCCESS, GET_MOVIES_NEXT_PAGE_ERROR } from "./actions";
import { fetchGetMovies, fetchGetMovieDetails } from './../api/apiMovies';

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

export const addFavoriteMovie = (id) => {
  return { type: ADD_FAVORITE_MOVIE, id };
}

export const deleteFavoriteMovie = (id) => {
  return { type: DELETE_FAVORITE_MOVIE, id };
}

const getMovieDetailsInit = () => {
  return { type: GET_MOVIE_DETAILS_INIT }
}
const getMovieDetailsError = (data) => {
  return { type: GET_MOVIE_DETAILS_ERROR, data }
}
const getMovieDetailsSuccess = (data) => {
  return { type: GET_MOVIE_DETAILS_SUCCESS, data }
}

export const getMovieDetails = (id) => {
  return (dispatch) => {
    dispatch(getMovieDetailsInit());
    fetchGetMovieDetails(id)
    .then(data => {
      if(data.Response === "True") {
        dispatch(getMovieDetailsSuccess(data));
      } else {
        dispatch(getMovieDetailsError(data));
      }
    })
    .catch(e => {
      dispatch(getMovieDetailsError({Error: 'Oppps! Something went wrong'}))
    })
  }
}

const getMoviesNextPageInit = () => {
  return { type: GET_MOVIES_NEXT_PAGE_INIT }
}
const getMoviesNextPageSuccess = (data) => {
  return { type: GET_MOVIES_NEXT_PAGE_SUCCESS, data };
}
const getMoviesNextPageError = (data) => {
  return { type: GET_MOVIES_NEXT_PAGE_ERROR, data }
}

export const getMoviesNextPage = (search, page) => {
  return (dispatch) => {
    dispatch(getMoviesNextPageInit());
    fetchGetMovies(search, page)
    .then(data => {
      if(data.Response === "True") {
        dispatch(getMoviesNextPageSuccess(data));
      } else {
        dispatch(getMoviesNextPageError(data));
      }
    })
    .catch(e => {
      dispatch(getMoviesNextPageError({Error: 'Oppps! Something went wrong'}));
    })
  }
}
