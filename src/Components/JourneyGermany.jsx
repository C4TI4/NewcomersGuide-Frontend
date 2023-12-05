import React, { useState, useEffect } from "react";

const JourneyGermany = () => {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const position = window.scrollY;
      if (position > 100) {
        setHighlight(true);
      } else {
        setHighlight(false);
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center bg-transparent py-16">
      {" "}
      <div className="text-center">
        <h2
          className={`text-4xl lg:text-6xl font-bold ${
            highlight ? "text-gray-200" : "text-gray-600"
          }`}
        >
          Why We Started
        </h2>
        <p
          className={`mt-4 text-xl ${
            highlight ? "text-gray-200" : "text-gray-600"
          }`}
        >
          Simplifying the journey for newcomers in Germany.
        </p>
        <p
          className={`text-3xl font-semibold my-6 ${
            highlight ? "text-gray-200" : "text-gray-600"
          }`}
        >
          Making Integration Easier and More Accessible
        </p>
        <p
          className={`text-lg mx-auto leading-relaxed max-w-3xl ${
            highlight ? "text-gray-200" : "text-gray-600"
          }`}
        >
          Comprehensive guides, legal assistance, language courses, and cultural
          insights to make your transition into German life smooth.
        </p>
      </div>
    </div>
  );
};

export default JourneyGermany;
