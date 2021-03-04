import { useState } from 'react';
import { ReactComponent as Play } from './../../assets/images/play-button.svg';
import { Link } from 'react-router-dom';
import { deleteFavoriteMovie, getMovieDetails, addFavoriteMovie } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import moviePlaceholderImage from './../../assets/images/poster-placeholder.png';
import { ReactComponent as Plus } from './../../assets/images/plus.svg';
import { ReactComponent as Minus } from './../../assets/images/minus.svg';

const Movie = ({ movie, favoriteMovieIds, getMovie, deleteFavoriteMovie, addFavoriteMovie }) => {
 
  const [isFavorite, setIsFavorite] = useState(favoriteMovieIds.find(id => id === movie.imdbID) ? true : false)

  const toggleFavoriteMovie = () => {
    setIsFavorite(!isFavorite);
    if(isFavorite) {
      deleteFavoriteMovie(movie.imdbID);
    } else {
      addFavoriteMovie(movie.imdbID);
    }
  }

  return (
    <div className="movie__item">
      <Link to={`/title/${movie.imdbID}`} title={movie.Title}>
        <div className="movie__poster" onClick={() => getMovie(movie.imdbID)}>
          <img className="movie__poster-image" src={movie.Poster !== "N/A" ? movie.Poster : moviePlaceholderImage} alt={movie.Title} />
          <div className="overlay"> 
            <div className="overlay__content">
              <Play className="play" />           
              <h4>Play</h4>
            </div>
          </div>
        </div>
      </Link>
      <div className="movie__info">
        <Link to={`/title/${movie.imdbID}`} className="movie__title" title={movie.Title}>{movie.Title}</Link>         
        <h5 className="movie__year">{movie.Year}</h5>
      </div>
      <div className="movie__mark" onClick={toggleFavoriteMovie} title={isFavorite ? "Click to remove from watchlist" : "Click to add to watchlist"}>
        {isFavorite ? <Minus className="bookmark minus" /> : <Plus className="bookmark plus" />}     
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Movie);