import React, { useState } from "react";
import { Button } from "@nextui-org/react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/public/images/marcus-lenk-scPq1QpSTLs-unsplash.jpg",
    "/public/images/markus-spiske-0yuH4tIQIYY-unsplash.jpg",
    "public/images/tiago-aleixo-1GpHwkQkrT0-unsplash.jpg",
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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
      <Button
        auto
        ghost
        color="primary"
        className="absolute top-1/2 left-8"
        onClick={prevSlide}
      >
        &#10094;
      </Button>
      <Button
        auto
        ghost
        color="primary"
        className="absolute top-1/2 right-8"
        onClick={nextSlide}
      >
        &#10095;
      </Button>
    </div>
  );
};

export default Carousel;
