import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShobByCategory/ShopByCategory';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../PageTitle/useTitle';
import TopRatedProducts from '../TopRatedProducts/TopRatedProducts';
import CustomerTestimonials from '../CustomerTestimonials/CustomerTestimonials';
import Subscribe from '../Subscribe/Subscribe';
import FAQSection from '../FAQSection/FAQSection';
import Lottie from 'lottie-react';
import spinner from '../../../assets/97111-loading-spinner-dots.json';

const Home = ({ isLoading }) => {
  useTitle('Home Page');

  if (isLoading) {
    return (
      <div className="flex justify-center mt-16">
        <Lottie className="w-32" animationData={spinner} loop={true} />
      </div>
    );
  }

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
