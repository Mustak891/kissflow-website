import React from "react";
import wt from "../../assets/working together.jpg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

const Paradigm = () => {
  return (
    <section className="py-10 px-4 bg-gradient-to-r from-neutral-50 to-neutral-100 h-screen">
      <div className="container flex justify-evenly flex-wrap gap-6 ">
        <img
          className="object-cover rounded-2xl h-40 w-76 md:h-96"
          src={wt}
          alt="working together"
        />
        <div className="flex flex-col gap-14 ">
          <div className="flex text-center md:text-[30px] text-[20x] font-semibold">
            A &nbsp;{" "}
            <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              new paradigm
            </span>{" "}
            &nbsp; in low-code development
          </div>
          <div className="flex items-center gap-4 bg-white w-fit px-4 py-4 rounded-lg hover:shadow-md hover:text-blue-600 cursor-pointer hover:scale-95 transition-transform ">
            <MdOutlineShoppingCart className="text-blue-600" />
            <div>
              <h5 className="text-sm md:text-2xl text-black">
                Embarace Citizen Development
              </h5>
              <small className="text-gray-400">
                Empower people closest to the problem
              </small>
            </div>
            <FaAngleRight />
          </div>
          <div className="flex items-center gap-4 bg-white w-fit px-4 py-4 rounded-lg hover:shadow-md hover:text-blue-600 cursor-pointer hover:scale-95 transition-transform ">
            <MdOutlineShoppingCart className="text-blue-600" />
            <div>
              <h5 className="text-sm md:text-2xl text-black">
                Embarace Citizen Development
              </h5>
              <small className="text-gray-400">
                Empower people closest to the problem
              </small>
            </div>
            <FaAngleRight />
          </div>
          <div className="flex items-center gap-4 bg-white w-fit px-4 py-4 rounded-lg hover:shadow-md hover:text-blue-600 cursor-pointer hover:scale-95 transition-transform ">
            <MdOutlineShoppingCart className="text-blue-600" />
            <div>
              <h5 className="text-sm md:text-2xl text-black">
                Embarace Citizen Development
              </h5>
              <small className="text-gray-400">
                Empower people closest to the problem
              </small>
            </div>
            <FaAngleRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paradigm;
