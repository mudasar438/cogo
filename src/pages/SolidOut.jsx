import React from "react";
import { eth, t } from "../images";
import { ConnectWallect } from "../Components/SmallComponent/ConnectWallect";

export const SolidOut = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Regular" }}
        className=" w-full lg:w-[50%] mx-auto flex justify-center py-[50px]"
      >
        <div className="w-full lg:w-[70%]  p-5 rounded-xl flex flex-col item-center justify-center  gap-8 border border-[#303030]">
          <div className="space-y-3">
            <div className="flex space-x-5 items-center justify-center">
              <p className="bg-[#232323] rounded-2xl p-3  w-[160px]  flex self-center  ">
                STAGE 6 [ $0.060 ]
              </p>
              <button className="bg-[#E33962] px-3 p-1 h-8 rounded-2xl text-[#000] font-normal Rubik">
                SOLD OUT
              </button>
            </div>
            <p className="text-4xl font-normal  text-center font-Rubik w-full ">
              We’re sold out!
            </p>
          </div>
          <div className="">
            <p className="text-[#858585] font-medium text-center">
              RAISED $14,000,000{" "}
            </p>
            <p className=" font-medium text-center">400,000,000 CGW</p>
          </div>

          <div className="w-full bg-gray-200 rounded-full dark:bg-[#232323]">
            <div
              className=" bg-gradient-to-r from-[#0e100f] to-[#47ac93] text-xl font-medium  text-center p-0.5 leading-none rounded-full"
              style={{ width: "100.00%" }}
            >
              {" "}
              100.00%
            </div>
          </div>
          <div className=" flex flex-col   sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12 shadow-xl w-full items-center justify-between ">
            <div className="">
              <p className="text-[#858585] font-medium">SOLD (CGW)</p>
              <p className="text-2xl py-2">270,192,205</p>
              <p className="text-[#545454] font-medium">/ 300,000,000</p>
            </div>

            <div className="">
              <p className="text-[#858585] font-medium">SOLD (BGPT)</p>
              <p className="text-2xl py-2">270,192,205</p>
              <p className="text-[#545454] font-medium">/ 300,000,000</p>
            </div>
          </div>
          <div className=" flex flex-col   sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12 shadow-xl w-full items-center justify-between ">
            <div className="space-y-3">
              <p className="text-[#858585] font-medium">Listing price:</p>
              <p className="text-2xl  bg-[#29957B] rounded-3xl text-center">
                $0.09
              </p>
            </div>

            <div className="">
              <p className="text-[#858585] font-medium">Token Launch Date:</p>
              <p className="text-2xl py-2">21 Sept 2021</p>
            </div>
          </div>
          <div className="flex flex-col  w-full md:flex-row items-center justify-center md:justify-start lg:justify-center space-y-12 md:space-y-0 md:space-x-10">
            {/* <BasicButton text="BUY WITH ETH" /> */}
            {/* <MyModal />
            <DilogCogo /> */}
            <ConnectWallect text="CONNECT TO DASHBOARD" />
          </div>
          <div className=" flex flex-col sm:flex-row space-y-8 sm:space-y-0  justify-center sm:justify-between items-center">
            <div className="flex justify-center sm:justify-start space-x-3">
              <p>How to buy?</p>
              <span className="text-[#3A3A3A]">|</span>
              <p>New to Crypto?</p>
            </div>
            <div className="flex justify-end space-x-3">
              <img src={eth} alt="" srcSet="" />
              <img src={t} alt="" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
