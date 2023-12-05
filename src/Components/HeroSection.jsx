import React, { useState, useEffect } from "react";

const TypingAnimation = ({ texts, speed = 200, loop = true }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? speed / 2 : speed, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <h1 className="text-3xl font-bold text-white">
      {`${texts[index].substring(0, subIndex)}${
        subIndex === texts[index].length ? "" : "|"
      }`}
    </h1>
  );
};

export default function HeroSection() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        height: "60vh",
        backgroundImage: "url('/images/tiago-aleixo-_vrorA4prpU-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Welcome to Newcomer's Guide
        </h1>
        <TypingAnimation
          texts={[
            "Discover Germany",
            "Learn the Language",
            "Understand the Culture",
            "Navigate Legalities",
          ]}
          speed={100}
        />
        <div className="mt-6 flex justify-center items-center w-full">
          <div
            className="flex justify-start items-center w-full"
            style={{ paddingLeft: "calc(50% - 10rem)" }}
          >
            {" "}
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white bg-opacity-50 text-sm"
              style={{ maxWidth: "300px" }}
            />
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-r-lg whitespace-nowrap shadow-lg transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
