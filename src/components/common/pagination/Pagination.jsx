import classnames from 'classnames';
import './Pagination.css';

const Pagination = ({ totalRecords, pageLimit, onChangePage, currentPage }) => {

  const totalPages = Math.ceil(totalRecords / pageLimit);
  const arrPages = Array(totalPages).fill().map((e, i) => i + 1);

  const handleClickPage = (page) => {
    onChangePage(page); 
  }

  const handleClickRight = () => {
    if(currentPage !== totalPages) {
      onChangePage(currentPage + 1);
    }
  }

  const handleClickLeft = () => {
    if(currentPage !== 1) {
      onChangePage(currentPage - 1);
    }
  }

  return (
    <div className="pagination">
      {totalRecords > pageLimit &&
        <ul className="pagination__nav">
          <li>
            <span className={classnames("pagination__item", {"pagination__item_disabled": currentPage === 1})} onClick={handleClickLeft}>&lsaquo;</span>
          </li>      
          {arrPages.map(page =>
            <li>
              <span key={page} 
                onClick={() => handleClickPage(page)} 
                className={classnames('pagination__item', {'pagination__item_active': currentPage === page})}>{page}
              </span>
            </li>)}
          <li>
            <span className={classnames("pagination__item", {"pagination__item_disabled": currentPage === totalPages})} onClick={handleClickRight}>&rsaquo;</span>
          </li>
        </ul>
      }
    </div>
  )
}

export default Pagination;