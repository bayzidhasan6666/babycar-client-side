import React, { useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CustomerTestimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Parent',
      quote:
        'The BabyCar toy is absolutely adorable! My child loves playing with it and it keeps them entertained for hours. Highly recommend!',
      imageUrl: 'https://xsgames.co/randomusers/avatar.php?g=male',
    },
    {
      id: 2,
      name: 'Daniel Johnson',
      role: 'Parent',
      quote:
        "I purchased the BabyCar toy for my little one and they can't get enough of it. The quality is excellent, and it's definitely worth the price.",
      imageUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 3,
      name: 'Michael Davis',
      role: 'Parent',
      quote:
        "My child enjoys playing with the BabyCar toy. It's safe, durable, and provides endless fun. I'm happy with my purchase!",
      imageUrl:
        'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
  ];

  return (
    <section data-aos="fade-right" className="py-8 text-purple-500">
      <h2 className="text-2xl text-center text-purple-600 border-b w-fit mx-auto border-purple-500 font-semibold mb-4">
        What They Say ?
      </h2>
      <div className="flex flex-col items-center">
        {testimonials.map((testimonial) => (
          <div
            data-aos="fade-up"
            key={testimonial.id}
            className="max-w-xl  bg-gradient-to-r from-[#1e0024] to-[#00151f] rounded-xl p-6 mb-4"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-teal-500">
                  {testimonial.name}
                </p>
                <p className="text-purple-500">{testimonial.role}</p>
              </div>
            </div>
            <div className="text-gray-400">
              <FaQuoteLeft className="text-purple-500 text-3xl mb-4" />
              <p>{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
