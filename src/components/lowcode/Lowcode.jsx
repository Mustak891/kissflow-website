import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import image1 from "../../assets/working together.jpg";
import image2 from "../../assets/strong.png";
import image3 from "../../assets/analyst.png";

const Lowcode = () => {
  const [selectedText, setSelectedText] = useState(image1);

  const [buttonColors, setButtonColors] = useState({
    text1: "",
    text2: "",
    text3: "",
  });

  const handleTextClick = (text) => {
    setSelectedText(text);
    setButtonColors({
      ...buttonColors,
      [text]:
        buttonColors[text] ===
        "bg-gradient-to-r from-blue-300 to-neutral-900 border-blue-600 border-l-4"
          ? ""
          : "bg-gradient-to-r from-blue-300 to-neutral-900 border-blue-600 border-l-4",
    });
  };

  return (
    <div className="py-4 px-2 bg-gradient-to-b from-neutral-900 to-neutral-900">
      <section className="container text-white md:px-5 md:py-5 flex flex-wrap flex-col gap-10 justify-center">
        <div className="flex items-center justify-center flex-wrap md:text-4xl tracking-wide ">
          <div className="text-center whitespace-normal break-all md:w-[480px]">
            Reset your expectations for{" "}
            <span className="inline bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              low-code development
            </span>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col cursor-pointer gap-8">
            <div
              className={`
                 
              ${buttonColors.text1}
                
                p-8 rounded-l-lg space-y-6 whitespace-normal break-all w-[350px] hover:text-white`}
              onClick={() => handleTextClick("text1")}
            >
              <div className="text-sm md:text-2xl font-medium break-all text-white">
                All the power you need to turn ideas into reality
              </div>
              <div className="flex items-center font-medium text-blue-600 hover:text-white transition-transform duration-500 gap-2">
                <span className="">Explore App Development </span>
                <span className="">
                  <FaAngleRight />
                </span>{" "}
              </div>
            </div>
            <div
              className={`
              ${buttonColors.text2}
     p-8 rounded-l-lg space-y-6 whitespace-normal break-all w-[350px] hover:text-white `}
              onClick={() => handleTextClick("text2")}
            >
              <div className="text-sm md:text-2xl font-medium break-all text-white">
                No-code, automated workflows, just like you imagined
              </div>
              <div className="flex items-center font-medium text-blue-600 hover:text-white transition-transform duration-500 gap-2">
                <span className="">Explore Workflow Automation </span>
                <span className="">
                  <FaAngleRight />
                </span>{" "}
              </div>
            </div>
            <div
              className={`${buttonColors.text3} p-8 rounded-l-lg space-y-6 whitespace-normal break-all w-[350px] hover:text-white`}
              onClick={() => handleTextClick("text3")}
            >
              <div className="text-sm md:text-2xl font-medium break-all text-white">
                Next-level case management gets work done faster
              </div>
              <div className="flex items-center font-medium text-blue-600 hover:text-white transition-transform duration-500 gap-2">
                <span className="">Explore Case Management </span>
                <span className="">
                  <FaAngleRight />
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-center items-center ">
              {selectedText && (
                <img
                  className="w-auto h-96 rounded-lg border-4 border-gray-700"
                  src={
                    selectedText === "text1"
                      ? image1
                      : selectedText === "text2"
                      ? image2
                      : selectedText === "text3"
                      ? image3
                      : image1
                  }
                  alt={selectedText}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lowcode;
