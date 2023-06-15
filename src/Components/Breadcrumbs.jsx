import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const routePath = location.pathname.split('/').filter(item => item !== '');

  return (
    <nav className="flex px-4 py-2" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/">
            <p className="uppercase text-xsm font-semibold text-gray-700 hover:text-green-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
              Home
            </p>
          </Link>
        </li>
        {routePath.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link to={`/${item}`}>
                <p
                  className={`ml-1 uppercase text-sm ${
                    index === routePath.length - 1
                      ? ' text-green-600'
                      : ' text-gray-700  hover:text-green-600'
                  } md:ml-2 dark:text-gray-400 font-semibold text-xsm dark:hover:text-white`}
                >
                  {item}
                </p>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
