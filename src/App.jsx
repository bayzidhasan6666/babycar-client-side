import React, { useState, useEffect } from 'react';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Lottie from 'lottie-react';
import spinner from './assets/97111-loading-spinner-dots.json';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-[#1e0024] to-[#00151f] w-[95%]"
      style={{ maxWidth: '1200px', margin: '0 auto' }}
    >
      <Navbar></Navbar>
      <div className="md:min-h-[calc(100vh-360px)] bg-gray-900 text-gray-400 py-10">
        {isLoading ? (
          <div className="flex mt-16 justify-center">
            <Lottie className="w-32" animationData={spinner} loop={true} />
          </div>
        ) : (
          <div className="bg-gradient-to-r from-[#0b000e] to-[#000b11]">
            <Outlet></Outlet>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
