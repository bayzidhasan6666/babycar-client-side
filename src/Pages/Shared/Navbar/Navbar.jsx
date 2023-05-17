import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <nav className="border-b border-teal-900">
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
              <Link
                to="/"
                className="text-white text-lg font-semibold flex items-center"
              >
                <img src={logo} alt="Website Logo" className="h-8 w-auto" />
                <button className="btn-ghost rounded px-2 font-mono">
                  BabyCar
                </button>
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
                {user && (
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
            {user ? (
              <div onClick={handleLogOut} className="relative group">
                <button className="text-purple-400 border border-purple-400 hover:text-purple-600  px-3 py-2 rounded-md text-sm font-medium">
                  Logout
                </button>
              </div>
            ) : (
              <Link to={'/login'}>
                <button className="border border-teal-500 text-teal-500 hover:text-teal-600  px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </button>
              </Link>
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
            {user && (
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
