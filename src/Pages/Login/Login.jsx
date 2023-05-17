import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

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
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError('');
    setSuccess('');

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        if (!loggedUser.emailVerified) {
          ('');
        }
        setUser(loggedUser);
        form.reset(); // Reset the form
        toast.success('User logged in successful');
        setError('');
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
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

  const handleResetPassword = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      toast.warning('Please provide your email address to reset password');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.warning('Please check your email');
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
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
                value={email}
                onChange={handleEmailChange}
                className="appearance-none rounded-none relative block bg-gray-900  w-full px-3 py-2 border border-teal-300 placeholder-gray-500  rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block bg-gray-900  w-full px-3 py-2 border border-purple-500 placeholder-gray-500  rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
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
              <Link
                onClick={handleResetPassword}
                className="link font-light text-red-500 hover:text-red-600"
              >
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
            <FaGoogle className="h-5 w-5 text-white group-hover:text-white" />
          </button>
          <button className="group relative flex gap-2 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <FaGithub className="h-5 w-5 text-white group-hover:text-white" />
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
