import React from 'react';

const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination">
      {pageNumbers.map((number) => {
        return (
          <li key={number} className="page-item">
            <a
              onClick={() => {
                paginate(number);
              }}
              href="javascript:void(0)"
              className="page-link"
            >
              {number}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
