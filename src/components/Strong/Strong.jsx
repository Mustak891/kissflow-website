import React, { useEffect, useState } from "react";
import strong from "../../assets/strong.png";

const Strong = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementOffset = document.getElementById("targetElement").offsetTop;
      // console.log("SP:" ,scrollPosition, "EO:", elementOffset)
      if (scrollPosition > elementOffset) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log("scroll :",scrolled)

  return (
    <div className="py-4 px-2 md:bg-gradient-to-b from-neutral-100 via-neutral-100 to-neutral-900 ">
      <section className="container flex justify-evenly flex-wrap gap-6 bg-blue-100 rounded-3xl px-5 py-4">
        <div className="flex flex-col justify-evenly flex-wrap">
          <div className="flex flex-col flex-wrap gap-1 font-medium text-lg md:text-3xl">
            <div className="flex flex-wrap">
              Recognized as a &nbsp;
              <span className="inline bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                Strong Performer
              </span>
              &nbsp; in Forrester Wave&#8482;
            </div>
            <span className="text-base text-gray-600">
              Low-Code Platforms For Citizen Developers, Q1 2024
            </span>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg md:text-2xl font-medium py-2 px-4 rounded flex items-center">
              Read the report
            </button>
          </div>
        </div>
        <div className="pb-0 mb-0 pt-4 ">
          <img
            id="targetElement"
            src={strong}
            className={`object-contain rounded-2xl h-40 w-26 md:h-64 md:w-60 transition-transform duration-500 ${
              scrolled ? "scale-125" : ""
            }`}
            alt="strong"
          />
        </div>
      </section>
    </div>
  );
};

export default Strong;
