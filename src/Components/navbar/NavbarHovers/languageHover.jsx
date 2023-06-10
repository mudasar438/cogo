import { TbPdf } from "react-icons/tb";
import { FiBook } from "react-icons/fi";
const array = [
  {
    name: " EN",
  },
];

export const LanguageHover = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Regular" }}
        className="absolute  bg-[#16161b] py-3 px-1  right-3  top-[150px] md:top-[45px]  border border-[#303030] rounded-xl w-[150px]  md:w-[180px] none flex flex-col md:flex-row justify-between  items-start "
      >
        <div className=" w-full space-y-3 text-left">
          {array.map((item, i) => {
            return (
              <div
                key={i}
                className="  border-r-[#303030] hover:bg-[#212129] rounded-lg p-2 "
              >
                <div className="w-full flex  justify-center  items-center lg:items-start   lg:justify-start  space-x-3    ">
                  <div className=" flex flex-col justify-center py-2 lg:items-start ">
                    <p className="font-semibold">{item.name}</p>
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
