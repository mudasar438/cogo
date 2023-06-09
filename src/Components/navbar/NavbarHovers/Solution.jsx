import React, { useState } from "react";
import { cwg } from "../../../images";
const array = [
  {
    name: " CogwiseAI Bot",
    icon: cwg,
    heading: "Hyper-charged NLP language",
    text: "Explore our Bot through native language  ",
    description:
      "Our technology involves traders to identify trends, predict market movements, and make profitable trades based on real-time data.",
  },
  {
    name: " CogwiseAI Alerts",
    icon: cwg,
    heading: "Hyper-charged NLP language",
    text: "Explore our Bot through native language  ",
    description:
      "Our technology involves the use of sophisticated machine learning algorithms to analyze blockchain data in order to make informed trading decisions. This type of AI trading ",
  },
  {
    name: " CogwiseAI Real-time Trading",
    icon: cwg,
    heading: "Hyper-charged NLP language",
    text: "Explore our Bot through native language  ",
    description:
      "Our technology involves the use of sophisticated machine learning algorithms to analyze blockchain data in order to make informed trtime data.",
  },
  {
    name: "CogwiseAI Wallet Tracke",
    icon: cwg,
    heading: "Hyper-charged NLP language",
    text: "Explore our Bot through native language  ",
    description:
      "Our technology involves the use of sophisticated machine learning algorithms to analyze blockchain data in order to make informed trading decisions. This type of AI trading can ta.",
  },
];

export const Solution = () => {
  const [hover, setHover] = useState({});
  console.log("hover value", hover);
  return (
    <div
      style={{ fontFamily: "Regular" }}
      className="absolute  bg-[#030304] py-3 px-1  top-10  border border-[#303030] rounded-xl w-[300px]  md:w-[800px] none flex flex-col justify-start md:flex-row md:justify-between  items-start "
    >
      <div className=" w-full md:w-[65%] space-y-3 text-left">
        {array.map((item, i) => {
          return (
            <div
              onMouseLeave={() => setHover(item)}
              key={i}
              className="  border-r-[#303030] hover:bg-[#212129] rounded-lg p-1 md:p-2 "
            >
              <div className="w-full flex   items-center   space-x-3    ">
                <img
                  src={item.icon}
                  alt=""
                  srcSet=""
                  style={{ width: "35px", height: "35px" }}
                />
                <div className=" flex flex-col items-start ">
                  <p className="font-medium text-left text-[12px] md:text-lg">
                    {item.name}
                  </p>
                  <p className="text-[#5C5C5C]  text-[12px] md:text-lg ">
                    {item.text}
                  </p>
                </div>
                <button className="bg-[#7E0AEF] px-2 py-[2px] rounded-3xl text-sm">
                  SOON
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full mt-5 md:mt-0 md:w-[30%] space-y-2 text-left border-l-1 border-[#303030]">
        <p className="text-sm font-semibold  md:text-lg">{hover?.name}</p>
        <p className="text-sm  p-1">{hover?.description}</p>
      </div>
    </div>
  );
};
