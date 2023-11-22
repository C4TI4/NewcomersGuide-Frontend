const HomeButtons = () => {
  // This could be updated to handle actual navigation or function calls
  const handleClick = (buttonName) => {
    console.log(`${buttonName} button clicked`);
    // Implement the logic for each button when clicked
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <button
        onClick={() => handleClick("News")}
        className="bg-gray-200 text-gray-700 hover:bg-gray-300 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        News
      </button>

      <button
        onClick={() => handleClick("Culture")}
        className="bg-gray-200 text-gray-700 hover:bg-gray-300 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Culture
      </button>

      <button
        onClick={() => handleClick("Hotspots")}
        className="bg-gray-200 text-gray-700 hover:bg-gray-300 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Hotspots
      </button>

      <button
        onClick={() => handleClick("Public Transport")}
        className="bg-gray-200 text-gray-700 hover:bg-gray-300 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Public Transport
      </button>
    </div>
  );
};

export default HomeButtons;
