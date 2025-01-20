import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Application from "./pages/Application";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Complain from "./pages/Complain";
   








const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/application" element={<Application />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/complain" element={<Complain />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
