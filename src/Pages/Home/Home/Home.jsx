import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShobByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../PageTitle/useTitle';
import TopRatedProducts from '../TopRatedProducts/TopRatedProducts';
import CustomerTestimonials from '../CustomerTestimonials/CustomerTestimonials';
import Subscribe from '../Subscribe/Subscribe';
import FAQSection from '../FAQSection/FAQSection';

const Home = () => {
  useTitle('Home Page');
  return (
    <div>
      <div>
        <Banner></Banner>
        <Gallery></Gallery>
        <ShopByCategory></ShopByCategory>
        <TopRatedProducts></TopRatedProducts>
        <CustomerTestimonials></CustomerTestimonials>
        <FAQSection></FAQSection>
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
