import React from 'react';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Navbar></Navbar>
      <div className="md:min-h-[calc(100vh-360px)] bg-gray-900 text-gray-400 py-10">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
