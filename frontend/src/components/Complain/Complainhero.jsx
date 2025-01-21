import React from "react";
import BgImg from "../../assets/BgImg.png";

const Complainhero  = () => {
  return (
    <div
      className="w-[full] h-[200.98px] md:h-[349.98px] bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <h1 className="text-white uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Complain 
      </h1>
    </div>
  );
};

export default Complainhero;
