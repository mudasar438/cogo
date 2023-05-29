import React from "react";
import { logo } from "../images";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <div className="h-[600px] md:h-[450px] w-full  py-20 ">
        <div className="w-[80%] mx-0 md:mx-auto flex flex-col md:flex-row md:justify-between items-start">
          <div className="w-full md:w-[50%]">
            <div className=" flex space-x-8  md:justify-between">
              <ul className="space-y-5">
                {" "}
                <li>Presale</li>
                <li>About us</li>
                <li>Whitepaper</li>
                <li>How to buy?</li>
                <li>Contact</li>
              </ul>
              <div className="w-[55%] space-y-10">
                <p>
                  We are always looking for dedicated people to join our
                  interdisciplinary team.
                </p>
                <button>Send your CV</button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[20%] space-y-10 mt-5 md:0">
            <div className="w-[30%] mx-auto md:w-full ">
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
            <p className="text-center md:text-left">
              700 Main St Cambridge, MA 02139United States
            </p>
            <div className=" flex justify-center space-x-5">
              <FaFacebookF />
              <AiOutlineInstagram />
              <AiOutlineYoutube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
