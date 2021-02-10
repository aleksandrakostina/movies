import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {

  return (
    <div className="error">
      <div className="wrapper">
        <div className="error__message">The requested URL was not found on our server.</div>
        <Link to="/">
          <button className="button button_home">Go to the homepage</button>
        </Link>
      </div>   
    </div>
  )
}

export default NotFound;