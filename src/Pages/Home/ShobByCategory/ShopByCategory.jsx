import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopByCategory = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch('https://assignment-11-server-side-murex.vercel.app/carToys')
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  const handleViewDetails = (category, toy) => {
    navigate(`/carDetails`, { state: { category, toy } });
  };

  return (
    <section data-aos="fade-up" className="py-12">
      <div className="container  mx-auto">
        <h2 className="text-3xl  font-bold font-mono border-b w-fit mx-auto border-teal-400 text-center text-teal-500 mb-6">
          Shop by Category
        </h2>
        <Tabs className="">
          <TabList data-aos="fade-left" className="flex mx-auto mb-4 w-fit">
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

            <div className="grid md:grid-cols-2   gap-4 mt-4">
              {allToys.length > 0 &&
                allToys[0].rareCars.map((toy, index) => (
                  <div
                    data-aos="fade-up"
                    key={index}
                    className=" p-4 rounded shadow-xl border border-purple-700"
                  >
                    <img
                      data-aos="fade-right"
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
                      onClick={() => handleViewDetails('rareCars', toy)}
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
            <div className="grid md:grid-cols-2  gap-4 mt-4">
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
                      onClick={() => handleViewDetails('superCars', toy)}
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
            <div className="grid  md:grid-cols-2  gap-4 mt-4">
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
                      onClick={() => handleViewDetails('sportsCars', toy)}
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
