import React from "react";
import lowcode1 from "../../assets/lowcode1.png";

const Turbo = () => {
  return (
    <div className="py-6 px-4 bg-gradient-to-b from-neutral-900 to-neutral-900">
      <section className="container text-white md:px-5 md:py-5 flex flex-wrap flex-col gap-10 justify-center">
        <div className="flex items-center justify-center flex-wrap md:text-4xl tracking-wide ">
          <div className="text-center whitespace-normal break-all">
            Turbocharge{" "}
            <span className="inline bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              low-code development
            </span>{" "}
          </div>
        </div>
        <div className="flex justify-evenly flex-wrap gap-2">
          <div className="flex justify-between bg-gray-800 p-8 gap-4 md:gap-8 rounded-xl w-40 md:w-fit">
            <div className="flex flex-col justify-between gap-8 md:gap-24">
              <div>
                <div className="flex flex-wrap text-sm md:text-2xl whitespace-normal break-all w-20 md:w-64">Instant connections to all your systems</div>
                <div className="flex flex-wrap text-gray-400 whitespace-normal break-all w-20 md:w-64">
                  Link all of your essential systems with easy no-code
                  connectors
                </div>
              </div>
              <div>
                <button className="bg-blue-600 p-2 rounded-md">
                  Explore Integrations
                </button>
              </div>
            </div>
            <div>
              <img src={lowcode1} className="h-40 w-auto hidden md:block" alt="lowcode1" />
            </div>
          </div>
          <div className="flex justify-between bg-gray-800 p-8 gap-8 rounded-xl w-40 md:w-fit">
            <div className="flex flex-col justify-between gap-24">
              <div>
                <div className="flex flex-wrap text-sm md:text-2xl whitespace-normal break-all w-20 md:w-64">Customized, actionable insights</div>
                <div className="flex flex-wrap text-gray-400 whitespace-normal break-all w-20 md:w-64">
                Make better decisions with visual data on a flexible interface
                </div>
              </div>
              <div>
                <button className="bg-blue-600 p-2 rounded-md">
                  Explore Analytics
                </button>
              </div>
            </div>
            <div>
              <img src={lowcode1} className="h-40 w-auto hidden md:block" alt="lowcode1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Turbo;
