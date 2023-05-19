import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShobByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../PageTitle/useTitle';

const Home = () => {
  useTitle('Home Page');
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
