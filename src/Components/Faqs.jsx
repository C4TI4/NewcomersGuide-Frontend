import React, { useState } from "react";
import useThemeContext from "../context/ThemeContext";

const Faqs = () => {
  const [openTab, setOpenTab] = useState(null);
  const { isDarkMode } = useThemeContext();

  const toggleTab = (index) => {
    setOpenTab(openTab === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the Newcomer's Guide: Germany Edition?",
      answer:
        "This is a comprehensive mobile application designed to assist newcomers to Germany by providing user-friendly guides on laws, news, language courses, cultural integration, and much more, all tailored to make the transition smoother.",
    },
    {
      question: "How can the Law Guide help me understand German laws?",
      answer:
        "Our Law Guide offers simplified explanations of German laws, enabling users to understand their rights and obligations in a straightforward manner, which is especially helpful for those who are new to the legal system of Germany.",
    },
    {
      question: "Can I find German language courses through the app?",
      answer:
        "Yes, our Language Course Finder assists users in discovering German language courses that best fit their needs, taking into account various factors such as proficiency level and learning style.",
    },
    {
      question: "Does the app offer assistance with official documents?",
      answer:
        "Absolutely. Our AI Document Assistant empowers users by simplifying the process of creating official documents and applications, making bureaucratic tasks less daunting.",
    },
    {
      question: "How does the Community Forum benefit users?",
      answer:
        "The Community Forum is a supportive space where users can connect, ask questions, and share experiences, fostering a sense of community and belonging among newcomers.",
    },
    {
      question: "Is there offline access available for essential information?",
      answer:
        "Critical information within the app is available even without an internet connection, ensuring that users have access to essential guides and services at all times.",
    },
  ];
  return (
    <div
      className={`container mx-auto py-10 px-6 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h2
        className={`text-3xl lg:text-4xl font-bold mb-10 text-center ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
              isDarkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <h3
              onClick={() => toggleTab(index)}
              className={`cursor-pointer p-4 text-lg lg:text-xl ${
                isDarkMode ? "text-white" : "text-gray-800"
              } hover:bg-gray-100 flex justify-between items-center font-semibold`}
            >
              {faq.question}
              <span
                className={`text-xl ${
                  isDarkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {openTab === index ? "−" : "+"}
              </span>
            </h3>
            <div
              className={`transition-max-height duration-500 ease-in-out ${
                openTab === index ? "max-h-96 p-4" : "max-h-0"
              } ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              <p className="text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
