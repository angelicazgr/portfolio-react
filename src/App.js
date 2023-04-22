import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Photobook from "./pages/Photobook/Photobook";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photobook" element={<Photobook />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
