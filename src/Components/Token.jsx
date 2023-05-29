import React from "react";
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
  return (
    <>
      <div className="w-full mt-[100px]">
        <p className="text-3xl md:text-6xl text-center md:text-left">
          Token distribution
        </p>
        <div className="w-full flex flex-col md:flex-row justify-between items-center py-10 ">
          <div className="w-full md:w-[25%]">
            {array.map((item, i) => {
              return (
                <div
                  key={i}
                  className="p-5 
                  hover:bg-[#1C1C1C] 
                   rounded-2xl space-y-2 mt-2"
                >
                  <p>{item.persantage} %</p>
                  <div className=" flex justify-between items-center">
                    <p>{item.name}</p>
                    <p className="text-[#545454] text-sm">400,000,000 </p>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      class="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: item.persantage }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <img
            src={Token1}
            alt=""
            srcSet=""
            style={{ width: "350px", height: "350px", objectFit: "contain" }}
          />
          <div className=" w-full md:w-[25%]">
            {array2.map((item, i) => {
              return (
                <div
                  key={i}
                  className="p-5  rounded-2xl space-y-2 mt-2  hover:bg-[#1C1C1C] "
                >
                  <p>{item.persantage} %s</p>
                  <div className=" flex justify-between items-center">
                    <p>{item.name}</p>
                    <p className="text-[#545454] text-sm">400,000,000 </p>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      class="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: item.persantage }}
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
