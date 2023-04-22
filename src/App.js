import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Photobook from "./pages/Photobook/Photobook";
import Quotes from "./pages/Quotes/Quotes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photobook" element={<Photobook />} />
        <Route path="/about" element={<About />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
