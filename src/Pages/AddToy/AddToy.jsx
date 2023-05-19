import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddToy = () => {
  const [pictureUrl, setPictureUrl] = useState('');
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const addToyData = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subcategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(addToyData);
    // send data to the server
    fetch('http://localhost:5000/addToys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addToyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-teal-400">
            Add a Toy
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="pictureUrl" className="sr-only">
                Picture URL
              </label>
              <input
                id="pictureUrl"
                name="pictureUrl"
                type="text"
                autoComplete="off"
                value={pictureUrl}
                onChange={(e) => setPictureUrl(e.target.value)}
                className="appearance-none rounded-none relative block bg-gray-900 w-full px-3 py-2 border border-teal-300 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Picture URL of the toy"
              />
            </div>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none relative block bg-gray-900 w-full px-3 py-2 border border-teal-300 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="sellerName" className="sr-only">
                Seller Name
              </label>
              <input
                id="sellerName"
                name="sellerName"
                type="text"
                autoComplete="off"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                className="appearance-none rounded-none relative block bg-gray-900 w-full px-3 py-2 border border-teal-300 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Seller Name"
              />
            </div>
            <div>
              <label htmlFor="sellerEmail" className="sr-only">
                Seller Email
              </label>
              <input
                id="sellerEmail"
                name="sellerEmail"
                type="email"
                autoComplete="off"
                value={sellerEmail}
                onChange={(e) => setSellerEmail(e.target.value)}
                className="appearance-none rounded-none relative block bg-gray-900 w-full px-3 py-2 border border-teal-300 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Seller Email"
              />
            </div>
            <div>
              <label htmlFor="subcategory" className="sr-only">
                Sub-category
              </label>
              <select
                id="subcategory"
                name="subcategory"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="appearance-none rounded-none relative block bg-gray-900 w-full px-3 py-2 border border-teal-300 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              >
                <option value="">Select a Sub-category</option>
                <option value="Rare Car">Rare Car</option>
                <option value="Super Car">Super Car</option>
                <option value="Sports Car">Sports Car</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="sr-only">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                autoComplete="off"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="appearance-none rounded-none relative block bg-gray-900 w-full px-3 py-2 border border-teal-300 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Price"
              />
            </div>
            <div>
              <label htmlFor="rating" className="sr-only">
                Rating
              </label>
              <input
                id="rating"
                name="rating"
                type="number"
                step="0.1"
                min="0"
                max="5"
                autoComplete="off"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="appearance-none rounded-none relative block bg-gray-900 w-full px-3 py-2 border border-teal-300 placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Rating (0-5)"
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
                value={quantity}
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
                value={description}
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
              Add Toy
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

export default AddToy;
