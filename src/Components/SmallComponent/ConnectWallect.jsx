import React from "react";

export const ConnectWallect = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-[#fff] text-lg bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px] w-full  px-6 py-2 rounded-3xl Barlow font-normal text-center"
    >
      {text}
    </button>
  );
};
