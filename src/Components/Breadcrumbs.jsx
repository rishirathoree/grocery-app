import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const routePath = location.pathname.split('/').filter(item => item !== '');
  return (
    <nav className="flex px-4 py-4 border-b" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li className="lg:block md:block sm:hidden items-center">
            <p className="uppercase text-md mr-4 font-bold text-slate-700/30 dark:text-gray-400 dark:hover:text-white">
              {routePath.length === 0 ? 'Dashboard' : routePath[routePath.length - 1].split('-').join(' ')}
            </p>
        </li>
        <li className="inline-flex items-center">
          <Link to="/">
            <p className={`uppercase text-xsm font-semibold text-gray-700 hover:text-green-600 md:ml-2 dark:text-gray-400 dark:hover:text-white ${routePath.length === 0 ? 'hidden' : 'block'}`}>
            Home
            </p>
          </Link>
        </li>
        {routePath.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <i className='bx text-[2px] bxs-circle'></i>
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
