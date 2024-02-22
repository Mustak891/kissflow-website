import kissflowLogo from "../../../src/assets/kisslow-logo.png";
import { SlArrowDown } from "react-icons/sl";
import { TbApps } from "react-icons/tb";
import { GiProcessor } from "react-icons/gi";
import { MdSettings } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { GoVersions } from "react-icons/go";
import { RiRobot2Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiCoinInsert } from "react-icons/ci";
import { GiHumanTarget } from "react-icons/gi";
import whatsnew from "../../assets/whatsnew.png";
import { useState, useEffect } from "react";
import { TfiMenu } from "react-icons/tfi";
import { MdClear } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { GiEuropeanFlag } from "react-icons/gi";

const Navbar = () => {
  const [showmenu, setShowMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition <= 4000) {
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

  const togglemenu = () => {
    setShowMenu(!showmenu);
  };

  return (
    <>
      <TopNav />
      <header
        className={`bg-navbar ${
          scrolled ? "sticky" : ""
        } top-0 transition-all duration-300 `}
      >
        <nav className="container flex items-center justify-between h-[70px] py-2">
          {/* logo selection */}
          <div className="text-3xl md:text3xl text-gray-700 flex">
            <img src={kissflowLogo} className="h-10 w-10" alt="kissflowlogo" />
            <a href="#">kissflow</a>
          </div>
          {/* menu selection */}
          <div className="hidden md:block ">
            <ul className="flex items-center gap-4">
              <li className="group cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[2px] h-[72px] font-medium hover:text-blue-600"
                >
                  Platform{" "}
                  <span>
                    {" "}
                    <SlArrowDown className="font-bold transition-all duration-200 group-hover:rotate-180 h-2 " />{" "}
                  </span>{" "}
                </a>
                {/* dropdown selection */}
                <div className="absolute left-10 z-[99999] hidden w-[90%]  rounded-b-3xl bg-white p-2 text-black group-hover:block shadow-md py-10">
                  <div className="flex justify-evenly">
                    <div className="flex flex-col space-y-6">
                      <div className="flex flex-col space-y-3">
                        <small>OVERVIEW</small>
                        <hr className="md:w-[250px]" />
                      </div>
                      <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                        <h5>Platorm Overview</h5>
                        <p className="text text-gray-400">
                          explore the entire work platorm
                        </p>
                      </span>
                      <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                        <h5>Why Kissflow</h5>
                        <p className="text text-gray-400">
                          Learn what makes us different
                        </p>
                      </span>
                      <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                        <h5 className="text text-blue-600 ">Schedule a Demo</h5>
                        <p className="text text-gray-400">
                          See the platform in action for yourself
                        </p>
                      </span>
                    </div>
                    <div>
                      <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-3">
                          <small>USE CASE</small>
                          <hr className="md:w-[250px]" />
                        </div>
                        <span className="flex items-center gap-1 hover:text-blue-600">
                          <TbApps className="text-blue-600" />{" "}
                          <h5>Application Development</h5>
                        </span>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <GiProcessor className="text-blue-600" />{" "}
                          <h5>Process Automation</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <MdSettings className="text-blue-600" />{" "}
                          <h5>Digital Information</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <AiOutlineRobot className="text-blue-600" />{" "}
                          <h5>Citizen Development</h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-3">
                          <small>FEATURES</small>
                          <hr className="md:w-[250px]" />
                        </div>
                        <span className="flex items-center gap-1 hover:text-blue-600">
                          <TbApps className="text-blue-600" />{" "}
                          <h5>App Builder</h5>
                        </span>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <GiProcessor className="text-blue-600" />{" "}
                          <h5>Process Builder</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <MdLibraryBooks className="text-blue-600" />{" "}
                          <h5>Boards</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <GoVersions className="text-blue-600" />{" "}
                          <h5>Governance</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <RiRobot2Line className="text-blue-600" />{" "}
                          <h5>Integrations</h5>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600">
                          <h5>Explore all features</h5> <MdArrowRightAlt />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-3">
                          <small>TEMPLATES</small>
                          <hr className="md:w-[250px]" />
                        </div>
                        <span className="flex items-center gap-1 hover:text-blue-600">
                          <MdOutlineShoppingCart className="text-blue-600" />{" "}
                          <h5>Procurement</h5>
                        </span>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <CiCoinInsert className="text-blue-600" />{" "}
                          <h5>Finance</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <GiHumanTarget className="text-blue-600" />{" "}
                          <h5>Human Resources</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <AiOutlineRobot className="text-blue-600" />{" "}
                          <h5>Admin & Ops</h5>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600">
                          <h5>Explore all templates</h5> <MdArrowRightAlt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="group  cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[2px] h-[72px] font-medium hover:text-blue-600"
                >
                  Solution{" "}
                  <span>
                    {" "}
                    <SlArrowDown className="font-bold transition-all duration-200 group-hover:rotate-180 h-2 " />{" "}
                  </span>{" "}
                </a>
                {/* dropdown selection */}
                <div className="absolute left-10 z-[99999] hidden w-[90%]  rounded-b-3xl bg-white p-2 text-black group-hover:block shadow-md py-10">
                  <div className="flex justify-evenly">
                    <div className="flex flex-col space-y-6">
                      <div className="flex flex-col space-y-3">
                        <small>BY USE CASE</small>
                        <hr className="md:w-[250px]" />
                      </div>
                      <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                        <span className="flex items-center gap-1 hover:text-blue-600">
                          <TbApps className="text-blue-600" />{" "}
                          <h5>App Development</h5>
                        </span>
                        <p className="text text-gray-400">
                          Create a fully functional apps
                          <p>with no-code and low-code apps.</p>
                        </p>
                      </span>
                      <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                        <span className="flex items-center gap-1 hover:text-blue-600">
                          <TbApps className="text-blue-600" />{" "}
                          <h5>Workflow Management</h5>
                        </span>
                        <p className="text text-gray-400">
                          Develop and deploy simple or
                          <p>complex workflows in a minutes.</p>
                        </p>
                      </span>
                      <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                        <span className="flex items-center gap-1 hover:text-blue-600">
                          <TbApps className="text-blue-600" />{" "}
                          <h5>Case Management</h5>
                        </span>
                        <p className="text text-gray-400">
                          Handling Ticket and support
                          <p>requests and costimizable boards</p>
                        </p>
                      </span>
                    </div>
                    <div>
                      <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-3">
                          <small>BY INDUSTRY</small>
                          <hr className="md:w-[250px]" />
                        </div>
                        <span className="flex items-center gap-1 hover:text-blue-600">
                          <TbApps className="text-blue-600" /> <h5>Banking</h5>
                        </span>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <GiProcessor className="text-blue-600" />{" "}
                          <h5>Healthcare</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <MdSettings className="text-blue-600" />{" "}
                          <h5>Manufacturing</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <AiOutlineRobot className="text-blue-600" />{" "}
                          <h5>Retail</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <AiOutlineRobot className="text-blue-600" />{" "}
                          <h5>Insurance</h5>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600">
                          <h5>Explore all features</h5> <MdArrowRightAlt />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-3">
                          <small>BY INITIATIVE</small>
                          <hr className="md:w-[250px]" />
                        </div>
                        <span className="flex items-center gap-1 hover:text-blue-600">
                          <TbApps className="text-blue-600" />{" "}
                          <h5>Process Automation</h5>
                        </span>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <GiProcessor className="text-blue-600" />{" "}
                          <h5>Digital Transformation</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <MdLibraryBooks className="text-blue-600" />{" "}
                          <h5>Citization Developement</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <GoVersions className="text-blue-600" />{" "}
                          <h5>Legacy Modernization</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <RiRobot2Line className="text-blue-600" />{" "}
                          <h5>Lotus Notes Migration </h5>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600">
                          <h5>Explore all features</h5> <MdArrowRightAlt />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-3">
                          <small>BY FUNCTION</small>
                          <hr className="md:w-[250px]" />
                        </div>
                        <span className="flex items-center gap-1 hover:text-blue-600">
                          <MdOutlineShoppingCart className="text-blue-600" />{" "}
                          <h5>Procurement</h5>
                        </span>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <GiHumanTarget className="text-blue-600" />{" "}
                          <h5>Human Resources</h5>
                        </div>
                        <div className="flex items-center gap-1 hover:text-blue-600">
                          <CiCoinInsert className="text-blue-600" />{" "}
                          <h5>Finance</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="font-medium hover:text-blue-600">App Store</li>

              <li className="group  cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[2px] h-[72px] font-medium hover:text-blue-600"
                >
                  Resources{" "}
                  <span>
                    {" "}
                    <SlArrowDown className="font-bold transition-all duration-200 group-hover:rotate-180 h-2 " />{" "}
                  </span>{" "}
                </a>
                {/* dropdown selection */}
                <div className="absolute left-10 z-[99999] hidden w-[90%]  rounded-b-3xl bg-white p-2 text-black group-hover:block shadow-md py-10">
                  <div className="flex justify-evenly">
                    <div className="flex flex-col space-y-6">
                      <div className="flex flex-col space-y-3">
                        <small>EXPLORE</small>
                        <hr className="md:w-[650px]" />
                      </div>
                      <div className="flex justify-between">
                        <div className="space-y-6">
                          <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                            <span className="flex items-center gap-1 hover:text-blue-600">
                              <TbApps className="text-blue-600" />{" "}
                              <h5>Events</h5>
                            </span>
                            <p className="text text-gray-400">
                              visit us at our upcomming live or virtual event.
                            </p>
                          </span>
                          <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                            <span className="flex items-center gap-1 hover:text-blue-600">
                              <TbApps className="text-blue-600" />{" "}
                              <h5>Developer Hub </h5>
                            </span>
                            <p className="text text-gray-400">
                              Resources for anyone on building on kissflow
                            </p>
                          </span>
                          <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                            <span className="flex items-center gap-1 hover:text-blue-600">
                              <TbApps className="text-blue-600" />{" "}
                              <h5>eBook</h5>
                            </span>
                            <p className="text text-gray-400">
                              Deeper ideas and strategies to digitally transform
                            </p>
                          </span>
                        </div>

                        <div className="space-y-6">
                          <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                            <span className="flex items-center gap-1 hover:text-blue-600">
                              <TbApps className="text-blue-600" />{" "}
                              <h5>Succeess stories</h5>
                            </span>
                            <p className="text text-gray-400">
                              see how coustomer have leveraged kissflow
                            </p>
                          </span>
                          <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                            <span className="flex items-center gap-1 hover:text-blue-600">
                              <TbApps className="text-blue-600" />{" "}
                              <h5>ROI Calculator</h5>
                            </span>
                            <p className="text text-gray-400">
                              Calculate time and cost savings with low-code
                            </p>
                          </span>
                          <span className="flex flex-col space-y-4 hover:border border-blue-600 rounded-md px-2 py-1">
                            <span className="flex items-center gap-1 hover:text-blue-600">
                              <TbApps className="text-blue-600" />{" "}
                              <h5>Videos</h5>
                            </span>
                            <p className="text text-gray-400">
                              see what happens when you combine simple and
                              powerful
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-3">
                          <small>BY FUNCTION</small>
                          <hr className="md:w-[250px]" />
                        </div>
                        <div className=" items-center gap-1">
                          <img
                            src={whatsnew}
                            alt="whatsnew"
                            className="object-cover md:w-[450px] rounded-md"
                          />
                          <h5>Experience the power of Kissflow firsthand</h5>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600">
                          <h5>Register Now</h5> <MdArrowRightAlt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="font-medium hover:text-blue-600">Pricing</li>
            </ul>
          </div>
          <div className="hidden items-center md:block space-x-2">
            <button className="border border-blue-600 rounded-md px-4 py-1 text-blue-600 cursor-pointer hover:bg-blue-100 hover:text-blue-600 ">
              Live Demo
            </button>
            <button className="px-4 py-1 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform ">
              Get Started
            </button>
          </div>
          {/* mobile menu selection */}
          <div>
            {showmenu ? (
              <MdClear
                onClick={togglemenu}
                className="curser-pointer transition-all md:hidden block mr-10"
                size={30}
              />
            ) : (
              <TfiMenu
                onClick={togglemenu}
                className="curser-pointer transition-all md:hidden block"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveNavbar showmenu={showmenu} />
    </>
  );
};

const ResponsiveNavbar = ({ showmenu }) => {
  // console.log("current :",showmenu)
  return (
    <div
      className={`${showmenu ? "top-16" : "-top-[200%]"} ${
        showmenu == false ? "hidden" : "block"
      } fixed bottom-0 top-0 left-20 z-20 flex h-screen w-[80%] flex-col space-y-5 bg-white px-8 pb-6 pt-10 text-black shadow-md transition-all duration-200 md:hidden divide-y divide-slate-300`}
    >
      {showmenu == true ? (
        <>
          <div className="w-[100%] flex justify-between p-2 hover:bg-blue-200 cursor-pointer hover:text-blue-600">
            <div>Platform </div> <SlArrowDown />{" "}
          </div>

          <div className="w-[100%] flex justify-between p-2 hover:bg-blue-200 cursor-pointer hover:text-blue-600">
            <div>Solutions </div> <SlArrowDown />
          </div>
          <div className="w-[100%] flex justify-between p-2 hover:bg-blue-200 cursor-pointer hover:text-blue-600">
            <div>App store </div>{" "}
          </div>
          <div className="w-[100%] flex justify-between p-2 hover:bg-blue-200 cursor-pointer hover:text-blue-600">
            <div>Resources </div> <SlArrowDown />{" "}
          </div>
          <div className="w-[100%] flex justify-between p-2 hover:bg-blue-200 cursor-pointer hover:text-blue-600">
            {" "}
            <div>Pricing </div>
          </div>
          <div className="w-[100%] flex justify-between p-2 hover:bg-blue-200 cursor-pointer hover:text-blue-600">
            <div>Langauges </div> <SlArrowDown />{" "}
          </div>
          <div className="w-[100%] flex justify-between p-2 hover:bg-blue-200 cursor-pointer hover:text-blue-600">
            <div>Sign in</div>{" "}
          </div>
          <div className="w-[100%] grid grid-flow-col gap-4 justify-stretch p-2">
            <button className="border border-blue-600 rounded-md px-4 py-1 text-blue-600 cursor-pointer hover:bg-blue-100 hover:text-blue-600">
              Live Demo
            </button>
            <button className="px-4 py-1 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform ">
              Get Started
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

const TopNav = () => {
  return (
    <div className=" bg-blue-100 md:block hidden transition-all">
      <ul className="flex justify-end gap-4 mr-40 p-2  ">
        <li className="relative group flex items-center gap-1 cursor-pointer hover:text-blue-600">
          {" "}
          <div>
            {" "}
            <GrLanguage />{" "}
          </div>
          <div>En</div>
          <div>
            <SlArrowDown />
          </div>
          <ul className="absolute top-12 shadow-sm z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
            <li className="flex gap-1 items-center ">
              {" "}
              <span>
                <GiEuropeanFlag className="text-red-500" />{" "}
              </span>
              Deutsh
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <span>
                <GiEuropeanFlag className="text-blue-500" />{" "}
              </span>
              Francais
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <span>
                <GiEuropeanFlag className="text-green-500" />{" "}
              </span>
              Espanol
            </li>
            <li className="flex gap-1 items-center">
              {" "}
              <span>
                <GiEuropeanFlag className="text-yellow-500" />{" "}
              </span>
              Italia
            </li>
          </ul>
        </li>
        <li className="cursor-pointer hover:text-blue-600">Support</li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
          <div>
            <FaSignInAlt />
          </div>
          <div className="cursor-pointer">Sign in</div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
