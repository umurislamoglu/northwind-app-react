import React from "react";
import { Link } from "react-router-dom";


export const ProductPaginationAdmin = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <Link
                onClick={() => {
                  paginate(number);
                }}
                to={`/admin/products/page/${number}`}
                className="page-link"
              >
                {number}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
