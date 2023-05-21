import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../../PageTitle/useTitle';
import { AuthContext } from '../../Providers/AuthProvider';

const SingleCarDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { category, toy } = location.state || {};

  console.log(category, toy);

  const goBack = () => {
    navigate(-1);
  };

  useTitle(`${toy && toy.name}`);

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-gradient-to-r from-[#1e0024] to-[#00151f]  rounded-lg shadow-lg p-8 max-w-md text-white">
        <h2 className="text-lg text-teal-400 mb-2">Category: {category}</h2>
        <h3 className="text-lg text-purple-500 mb-2">
          Name: {toy && toy.name}
        </h3>
        <p className="text-teal-400 mb-2">Price: {toy && toy.price}</p>
        <p className="text-red-400 mb-4">Rating: {toy && toy.rating}</p>
        <img
          src={toy && toy.picture}
          alt={toy && toy.name}
          className="w-full mb-4"
        />
        <button
          className="bg-transparent border-2 border-purple-600 text-purple-600 font-semibold py-2 px-4 rounded hover:bg-purple-600 hover:text-white outline-none transition-colors duration-300"
          onClick={goBack}
        >
          Go Back
        </button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SingleCarDetails;
