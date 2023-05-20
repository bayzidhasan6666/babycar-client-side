import React, { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!agree) {
      alert('Please agree to the terms and conditions.');
      return;
    }
    console.log(`Subscribing with email: ${email}`);
    setEmail('');
    setAgree(false);
  };

  return (
    <section
      data-aos="fade-left"
      className="py-8 border border-purple-600 rounded"
    >
      <h2 className="text-2xl text-center text-purple-600 font-semibold mb-4">
        Subscribe for Offer
      </h2>
      <div data-aos="fade-up" className="max-w-md mx-auto flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-r flex items-center hover:bg-purple-600"
          onClick={handleSubscribe}
        >
          <FaPaperPlane className="mr-2" />
        </button>
      </div>
      <div className="mt-4 flex w-fit mx-auto items-center">
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
          className="mr-2"
        />
        <p className="text-sm  text-gray-500">
          I agree to the terms and conditions.
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
