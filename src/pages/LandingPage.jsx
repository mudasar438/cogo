import React, { useContext, useEffect, useState } from "react";
import BasicButton from "../Components/SmallComponent/Basicbutton";
import { m2, m1, m3, eth, t, yahoo, ben, market, bit, m5, m4 } from "../images";
import { Banner } from "../Components/Banner";
import { Deepdiv } from "../Components/Deepdiv";
import Marquee from "react-fast-marquee";
import { Token } from "../Components/Token";
import { Round2 } from "../Components/Round2";
import { Baner2 } from "../Components/Baner2";
import { Box } from "../Components/Box";
import { Footer } from "../Components/Footer";
import BuyTokensModal from "../Components/BuyTokensModal";
import RoundSwiper from "../Components/RoundSwiper";
import { AppContext } from "../utils";
import { BsPlayCircleFill } from "react-icons/bs";
import {
  ToastNotify,
  usePresaleContract,
  useTokenContract,
  useUSDTContract,
} from "../ConnectivityAssets/hooks";
import { formatUnits } from "@ethersproject/units";
import { ConnectWallect } from "../Components/SmallComponent/ConnectWallect";
import { Container, Skeleton, useMediaQuery } from "@mui/material";
import { FiArrowUpRight } from "react-icons/fi";
import FullScreenModal from "../Components/FullScreenModal";
const array = [{ img: m1 }, { img: m2 }, { img: m3 }, { img: m4 }, { img: m5 }];
const array2 = [{ img: yahoo }, { img: ben }, { img: market }, { img: bit }];

export const LandingPage = () => {
  const matches = useMediaQuery("(max-width:700px)");
  const { account, connect, disconnect, signer } = useContext(AppContext);
  const [balanceTokenToShow, setbalanceTokenToShow] = useState(0);
  const [balanceTokenToCompaire, setbalanceTokenToCompaire] = useState(0);
  const [totalBonusTokens, settotalBonusTokens] = useState(0);
  const [userTokensToUSD, setuserTokensToUSD] = useState(0);
  const [userBonusInUSD, setuserBonusInUSD] = useState(0);
  const [loading, setloading] = useState(false);
  const [totalSoldTokens, settotalSoldTokens] = useState(0);
  const [totalSupply, settotalSupply] = useState(0);
  const [hardCapPerPhase, sethardCapPerPhase] = useState(0);
  const [tokenPrice, settokenPrice] = useState(0);
  const [totalRaised, settotalRaised] = useState(0);
  const [tokenDecimals, settokenDecimals] = useState(0);
  const [bonusLevel, setbonusLevel] = useState(0);
  const [isClaimEnabled, setisClaimEnabled] = useState(false);
  const [progressBar, setProgessBar] = useState(0);
  const [bonusProgressBar, setbonusProgressBar] = useState(0);
  const [remainingForNextLevel, setremainingForNextLevel] = useState(0);

  const [QrOpen, setQrOpen] = useState(false);
  const QrToogle = () => {
    setQrOpen(!QrOpen);
  };
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
        setloading(true);
        const { token_balance, native_balance, usdt_balance } =
          await presaleContract.users(account);
        setbalanceTokenToCompaire(
          +formatUnits(token_balance.toString(), +tokenDecimals)
        );
        const currentPriceETH = await presaleContract.getLatestPrice();
        let totalInvestedInUSDT =
          +formatUnits(usdt_balance.toString(), 6) +
          +formatUnits(native_balance.toString(), 18) *
            +formatUnits(currentPriceETH.toString(), 8);
        totalInvestedInUSDT = parseFloat(totalInvestedInUSDT).toFixed(0);
        let udsSeperator = +formatUnits(
          token_balance.toString(),
          +tokenDecimals
        );
        let userTokensToShow = parseFloat(udsSeperator).toFixed(0);
        setbalanceTokenToShow(toLocalFormat(userTokensToShow));
        setuserTokensToUSD(toLocalFormat(totalInvestedInUSDT));

        const { token_bonus, level } = await presaleContract.Bonus(account);
        setbonusLevel(+level);
        let bonusToken = +formatUnits(token_bonus.toString(), +tokenDecimals);
        bonusToken = parseFloat(bonusToken).toFixed(0);
        let usedBonusInUSDT = +bonusToken / +tokenPrice;
        setuserBonusInUSD(usedBonusInUSDT);
        settotalBonusTokens(toLocalFormat(bonusToken));

        if (+level === 0) {
          let bonus = (+userTokensToShow / 100000) * 100;
          setbonusProgressBar(bonus);
          let remaining = 100000 - +userTokensToShow;
          setremainingForNextLevel(toLocalFormat(remaining));
        } else if (+level === 1) {
          let bonus = (+userTokensToShow / 300000) * 100;
          setbonusProgressBar(bonus);
          let remaining = 300000 - +userTokensToShow;
          setremainingForNextLevel(toLocalFormat(remaining));
        } else if (+level === 2) {
          let bonus = (+userTokensToShow / 500000) * 100;
          setbonusProgressBar(bonus);
          let remaining = 500000 - +userTokensToShow;
          setremainingForNextLevel(toLocalFormat(remaining));
        } else {
          let bonus = (+userTokensToShow / 750000) * 100;
          setbonusProgressBar(bonus);
          let remaining = 750000 - +userTokensToShow;
          setremainingForNextLevel(toLocalFormat(remaining));
        }
        setloading(false);
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
      setloading(true);
      const isCalimOn = await presaleContract.enableClaim();
      setisClaimEnabled(isCalimOn);
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
      setloading(false);
    } catch (error) {
      console.log(error, "DATA_INIT");
    }
  };
  useEffect(() => {
    initProgress();
  }, [tokenContract, presaleContract]);

  const claimHandler = async (index) => {
    if (account) {
      if (!isClaimEnabled) {
        setAlertState({
          open: true,
          message: `You can claim tokens after presale will end.`,
          severity: "error",
        });
      } else {
        try {
          setloading(true);
          if (+index === 0) {
            const tx = await presaleContract.claimTokens();
            await tx.wait();
          } else {
            const tx = await presaleContract.claimBonus();
            await tx.wait();
          }
          setloading(false);
          setAlertState({
            open: true,
            message: `Transection Completed!`,
            severity: "success",
          });
        } catch (error) {
          setloading(false);
          if (error?.data?.message) {
            setAlertState({
              open: true,
              message: error?.data?.message,
              severity: "error",
            });
          } else if (error?.reason) {
            setAlertState({
              open: true,
              message: error?.reason,
              severity: "error",
            });
          } else {
            setAlertState({
              open: true,
              message: error?.message,
              severity: "error",
            });
          }
        }
      }
    } else {
      setAlertState({
        open: true,
        message: `Error! Please connect your wallet.`,
        severity: "error",
      });
    }
  };

  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <FullScreenModal
        open={QrOpen}
        setOpen={setQrOpen}
        toggelModel={QrToogle}
      />

      <div style={{ fontFamily: "Regular" }} className="px-4">
        <div className=" w-full lg:w-[100%] lg:justify-center space-y-10 md:mt-5 flex flex-col lg:flex-row justify-between pt-0 md:pt-10 md:pb-10 ">
          {!matches && (
            <div className=" w-full lg:w-[45%]  flex gap-10 flex-col md:p-3">
              <ul>
                <li>
                  <p className="text-sm text-[#858585]  text-center md:text-left">
                    {/* WE'RE LIVE! */}
                  </p>
                </li>
              </ul>
              <p
                style={{ fontFamily: "Regular" }}
                className=" text-3xl md:text-6xl font-normal text-center md:text-left  w-full md:w-[90%]"
              >
                Become an
                <br /> early investor
              </p>
              <p className=" text-[#858585] text-center md:text-left font-semibold">
                We understand that the world of crypto & blockchain can be
                confusing and overwhelming, but with Cogwise, you can trust that
                you are getting the best info and insights.
              </p>
              <div className=" flex flex-col sm:flex-row gap-3  justify-center md:justify-start">
                <button className=" text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px]   px-8 py-[15px] rounded-[24px]  blob blue ">
                  <p className="text-center flex justify-center items-center  w-full">
                    {" "}
                    BUY $CGW{" "}
                    <span>
                      {" "}
                      <FiArrowUpRight className=" ml-2 text-xl font-semibold" />
                    </span>
                  </p>{" "}
                </button>
                <button
                  onClick={QrToogle}
                  className="border text-[14px] text-[#fff] hover:text-[#000]  bg-[#000] hover:bg-[#fff] min-w-[160px]  px-8 py-[15px] rounded-[24px] "
                >
                  <p className="text-center flex justify-center items-center  w-full tracking-[1.3px]">
                    {" "}
                    INTRO
                    <span>
                      {" "}
                      <BsPlayCircleFill className=" ml-3 text-sm font-semibold text-[#7900EE]" />
                    </span>
                  </p>{" "}
                </button>
              </div>
              <Marquee
                gradient={true}
                gradientWidth={100}
                gradientColor={[0, 0, 0]}
                speed={40}
                pauseOnClick={true}
                pauseOnHover={true}
              >
                <div className="flex item-center mx-auto sm:mx-0 space-y-0 sm:space-y-0 py-5 px:1 shadow-sm ">
                  {array.map((item, i) => {
                    return (
                      <img
                        key={i}
                        src={item.img}
                        alt=""
                        srcSet=""
                        style={{
                          height: "30px",
                          width: "140px",
                          objectFit: "contain",
                          marginLeft: "30px",
                        }}
                      />
                    );
                  })}
                </div>
              </Marquee>
            </div>
          )}
          {matches && (
            <p
              style={{ fontFamily: "Regular" }}
              className=" text-3xl font-normal text-center w-full"
            >
              Become an
              <br /> early investor
            </p>
          )}
          {isClaimEnabled ? (
            <div className=" w-full lg:w-[50%] flex justify-end">
              <div className="w-full lg:w-[75%] bg-[#222222] p-5 rounded-xl flex flex-col item-center justify-center  gap-8 border border-[#303030]">
                <div className="space-y-3">
                  <div className="flex space-x-3 items-center justify-center">
                    {loading ? (
                      <Skeleton variant="rounded" width={150} height={40} />
                    ) : (
                      <p className="bg-[#3D3D3D] rounded-full px-4 py-3  flex self-center  ">
                        STAGE 6 [ ${1 / tokenPrice} ]
                      </p>
                    )}

                    <button className="bg-[#E33962] px-3 py-3 rounded-full text-[#000] font-normal ">
                      SOLD OUT
                    </button>
                  </div>
                  {loading ? (
                    <Skeleton variant="rounded" width={150} height={40} />
                  ) : (
                    <p
                      style={{ fontFamily: "Regular" }}
                      className="text-4xl font-normal  text-center  w-full "
                    >
                      {balanceTokenToCompaire > 0
                        ? "Dashboard"
                        : "We’re sold out!"}
                    </p>
                  )}
                </div>
                <div className="">
                  <p
                    style={{ fontFamily: "Regular" }}
                    className="text-[#858585] font-lg text-center"
                  >
                    RAISED $14,000,000{" "}
                  </p>
                  <p
                    style={{ fontFamily: "Regular" }}
                    className=" font-lg text-center"
                  >
                    400,000,000 CGW
                  </p>
                </div>

                <div className="w-full bg-gray-200 rounded-full dark:bg-[#232323]">
                  <div
                    className=" bg-gradient-to-r transition from-[#7900EE] to-[#328D77] text-xl font-medium text-[#000] text-center px-0.5 py-2  leading-none rounded-full"
                    style={{ width: "100.00%" }}
                  >
                    {" "}
                    100.00%
                  </div>
                </div>
                {balanceTokenToCompaire > 0 ? (
                  <div className=" flex flex-col   space-y-3  shadow-xl w-full items-center justify-center ">
                    <div className="flex justify-between items-center w-full bg-[#1F1F1F] p-4 rounded-2xl">
                      <div className="">
                        <p
                          className="text-[#545454] font-lg"
                          style={{ fontFamily: "Regular" }}
                        >
                          VESTED AMOUNT:
                        </p>
                        {loading ? (
                          <Skeleton variant="rounded" width={150} height={40} />
                        ) : (
                          <p
                            className="text-3xl py-2"
                            style={{ fontFamily: "Regular" }}
                          >
                            {balanceTokenToShow}
                          </p>
                        )}

                        <div className="text-[#545454] font-lg flex space-x-2 items-center">
                          <img
                            src={t}
                            alt=""
                            srcSet=""
                            style={{
                              height: "20px",
                              width: "20x",
                              objectFit: "contain",
                            }}
                          />
                          {loading ? (
                            <Skeleton
                              variant="rounded"
                              width={100}
                              height={30}
                            />
                          ) : (
                            <p style={{ fontFamily: "Regular" }}>
                              {userTokensToUSD}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className=" w-[30%] flex flex-col items-center space-y-4">
                        <button
                          onClick={() => claimHandler(0)}
                          style={{ fontFamily: "Regular" }}
                          className=" px-8 py-3 rounded-3xl hover:bg-[#3A165D] bg-[#7900EE]"
                        >
                          CLAIM
                        </button>
                        {/* <p
                        style={{ fontFamily: "Regular" }}
                        className="text-center text-[#545454]"
                      >
                        Unlock 21.05.2023. 10:00 UTC
                      </p> */}
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full bg-[#1F1F1F] p-4 rounded-2xl">
                      <div className="">
                        <p
                          className="text-[#545454] font-lg"
                          style={{ fontFamily: "Regular" }}
                        >
                          BONUS UNLOCKED:
                        </p>
                        {loading ? (
                          <Skeleton variant="rounded" width={150} height={40} />
                        ) : (
                          <p
                            className="text-3xl py-2"
                            style={{ fontFamily: "Regular" }}
                          >
                            {totalBonusTokens}
                          </p>
                        )}

                        <div className="text-[#545454] font-lg flex space-x-2 items-center">
                          <img
                            src={t}
                            alt=""
                            srcSet=""
                            style={{
                              height: "20px",
                              width: "20x",
                              objectFit: "contain",
                            }}
                          />
                          {loading ? (
                            <Skeleton
                              variant="rounded"
                              width={100}
                              height={30}
                            />
                          ) : (
                            <p style={{ fontFamily: "Regular" }}>
                              {userBonusInUSD}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className=" w-[30%] flex flex-col items-center space-y-4">
                        <button
                          onClick={() => claimHandler(1)}
                          style={{ fontFamily: "Regular" }}
                          className=" px-8 py-3 rounded-3xl hover:bg-[#3A165D] bg-[#7900EE]"
                        >
                          CLAIM
                        </button>
                        {/* <p
                        style={{ fontFamily: "Regular" }}
                        className="text-center text-[#545454]"
                      >
                        Unlock 21.05.2023. 10:00 UTC
                      </p> */}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className=" flex flex-col   sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12 shadow-xl w-full items-center justify-between ">
                      <div className="">
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-[#858585] font-lg"
                        >
                          SOLD (CGW)
                        </p>
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-4xl py-2"
                        >
                          400,00,000
                        </p>
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-[#545454] font-lg"
                        >
                          / 400,000,000 CGW
                        </p>
                      </div>

                      <div className="">
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-[#858585] font-lg"
                        >
                          RAISED (USD)
                        </p>
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-4xl py-2"
                        >
                          $14,000,000
                        </p>
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-[#545454] font-lg"
                        >
                          / $14,000,000
                        </p>
                      </div>
                    </div>
                    <div className=" flex flex-col   sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12 shadow-xl w-full items-center justify-between ">
                      <div className="space-y-3">
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-[#858585] font-lg"
                        >
                          Listing price:
                        </p>
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-2xl bg-[#29957B] py-1 rounded-3xl text-center"
                        >
                          $0.09
                        </p>
                      </div>

                      <div className="">
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-[#858585] font-lg"
                        >
                          Token Launch Date:
                        </p>
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-4xl py-2"
                        >
                          21 Sept 2021
                        </p>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex flex-col  w-full md:flex-row items-center justify-center md:justify-start lg:justify-center space-y-12 md:space-y-0 md:space-x-10">
                  {account ? (
                    <ConnectWallect onClickFun={disconnect} text="DISCONNECT" />
                  ) : (
                    <ConnectWallect
                      onClickFun={connect}
                      text="CONNECT TO DASHBOARD"
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
          ) : (
            <div className=" w-full lg:w-[50%] flex justify-end">
              <div className="w-full lg:w-[75%] bg-[#222222]  p-5 rounded-xl flex flex-col gap-8 border border-[#303030]">
                {loading ? (
                  <Skeleton variant="rounded" width={150} height={40} />
                ) : (
                  <p className="bg-[#3D3D3D] rounded-full px-5 py-3 flex self-center md:self-start ">
                    ROUND 1 [ ${1 / +tokenPrice} ]
                  </p>
                )}
                <p
                  style={{ fontFamily: "Regular" }}
                  className="md:text-4xl text-2xl font-normal text-center md:text-left mb-[-20px] w-full md:w-[80%]"
                >
                  Buy Cogwise $CGW
                </p>

                <div className="w-full bg-[#3D3D3D] rounded-full dark:bg-[#3D3D3D]">
                  <div
                    className=" bg-gradient-to-r transition from-[#7900EE] to-[#328D77] text-xl font-medium text-[#000] text-center px-0.5 py-2  leading-none rounded-full"
                    style={{ width: `${progressBar}%` }}
                  >
                    {" "}
                    {parseFloat(progressBar).toFixed(3)}%
                  </div>
                </div>
                {+balanceTokenToCompaire > 0 ? (
                  <div className="bg-[#3D3D3D] p-5 rounded-2xl shadow-xl">
                    <div className="flex  bg-[#3D3D3D] rounded-2xl  sm:space-x-12 w-full items-center justify-between md:justify-start">
                      <div className="">
                        <p className="text-[#858585] text-sm md:font-medium">
                          YOUR BALANCE:
                        </p>
                        {loading ? (
                          <Skeleton variant="rounded" width={120} height={30} />
                        ) : (
                          <p
                            className="text-xl md:text-4xl sm:text-2xl py-2"
                            style={{ fontFamily: "Regular" }}
                          >
                            {balanceTokenToShow}
                          </p>
                        )}

                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-[#858585] text-sm md:font-medium flex items-center"
                        >
                          <img
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "5px",
                            }}
                            src={t}
                            alt=""
                          />{" "}
                          {loading ? (
                            <Skeleton
                              variant="rounded"
                              width={100}
                              height={30}
                            />
                          ) : (
                            userTokensToUSD
                          )}
                        </p>
                      </div>
                      {+balanceTokenToCompaire >= 100000 && (
                        <div className="">
                          <p className="text-[#858585] text-sm md:font-medium">
                            BONUS UNLOCKED:
                          </p>
                          {loading ? (
                            <Skeleton
                              variant="rounded"
                              width={120}
                              height={30}
                            />
                          ) : (
                            <p
                              className="text-xl md:text-4xl sm:text-2xl py-2"
                              style={{ fontFamily: "Regular" }}
                            >
                              {totalBonusTokens}
                            </p>
                          )}

                          <p className="text-[#858585] text-sm md:font-medium">
                            Level {bonusLevel}{" "}
                            <span className="bg-[#888888] rounded-2xl px-3 py-1 text-[#fff] font-sm">
                              +15 %
                            </span>
                          </p>
                        </div>
                      )}
                    </div>
                    <div className=" flex items-center justify-between mt-5">
                      <p className="text-sm text-[#ffffff] md:text-lg font-medium ">
                        Level {bonusLevel}
                      </p>
                      <p className="text-sm text-[#858585] md:text-lg font-medium">
                        Level {bonusLevel + 1}
                      </p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full dark:bg-[#232323]">
                      <div
                        className=" bg-gradient-to-r transition from-[#7900EE] to-[#328D77] text-xl font-medium text-[#fff] text-center p-0.5 leading-none rounded-full"
                        style={{ width: `${bonusProgressBar}%` }}
                      >
                        {" "}
                        {balanceTokenToShow}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p
                        style={{ fontFamily: "Regular" }}
                        className="text-[#ffffff] text-sm md:text-md font-sm"
                      >
                        Purchase {remainingForNextLevel} CGW more to unlock +30%
                        bonus
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex  bg-[#3D3D3D] p-5 rounded-2xl  sm:space-x-12 shadow-xl w-full items-center  justify-between md:justify-start">
                    <div className="">
                      <p className="text-[#858585] text-sm md:font-medium">
                        SOLD ($CGW)
                      </p>
                      {loading ? (
                        <Skeleton variant="rounded" width={120} height={50} />
                      ) : (
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-xl md:text-4xl sm:text-2xl py-2"
                        >
                          {totalSoldTokens}
                        </p>
                      )}

                      {loading ? (
                        <Skeleton
                          sx={{ mt: 4 }}
                          variant="rounded"
                          width={120}
                          height={30}
                        />
                      ) : (
                        <p className="text-[#858585] text-sm md:font-medium">
                          / $ {totalSupply}
                        </p>
                      )}
                    </div>

                    <div className="">
                      <p className="text-[#858585] text-sm md:font-medium">
                        RAISED (USDT)
                      </p>
                      {loading ? (
                        <Skeleton variant="rounded" width={120} height={50} />
                      ) : (
                        <p
                          style={{ fontFamily: "Regular" }}
                          className="text-xl md:text-4xl sm:text-2xl py-2"
                        >
                          $ {totalRaised}
                        </p>
                      )}

                      {loading ? (
                        <Skeleton
                          sx={{ mt: 4 }}
                          variant="rounded"
                          width={120}
                          height={30}
                        />
                      ) : (
                        <p className="text-[#858585] text-sm md:font-medium">
                          / $ {hardCapPerPhase}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-row  w-full items-center justify-center md:justify-start lg:justify-center space-y-12 md:space-y-0 md:space-x-10">
                  {account ? (
                    <BuyTokensModal initProgress={initProgress} init={init} />
                  ) : (
                    <ConnectWallect onClickFun={connect} text="CONNECT " />
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
          )}
        </div>
        {matches && (
          <Marquee
            gradient={true}
            gradientWidth={100}
            gradientColor={[0, 0, 0]}
            speed={40}
            pauseOnClick={true}
            pauseOnHover={true}
          >
            <div className="flex item-center mx-auto sm:mx-0 space-y-0 sm:space-y-0 py-7 px:1 shadow-sm ">
              {array.map((item, i) => {
                return (
                  <img
                    key={i}
                    src={item.img}
                    alt=""
                    srcSet=""
                    style={{
                      height: "40px",
                      width: "160px",
                      objectFit: "contain",
                      marginLeft: "30px",
                    }}
                  />
                );
              })}
            </div>
          </Marquee>
        )}
        <Banner />
        {matches && (
          <button
            onClick={QrToogle}
            className="border text-[14px] text-[#fff] hover:text-[#000] mt-4 bg-[#000] hover:bg-[#fff] min-w-[100%]  px-8 py-[15px] rounded-[24px] "
          >
            <p className="text-center flex justify-between items-center w-full tracking-[1.3px]">
              {" "}
              INTRO
              <span>
                {" "}
                <BsPlayCircleFill className=" ml-3 text-sm font-semibold text-[#7900EE]" />
              </span>
            </p>{" "}
          </button>
        )}
      </div>
      <Deepdiv />
      <div className="px-4 md:px-12 mt-[100px] ">
        <p
          style={{ fontFamily: "Regular" }}
          className="text-3xl md:text-4xl lg:text-6xl w-full md:w-[48%] text-center md:text-left "
        >
          Token lockup schedule
        </p>
        <p className=" w-full md:w-[80%] text-[#858585] text-center md:text-left my-12">
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
      <Container maxWidth="lg">
        <Marquee
          gradient={true}
          gradientWidth={200}
          gradientColor={[0, 0, 0]}
          speed={100}
          pauseOnClick={true}
          pauseOnHover={true}
        >
          <div className="flex md:w-full item-center  mx-auto space-y-12 sm:space-y-0 space-x-0 md:space-x-16 px:1 shadow-sm mt-5 py-5 ">
            {array2.map((item, i) => {
              return (
                <img
                  key={i}
                  src={item.img}
                  alt=""
                  srcSet=""
                  style={{
                    width: "160px",
                    objectFit: "contain",
                    marginLeft: "100px",
                  }}
                />
              );
            })}
          </div>
        </Marquee>
      </Container>
      <Footer />
    </>
  );
};
