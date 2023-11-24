import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here if needed */}
    </Routes>
  );
}

export default App;
