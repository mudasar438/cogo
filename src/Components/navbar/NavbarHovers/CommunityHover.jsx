import React from "react";

import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
const array = [
  {
    name: " Telegra",
    icon: <FaTelegramPlane />,
    heading: "Hyper-charged NLP language",
  },
  {
    name: " Twitter",
    icon: <AiOutlineTwitter />,
    heading: "Hyper-charged NLP language",
  },
  {
    name: " Medium",
    icon: <SiMedium />,
    heading: "Hyper-charged NLP language",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    heading: "Hyper-charged NLP language",
  },
];

export const CommunityHover = () => {
  return (
    <>
      <div className="absolute Barlow bg-[#16161b] py-3 px-1  h-[340px] top-[150px] md:top-[57px]  border border-[#303030] rounded-xl w-[300px]  md:w-[400px] none flex flex-col md:flex-row justify-between  items-start ">
        <div className=" w-full space-y-3 text-left">
          {array.map((item, i) => {
            return (
              <div
                // onMouseLeave={() => setHover(item)}
                key={i}
                className="  border-r-[#303030] hover:bg-[#212129] rounded-lg p-2 "
              >
                <div className="w-full flex  justify-center  items-center lg:items-start  lg:justify-start  space-x-3    ">
                  <div className="w-[40px] h-[40px] rounded-full p-3 bg-[#553b3b]">
                    {item.icon}
                  </div>
                  <div className=" flex flex-col justify-center  lg:items-start ">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-[#5C5C5C] Barlow ">{item.heading}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
// absolute Barlow bg-[#030304] py-3 px-1  h-[340px] top-11  border border-[#303030] rounded-xl w-[450px]  md:w-[700px] none flex flex-col md:flex-row justify-between  items-start
