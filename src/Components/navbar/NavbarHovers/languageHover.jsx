import { TbPdf } from "react-icons/tb";
import { FiBook } from "react-icons/fi";
import {
  china,
  turkey,
  france,
  southkorea,
  usa,
  germany,
  italy,
} from "../../../images.js";
const array = [
  {
    name: " English",
    icon: usa,
  },
  {
    name: " Korean",
    icon: southkorea,
  },
  {
    name: " Chinese",
    icon: china,
  },
  {
    name: " German",
    icon: germany,
  },
  {
    name: " Turkish",
    icon: turkey,
  },
  {
    name: " Italian",
    icon: italy,
  },
  { name: "French", icon: france },
];

export const LanguageHover = () => {
  return (
    <>
      <div className="relative">
        <div
          style={{ fontFamily: "Regular" }}
          className="absolute z-20  bg-[#16161b] py-3 px-1  left-0  -top-[100px] md:top-[5px]  border border-[#303030] rounded-xl w-[150px]  md:w-[180px] none flex flex-col md:flex-row justify-between  items-start "
        >
          <div className=" w-full space-y-3 text-left">
            {array.map((item, i) => {
              return (
                <div
                  key={i}
                  className="  border-r-[#303030] hover:bg-[#212129] rounded-lg p-2 "
                >
                  <div className="w-full flex  justify-center  items-center lg:items-start   lg:justify-start  space-x-3    ">
                    <div className=" flex space-x-3 justify-center py-[2px] lg:items-start ">
                      <img
                        src={item.icon}
                        alt=""
                        srcSet=""
                        style={{
                          width: "25px",
                          height: "25px",
                          objectFit: "cover",
                        }}
                      />
                      <p className="font-normal">{item.name}</p>
                    </div>
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
