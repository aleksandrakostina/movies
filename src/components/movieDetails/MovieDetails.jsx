import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavoriteMovie, deleteFavoriteMovie, getMovieDetails } from '../../redux/actionCreators';
import './MovieDetails.css';
import { ReactComponent as Loader } from './../../assets/images/loader.svg';
import { ReactComponent as Star } from './../../assets/images/star.svg';
import classnames from 'classnames';
import { ReactComponent as ArrowRight } from './../../assets/images/arrow-point-to-right.svg';
import moviePlaceholderImage from './../../assets/images/poster-placeholder.png';
import NotFound from '../notFound/NotFound';

const MovieDetails = ({ getMovie, isLoading, match: {params}, movie, isError, favoriteMovieIds, addFavoriteMovie, deleteFavoriteMovie }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    getMovie(params.id);
  }, [getMovie, params.id]);

  useEffect(() => {
    setIsFavorite(!!favoriteMovieIds.find(id => id === movie.imdbID));
  }, [favoriteMovieIds, movie])

  if(isLoading) {
    return <Loader className="center" />;
  }

  if(isError) {
    return <NotFound />;
  }

  const toggleFavoriteMovie = () => {
    if(isFavorite) {
      deleteFavoriteMovie(movie.imdbID);
    } else {
      addFavoriteMovie(movie.imdbID);
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="movie-details">
      <div className="wrapper">   
          <div className="breadcrumbs">
            <div className="breadcrumbs__list">
              <span className="breadcrumbs__item">
                <Link to="/" className="breadcrumbs__value">Movies</Link>
              </span>     
              <ArrowRight className="arrow_right" />
              <span className="breadcrumbs__item">
                <span className="breadcrumbs__value">{movie.Title} ({movie.Type})</span>
              </span>
            </div>
          </div>
          <div className="film-card">       
            <div className="film-card__poster">
              <img className="film-card__poster-image" src={movie.Poster !== 'N/A' || movie.Poster ? movie.Poster : moviePlaceholderImage} alt={movie.Title} />
            </div>
            <div className="film-card__info">
              <div className="film-card__title">
                <a href={`https://www.imdb.com/title/${movie.imdbID}`}>
                  <h2>{movie.Title}</h2>
                </a>
              </div>      
              <div className="film-card__about">
                {movie.Year !== 'N/A' && 
                  <span className="film-card__about-item">{movie.Year}</span>
                }
                {movie.Runtime !== 'N/A' && 
                  <span className="film-card__about-item">{movie.Runtime}</span>
                }
                {movie.Rated !== 'N/A' && 
                  <span className="film-card__about-item">{movie.Rated}</span>
                }
              </div>
              <div className="film-card__genres">
                {movie.Genre && movie.Genre.split(',').map((genre, index) => 
                  <span key={index} className="film-card__genres-item">{genre.trim()}</span>)
                }           
              </div>
              <div className="film-card__rating">
                {movie.imdbRating !== 'N/A' && 
                  <div className="film-card__rating-item">
                    <Star className="star" />
                    <span className="film-card__rating-value">{movie.imdbRating}</span>
                  </div>
                }
                {movie.Metascore !== 'N/A' && 
                  <div className="film-card__rating-item">
                    <span>Metascore: </span>
                    <span className={classnames("metascore", {"metascore_green": movie.Metascore > 60, "metascore_yellow": movie.Metascore > 40, "metascore_red": movie.Metascore > 0})}>{movie.Metascore}</span>
                  </div> 
                }                
              </div>
              <div className="film-card__favorite">
                <button className="button button_favorite" onClick={toggleFavoriteMovie}>{isFavorite ? "- Delete from Watchlist" : "+ Add to Watchlist"}</button>
              </div>
            </div>
            </div>
            <div className="film-card__description">
              <p className="film-card__text">{movie.Plot !== 'N/A' ? movie.Plot : 'No description'}</p>
            </div>
            <ul className="film-card__meta">
              <li className="film-card__meta-item">
                <b>Released date: </b>{movie.Released !== 'N/A' ? movie.Released : '-'}
              </li>
              <li className="film-card__meta-item">
                <b>Country: </b>{movie.Country !== 'N/A' ? movie.Country : '-'}
              </li>
              <li className="film-card__meta-item">
                <b>Director: </b>{movie.Director !== 'N/A' ? movie.Director : '-'}
              </li>
              <li className="film-card__meta-item">
                <b>Actors: </b>{movie.Actors !== 'N/A' ? movie.Actors : '-'}
              </li>
              <li className="film-card__meta-item">
                <b>Box office: </b>{movie.BoxOffice !== 'N/A' ? movie.BoxOffice : '-'}
              </li>
              <li className="film-card__meta-item">
                <b>Language: </b>{movie.Language !== 'N/A' ? movie.Language : '-'}
              </li>
            </ul>
        </div>  
    </div>  
  )
}

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie.data,
    isLoading: state.movies.movie.isLoading,
    isError: state.movies.movie.error,
    favoriteMovieIds: state.movies.favoriteMovieIds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => {
      dispatch(getMovieDetails(id));
    },
    addFavoriteMovie: (id) => {
      dispatch(addFavoriteMovie(id));
    },
    deleteFavoriteMovie: (id) => {
      dispatch(deleteFavoriteMovie(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);