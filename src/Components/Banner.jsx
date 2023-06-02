import React from "react";
import { cwg, g1 } from "../images";
import { FiCopy } from "react-icons/fi";
export const Banner = () => {
  return (
    <>
      <div className="bg-[#161616] rounded-2xl p-4 md:p-8  mt-[100] lg:mt-[150px] flex justify-center flex-col lg:flex-row space-y-12 lg:justify-between items-center lg:space-y-0 ">
        <div className="w-full flex  justify-center  items-center lg:items-start  lg:justify-start  space-x-3   lg:w-[25%] ">
          <img
            src={cwg}
            alt=""
            srcSet=""
            style={{ width: "50px", height: "50px" }}
          />
          <div className=" flex flex-col justify-center items-start ">
            <p className="text-[#5C5C5C] Barlow">CONTRACT ADDRESS</p>
            <p className=" ">0x021D4f55AF40A1Ce428A</p>
          </div>
        </div>
        <div className="Barlow ">
          <p className="text-[#5C5C5C] ">NETWORK</p>
          <p className="text-xl">Ethereum ERC-20</p>
        </div>
        <div className="flex space-x-5 items-center justify-end">
          <img src={g1} alt="" srcSet="" />
          <div className="Rubik border-2 border-[#5C5C5C] rounded-3xl px-3 py-2 flex space-x-4 items-center">
            <p> COPY ADDR</p>
            <FiCopy />
          </div>
        </div>
      </div>
    </>
  );
};
