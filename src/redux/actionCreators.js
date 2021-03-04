import { ADD_FAVORITE_MOVIE, DELETE_FAVORITE_MOVIE, GET_MOVIES_ERROR, GET_MOVIES_INIT, GET_MOVIES_SUCCESS, 
  SET_SEARCH_VALUE, GET_MOVIE_DETAILS_INIT, GET_MOVIE_DETAILS_ERROR, GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIES_NEXT_PAGE_INIT, GET_MOVIES_NEXT_PAGE_SUCCESS, GET_MOVIES_NEXT_PAGE_ERROR, GET_ALL_MOVIES_DETAILS_INIT, GET_ALL_MOVIES_DETAILS_ERROR, GET_ALL_MOVIES_DETAILS_SUCCESS, SET_CURRENT_PAGE } from "./actions";
import { fetchGetMovies, fetchGetMovieDetails, fetchGetMovieDetailsSmall } from './../api/apiMovies';

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

const getAllMoviesDetailsInit = () => {
  return { type: GET_ALL_MOVIES_DETAILS_INIT }
}
const getAllMoviesDetailsError = (data) => {
  return { type: GET_ALL_MOVIES_DETAILS_ERROR, data }
}
const getAllMoviesDetailsSuccess = (data) => {
  return { type: GET_ALL_MOVIES_DETAILS_SUCCESS, data }
}

export const getAllMoviesDetails = (arrId) => {
  return (dispatch) => {
    dispatch(getAllMoviesDetailsInit());
    const request = arrId.map(id => fetchGetMovieDetailsSmall(id))
    Promise.all(request)
    .then(data => {
      dispatch(getAllMoviesDetailsSuccess(data));
    })
    .catch(e => {
      dispatch(getAllMoviesDetailsError({Error: 'Oppps! Something went wrong'}))
    })
  }
}

export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });