import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="banner-section">
      <Slider {...settings}>
        <div>
          <div className="carousel-item">
            <img
              className="h-96 w-full lg:h-[550px] "
              src="https://www.kotaku.com.au/wp-content/uploads/sites/3/2017/06/27/usartpvxknv8ccbkbnqp.jpg?q=65&w=1280"
              alt="Banner 1"
            />
            <div className="carousel-item-content ml-10 top-20 absolute space-y-2 w-96 mx-auto">
              <h2 className="font-bold text-4xl text-purple-600">
                Explore Our Baby Car Collection
              </h2>
              <p className="text-sm text-teal-500 font-semibold mb-4">
                Find the perfect baby car for your little one.
              </p>
              <div className="">
                {' '}
                <Link
                  to="/"
                  className="border-none text-white hover:bg-purple-700  bg-purple-600 px-3 py-1"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img
              className="h-96 w-full lg:h-[550px]"
              src="https://img.freepik.com/premium-photo/lots-toy-cars-beige-background-banner-with-place-text-toy-store_528985-1025.jpg?w=900"
              alt="Banner 2"
            />
            <div className="carousel-item-content ml-10 top-20 absolute space-y-2 w-96 mx-auto">
              <h2 className="font-bold text-4xl text-purple-600">
                Discover Fun and Safe Baby Cars
              </h2>
              <p className="text-sm text-teal-500 font-semibold mb-4">
                Our baby cars are designed with your child's safety in mind.
              </p>
              <div className="">
                {' '}
                <Link
                  to="/"
                  className="border-none text-white hover:bg-purple-700  bg-purple-600 px-3 py-1"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="carousel-item">
            <img
              className="h-96 w-full lg:h-[550px]"
              src="https://c.ndtvimg.com/2021-12/oq1uk2ng_car_625x300_30_December_21.jpg"
              alt="Banner 3"
            />
            <div className="carousel-item-content ml-10 top-20 absolute space-y-2 w-96 mx-auto">
              <h2 className="font-bold text-4xl text-purple-600">
                Quality Baby Cars for Unforgettable Adventures
              </h2>
              <p className="text-sm text-teal-500 font-semibold mb-4">
                Let your child's imagination soar with our premium baby car
                collection.
              </p>
              <div className="">
                {' '}
                <Link
                  to="/"
                  className="border-none text-white hover:bg-purple-700  bg-purple-600 px-3 py-1"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
