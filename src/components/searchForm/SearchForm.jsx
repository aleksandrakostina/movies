import { useState } from 'react';
import './SearchForm.css';
import { getMovies } from '../../redux/actionCreators';
import { connect } from 'react-redux';

const SearchForm = (props) => {

  const [searchValue, setSearchValue] = useState("");

  const handleInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const handleResetInput = () => {
    setSearchValue("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchValue.trim().length > 3) {
      props.getMovies(searchValue.trim(), 1);
    }
  }

  return (
    <section className="search">
      <div className="wrapper search__wrapper">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search__container">
            <input value={searchValue}
                  onChange={handleInputChanges}
                  className="search__input"
                  placeholder="Search movie" 
                  autoFocus 
                  type="text" />
            <span className="clear-button" onClick={handleResetInput}></span>
          </div>
          <button className="button button_search" type="submit">Search</button>
        </form>
        <div className="search__text">
          {!props.error && props.totalResults && <p>Showing {props.totalResults} results</p>}
          {props.error && <p>{props.errorMessage}</p>}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.movies.movies.isLoading,
    totalResults: state.movies.movies.data.totalResults,
    errorMessage: state.movies.movies.errorMessage,
    error: state.movies.movies.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (search, page) => {
      dispatch(getMovies(search, page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);