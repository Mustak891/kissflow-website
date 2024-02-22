import React from "react";
import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";
import hero3 from "../../assets/hero-3.png";
import hero4 from "../../assets/hero-4.png";
import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";


const Hero = () => {
  const [paddingTop, setPaddingTop] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth <= 768) {
        setPaddingTop(300);
      } else {
        setPaddingTop(100);
      }
    };

  
    window.addEventListener("resize", handleResize);
    
    handleResize();

    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [paddingTop]);

  //   const images = [
  //     {
  //       img: hero1,
  //       but: "Leran More",
  //     },
  //     {
  //       img: hero2,
  //       but: "Leran More",
  //     },
  //     {
  //       img: hero3,
  //       but: "Leran More",
  //     },
  //     {
  //       img: hero4,
  //       but: "Leran More",
  //     },
  //   ];

  return (
    <div
      className={`flex items-center bg-gradient-to-r from-neutral-50 to-neutral-100 px-6 pt-[${paddingTop}px]`}
    >
      <section className="container  flex flex-col items-center justify-center text-center gap-20 py-20 ">
        <div className=" flex flex-col flex-wrap items-center gap-6">
          <div className="text-sm md:text-5xl tracking-wide">
            The only enterprise low-code platform built for{" "}
            <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              multiple personas
            </span>
          </div>
          <button className="px-6 py-4 text-2xl bg-blue-600 rounded-md text-white outline-none shadow-lg">
            Get Started
          </button>
        </div>
        <div className="flex justify-center flex-wrap gap-6 ">
          <CircleButtonImage imageSrc={hero1} buttonText="Learn more" />
          <CircleButtonImage2 imageSrc={hero4} buttonText="Learn more" />
          {paddingTop == 300 ? (
            ""
          ) : (
            <>
              <CircleButtonImage3 imageSrc={hero3} buttonText="Learn more" />
              <CircleButtonImage4 imageSrc={hero4} buttonText="Learn more" />
            </>
          )}
        </div>
      </section>
    </div>
  );
};

const CircleButtonImage = ({ imageSrc, buttonText }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex justify-center items-center text-center h-48 w-48 rounded-full bg-black overflow-hidden cursor-pointer "
      >
        <div
          className={`flex justify-center items-center transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          } ${hovered === true ? "hidden" : "block"} pt-[60px]`}
        >
          <img
            src={imageSrc}
            alt="Image"
            className="h-[100%] w-[100%] object-contain "
          />
        </div>
        <div
          className={`flex justify-center items-center transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          } ${hovered === false ? "hidden" : "block"}  md:h-20 md:w-20`}
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded flex items-center">
            <>
              {buttonText}
              <FaAngleRight />
            </>
          </button>
        </div>
      </div>
      <h1 className="font-medium text-xl">IT Leaders</h1>
    </div>
  );
};

const CircleButtonImage2 = ({ imageSrc, buttonText }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex justify-center items-center text-center h-48 w-48 rounded-[40px] bg-blue-600 overflow-hidden cursor-pointer "
      >
        <div
          className={`flex justify-center items-center transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          } ${hovered === true ? "hidden" : "block"} pt-20`}
        >
          <img
            src={imageSrc}
            alt="Image"
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
        <div
          className={`flex justify-center items-center transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          } ${hovered === false ? "hidden" : "block"}`}
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded flex items-center">
            <>
              {buttonText}
              <FaAngleRight />
            </>
          </button>
        </div>
      </div>
      <h1 className="font-medium text-xl">Developers</h1>
    </div>
  );
};

const CircleButtonImage3 = ({ imageSrc, buttonText }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex justify-center items-center text-center h-48 w-48 rounded-t-full rounded-b-xl bg-black overflow-hidden cursor-pointer "
      >
        <div
          className={`flex justify-center items-center transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          } ${hovered === true ? "hidden" : "block"} pt-10`}
        >
          <img
            src={imageSrc}
            alt="Image"
            className="h-[100%] w-[100%] object-contain"
          />
        </div>
        <div
          className={`flex justify-center items-center transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          } ${hovered === false ? "hidden" : "block"}`}
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded flex items-center">
            <>
              {buttonText}
              <FaAngleRight />
            </>
          </button>
        </div>
      </div>
      <h1 className="font-medium text-xl">Process Owners</h1>
    </div>
  );
};

const CircleButtonImage4 = ({ imageSrc, buttonText }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex justify-center items-center text-center h-48 w-48 rounded-full bg-blue-600 overflow-hidden cursor-pointer "
      >
        <div
          className={`flex justify-center items-center transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          } ${hovered === true ? "hidden" : "block"} pt-20`}
        >
          <img
            src={imageSrc}
            alt="Image"
            className="h-[100%] w-[100%] object-contain"
          />
        </div>
        <div
          className={`flex justify-center items-center transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          } ${hovered === false ? "hidden" : "block"}`}
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded flex items-center">
            <>
              {buttonText}
              <FaAngleRight />
            </>
          </button>
        </div>
      </div>
      <h1 className="font-medium text-xl">Business Users</h1>
    </div>
  );
};

export default Hero;
