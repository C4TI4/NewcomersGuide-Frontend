import React, { useState } from "react";

const CultureFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the main culture of the region?",
      answer: "The main culture of the region is characterized by...",
    },
    {
      question: "What are popular local dishes?",
      answer: "Popular local dishes include...",
    },
    // Add more FAQs here
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "active" : ""}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultureFaqs;
