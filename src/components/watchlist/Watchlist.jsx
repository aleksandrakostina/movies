import './Watchlist.css';
import WatchlistMovie from './WatchlistMovie';

const Watchlist = ({ favorite, favoriteMovies }) => {

  const listFavoriteMovies = favorite.map(id => <WatchlistMovie key={id.imdbID} movie={id} />);

  return (
    <>
      <h2 className="watchlist__header">Your Watchlist</h2>
      <div className="watchlist__control">
        <div className="nav">
          <div className="watchlist_details">{favorite.length} Titles</div>
        </div>
      </div>
      {favoriteMovies.length !== 0 ? 
        <div className="movies__container">{listFavoriteMovies}</div> :
        <div className="watchlist__empty">Your Watchlist is empty</div>
      }
    </>
  )
}

export default Watchlist;