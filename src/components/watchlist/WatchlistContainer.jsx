import { connect } from 'react-redux';
import Watchlist from './Watchlist';

const WatchlistContainer = ({ favoriteMovies, currentPage, pageLimit, favoriteMovieIds }) => {

  const startData = (currentPage - 1) * pageLimit;
  const listFavoriteMovies = favoriteMovies.slice(startData, startData + pageLimit);

  return (
    <div className="watchlist">
      <div className="wrapper">
        <Watchlist favoriteMovies={listFavoriteMovies} favoriteMovieIds={favoriteMovieIds} />    
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favoriteMovies: state.movies.favoriteMovies.data,
    favoriteMovieIds: state.movies.favoriteMovieIds,
    currentPage: state.movies.currentPage,
    pageLimit: state.movies.pageLimit
  }
}

export default connect(mapStateToProps)(WatchlistContainer);