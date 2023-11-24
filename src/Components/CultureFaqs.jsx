import React from "react";
import { Accordion } from "@nextui-org/react";

const CultureFaqs = () => {
  const faqs = [
    {
      question: "What is the main culture of the region?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "What are popular local dishes?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "How do locals celebrate festivals?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // Add 3 more FAQs here
    {
      question: "What is the local language spoken?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "Are there any cultural taboos?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      question: "What are common cultural practices?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];
  return (
    <div className="m-5 font-sans">
      <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">
        CULTURE FAQS & TIPS
      </h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item key={index} title={faq.question}>
            <p className="text-sm text-gray-600">{faq.answer}</p>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default CultureFaqs;
