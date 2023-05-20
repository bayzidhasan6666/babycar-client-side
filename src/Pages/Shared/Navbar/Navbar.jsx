import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../Providers/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';

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
          <div className="flex-1 flex items-center  justify-center sm:items-stretch sm:justify-start">
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
            <div className="hidden mt-2  sm:block sm:ml-6">
              <div className="flex space-x-4 ">
                <ActiveLink
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </ActiveLink>
                <ActiveLink
                  to="/allToys"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  All Toys
                </ActiveLink>
                {user && (
                  <>
                    <ActiveLink
                      to={`/myToys`}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      My Toys
                    </ActiveLink>
                    <ActiveLink
                      to="/addToy"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Add A Toy
                    </ActiveLink>
                  </>
                )}
                <ActiveLink
                  to="/blog"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </ActiveLink>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-2">
            {user ? (
              <div onClick={handleLogOut} className="relative group">
                <button className="text-purple-600 border border-purple-600 hover:text-purple-700  px-3 py-2 rounded-md text-sm font-medium">
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
            {user && (
              <div className="dropdown  dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      title={
                        user.displayName ? user.displayName : 'no name found'
                      }
                      src={
                        user.photoURL ? (
                          user.photoURL
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                        )
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 flex flex-col pt-2 pb-3 space-y-1">
            <ActiveLink
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </ActiveLink>
            <ActiveLink
              to="/allToys"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              All Toys
            </ActiveLink>
            {user && (
              <>
                <ActiveLink
                  to={`/myToys`}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  My Toys
                </ActiveLink>
                <ActiveLink
                  to="/addToy"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Add A Toy
                </ActiveLink>
              </>
            )}
            <ActiveLink
              to="/blog"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blogs
            </ActiveLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
