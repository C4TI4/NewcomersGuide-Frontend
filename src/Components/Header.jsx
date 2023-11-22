import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/public/images/camilla-bundgaard-7nbP_kHaaGo-unsplash.jpg",
    "/public/images/matt-mutlu-NdNyBOji8MQ-unsplash.jpg",
    "/public/images/philippe-oursel-bcJDHKVUHNs-unsplash.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <div className="relative w-full h-96">
      {" "}
      {/* Adjusted height here */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
      <button
        className="absolute top-1/2 left-8 text-white bg-black bg-opacity-50 rounded-full p-2"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-8 text-white bg-black bg-opacity-50 rounded-full p-2"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
