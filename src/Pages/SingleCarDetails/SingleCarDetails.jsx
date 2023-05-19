import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SingleCarDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category, toy } = location.state;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="border border-purple-700 rounded-lg shadow-lg p-8 max-w-md text-white">
        <h2 className="text-lg mb-2">Category: {category}</h2>
        <h3 className="text-lg mb-2">Name: {toy.name}</h3>
        <p className="text-gray-300 mb-2">Price: {toy.price}</p>
        <p className="text-gray-300 mb-4">Rating: {toy.rating}</p>
        <img src={toy.picture} alt={toy.name} className="w-full mb-4" />
        <button
          className="bg-transparent border-2 border-purple-600 text-purple-600 font-semibold py-2 px-4 rounded hover:bg-purple-600 hover:text-white outline-none transition-colors duration-300"
          onClick={goBack}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SingleCarDetails;
