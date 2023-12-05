import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faNewspaper,
  faLanguage,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const HomeButtons = () => {
  const features = [
    {
      title: "Law Assistance",
      description: "Understand local laws and regulations easily.",
      icon: faGavel,
      path: "/law-assistance",
      image: "public/images/markus-spiske-0yuH4tIQIYY-unsplash.jpg", // Replace with your image path
    },
    {
      title: "Latest News",
      description: "Stay informed with the latest updates in your area.",
      icon: faNewspaper,
      path: "/news",
      image: "public/images/claudio-schwarz-pN684G33h_M-unsplash.jpg", // Replace with your image path
    },
    {
      title: "Translation Help",
      description: "Effortless translation tools at your fingertips.",
      icon: faLanguage,
      path: "/translation-help",
      image: "public/images/jonathan-kemper-CO23oqbJDGY-unsplash.jpg", // Replace with your image path
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div
              className="bg-cover bg-center h-40"
              style={{ backgroundImage: `url(${feature.image})` }}
            ></div>
            <div className="bg-gray-800 p-4">
              <div className="flex justify-center">
                <button className="text-3xl rounded-full p-3 hover:bg-gray-700 transition-colors">
                  <FontAwesomeIcon icon={feature.icon} className="text-white" />
                </button>
              </div>
              <h3 className="text-md font-semibold text-center mt-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center mt-2">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeButtons;
