/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

import { Link } from "react-router-dom";
const array = [
  {
    name: " Telegra",
    icon: <FaTelegramPlane />,
    heading: "https://t.me/cogwise_io",
  },
  {
    name: " Twitter",
    icon: <AiOutlineTwitter />,
    heading: "https://twitter.com/cogwise",
  },
  {
    name: " Medium",
    icon: <SiMedium />,
    heading: "https://medium.com/@cogwise",
  },
  {
    name: " Raddit",
    icon: <FaTelegramPlane />,
    heading: "https://www.reddit.com/r/cogwise",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    heading: "https://github.com/cogwise-io",
  },
];

export const CommunityHover = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Regular" }}
        className="absolute  bg-[#16161b] py-3 px-1  top-[150px] md:top-[45px]  border border-[#303030] rounded-xl w-[300px]  md:w-[400px] none flex flex-col md:flex-row justify-between  items-start "
      >
        <div className="flex flex-col items-start  w-full space-y-3 text-left">
          {array.map((item, i) => {
            return (
              <div
                // onMouseLeave={() => setHover(item)}
                key={i}
                className="  border-r-[#303030] hover:bg-[#212129] rounded-lg p-2 "
              >
                <a
                  target="_blank"
                  href={`https//:${item.heading}`}
                  rel="noreferrer"
                  className="w-full flex  justify-center  items-center lg:items-start  lg:justify-start  space-x-3    "
                >
                  <div className=" flex space-x-3">
                    <div className="w-[40px] h-[40px] rounded-full p-3 bg-[#553b3b]">
                      {item.icon}
                    </div>
                    <div className=" w-full">
                      <p className="font-medium  text-lg ">{item.name}</p>
                      <p className="text-[#5C5C5C] text-sm md:text-lg font-medium overflow-hidden">
                        {item.heading}
                      </p>
                    </div>
                  </div>
                  {/* <FaArrowUpRightFromSquare /> */}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
// absolute  bg-[#030304] py-3 px-1  h-[340px] top-11  border border-[#303030] rounded-xl w-[450px]  md:w-[700px] none flex flex-col md:flex-row justify-between  items-start
