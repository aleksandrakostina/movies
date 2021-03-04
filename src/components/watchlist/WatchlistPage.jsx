import { connect } from 'react-redux';
import { getAllMoviesDetails, setCurrentPage } from '../../redux/actionCreators';
import './Watchlist.css';
import Pagination from '../common/pagination/Pagination';
import WatchlistContainer from './WatchlistContainer';
import { ReactComponent as Loader } from './../../assets/images/loader.svg';
import { useEffect } from 'react';

const WatchlistPage = ({ favoriteMovies, favoriteMovieIds, currentPage, setCurrentPage, isLoading, 
  getAllMoviesDetails , pageLimit}) => {

  useEffect(() => {
    getAllMoviesDetails(favoriteMovieIds);
  }, [getAllMoviesDetails, favoriteMovieIds])

  if(isLoading) {
    return <Loader className="center" />
  }

  const onChangePage = (page) => {
    setCurrentPage(page);
  }

  return (
    <div className="watchlist">
      <div className="wrapper">
        <WatchlistContainer onChangePage={onChangePage} />
        <Pagination totalRecords={favoriteMovies.length} 
                    pageLimit={pageLimit} 
                    currentPage={currentPage} 
                    onChangePage={onChangePage} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    favoriteMovieIds: state.movies.favoriteMovieIds,
    isLoading: state.movies.favoriteMovies.isLoading,
    favoriteMovies: state.movies.favoriteMovies.data,
    currentPage: state.movies.currentPage,
    pageLimit: state.movies.pageLimit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMoviesDetails: (id) => {
      dispatch(getAllMoviesDetails(id));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPage(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchlistPage);