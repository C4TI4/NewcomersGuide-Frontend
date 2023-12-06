import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faNewspaper,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import useThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";

const HomeButtons = () => {
  const { isDarkMode } = useThemeContext();

  const features = [
    {
      title: "Law Assistance",
      description: "Understand local laws and regulations easily.",
      icon: faGavel,
      path: "/laws",
      image: "public/images/markus-spiske-0yuH4tIQIYY-unsplash.jpg",
    },
    {
      title: "Latest News",
      description: "Stay informed with the latest updates in your area.",
      icon: faNewspaper,
      path: "/article",
      image: "public/images/claudio-schwarz-pN684G33h_M-unsplash.jpg",
    },
    {
      title: "Translation Help",
      description: "Effortless translation tools at your fingertips.",
      icon: faLanguage,
      path: "/translate",
      image: "public/images/jonathan-kemper-CO23oqbJDGY-unsplash.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <Link
            to={feature.path}
            key={index}
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div
              className="bg-cover bg-center h-40"
              style={{ backgroundImage: `url(${feature.image})` }}
            ></div>
            <div className={`p-4 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="flex justify-center">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className={`text-3xl rounded-full p-3 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                />
              </div>
              <h3
                className={`text-md font-semibold text-center mt-3 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-center mt-2 ${
                  isDarkMode ? "text-gray-200" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeButtons;
