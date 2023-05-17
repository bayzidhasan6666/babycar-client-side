import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    // Logic for handling login
    setLoggedIn(true);
    setUsername('John Doe'); // Replace with the actual username
  };

  const handleLogout = () => {
    // Logic for handling logout
    setLoggedIn(false);
    setUsername('');
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white text-lg font-semibold">
                <img
                  src={logo} // Replace with your logo image path
                  alt="Website Logo"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/toys"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  All Toys
                </Link>
                {loggedIn && (
                  <>
                    <Link
                      to="/mytoys"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      My Toys
                    </Link>
                    <Link
                      to="/addtoy"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Add A Toy
                    </Link>
                  </>
                )}
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:block sm:ml-6">
            {loggedIn ? (
              <div className="relative group">
                <button
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-haspopup="true"
                  onClick={handleLogout}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/path/to/profile-picture.jpg" // Replace with the actual profile picture path
                    alt="Profile Picture"
                  />
                </button>
                <div
                  className="opacity-0 invisible absolute z-10 bg-white text-gray-800 rounded-md group-hover:opacity-100 group-hover:visible"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <div className="py-1" role="none">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-200"
                      role="menuitem"
                    >
                      {username}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={handleLogin}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/toys"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              All Toys
            </Link>
            {loggedIn && (
              <>
                <Link
                  to="/mytoys"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  My Toys
                </Link>
                <Link
                  to="/addtoy"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Add A Toy
                </Link>
              </>
            )}
            <Link
              to="/blogs"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blogs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
