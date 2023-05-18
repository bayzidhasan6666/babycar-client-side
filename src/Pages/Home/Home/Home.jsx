import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShobByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <Gallery></Gallery>
        <ShopByCategory></ShopByCategory>
      </div>
    </div>
  );
};

export default Home;
