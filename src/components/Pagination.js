// Pagination.js
import React from 'react';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  return (
    <ul className="character-pagination">
      {pageNumbers.map((pgNumber) => (
        <li key={pgNumber}>
          <button
            className={`page-button ${currentPage === pgNumber ? 'active' : ''}`}
            onClick={() => setCurrentPage(pgNumber)}
          >
            {pgNumber}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;


