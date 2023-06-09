import React from "react";
import { join, tlegram } from "../images";

export const Baner2 = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Regular" }}
        className="bg-[#161616] rounded-2xl p-4 md:p-8  mt-[100] lg:mt-[150px] flex justify-center flex-col lg:flex-row space-y-12 lg:justify-between items-center lg:space-y-0 "
      >
        <div className="w-full flex  justify-center  items-center lg:items-start  lg:justify-start  space-x-3   lg:w-[25%] ">
          <img
            src={tlegram}
            alt=""
            srcSet=""
            style={{ width: "50px", height: "50px" }}
          />
          <div className=" flex flex-col justify-center items-center lg:items-start ">
            <p className="text-[#5C5C5C] ">Official Telegram Channel</p>
            <p className=" ">Cogwise (CGW) - Official</p>
          </div>
        </div>
        <div className=" ">
          <p className=" text-[#5C5C5C] ">MEMBERS</p>
          <p className="text-xl">4,875</p>
        </div>
        <div className="flex space-x-5 items-center justify-end">
          <button className=" border-2 border-[#5C5C5C] rounded-3xl px-3 py-2 flex space-x-4 items-center">
            <p className="Rubik"> JOIN GROUP</p>
            <img src={join} alt="" srcSet="" />
          </button>
        </div>
      </div>
    </>
  );
};
