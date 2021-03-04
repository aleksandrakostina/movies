import { useRef } from 'react';
import { connect } from 'react-redux';
import { getMoviesNextPage } from '../../redux/actionCreators';
import Movies from './Movies';

const MoviesContainer = ({ getMoviesNextPage, search, totalResults, movies, isLoading }) => {
  const page = useRef(1);

  const handleClickMoreButton = () => {
    page.current++;
    getMoviesNextPage(search, page.current);
  }

  const NumberMoviesPerPage = 10;

  const totalPages = Math.ceil(totalResults / NumberMoviesPerPage);

  return <Movies handleClickMoreButton={handleClickMoreButton} 
                  totalPages={totalPages} 
                  isLoading={isLoading}
                  movies={movies}
                  page={page}  />
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies.data.Search,
    search: state.search.search,
    totalResults: state.movies.movies.data.totalResults,
    isLoading: state.movies.movies.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesNextPage: (search, page) => {
      dispatch(getMoviesNextPage(search, page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);