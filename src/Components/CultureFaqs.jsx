import React from "react";
import { Card } from "@nextui-org/react";

const CultureFaqs = () => {
  const faqs = [
    {
      question: "What is the main culture of the region?",
      answer:
        "The main culture of the region is characterized by its rich historical heritage, diverse traditions, and vibrant community life.",
    },
    // ... other FAQs
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {faqs.map((faq, index) => (
        <Card
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <Card.Body>
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CultureFaqs;
