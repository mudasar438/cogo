import React from "react";
import { logo } from "../images";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";

export const Footer = () => {
  return (
    <>
      <div className="h-[700px] md:h-[800px] w-full px-5  py-5 ">
        <div className="boderTop w-full md:w-[80%] mx-0 md:mx-auto flex flex-col md:flex-row md:justify-between items-start py-20 mt-10 ">
          <div className="w-full md:w-[60%]">
            <div className=" flex flex-col md:flex-row  items-center md:items-start space-y-5 md:space-y-0 space-x-0 md:space-x-8  md:justify-between">
              <ul
                style={{ fontFamily: "Regular" }}
                className="space-y-5 text-xl"
              >
                {" "}
                <li className="hover:text-[blue]">Presale</li>
                <li className="hover:text-[blue]">About us</li>
                <li className="hover:text-[blue]">Whitepaper</li>
                <li className="hover:text-[blue]">How to buy?</li>
                <li className="hover:text-[blue]">Contact</li>
              </ul>
              <div className="w-[100%] md:w-[55%] space-y-10  flex flex-col item-center">
                <p
                  style={{ fontFamily: "Regular" }}
                  className="Barlow text-[#B2B2B2] text-center md:text-left"
                >
                  We are always looking for dedicated people to join our
                  interdisciplinary team.
                </p>
                <button className="flex space-x-3 justify-center md:justify-start items-center">
                  <p>Send your CV </p>
                  <FiArrowUpRight className="text-[#fff] bg-[#292929] p-4 text-5xl rounded-full" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[20%] space-y-10 mt-5 md:0 flex items-center flex-col md:justify-start">
            <div className="mx-auto md:w-full  ">
              <img
                src={logo}
                alt=""
                srcSet=""
                style={{
                  display: "flex",
                  width: "150px",
                  objectFit: "contain",
                }}
              />
            </div>
            <p
              style={{ fontFamily: "Regular" }}
              className="text-center md:text-left text-[#B2B2B2]"
            >
              700 Main St Cambridge, MA 02139United States
            </p>
            <div className=" flex justify-center space-x-5">
              <div className="bg-[#292929] p-4 rounded-[20px] text-2xl">
                <AiOutlineTwitter />
              </div>
              <div className="bg-[#292929] p-4 rounded-[20px] text-2xl">
                <AiOutlineInstagram />
              </div>
              <div className="bg-[#292929] p-4 rounded-[20px] text-2xl">
                <AiOutlineYoutube />
              </div>
            </div>
          </div>
        </div>
        <div className="boderTopBottom Barlow w-full md:w-[80%] mx-0 md:mx-auto mt-5 md:mt-20 py-20 mb-5 flex flex-col md:flex-row space-y-5 md:space-x-0 justify-between items-center text-[12px] text-[#8C8C8C] font-semibold">
          <p className="font-bold">
            ©2023 ― 1910 GENETICS. ALL RIGHTS RESERVED.
          </p>
          <p className="font-bold">
            ©2023 ― 1910 GENETICS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </>
  );
};
