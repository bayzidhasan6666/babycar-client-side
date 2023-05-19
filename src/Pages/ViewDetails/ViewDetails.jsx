import React from 'react';
import useTitle from '../../PageTitle/useTitle';
import { Link, useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
  const car = useLoaderData();
  const {
    name,
    pictureUrl,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
    subcategory,
    _id,
  } = car;

  useTitle('Details View');

  return (
    <div className="bg-gray-900 text-gray-400 min-h-screen p-8">
      <div className="text-center">
        <h1 className="text-2xl text-purple-600 font-semibold mb-4">
          {name}-Details
        </h1>
      </div>
      <div className="max-w-lg mx-auto">
        <div className="border border-purple-600 rounded-lg shadow-lg overflow-hidden">
          <img
            src={pictureUrl}
            alt={name}
            className="w-full h-64 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-purple-600 mb-2">
              {name}
            </h2>
            <p className="text-teal-500 mb-2">Price: ${price}</p>
            <p className="text-teal-500 mb-2">Quantity Available: {quantity}</p>
            <p className="text-teal-500 mb-2">Rating: {rating}</p>
            <p className="text-teal-500 mb-2">Seller Name: {sellerName}</p>
            <p className="text-teal-500 mb-2">Category: {subcategory}</p>
            <p className="text-teal-500 mb-2">Seller Email: {sellerEmail}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Link
          to="/allToys"
          className="text-sm border border-purple-500 px-3 py-1 font-medium text-purple-500 hover:border-teal-500 hover:text-teal-500"
        >
          Go to All Toys
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
