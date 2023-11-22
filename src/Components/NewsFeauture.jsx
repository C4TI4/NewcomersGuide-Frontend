import React, { useState, useEffect } from "react";

// Sample news data
const newsItems = [
  {
    title: "News Item 1",
    imageUrl: "https://via.placeholder.com/150",
    link: "#link1",
  },
  {
    title: "News Item 2",
    imageUrl: "https://via.placeholder.com/150",
    link: "#link2",
  },
  // Add more news items here
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change news item every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center space-x-4 bg-gray-200 p-4">
      {newsItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <a href={item.link}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-32 h-32 object-cover rounded-md"
            />
            <span className="text-lg font-semibold">{item.title}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsCarousel;
