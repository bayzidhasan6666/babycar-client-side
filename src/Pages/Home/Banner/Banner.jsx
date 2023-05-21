import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section data-aos="fade-down" className="banner-section">
      <Slider {...settings}>
        <div>
          <div className="carousel-item">
            <img
              className="h-96  md:w-full lg:h-[550px] "
              src="https://files.vanceai.com/api/v2/preview?web=vanceai&guest_token_v2=af16e142360b10201aadab263248d4aa&trans_id=e0b5a735f22aff7c14abaa064a9a52bd"
              alt="Banner 1"
            />
            <div className="carousel-item-content ml-10 top-20 absolute space-y-3 w-64 md:w-96 mx-auto">
              <h2 className="font-bold text-4xl text-[#f6d9d9fc]">
                Explore Our Baby Car Collection
              </h2>
              <p className="text-sm text-white font-semibold mb-4">
                Find the perfect baby car for your little one.
              </p>
              <div className="">
                {' '}
                <Link
                  to="/"
                  className=" text-white font-serif hover:text-purple-500 hover:bg-white   bg-purple-600 px-3 py-2"
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
              className="h-96  md:w-full lg:h-[550px]"
              src="https://files.vanceai.com/api/v2/preview?web=vanceai&guest_token_v2=af16e142360b10201aadab263248d4aa&trans_id=476f2e07394c0c9e2eaa84831acec704"
              alt="Banner 2"
            />
            <div className="carousel-item-content ml-10 top-20 absolute space-y-3 w-64 md:w-96 mx-auto">
              <h2 className="font-bold text-4xl text-[#f6d9d9fc]">
                Discover Fun and Safe Baby Cars
              </h2>
              <p className="text-sm text-white font-semibold mb-4">
                Our baby cars are designed with your child's safety in mind.
              </p>
              <div className="">
                {' '}
                <Link
                  to="/"
                  className=" text-white font-serif hover:text-purple-500 hover:bg-white   bg-purple-600 px-3 py-2"
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
              className="h-96  md:w-full lg:h-[550px]"
              src="https://images.unsplash.com/photo-1590504263777-ee53135bdbdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1041&q=80"
              alt="Banner 3"
            />
            <div className="carousel-item-content ml-10 top-20 absolute space-y-3 w-64 md:w-96 mx-auto">
              <h2 className="font-bold text-4xl text-[#f6d9d9fc]">
                Quality Baby Cars for Unforgettable Adventures
              </h2>
              <p className="text-sm text-white font-semibold mb-4">
                Let your child's imagination soar with our premium baby car
                collection.
              </p>
              <div className="">
                {' '}
                <Link
                  to="/"
                  className=" text-white font-serif hover:text-purple-500 hover:bg-white   bg-purple-600 px-3 py-2"
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
