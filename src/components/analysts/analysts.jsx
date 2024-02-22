import React from "react";
import an from "../../assets/analyst.png";

const Analysts = () => {
  return (
    <div className="py-6 px-4 ">
      <section className="container flex flex-col">
        <div className="flex items-center justify-center flex-wrap md:text-4xl tracking-wide ">
          <div className="ext-center whitespace-normal break-all">
            Recognized by&nbsp;
            <span className="inline bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              analysts
            </span>
            , loved by&nbsp;
            <span className="inline bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              users
            </span>
          </div>
        </div>
        <div className="flex justify-evenly p-8 items-center m-5 border rounded-2xl border-gray-300">
          <div>
            <img src={an} className="hidden md:block md:h-96 " alt="analysts" />
          </div>
          <div className="text-wrap w-1/2 space-y-6">
            <>
              <div className="text-3xl font-medium">SPARK Matrix&#8482;</div>
              <div className="text-lg">
                Low Code Application Development Platform for Business
                Developers, 2023
              </div>
            </>
            <button className="bg-blue-600 p-2 rounded-md text-white">
              Explore Integrations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Analysts;
