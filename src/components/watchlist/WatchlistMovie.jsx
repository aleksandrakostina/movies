import React from 'react';
import { Link } from 'react-router-dom';
import moviePlaceholderImage from './../../assets/images/poster-placeholder.png';
import { ReactComponent as Star } from './../../assets/images/star.svg';

const WatchlistMovie = ({ movie }) => {

  return (
    <div className="favorite__item">
      <Link to={`/title/${movie.imdbID}`} title={movie.Title}>
        <img className="favorite__img" src={movie.Poster !== "N/A" ? movie.Poster : moviePlaceholderImage} alt={movie.Title} />
      </Link>
      <div className="favorite__content">
        <Link to={`/title/${movie.imdbID}`} title={movie.Title}>{movie.Title}</Link>
        <div className="film-card__about">
          {movie.Year !== 'N/A' && 
            <span className="film-card__about-item">{movie.Year}</span>
          }
          {movie.Rated !== 'N/A' && 
            <span className="film-card__about-item">{movie.Rated}</span>
          }
          {movie.Genre !== 'N/A' && 
            <span className="film-card__about-item">{movie.Genre}</span>
          }
          {movie.Runtime !== 'N/A' && 
            <span className="film-card__about-item">{movie.Runtime}</span>
          }
        </div>
        <div className="film-card__rating-item">
          <Star className="star" />
          <span className="film-card__rating-value">{movie.imdbRating}</span>
        </div>
        <div>
          {movie.Actors}
        </div>
        <div>{movie.Plot}</div>
      </div>
      
    </div>
  )
}

export default WatchlistMovie;