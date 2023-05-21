import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer
      data-aos="fade-up"
      className="border-t bg-gradient-to-r from-[#1e0024] to-[#00151f] border-teal-900 text-white py-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Baby Car</h3>
            <p className="text-gray-400">
              Welcome to Baby Car Website, your ultimate destination for all
              things related to baby cars. Explore our collection of safe and
              stylish cars for your little ones.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-purple-600 hover:text-teal-500">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-purple-600 hover:text-teal-500">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-purple-600 hover:text-teal-500">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-purple-600 hover:text-teal-500">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/products">Toys</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="flex items-center gap-2 mt-2">
                <span className="icon">
                  <FaMapMarkerAlt className="h-6 w-6" />
                </span>
                123 Main Street, City, State Zip
              </li>
              <li className="flex items-center gap-2 mt-2">
                <span className="icon">
                  <FaPhoneAlt className="h-5 w-6" />
                </span>
                1-800-123-4567
              </li>
              <li className="flex items-center gap-2 mt-2">
                <span className="icon">
                  <FaEnvelope className="w-6 h-5" />
                </span>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Baby Car Website. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
