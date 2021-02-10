import { Link } from 'react-router-dom';
import './Header.css';
import { ReactComponent as WatchlistIcon } from '../../assets/images/watchlist.svg';

const Header = () => {

  return (
    <div className="header">
      <div className="wrapper header__wrapper">
        <div className="header__logo">
          <Link to="/">
            <h1>Movie.tv</h1>
          </Link>
        </div>
        <div className="header__navbar">
          <div className="header__watchlist-button">
          <Link to="/watchlist">
            <WatchlistIcon className="watchlist-icon" />
            <span>Watchlist</span>
          </Link>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Header;