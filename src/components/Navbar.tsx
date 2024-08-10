import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation(); // Hook para obtener la ubicación actual

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CryptoTracker</span>
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 font-medium md:mt-0">
            <li>
              <Link
                to="/"
                className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 ${isActive('/') ? 'text-blue-500 dark:text-blue-400' : 'text-gray-700 dark:text-white'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 ${isActive('/about') ? 'text-blue-500 dark:text-blue-400' : 'text-gray-700 dark:text-white'}`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
