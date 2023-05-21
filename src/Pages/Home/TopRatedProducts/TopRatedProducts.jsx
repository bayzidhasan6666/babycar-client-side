import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopRatedProducts = () => {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      name: 'Product 1',
      rating: 4.5,
      imageUrl:
        'https://images.unsplash.com/photo-1531693251400-38df35776dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    },
    {
      name: 'Product 2',
      rating: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1574243121728-7bbecdf295e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'Red Sports Car',
      rating: 4.5,
      imageUrl:
        'https://images.unsplash.com/photo-1594789761629-c240854f8c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=909&q=80',
    },
    {
      name: 'Yellow Convertible',
      rating: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1597670250484-0e9aff7f8804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'Blue Vintage Car',
      rating: 4.2,
      imageUrl:
        'https://images.unsplash.com/photo-1559940033-a887678af2f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=942&q=80',
    },
    {
      name: 'Silver Sedan',
      rating: 3.8,
      imageUrl:
        'https://images.unsplash.com/photo-1616850508698-8cb0c576d5ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80',
    },
    {
      name: 'Black SUV',
      rating: 4.7,
      imageUrl:
        'https://images.unsplash.com/photo-1620222729337-5779759a6ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'Green Off-Roader',
      rating: 4.3,
      imageUrl:
        'https://images.unsplash.com/photo-1592784082277-46e33f897110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      name: 'White Race Car',
      rating: 4.9,
      imageUrl:
        'https://images.unsplash.com/photo-1590504263777-ee53135bdbdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80',
    },
  ];
  const visibleProducts = showAll ? products : products.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section data-aos="fade-up" className="py-8">
      <h2 className="text-2xl text-center text-teal-500 border-b w-fit mx-auto border-teal-400 font-semibold mb-4">
        Top Rated Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleProducts.map((product, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#1e0024] to-[#00151f]  rounded p-4"
          >
            <img
              data-aos="fade-left"
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center mb-2">
              <StarRatings
                rating={product.rating}
                starRatedColor="#FBBF24"
                starEmptyColor="#E5E7EB"
                starDimension="20px"
                starSpacing="2px"
              />
              <span className="ml-2 text-gray-600">
                {product.rating.toFixed(1)}
              </span>
            </div>
            <button className="border border-teal-500 text-teal-400 py-2 px-4 rounded hover:text-teal-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        {showAll ? (
          <button
            className="border text-purple-600 border-purple-600 hover:text-purple-700 px-3 py-2 rounded"
            onClick={toggleShowAll}
          >
            See Less
          </button>
        ) : (
          <button
            className="border text-teal-500 border-teal-500 hover:text-teal-600 px-3 py-2 rounded"
            onClick={toggleShowAll}
          >
            See More
          </button>
        )}
      </div>
    </section>
  );
};

export default TopRatedProducts;
