import React, { useState, useEffect } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import spinner from '../../assets/97111-loading-spinner-dots.json';
import useTitle from '../../PageTitle/useTitle';

const Blog = () => {
  const [isLoading, setIsLoading] = useState(true);
  useTitle('Blog Page');
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Simulating loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const faqData = [
    {
      question: 'What is an access token and refresh token',
      answer:
        "Access tokens and refresh tokens are commonly used in authentication systems. An access token is a credential that is issued to a user after they successfully authenticate themselves. It contains information about the user's identity and permissions. Access tokens are usually short-lived and have an expiration time.",
      icon: <FaQuestion />,
      database: 'Authentication',
    },
    {
      question: 'Compare SQL and NoSQL databases',
      answer:
        'SQL and NoSQL databases differ in their data models, querying languages, and scalability. SQL databases use structured query language and have a predefined schema. They are best suited for complex queries and strict consistency requirements. NoSQL databases are schema-less and provide flexible data models. They are suitable for large-scale applications with high write loads and need for horizontal scaling.',
      icon: <FaQuestion />,
      database: 'Databases',
    },
    {
      question: 'What is Express.js',
      answer:
        'Express.js is a fast and minimalist web application framework for Node.js. It provides a robust set of features for web and mobile application development, including routing, middleware support, and template engine integration. Express.js allows developers to build scalable and modular web applications with ease.',
      icon: <FaQuestion />,
      database: 'Web Development',
    },
    {
      question: 'What is Nest.js',
      answer:
        'Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and takes advantage of its features like decorators, strong typing, and dependency injection. Nest.js follows the architectural style of Angular and provides a solid foundation for building enterprise-grade applications.',
      icon: <FaQuestion />,
      database: 'Web Development',
    },
    {
      question: 'What is MongoDB aggregate and how does it work',
      answer:
        'MongoDB aggregate is a powerful data processing operation used for performing complex data analysis tasks on MongoDB collections. It allows you to process and transform data using various stages like filtering, grouping, sorting, and aggregating. Aggregation pipelines in MongoDB provide a flexible way to perform data aggregation operations and generate insightful results.',
      icon: <FaQuestion />,
      database: 'Databases',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="">
      <h2
        data-aos="fade-right"
        className="text-2xl flex items-center mx-auto w-fit text-center text-purple-500 font-semibold mb-4"
      >
        Assignment Required Questions <FaQuestion></FaQuestion>
      </h2>
      {isLoading ? (
        <div className="flex justify-center mt-8">
          <Lottie className="w-32" animationData={spinner} loop={true} />
        </div>
      ) : (
        <div className="container mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 100}
              className="bg-gradient-to-r from-[#1e0024] to-[#00151f] md:w-[95%] mx-auto rounded-xl p-6 mb-6"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl text-purple-500 items-center flex font-semibold mb-2">
                  {faq.question}
                  {faq.icon}
                </h3>
                <button
                  className={`btn border   ${
                    activeIndex === index
                      ? 'text-teal-500 border-teal-500'
                      : 'text-purple-500 border-purple-500'
                  }`}
                >
                  {activeIndex === index ? (
                    <FiDatabase className="text-teal-500" />
                  ) : (
                    <FiDatabase className="text-purple-500" />
                  )}
                </button>
              </div>
              {activeIndex === index && (
                <div className="text-teal-500 mb-4">
                  <p>{faq.answer}</p>
                </div>
              )}
              <div className="flex items-center text-teal-500">
                <FiDatabase className="mr-1 text-purple-500" />
                <span>{faq.database}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
