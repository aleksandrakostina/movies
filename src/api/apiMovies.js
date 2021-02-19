const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://www.omdbapi.com`;

export const fetchApi = (url) => {
  return fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        Promise.reject({status: response.status, message: response.statusText});
      }
    })
    .then(data => {
      return data;
    })
}

export const fetchGetMovies = (search, page = 1) => {
  return fetchApi(URL+`/?s=${search}&page=${page}&apikey=${API_KEY}`);
}

export const fetchGetMovieDetails = (ImdbID) => {
  return fetchApi(URL+`/?i=${ImdbID}&plot=full&apikey=${API_KEY}`);
}

export const fetchGetMovieDetailsSmall = (ImdbID) => {
  return fetchApi(URL+`/?i=${ImdbID}&apikey=${API_KEY}`);
}