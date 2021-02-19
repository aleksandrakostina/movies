import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllMoviesDetails } from '../../redux/actionCreators';
import './Watchlist.css';
import Watchlist from './Watchlist';
import { ReactComponent as Loader } from './../../assets/images/loader.svg';

const WatchlistContainer = ({ favoriteMovies, getAllMoviesDetails, isLoading, favorite }) => {

  useEffect(() => {
    getAllMoviesDetails(favoriteMovies);
  }, [getAllMoviesDetails, favoriteMovies])

  
  if(isLoading) {
    return <Loader className="center" />
  }

  return (
    <div className="watchlist">
      <div className="wrapper">
        <Watchlist favorite={favorite} favoriteMovies={favoriteMovies} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favoriteMovies: state.movies.favoriteMovies,
    isLoading: state.movies.favorite.isLoading,
    favorite: state.movies.favorite.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMoviesDetails: (id) => {
      dispatch(getAllMoviesDetails(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistContainer);