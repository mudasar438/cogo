import React from "react";
import BasicButton from "./SmallComponent/Basicbutton";

export const Round1 = () => {
  return (
    <>
      <div className=" rounborder py-20 flex space-x-8 justify-between items-center flex-col md:flex-row space-y-10 md:space-y-0">
        <div className=" w-full md:w-[50%]  space-y-8 md:space-y-12">
          <div className="flex space-x-5  justify-center md:justify-start items-center">
            <p className="Rubik text-[#545454] font-semibold">
              [ROUND - 1 / 6]
            </p>
            <button className="bg-[#39E3BA] border border-[#39E3BA] px-3 py-1 rounded-2xl text-[#000] text-sm font-semibold">
              LIVE
            </button>
          </div>
          <p
            style={{ fontFamily: "Regular" }}
            className=" text-4xl md:text-7xl font-semibold text-[#545454] text-center md:text-left"
          >
            ROUND #1
          </p>
          <div className=" flex flex-col sm:flex-row gap-3  justify-center md:justify-start">
            <BasicButton text="connect wallet" />
            <button className="bg-[#000] hover:bg-[#231414] rounded-3xl px-7 font-Rubik font-normal py-1 py-2 border-2 border-[#545454] ">
              HOW TO BUY ?
            </button>
          </div>
        </div>
        <div className="w-[40%]  space-y-12">
          <div className="space-y-2">
            <p className="text-center md:text-left text-xl">$0.0034</p>
            <p className="Barlow text-[#545454] text-sm text-center md:text-left ">
              Purchase Price (1 BGPT)
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-center md:text-left text-xl">
              12 months (2% wested weekly)
            </p>
            <p className="Barlow text-[#545454] text-sm text-center md:text-left">
              Total Lock Period (Months Post Launch)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
