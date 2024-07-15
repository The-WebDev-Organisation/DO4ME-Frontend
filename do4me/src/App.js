import React from "react";
import Contact from "./components/contact";
import Sign from "./components/Sign";
import About from "./components/about";
import LandingPG from "./components/landingPG";
import SignUp from "./components/joinnow";
import DashboardPage from "./components/artSignup";
import Dashboard from "./components/jina";
import User from "./components/User";
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/jina" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
