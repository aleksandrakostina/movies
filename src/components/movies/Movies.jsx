import Movie from './Movie';
import './Movies.css';
import { ReactComponent as Loading } from './../../assets/images/loading.svg';

const Movies = ({ movies, isLoading, totalPages, page, handleClickMoreButton}) => {

  const moviesList = movies.map(item => <Movie key={item.imdbID} movie={item} />);

  return (
    <section className="movies">
      <div className="wrapper movies__wrapper">
        <div className="movies__container">
          {moviesList}
        </div>
        {(moviesList.length !== 0 && totalPages !== page.current) && 
          <button className="button button_more" onClick={handleClickMoreButton}>
            {isLoading ? <Loading className="loading" /> : "More"}
          </button>
        }
      </div>
    </section>
  )
}

export default Movies;