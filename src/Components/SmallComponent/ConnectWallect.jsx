import React from "react";

export const ConnectWallect = ({ text, onClickFun }) => {
  return (
    <button
      style={{ fontFamily: "Regular" }}
      onClick={onClickFun}
      className="text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#3A165D] min-w-[130px] w-full  px-8 py-[15px] rounded-[24px]   font-normal text-center"
    >
      {text}
    </button>
  );
};
