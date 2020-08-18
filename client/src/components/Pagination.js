import React from 'react';

const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div class="text-center">
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                onClick={() => {
                  paginate(number);
                }}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
