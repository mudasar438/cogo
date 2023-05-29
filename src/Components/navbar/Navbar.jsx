import React, { useState } from "react";
import { logo } from "../../images";
import BasicButton from "../SmallComponent/Basicbutton";
import { FaTelegramPlane } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full">
        <div className="justify-between px-4 mx-auto md:items-center md:flex ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <img src={logo} alt="" srcSet="" />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-[#fff] rounded-md outline-none focus:border-[#fff] focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex justify-self-center md:justify-between pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="flex space-x-2 items-center">
                  <p>SOLUTIONS</p>{" "}
                  <FiArrowDownRight className="text-[#8d7b7b] font-semibold" />
                </li>
                <li>
                  PRESALE{" "}
                  <button className="bg-[#39E3BA] border border-[#39E3BA] px-3  rounded-2xl text-[#000] text-[12px] ml-1 font-semibold">
                    LIVE
                  </button>
                </li>
                <li>TEAM</li>
                <li className="flex space-x-2 items-center">
                  {" "}
                  <p>CMMUNITY</p>{" "}
                  <FiArrowDownRight className="text-[#4240a6] font-semibold" />
                </li>
                <li>CONTACT</li>{" "}
              </ul>
            </div>
          </div>
          <div
            className={`flex items-center flex-row  justify-center md:block ${
              navbar ? "flex" : "hidden"
            }`}
          >
            <div className="flex gap-2 ">
              <div className="bg-[ #272727] p-2 rounded-full">
                <FaTelegramPlane className="text-2xl" />
              </div>

              <BasicButton text="connect" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
