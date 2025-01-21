import React from 'react';
import BgImg from "../../assets/BgImg.png";

const JoinUsSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-cover bg-center bg-no-repeat p-6 md:p-12 space-y-6 md:space-y-0 min-h-[60vh]"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-snug">
          Join Us in Making a <br />
          <span className="text-white">Difference</span>
        </h1>
      </div>
      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center">
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-6 text-white p-4 rounded-md bg-opacity-60 ">
          Your support can transform lives and uplift communities. Whether you <br />
          choose to donate, volunteer, or spread the word, every action counts <br />
          towards creating a better tomorrow.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start  space-y-4 gap-1 md:space-y-0 md:space-x-4">
          <button className="text-white font-bold border-2 border-solid mx-4 border-sky-700 py-3 px-6 rounded hover:bg-[#00529B] transition duration-300">
            Volunteer
          </button>
          <button className="bg-[#00529B] text-white font-bold py-3 px-8 rounded hover:bg-[#003f73] transition duration-300">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
