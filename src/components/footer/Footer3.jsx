import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer3 = () => {
  return (
    <div className="py-10 px-4">
      <section className="container flex justify-between flex-wrap">
        <div className="">
          <small className="border-r border-black px-1 cursor-pointer hover:text-blue-400">Terms of Service</small>
          <small className="border-r border-black px-1 cursor-pointer hover:text-blue-400">Privacy Policy</small>
          <small className="border-r border-black px-1 cursor-pointer hover:text-blue-400"> Compliance</small>
          <small className="border-r border-black px-1 cursor-pointer hover:text-blue-400">Security</small>
          <small className="border-r border-black px-1 cursor-pointer hover:text-blue-400"> GDPR</small>
          <small className="border-r border-black px-1 cursor-pointer hover:text-blue-400">
            Responsible Disclosure
          </small>
          <small className="px-1 cursor-pointer hover:text-blue-400">End of Life (EoL)</small>
        </div>
        <div className="flex gap-6">
          <small>Copyright © 2024 Kissflow Inc.</small>
          <div className="flex gap-4">
            <FaXTwitter className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer3;
