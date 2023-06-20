import Icon from "@mdi/react";
import { mdiFilePdfBox, mdiBook } from "@mdi/js";
const array = [
  {
    name: " Whitepaper",
    icon: <Icon path={mdiFilePdfBox} size={1.2} color="lightGray" />,
  },
  {
    name: " View on GitBook",
    icon: <Icon path={mdiBook} size={1.2} color="lightGray" />,
  },
];

export const DocsHover = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Regular" }}
        className="absolute z-10 left-0  text-[#fff]  bg-[#16161b] py-3 px-1   top-[150px] md:top-[25yarpx]  border border-[#303030] rounded-xl w-[280px] none flex flex-col md:flex-row justify-between  items-start "
      >
        <div className=" w-full space-y-3 text-left">
          {array.map((item, i) => {
            return (
              <div
                // onMouseLeave={() => setHover(item)}
                key={i}
                className="  border-r-[#303030] hover:bg-[#212129] rounded-lg p-2 "
              >
                <div className="w-full flex  justify-center  items-center lg:items-start   lg:justify-start  space-x-3    ">
                  <div className="w-[40px] h-[40px] rounded-md p-1 text-xl">
                    {item.icon}
                  </div>
                  <div className=" flex flex-col justify-center  lg:items-start mt-1">
                    <p className="font-medium">{item.name}</p>
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
