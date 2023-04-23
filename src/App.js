import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Photobook from "./pages/Photobook/Photobook";
import Capio from "./pages/Capio/Capio";
import Quotes from "./pages/Quotes/Quotes";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photobook" element={<Photobook />} />
        <Route path="/capio" element={<Capio />} />
        <Route path="/about" element={<About />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
