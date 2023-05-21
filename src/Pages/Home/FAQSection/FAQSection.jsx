import React, { useState, useEffect } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const faqData = [
    {
      question: 'Do you offer free shipping?',
      answer:
        'Yes, we offer free shipping on all orders within the United States.',
    },
    {
      question: 'Can I return or exchange a car toy?',
      answer:
        'Yes, you can return or exchange any car toy within 30 days of purchase. Please refer to our return policy for more information.',
    },
    {
      question: 'Are the car toys safe for children?',
      answer:
        'Absolutely! Our car toys are made from non-toxic materials and are safe for children of all ages.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-8">
      <h2
        data-aos="fade-up"
        className="text-2xl text-center text-[#ffa5a5] font-semibold mb-4"
      >
        Frequently Asked Questions?
      </h2>
      <div className="max-w-xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-gradient-to-r from-[#1e0024] to-[#00151f] rounded p-4 mb-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <div className="text-teal-500">
                {activeIndex === index ? (
                  <BiMinus className="w-6 h-6" />
                ) : (
                  <BiPlus className="w-6 h-6" />
                )}
              </div>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-teal-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
