import React from "react";
import BasicButton from "./SmallComponent/Basicbutton";

export const Round1 = () => {
  return (
    <>
      <div className=" rounborder py-20 flex space-x-8 items-center flex-col md:flex-row space-y-10 md:space-y-0">
        <div className=" w-full md:w-[50%]  space-y-8 md:space-y-12">
          <div className="flex space-x-5  justify-center md:justify-start items-center">
            <p className="text-[#545454] font-semibold">[ROUND - 1 / 6]</p>
            <button className="bg-[#39E3BA] border border-[#39E3BA] px-3 py-1 rounded-2xl text-[#000] text-sm font-semibold">
              LIVE
            </button>
          </div>
          <p className=" text-4xl md:text-7xl font-semibold text-[#545454] text-center md:text-left">
            ROUND #1
          </p>
          <div className=" flex flex-col sm:flex-row gap-3  justify-center md:justify-start">
            <BasicButton text="connect wallet" />
            <button className="bg-[#000] px-5 py-2 border-2 rounded-3xl border-[#545454] font-semibold">
              HOW TO BUY ?
            </button>
          </div>
        </div>
        <div className="w-[50%]  space-y-12">
          <div className="space-y-2">
            <p className="text-center md:text-left">$0.0034</p>
            <p className="text-[#545454] text-sm text-center md:text-left">
              Purchase Price (1 BGPT)
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-center md:text-left">
              12 months (2% wested weekly)
            </p>
            <p className="text-[#545454] text-sm text-center md:text-left">
              Total Lock Period (Months Post Launch)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
