import React from "react";

const ContactForm = () => {
  return (
    <div
      className="p-5 shadow-md rounded-lg"
      style={{
        backgroundImage:
          "url('/public/images/claudio-schwarz-pN684G33h_M-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 p-5 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Contact Us
        </h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="copy"
              id="copy"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="copy" className="ml-2 block text-sm text-gray-900">
              Send me a copy of this message
            </label>
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
