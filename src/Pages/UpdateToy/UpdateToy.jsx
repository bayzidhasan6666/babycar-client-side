import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../PageTitle/useTitle';

const UpdateToy = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  useTitle('Update Toy');
  const toy = useLoaderData();
  console.log(toy);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateToyData = {
      price,
      quantity,
      description,
    };
    console.log(updateToyData);
    // send data to the server
    fetch(
      `https://assignment-11-server-side-murex.vercel.app/updateToy/${toy._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateToyData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire('Success!', 'Toy Updated Successfully!', 'success');
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-400">
            Update The - {toy.name}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="price" className="sr-only">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                autoComplete="off"
                defaultValue={toy.price}
                onChange={(e) => setPrice(e.target.value)}
                className="appearance-none rounded-none relative block bg-gray-900 w-full px-3 py-2 border border-teal-300 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Price"
              />
            </div>
            <div>
              <label htmlFor="quantity" className="sr-only">
                Available Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                autoComplete="off"
                defaultValue={toy.quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="appearance-none rounded-none relative block bg-gray-900 w-full px-3 py-2 border border-teal-300 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Available Quantity"
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">
                Detail Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                autoComplete="off"
                defaultValue={toy.description}
                onChange={(e) => setDescription(e.target.value)}
                className="appearance-none rounded-none relative block bg-gray-900 w-full px-3 py-2 border border-teal-300 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Detail Description"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Update Toy
            </button>
          </div>
          <div className="flex items-center justify-center mt-4">
            <Link
              to="/myToys"
              className="text-sm font-medium text-teal-400 hover:text-teal-500"
            >
              Go to My Toys
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
