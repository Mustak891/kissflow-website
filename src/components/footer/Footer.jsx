import React, { useState } from "react";
import kissflowLogo from "../../../src/assets/kisslow-logo.png";
import { SlArrowDown } from "react-icons/sl";
import { GrLanguage } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="border-t py-4 px-4 border-b">
      <section className="container">
        <div className="flex justify-between py-2 flex-wrap">
          <div className="hidden md:block">
            <div className="text-xl md:text3xl text-gray-700 flex items-center cursor-pointer">
              <img
                src={kissflowLogo}
                className="h-10 w-10"
                alt="kissflowlogo"
              />
              <a href="#" className="text-2xl">
                kissflow
              </a>
            </div>
          </div>
          <span className="text-2xl block md:hidden">Contact Sales</span>
          <div className="flex items-center gap-4">
            <div className="text-blue-600 underline cursor-pointer">
              sales@kissflow.com
            </div>
            <DropdownMenu />
          </div>
        </div>
      </section>
    </div>
  );
};

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative hidden md:block">
      <button
        className="bg-blue-100 hover:bg-white font-medium border border-gray-400 text-gray-800  py-2 px-4 rounded inline-flex items-center cursor-pointer"
        onClick={toggleMenu}
      >
        <GrLanguage />
        &nbsp; English &nbsp;
        <SlArrowDown className="mr-2" />
      </button>
      {isOpen && (
        <ul className="absolute bg-gray-100 w-32 mt-2 rounded-lg shadow-lg">
          <li className="px-4 py-2 hover:bg-gray-200">Deutsch</li>
          <li className="px-4 py-2 hover:bg-gray-200">Francais</li>
          <li className="px-4 py-2 hover:bg-gray-200">Esponal</li>
          <li className="px-4 py-2 hover:bg-gray-200">Italia</li>
        </ul>
      )}
    </div>
  );
};

export default Footer;
