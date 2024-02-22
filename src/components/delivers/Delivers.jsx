import React from "react";

const Delivers = () => {
  return (
    <div className="py-10 px-2 my-2 mx-10">
      <section className="container flex justify-evenly flex-wrap gap-6 bg-black rounded-3xl px-5 py-20">
        <div className="flex flex-col justify-evenly flex-wrap text-white">
          <div className="flex flex-col flex-wrap gap-1 font-medium text-lg md:text-3xl">
            <div className="flex flex-wrap md:w-96 leading-10">
              See how Kissflow delivers the fastest time-to-value in the market
            </div>
          </div>
        </div>
        <div className="pb-0 mb-0 pt-4 ">
          <button className="px-6 py-4 text-lg md:text-2xl bg-blue-600 rounded-md text-white outline-none shadow-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Delivers;
