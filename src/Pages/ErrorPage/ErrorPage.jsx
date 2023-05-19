import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react';
import notFound from '/src/assets/notFound.json';
import useTitle from '../../PageTitle/useTitle';

const ErrorPage = () => {
  const { error, status, statusText } = useRouteError();
  useTitle('Error Page');

  return (
    <div>
      <section className="flex items-center h-screen p-16 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <Lottie animationData={notFound} loop={true}></Lottie>
            <p className="text-gray-300 animate-pulse mb-2 text-lg italic font-mono">
              Oops!! {statusText}!!
            </p>
            <p className="text-2xl italic font-light md:text-3xl text-red-500 mb-5">
              {error?.message}
            </p>
            <Link
              to="/"
              className="border border-purple-600 px-3 py-1 font-semibold hover:border-teal-500 hover:text-teal-500 text-purple-600"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
