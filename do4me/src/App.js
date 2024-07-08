import React from "react";
import Contact from "./components/contact";
import Sign from "./components/Sign";
import About from "./components/about";
import LandingPG from "./components/landingPG";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPG />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
