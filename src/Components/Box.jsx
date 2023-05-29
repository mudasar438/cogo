import React from "react";
import BasicButton from "./SmallComponent/Basicbutton";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

export const Box = () => {
  return (
    <>
      <div className="boxbg mt-[100px]">
        <div className=" w-full md:w-[40%] mx-auto flex flex-col items-center pt-10 space-y-5 ">
          <p className="text-[#848486] font-semibold text-center ">
            [ OUR JOURNEY HAD BEGUN ]
          </p>
          <p className="text-center text-3xl  md:text-7xl w-[70%]">
            Participate in Presale
          </p>
          <p className="text-center  text-[#848486]">
            We understand that the world of crypto & blockchain can be confusing
            and overwhelming, but with blockGPT,
          </p>
          <div className=" flex flex-col sm:flex-row gap-3  justify-center md:justify-start">
            <button className="flex space-x-5 items-center text-[#fff] text-lg bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px]   px-6 py-2 rounded-3xl font-medium text-center">
              <p> BUY $CGW</p> <FiArrowUpRight className=" font-semibold" />
            </button>
            <button className="bg-[#000] px-5 py-2 border-2 rounded-3xl border-[#545454] font-semibold">
              HOW TO BUY ?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
