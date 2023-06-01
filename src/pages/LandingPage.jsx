import React, { useContext, useEffect, useState } from "react";
import BasicButton from "../Components/SmallComponent/Basicbutton";
import { m2, m1, m3, eth, t, yahoo, ben, market } from "../images";
import { Banner } from "../Components/Banner";
import { Deepdiv } from "../Components/Deepdiv";
import { Round1 } from "../Components/Round1";
import { Token } from "../Components/Token";
import { Round2 } from "../Components/Round2";
import { Baner2 } from "../Components/Baner2";
import { Box } from "../Components/Box";
import { Footer } from "../Components/Footer";
import MyModal from "../Components/DilogEth";
import BuyTokensModal from "../Components/BuyTokensModal";
import RoundSwiper from "../Components/RoundSwiper";
import { AppContext } from "../utils";
import {
  usePresaleContract,
  useTokenContract,
  useUSDTContract,
} from "../ConnectivityAssets/hooks";
import { formatUnits } from "@ethersproject/units";
import { ConnectWallect } from "../Components/SmallComponent/ConnectWallect";
const array = [{ img: m1 }, { img: m2 }, { img: m3 }];
const array2 = [{ img: yahoo }, { img: ben }, { img: market }, { img: market }];

export const LandingPage = () => {
  const { account, connect, signer } = useContext(AppContext);
  const [balanceToken, setbalanceToken] = useState(0);
  const [totalBonusTokens, settotalBonusTokens] = useState(0);
  const [userTokensToUSD, setuserTokensToUSD] = useState(0);
  const [totalSoldTokens, settotalSoldTokens] = useState(0);
  const [totalSupply, settotalSupply] = useState(0);
  const [hardCapPerPhase, sethardCapPerPhase] = useState(0);
  const [tokenPrice, settokenPrice] = useState(0);
  const [totalRaised, settotalRaised] = useState(0);
  const [tokenDecimals, settokenDecimals] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [enteredAmount, setEnteredAmount] = useState("");
  const [balanceUSDT, setbalanceUSDT] = useState(0);
  const [balanceETH, setbalanceETH] = useState(0);
  const [time, settime] = useState(1674475330);
  const [receivedTokens, setreceivedTokens] = useState("");
  const [raisedAmount, setRaisedAmount] = useState(0);
  const [progressBar, setProgessBar] = useState(0);
  const [loading, setloading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [minBuyLim, setminBuyLim] = useState(0);
  const [minBuyETH, setminBuyETH] = useState(0);

  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const presaleContract = usePresaleContract(signer);
  const tokenContract = useTokenContract(signer);

  const toLocalFormat = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const init = async () => {
    try {
      if (account) {
        const { token_bonus, token_balance } = await tokenContract.users(
          account
        );
        let bonusToken = +formatUnits(token_bonus.toString(), +tokenDecimals);
        settotalBonusTokens(toLocalFormat(bonusToken));
        let udsSeperator = +formatUnits(
          token_balance.toString(),
          +tokenDecimals
        );
        let tokenToUSD = parseFloat(udsSeperator).toFixed(0);
        udsSeperator = +udsSeperator / +tokenPrice;
        setbalanceToken(toLocalFormat(udsSeperator));
        setuserTokensToUSD(toLocalFormat(tokenToUSD));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presaleContract, account, tokenPrice, tokenDecimals]);

  const initProgress = async () => {
    try {
      const dec = await tokenContract.decimals();
      settokenDecimals(+dec);
      const totalSold = await presaleContract.soldToken();
      let sold = +formatUnits(totalSold.toString(), +dec);
      sold = parseFloat(sold).toFixed(0);
      settotalSoldTokens(toLocalFormat(sold));
      const supply = await presaleContract.totalSupply();
      let tSupply = +formatUnits(supply.toString(), +dec);
      tSupply = parseFloat(tSupply).toFixed(0);
      settotalSupply(toLocalFormat(tSupply));

      let price = await presaleContract.tokenPerUsd();
      settokenPrice(+formatUnits(price.toString(), 18));
      price = +formatUnits(price.toString(), 18);
      let hardCap = +tSupply / +price;
      hardCap = parseFloat(hardCap).toFixed(0);
      sethardCapPerPhase(toLocalFormat(hardCap));

      const ethBal = await presaleContract.amountRaised();
      setRaisedAmount(formatUnits(ethBal.toString(), 18));
      const usdtRaised = await presaleContract.amountRaisedUSDT();
      let tRaised =
        +formatUnits(usdtRaised.toString(), 6) +
        +formatUnits(ethBal.toString(), 18);
      tRaised = parseFloat(tRaised).toFixed(0);
      settotalRaised(toLocalFormat(tRaised));

      console.log(+dec, sold, tSupply, price, hardCap, tRaised);
      let prog =
        (+formatUnits(totalSold.toString(), +dec) /
          +formatUnits(supply.toString(), +dec)) *
        100;
      setProgessBar(+prog);
    } catch (error) {
      console.log(error, "DATA_INIT");
    }
  };
  useEffect(() => {
    initProgress();
  }, [tokenContract, presaleContract]);

  return (
    <>
      <div className="px-4 md:px-12 font-Barlow">
        <div className=" w-full lg:w-[100%] lg:justify-center space-y-10 flex flex-col lg:flex-row justify-between py-10  ">
          <div className=" w-full lg:w-[35%]  flex gap-10 flex-col md:p-3">
            <ul>
              <li>
                <p className="text-sm text-[#858585] font-Barlow text-center md:text-left">
                  WE'RE LIVE!
                </p>
              </li>
            </ul>
            <p
              style={{ fontFamily: "Regular" }}
              className=" text-3xl md:text-6xl font-normal text-center md:text-left font-Rubik w-full md:w-[90%]"
            >
              Become a early investor
            </p>
            <p className=" Barlow text-[#858585] text-center md:text-left font-semibold">
              We understand that the world of crypto & blockchain can be
              confusing and overwhelming, but with Cogwise, you can trust that
              you are getting the best info and insights.
            </p>
            <div className=" flex flex-col sm:flex-row gap-3  justify-center md:justify-start">
              <BasicButton text="connect wallet" />
              <button className=" Rubik bg-[#000] hover:bg-[#231414] rounded-3xl px-7 font-Rubik font-normal">
                Explore Token
              </button>
            </div>
            <div className="flex flex-col sm:flex-row item-center sm:items-start  justify-center mx-auto sm:mx-0 space-y-8 sm:space-y-0 sm:justify-between py-5 px:1 shadow-sm">
              {array.map((item, i) => {
                return (
                  <img
                    key={i}
                    src={item.img}
                    alt=""
                    srcSet=""
                    style={{ width: "130px", objectFit: "contain" }}
                  />
                );
              })}
            </div>
          </div>
          <div className=" w-full lg:w-[50%] flex justify-end">
            <div className="w-full lg:w-[75%]  p-5 rounded-xl flex flex-col gap-8 border border-[#303030]">
              <p className="bg-[#232323] rounded-2xl p-3  w-[160px]  flex self-center md:self-start Barlow">
                ROUND 1 [ $0.045 ]
              </p>
              <p
                style={{ fontFamily: "Regular" }}
                className="text-4xl font-normal  text-center md:text-left font-Rubik w-full md:w-[80%]"
              >
                Buy Cogwise $CGW
              </p>

              <div className="w-full bg-gray-200 rounded-full dark:bg-[#232323]">
                <div
                  className="Barlow bg-gradient-to-r from-[#292D2C] to-[#328D77] text-xl font-medium text-[#000] text-center p-0.5 leading-none rounded-full"
                  style={{ width: `${progressBar}` }}
                >
                  {" "}
                  {parseFloat(progressBar).toFixed(3)}%
                </div>
              </div>
              {+balanceToken > 0 ? (
                <div className=" flex flex-col   sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12 shadow-xl w-full items-center justify-center md:justify-start">
                  <div className="">
                    <p className="text-[#858585] font-medium">YOUR BALANCE:</p>
                    <p className="text-2xl py-2">{balanceToken}</p>
                    <p className="text-[#545454] font-medium">
                      <img width="15px" src={t} alt="" /> {userTokensToUSD}
                    </p>
                  </div>
                  {+balanceToken > 100000 && (
                    <div className="">
                      <p className="text-[#858585] font-medium">
                        BONUS UNLOCKED:
                      </p>
                      <p className="text-2xl py-2">{totalBonusTokens}</p>
                      <p className="text-[#545454] font-medium">Level 1</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className=" flex flex-col   sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12 shadow-xl w-full items-center justify-center md:justify-start">
                  <div className="">
                    <p className="text-[#858585] font-medium">SOLD (BGPT)</p>
                    <p
                      style={{ fontFamily: "Regular" }}
                      className="text-4xl py-2"
                    >
                      {totalSoldTokens}
                    </p>
                    <p className="text-[#545454] font-medium">
                      / {totalSupply}
                    </p>
                  </div>

                  <div className="">
                    <p className="text-[#858585] font-medium">RAISED (USDT)</p>
                    <p
                      style={{ fontFamily: "Regular" }}
                      className="text-4xl py-2"
                    >
                      ${totalRaised}
                    </p>
                    <p className="text-[#545454] font-medium">
                      / ${hardCapPerPhase}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-row  w-full  items-center justify-center md:justify-start lg:justify-center space-y-12 md:space-y-0 md:space-x-10">
                {/* <BasicButton text="BUY WITH ETH" /> */}
                {/* <MyModal /> */}
                {account ? (
                  <BuyTokensModal initProgress={initProgress} init={init} />
                ) : (
                  <ConnectWallect
                    onClick={() => connect()}
                    text="Connect Wallet"
                  />
                )}
              </div>
              <div className=" flex flex-col sm:flex-row space-y-8 sm:space-y-0  justify-center sm:justify-between items-center">
                <div className="flex justify-center sm:justify-start space-x-3">
                  <p>How to buy?</p>
                  <span className="text-[#3A3A3A]">|</span>
                  <p>New to Crypto?</p>
                </div>
                <div className="flex justify-end space-x-3">
                  <img src={eth} alt="" srcSet="" />
                  <img src={t} alt="" srcSet="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Banner />
      </div>
      <Deepdiv />
      <div className="px-4 md:px-12 mt-[100px] ">
        <p
          style={{ fontFamily: "Regular" }}
          className="text-3xl md:text-4xl lg:text-6xl w-full md:w-[48%] text-center md:text-left "
        >
          Token lockup schedule
        </p>
        <p className="Barlow w-full md:w-[80%] text-[#858585] text-center md:text-left my-12">
          Early supporters purchased the right to support the network via an
          agreement for future tokens upon network launch. Prices vary based on
          time of investment. Lower prices are balanced with longer lock-periods
          to ensure aligned network economics.
        </p>
        {/* <Round1 /> */}
        <RoundSwiper />
        <Token />
        <Round2 />
        <Baner2 />
      </div>
      <Box />
      <div className="flex flex-col justify-center w-[30%] md:w-full  item-center md:flex-row md:items-start  mx-auto space-y-12 sm:space-y-0 sm:justify-center space-x-0 md:space-x-16  px:1 shadow-sm mt-5 py-5 ">
        {array2.map((item, i) => {
          return (
            <img
              key={i}
              src={item.img}
              alt=""
              srcSet=""
              style={{
                width: "140px",
                objectFit: "contain",
                marginTop: "10px",
              }}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};
