import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Retrieve form values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    // Register the user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        e.target.reset();
        toast.success('User has been created successfully');
      })
      .catch((error) => {
        console.log(error.message);
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

  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-400">
            Register
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={handleNameChange}
                className="appearance-none rounded-none relative block w-full px-3 bg-gray-900 py-2 border border-teal-300 placeholder-gray-500  rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="text"
                autoComplete="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="appearance-none rounded-none relative block w-full px-3 bg-gray-900  py-2 border border-teal-300 placeholder-gray-500  focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="flex justify-around items-center">
              {' '}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={show ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className="appearance-none rounded-none relative block w-full px-3 bg-gray-900  py-2 border border-purple-500 placeholder-gray-500  focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
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
                  className="ml-2 block py-1 font-light text-sm text-purple-500"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="photo-url" className="sr-only">
                Photo URL
              </label>
              <input
                id="photo-url"
                name="photoURL"
                type="url"
                autoComplete="url"
                value={photoURL}
                onChange={handlePhotoURLChange}
                className="appearance-none rounded-none relative block w-full px-3 bg-gray-900  py-2 border border-purple-500 placeholder-gray-500  rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Photo URL"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4  border border-transparent text-sm font-medium rounded-md text-white border-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all"
            >
              Register
            </button>
          </div>
        </form>
        <div>
          <p className="text-teal-400">
            Already have an account?{' '}
            <Link to="/login" className="link text-purple-500">
              Log in here
            </Link>
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="group relative flex gap-2 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white border-teal-500 hover:bg-teal-500 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="h-5 w-5 text-white group-hover:text-white" />
          </button>
          <button className="group relative flex gap-2 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white border-blue-600 transition-all  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <FaFacebook className="h-5 w-5 text-white group-hover:text-white" />
          </button>
          <button className="group relative flex gap-2 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white border-purple-600 transition-all  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <FaGithub className="h-5 w-5 text-white group-hover:text-white" />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
