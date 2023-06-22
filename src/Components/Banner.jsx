import React, { useState } from "react";
import { cwg, g1 } from "../images";
import { FiCopy } from "react-icons/fi";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastNotify } from "../ConnectivityAssets/hooks";
import { useMediaQuery } from "@mui/material";
export const Banner = () => {
  const matches = useMediaQuery("(max-width:700px)");
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <div
        style={{ fontFamily: "Regular" }}
        className="bg-[#161616] rounded-2xl p-4 md:p-8  mt-[100] lg:mt-[150px] flex justify-center flex-col lg:flex-row space-y-12 lg:justify-between items-center lg:space-y-0 "
      >
        {matches ? (
          <div className="w-full flex items-center justify-between space-x-3">
            <div className="w-[85%] flex items-center justify-start space-x-3">
              <img
                src={cwg}
                alt=""
                srcSet=""
                style={{ width: "50px", height: "50px" }}
              />
              <div className=" flex flex-col justify-center items-start ">
                <p className="text-[#5C5C5C] text-[14px] ">CONTRACT ADDRESS</p>
                <p className=" ">0x5f647d52d948B...</p>
              </div>
            </div>

            <div className="w-[15%] flex space-x-5 items-center justify-end">
              <CopyToClipboard
                text={"0x5f647d52D948B997AEd9b0272F80D3dA394CDCdc"}
                onCopy={() => {
                  setAlertState({
                    open: true,
                    message: `Address Copied.`,
                    severity: "success",
                  });
                }}
              >
                <div className=" border-2 border-[#5C5C5C] cursor-pointer rounded-3xl px-3 py-2 flex space-x-4 items-center">
                  <p> COPY</p>
                </div>
              </CopyToClipboard>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full flex  justify-center  items-center lg:items-start  lg:justify-start  space-x-3   lg:w-[25%] ">
              <img
                src={cwg}
                alt=""
                srcSet=""
                style={{ width: "50px", height: "50px" }}
              />
              <div className=" flex flex-col justify-center items-start ">
                <p className="text-[#5C5C5C] ">CONTRACT ADDRESS</p>
                <p className=" ">0x021D4f55AF40A1Ce428A</p>
              </div>
            </div>

            <div className=" ">
              <p className="text-[#5C5C5C] ">NETWORK</p>
              <p className="text-xl">Ethereum ERC-20</p>
            </div>
            <div className="flex space-x-5 items-center justify-end">
              <a
                href="https://goerli.etherscan.io/address/0x5f647d52D948B997AEd9b0272F80D3dA394CDCdc#code"
                target="_blank"
              >
                <img
                  src={g1}
                  alt=""
                  srcSet=""
                  height="30px"
                  className="bg-[#272727] hover:bg-[#7900EE] rounded-full p-3"
                />
              </a>
              <CopyToClipboard
                text={"0x5f647d52D948B997AEd9b0272F80D3dA394CDCdc"}
                onCopy={() => {
                  setAlertState({
                    open: true,
                    message: `Address Copied.`,
                    severity: "success",
                  });
                }}
              >
                <div className=" border-2 border-[#5C5C5C] cursor-pointer rounded-3xl px-3 py-2 flex space-x-4 items-center">
                  <p> COPY ADDR</p>
                  <FiCopy />
                </div>
              </CopyToClipboard>
            </div>
          </>
        )}
      </div>
    </>
  );
};
