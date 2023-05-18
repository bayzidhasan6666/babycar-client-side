import React, { useContext, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const allToys = useLoaderData();
  console.log(allToys);
  const navigate = useNavigate();
  const handleViewDetails = (toyName) => {
    if (user) {
      // Redirect to toy details page
      navigate(`/toy/${toyName}`);
    } else {
      // Show login message and redirect to login page
      toast.warning('You have to log in first to view details');
      navigate('/login');
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold font-mono border-b w-fit mx-auto border-teal-400 text-center text-teal-500 mb-6">
          Shop by Category
        </h2>
        <Tabs>
          <TabList className="flex mb-4">
            <Tab className="mr-4 border-b-2 border-transparent hover:border-blue-500">
              Rare Cars
            </Tab>
            <Tab className="mr-4 border-b-2 border-transparent hover:border-blue-500">
              Super Cars
            </Tab>
            <Tab className="mr-4 border-b-2 border-transparent hover:border-blue-500">
              Sports Cars
            </Tab>
          </TabList>

          <TabPanel>
            <h3>Sub-Category 1</h3>
            {/* <div className="grid grid-cols-2 gap-4 mt-4">
              {rareCars.map((toy, index) => (
                <div key={index} className=" p-4 rounded shadow">
                  <img
                    src={toy.image}
                    alt={toy.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h4 className="text-lg font-bold mb-2">{toy.name}</h4>
                  <p className="text-gray-700 mb-2">${toy.price}</p>
                  <p className="text-gray-700 mb-2">Rating: {toy.rating}</p>
                  <button
                    className="border border-teal-500 hover:border-purple-700 text-teal-400 hover:text-purple-600 font-bold py-2 px-4 rounded"
                    onClick={() => handleViewDetails(toy.id)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div> */}
          </TabPanel>

          <TabPanel>
            <h3>Sub-Category 2</h3>
            {/* <div className="grid grid-cols-2 gap-4 mt-4">
              {superCars.map((toy, index) => (
                <div key={index} className=" p-4 rounded shadow">
                  <img
                    src={toy.image}
                    alt={toy.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h4 className="text-lg font-bold mb-2">{toy.name}</h4>
                  <p className="text-gray-700 mb-2">${toy.price}</p>
                  <p className="text-gray-700 mb-2">Rating: {toy.rating}</p>
                  <button
                    className="border border-teal-500 hover:border-purple-700 text-teal-400 hover:text-purple-600 font-bold py-2 px-4 rounded"
                    onClick={() => handleViewDetails(toy.id)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div> */}
          </TabPanel>

          <TabPanel>
            <h3>Sub-Category 3</h3>
            {/* <div className="grid grid-cols-2 gap-4 mt-4">
              {sportsCars.map((toy, index) => (
                <div key={index} className=" p-4 rounded shadow">
                  <img
                    src={toy.image}
                    alt={toy.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h4 className="text-lg font-bold mb-2">{toy.name}</h4>
                  <p className="text-gray-700 mb-2">${toy.price}</p>
                  <p className="text-gray-700 mb-2">Rating: {toy.rating}</p>
                  <button
                    className="border border-teal-500 hover:border-purple-700 text-teal-400 hover:text-purple-600 font-bold py-2 px-4 rounded"
                    onClick={() => handleViewDetails(toy.id)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div> */}
          </TabPanel>
        </Tabs>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default ShopByCategory;
