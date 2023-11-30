import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Faqs = () => {
  const faqData = [
    {
      question: "Question 1",
      answer: "Answer to question 1.",
    },
    {
      question: "Question 2",
      answer: "Answer to question 2.",
    },
    // Add more FAQs here
  ];

  return (
    <Accordion>
      {faqData.map((faq, index) => (
        <Accordion.Item key={index} title={faq.question}>
          {faq.answer}
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Faqs;
