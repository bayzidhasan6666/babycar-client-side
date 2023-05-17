import { signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';

const Login = () => {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    // You can use the email and password values for authentication
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        setUser(loggedInUser);
        toast.success('User logged in successful');
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-400">
            Log in
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="appearance-none rounded-none relative block bg-gray-900  w-full px-3 py-2 border border-teal-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={show ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={handlePasswordChange}
                className="appearance-none rounded-none relative block bg-gray-900  w-full px-3 py-2 border border-purple-500 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                onClick={() => setShow(!show)}
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-purple-600 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block font-light text-sm text-purple-500"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link className="link font-light text-red-500 hover:text-red-600">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4  border border-transparent text-sm font-medium rounded-md text-white border-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-purple-500 group-hover:text-purple-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3.586L3.707 9.879a1 1 0 0 0 0 1.414L10 16.414l6.293-6.293a1 1 0 0 0 0-1.414L10 3.586zm0 2.828l3.535 3.536a1 1 0 0 1 0 1.415L10 14.415l-3.535-3.536a1 1 0 0 1 0-1.415L10 6.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Log in
            </button>
          </div>
        </form>
        <div className="flex justify-center space-x-4">
          <button
            className="group relative flex gap-2 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={handleGoogleSignIn}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            <svg
              className="h-5 w-5 text-red-400 group-hover:text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.293 3.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414zM6.5 6.5A2.5 2.5 0 019 4h5.5a1.5 1.5 0 01.5.086V2.5a1.5 1.5 0 00-1.5-1.5H9a3 3 0 00-3 3v1.5zM15.5 9H9a1 1 0 01-1-1V6a1 1 0 011-1h6.5a1.5 1.5 0 011.5 1.5v1.086a1.5 1.5 0 00-1.5-1.5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M5.5 12a1.5 1.5 0 000 3 1.5 1.5 0 000-3zM14.5 12a1.5 1.5 0 000-3zM10.75 12.75a2.75 2.75 0 102.75-2.75 2.75 2.75 0 00-2.75 2.75z"
                clipRule="evenodd"
              />
            </svg>
            <span>Sign in with Google</span>
          </button>
          <button
            className="group relative flex gap-2 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={'handleGithubSignIn'}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            <svg
              className="h-5 w-5 text-gray-400 group-hover:text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.383 0 0 5.383 0 12c0 5.303 3.438 9.8 8.207 11.385.6.112.793-.257.793-.562 0-.277-.009-.975-.014-1.772-3.338.724-4.042-1.603-4.042-1.603-.546-1.388-1.335-1.758-1.335-1.758-1.09-.743.083-.727.083-.727 1.205.084 1.838 1.236 1.838 1.236 1.07 1.839 2.81 1.305 3.497.998.108-.778.418-1.305.763-1.605-2.665-.307-5.466-1.334-5.466-5.93 0-1.313.469-2.383 1.236-3.222-.124-.308-.536-1.53.116-3.183 0 0 1.008-.324 3.3 1.23a11.535 11.535 0 013.005-.405c1.022 0 2.044.137 3.005.405 2.29-1.554 3.297-1.23 3.297-1.23.654 1.653.24 2.875.117 3.183.77.839 1.236 1.91 1.236 3.222 0 4.608-2.805 5.62-5.476 5.922.43.372.814 1.105.814 2.227 0 1.611-.014 2.906-.014 3.303 0 .309.192.674.799.561 4.766-1.585 8.199-6.082 8.199-11.383C24 5.383 18.617 0 12 0z"
              />
            </svg>
            <span>Sign in with GitHub</span>
          </button>
        </div>
        <div>
          <p className="text-teal-400">
            No Account?{' '}
            <Link to={'/signUp'}>
              <span className="link text-purple-500">Create One Here</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
