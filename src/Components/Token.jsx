import React, { useState } from "react";
import { Token1 } from "../images";
const array = [
  { persantage: 40, name: "PUBLIC SALE", value: 40000000, bk: true },
  { persantage: 7, name: "TEAM", value: 40000000 },
  { persantage: 12, name: "DEX / CEX LISTINGS", value: 40000000 },
  { persantage: 9, name: "STAKING", value: 40000000 },
];
const array2 = [
  { persantage: 3, name: "COMPANY RESERVES", value: 40000000, bk: true },
  { persantage: 8, name: "MARKETING", value: 40000000 },
  { persantage: 4, name: "DEVELOPMENT", value: 40000000 },
  { persantage: 17, name: "REWARDS / AIRDROPS", value: 40000000 },
];
export const Token = () => {
  const [isHovered, setIsHovered] = useState(1);
  const handleMouseEnter = (index) => {
    console.log("index", index);
    setIsHovered(index);
  };

  const [isHovered2, setIsHovered2] = useState(1);
  const handleMouseEnter2 = (index) => {
    console.log("index", index);
    setIsHovered2(index);
  };

  return (
    <>
      <div style={{ fontFamily: "Regular" }} className="w-full mt-[200px]">
        <p
          style={{ fontFamily: "Regular" }}
          className="text-3xl md:text-6xl text-center md:text-left"
        >
          Token distribution
        </p>
        <div className="w-full flex flex-col md:flex-row justify-between items-center py-10 ">
          <div className="w-full md:w-[25%]">
            {array.map((item, i) => {
              return (
                <div
                  onMouseEnter={() => handleMouseEnter(i)}
                  key={i}
                  className="p-5 
                  hover:bg-[#1C1C1C] 
                   rounded-2xl space-y-2 mt-2"
                >
                  <p className="text-3xl">{item.persantage} %</p>
                  <div className=" flex justify-between items-center">
                    <p className="text-sm">{item.name}</p>
                    <p className="text-[#545454] text-sm">400,000,000 </p>
                  </div>
                  <div
                    className={`w-full ${
                      isHovered === i ? "bg-[#000]" : "bg-[#1C1C1C]"
                    } rounded-full h-2`}
                  >
                    <div
                      class="bg-[#A020F0] h-2 rounded-full"
                      style={{ width: `${item.persantage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-full md:w-[40%]">
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
                height: "100%",
                marginTop: "10px",
                width: "100%",
                marginX: "auto",
              }}
            >
              <source src="/cwgvideo.mp4" />
            </video>
          </div>
          <div className=" w-full md:w-[25%]">
            {array2.map((item, i) => {
              return (
                <div
                  onMouseEnter={() => handleMouseEnter2(i)}
                  key={i}
                  className="p-5  rounded-2xl space-y-2 mt-2  hover:bg-[#1C1C1C] "
                >
                  <p className="text-3xl">{item.persantage} %</p>
                  <div className=" flex justify-between items-center">
                    <p className="text-sm">{item.name}</p>
                    <p className="text-[#545454] text-sm">400,000,000 </p>
                  </div>
                  <div
                    className={`w-full ${
                      isHovered2 === i ? "bg-[#000]" : "bg-[#1C1C1C]"
                    } rounded-full h-2`}
                  >
                    <div
                      class="bg-[#A020F0] h-2 rounded-full"
                      style={{ width: `${item.persantage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
