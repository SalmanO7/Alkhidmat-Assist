import React from "react";
import AboutImg from "../../assets/AboutImg.png";
import BgImg from "../../assets/sectionBgImg.png";

const AboutSection = () => {
  return (
    <>
      <div className="pt-28 flex-col  md:flex-row flex justify-center items-center gap-10 xl:gap-28 pb-28">
        <div className="text-sm lg:text-base w-3/4 md:w-1/3  flex justify-center items-center md:items-start flex-col gap-4">
          <p className="text-sm pb-5">Introduction</p>
          <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
            AlkhidmatAssist
          </h1>
          <p className="md::w-2/4 ">
            Alkhidmat Assist is a non-profit organization dedicated to improving
            lives in underserved communities. Through compassionate, hands-on
            efforts, we aim to create sustainable change, making everyday life
            easier and brighter for those in need
            <br />
            <span className="hidden lg:block">
              Through compassion, dedication, and sustainable efforts, we aim to
              empower individuals and uplift communities, making life easier and
              brighter for those who need it most.
            </span>
            Join us in bringing hope and opportunity to communities that need it
            most.
          </p>
        </div>
        <div className="w-3/4 md:w-1/3">
          <img src={AboutImg} alt="img" />
        </div>
      </div>

      <div
        className="w-[full] h-[200.98px] md:h-[349.98px] bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex flex-col justify-center items-center gap-2 md:gap-3 lg:gap-5">
          <h1 className="text-white uppercase font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-6xl">
            Support us
          </h1>
          <p className="text-white w-4/5 md:w-2/3 text-center text-sm">
            Make an impact today! Your generous donation to Alkhidmat Assist
            supports vital initiatives that bring hope and opportunity to those
            in need.
          </p>
          <button className="bg-[#0055A2] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold">Donate</button>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
