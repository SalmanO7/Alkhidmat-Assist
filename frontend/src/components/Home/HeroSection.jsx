import React, { useState } from "react";
import banner from "../../assets/banner.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false); // If you're managing navbar toggle state

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="bg-cover bg-center h-[500px] flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${banner})`,
        opacity: 0.8,
      }}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
        Empowering Communities
        <br />
        for a Brighter Future
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
        At AlkhidmatAssist, we believe in the power of community-driven change. Our mission is to
        enhance public infrastructure and create a more livable environment for everyone.
      </p>

      <Link
        to="/complain"
        onClick={toggleNavbar}
        className="text-white bg-[#00529B] md:font-bold md:px-9 md:py-2 py-2 px-4  hover:border-2 hover:border-blue-900 hover:bg-sky-300 hover:text-blue-800 hover:font-bold transition-all duration-700 ease-in-out max-w-xs mx-auto"
      >
        Complain
      </Link>
    </div>
  );
};

export default HeroSection;
