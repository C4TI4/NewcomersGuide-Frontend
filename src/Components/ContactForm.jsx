import React from "react";
import useThemeContext from "../context/ThemeContext";

const ContactForm = () => {
  const { isDarkMode } = useThemeContext();

  return (
    <div
      className={`p-5 shadow-md rounded-lg ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div
        className={`p-5 rounded-lg ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label
              htmlFor="name"
              className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={`mt-1 p-2 block w-full shadow-sm sm:text-sm rounded-md ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "border-gray-300"
              }`}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`mt-1 p-2 block w-full shadow-sm sm:text-sm rounded-md ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "border-gray-300"
              }`}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className={`mt-1 p-2 block w-full shadow-sm sm:text-sm rounded-md ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "border-gray-300"
              }`}
              required
            ></textarea>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="copy"
              id="copy"
              className={`h-4 w-4 ${
                isDarkMode ? "text-indigo-600" : "focus:ring-indigo-500"
              } border-gray-300 rounded`}
            />
            <label
              htmlFor="copy"
              className={`ml-2 block text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Send me a copy of this message
            </label>
          </div>
          <button
            type="submit"
            className={`w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md ${
              isDarkMode
                ? "text-white bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900"
                : "text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
