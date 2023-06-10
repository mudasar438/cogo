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
          <p className=" text-[#848486] font-semibold text-center w-full md-[40%] ">
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
            <button className=" text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px]   px-8 py-[15px] rounded-[24px] ">
              <p className="text-center flex justify-center items-center  w-full">
                {" "}
                BUY $CGW{" "}
                <span>
                  {" "}
                  <FiArrowUpRight className=" ml-2 text-xl font-semibold" />
                </span>
              </p>{" "}
            </button>
            <button className="border text-[14px]  bg-[#000] hover:bg-[#231414] min-w-[160px]  px-8 py-[15px] rounded-[24px] ">
              <p className="text-center flex justify-center items-center  w-full tracking-[1.3px]">
                {" "}
                HOW TO BUY ?
              </p>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
