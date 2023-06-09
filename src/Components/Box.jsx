import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
export const Box = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Regular" }}
        className="relative  mt-[100px] bshadow  z-0"
      >
        <video
          autoPlay
          crossOrigin="anonymous"
          loop
          muted
          playsInline
          preload="auto"
          role="presentation"
          tabIndex="-1"
          style={{
            borderRadius: "10px",
            height: "500px",
            objectFit: "cover",
            marginTop: "10px",
            width: "100vw",
            zIndex: 0,
            boxShadow: "rgb(0, 0, 0) 0px 0px 35px 48px inset",
          }}
        >
          <source src="/presale.mp4" />
        </video>

        <div className="absolute bshadow top-0 left-0 right-0 ml-auto mr-auto  w-full md:w-[100%] h-full mx-auto flex flex-col items-center pt-10 space-y-5 ">
          <p className="Rubik text-[#848486] font-semibold text-center w-full md-[40%] ">
            [ OUR JOURNEY HAD BEGUN ]
          </p>
          <p
            style={{ fontFamily: "Regular" }}
            className="text-center text-3xl  md:text-7xl  w-full  md:w-[30%] "
          >
            Participate in Presale
          </p>
          <p className=" text-center  text-[#848486]  w-full  md:w-[30%]">
            We understand that the world of crypto & blockchain can be confusing
            and overwhelming, but with blockGPT,
          </p>
          <div className=" flex flex-col sm:flex-row gap-3  justify-center md:justify-start">
            <button className="flex space-x-5 items-center text-[#fff] text-lg bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px]   px-6 py-2 rounded-3xl font-medium text-center">
              <p> BUY $CGW</p> <FiArrowUpRight className=" font-semibold" />
            </button>
            <button className="bg-[#000] px-5 py-2 border-2 rounded-3xl border-[#545454] font-normal">
              HOW TO BUY ?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
