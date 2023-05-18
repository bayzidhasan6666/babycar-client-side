import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/carToys')
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        console.log(data);
      });
  }, []);

  const navigate = useNavigate();
  const handleViewDetails = (toyName) => {
    if (user) {
      navigate(`/toyCars/${toyName}`);
    } else {
      toast.warning('You have to log in first to view details');
      navigate('/login');
    }
  };

  return (
    <section className="py-12">
      <div className="container  mx-auto">
        <h2 className="text-3xl  font-bold font-mono border-b w-fit mx-auto border-teal-400 text-center text-teal-500 mb-6">
          Shop by Category
        </h2>
        <Tabs className="">
          <TabList className="flex mx-auto mb-4 w-fit">
            <Tab
              className="mr-4 font-serif cursor-pointer text-purple-600  hover:border-purple-500"
              selectedClassName="border-b border-purple-600"
            >
              Rare Cars
            </Tab>
            <Tab
              className="mr-4 font-serif cursor-pointer text-purple-600  hover:border-purple-500"
              selectedClassName="border-b border-purple-600"
            >
              Super Cars
            </Tab>
            <Tab
              className="mr-4 font-serif cursor-pointer text-purple-600  hover:border-purple-500"
              selectedClassName="border-b border-purple-600"
            >
              Sports Cars
            </Tab>
          </TabList>

          <TabPanel>
            <h3 className="text-teal-400 font-mono ml-4">
              Category - Rare Cars
            </h3>

            <div className="grid grid-cols-2   gap-4 mt-4">
              {allToys.length > 0 &&
                allToys[0].rareCars.map((toy, index) => (
                  <div
                    key={index}
                    className=" p-4 rounded shadow-xl border border-purple-700"
                  >
                    <img
                      src={toy.picture}
                      alt={toy.name}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h4 className="text-lg text-teal-500 font-bold mb-2">
                      {toy.name}
                    </h4>
                    <p className="text-teal-500 mb-2">{toy.price}</p>
                    <p className="text-purple-600 mb-2">Rating: {toy.rating}</p>
                    <button
                      className="border border-purple-600 hover:border-teal-600 text-purple-600 hover:text-teal-600 font-bold py-2 px-4 rounded"
                      onClick={() => handleViewDetails(toy.name)}
                    >
                      View Details
                    </button>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h3 className="text-teal-400 font-mono ml-4">
              Category - Super Cars
            </h3>
            <div className="grid grid-cols-2  gap-4 mt-4">
              {allToys.length > 1 &&
                allToys[1].superCars.map((toy, index) => (
                  <div
                    key={index}
                    className=" p-4 rounded shadow-xl border border-purple-700"
                  >
                    <img
                      src={toy.picture}
                      alt={toy.name}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h4 className="text-lg text-teal-500 font-bold mb-2">
                      {toy.name}
                    </h4>
                    <p className="text-teal-500 mb-2">{toy.price}</p>
                    <p className="text-purple-600 mb-2">Rating: {toy.rating}</p>
                    <button
                      className="border border-purple-600 hover:border-teal-600 text-purple-600 hover:text-teal-600 font-bold py-2 px-4 rounded"
                      onClick={() => handleViewDetails(toy.name)}
                    >
                      View Details
                    </button>
                  </div>
                ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h3 className="text-teal-400 font-mono ml-4">
              Category - Sports Cars
            </h3>
            <div className="grid grid-cols-2  gap-4 mt-4">
              {allToys.length >= 2 &&
                allToys[2].sportsCars.map((toy, index) => (
                  <div
                    key={index}
                    className=" p-4 rounded shadow-xl border border-purple-700"
                  >
                    <img
                      src={toy.picture}
                      alt={toy.name}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h4 className="text-lg text-teal-500 font-bold mb-2">
                      {toy.name}
                    </h4>
                    <p className="text-teal-500 mb-2">{toy.price}</p>
                    <p className="text-purple-600 mb-2">Rating: {toy.rating}</p>
                    <button
                      className="border border-purple-600 hover:border-teal-600 text-purple-600 hover:text-teal-600 font-bold py-2 px-4 rounded"
                      onClick={() => handleViewDetails(toy.name)}
                    >
                      View Details
                    </button>
                  </div>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ShopByCategory;
