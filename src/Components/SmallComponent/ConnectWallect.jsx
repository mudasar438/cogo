import React from "react";

export const ConnectWallect = ({ text, onClickFun }) => {
  return (
    <button
      style={{ fontFamily: "Regular" }}
      onClick={onClickFun}
      className="text-[#fff] text-lg bg-[#7900EE] hover:bg-[#3A165D] min-w-[130px] w-full  px-6 py-2 rounded-3xl  font-normal text-center"
    >
      {text}
    </button>
  );
};
