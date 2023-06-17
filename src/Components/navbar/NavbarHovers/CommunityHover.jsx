/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";

import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
// import LaunchIcon from "@material-ui/icons/Launch";
import { BsBoxArrowUpRight } from "react-icons/bs";

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
  const [hover, setHover] = useState({
    name: " Telegra",
    icon: <FaTelegramPlane />,
    heading: "https://t.me/cogwise_io",
  });
  return (
    <>
      <div
        style={{ fontFamily: "Regular" }}
        className="absolute z-10 text-[#fff] bg-[#16161b] py-3 px-1  top-[10px] md:top-[25px]  border border-[#303030] rounded-xl w-[280px] left-0  md:w-[400px] none flex flex-col md:flex-row justify-between  items-start "
      >
        <div className="flex flex-col items-start  w-full space-y-3 text-left">
          {array.map((item, i) => {
            return (
              <div
                onMouseEnter={() => setHover(item)}
                key={i}
                className=" w-full  border-r-[#303030] hover:bg-[#212129] rounded-lg p-2 "
              >
                <a
                  target="_blank"
                  href={`https//:${item.heading}`}
                  rel="noreferrer"
                  className="w-full flex  justify-between  items-center  lg:justify-between  space-x-3    "
                >
                  <div className=" flex space-x-3">
                    <div className="w-[40px] h-[40px] rounded-full p-3 bg-[#414141]">
                      {item.icon}
                    </div>
                    <div className=" w-full">
                      <p className="font-medium  text-[16px] ">{item.name}</p>
                      <p className="text-[#5C5C5C] text-sm md:text-sm font-medium overflow-hidden">
                        {item.heading}
                      </p>
                    </div>
                  </div>
                  <div className="pr-2 font-extrabold ">
                    {hover?.name === item?.name ? <BsBoxArrowUpRight /> : ""}
                  </div>
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
