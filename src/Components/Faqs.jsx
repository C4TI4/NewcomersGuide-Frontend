import React, { useState } from "react";

const FaqItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="bg-gradient-to-r from-red-500 to-red-700 rounded-lg my-2 shadow-lg">
      <h2
        onClick={toggle}
        className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer rounded-lg"
      >
        <span>{title}</span>
        <svg
          className={`fill-current text-white h-6 w-6 transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
        >
          {/* SVG path here */}
        </svg>
      </h2>
      <div
        style={{ maxHeight: isOpen ? "1000px" : "0" }}
        className="border-l-2 border-red-800 overflow-hidden transition-all duration-500 rounded-b-lg"
      >
        <p className="p-3 text-white">{content}</p>
      </div>
    </li>
  );
};

const Faqs = () => {
  const faqsLeft = [
    // ... (FAQs content)
  ];

  const faqsRight = [
    // ... (FAQs content)
  ];

  return (
    <main className="p-5 bg-light-blue">
      <div className="flex flex-wrap justify-center items-start my-2">
        <div className="w-full text-center mb-5">
          <h1 className="text-3xl font-bold text-vnet-blue">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <ul className="flex flex-col">
            {faqsLeft.map((faq, index) => (
              <FaqItem key={index} title={faq.question} content={faq.answer} />
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <ul className="flex flex-col">
            {faqsRight.map((faq, index) => (
              <FaqItem key={index} title={faq.question} content={faq.answer} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Faqs;
