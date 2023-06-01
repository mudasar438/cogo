import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { cwg, eth, t } from "../images";
import { ConnectWallect } from "./SmallComponent/ConnectWallect";
import {
  provider,
  usePresaleContract,
  useTokenContract,
  useUSDTContract,
} from "../ConnectivityAssets/hooks";
import { AppContext } from "../utils";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { presaleAddress } from "../ConnectivityAssets/environment";
export default function BuyTokensModal({ initProgress, init }) {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const { account, signer } = useContext(AppContext);
  const [minBuyUSDT, setminBuyUSDT] = useState(0);
  const [minBuyETH, setminBuyETH] = useState(0);
  const [enteredAmount, setEnteredAmount] = useState("");
  const [receivedTokens, setreceivedTokens] = useState("");
  const [token, setToken] = useState("USDT");
  const [ethToTokens, setethToTokens] = useState(0);
  const [usdtToTokens, setusdtToTokens] = useState(0);
  const [balanceUSDT, setbalanceUSDT] = useState(0);
  const [balanceETH, setbalanceETH] = useState();
  const [loading, setloading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const presaleContract = usePresaleContract(signer);
  const tokenContract = useTokenContract(signer);
  const usdtContract = useUSDTContract(signer);
  const voidInit = async () => {
    try {
      let dec = await tokenContract.decimals();
      let minBuyUSDT = await presaleContract.minimumBuyInUsdt();
      setminBuyUSDT(formatUnits(minBuyUSDT.toString(), +dec));
      let minBuyETH = await presaleContract.minimumBuyInEth();
      setminBuyETH(formatUnits(minBuyETH.toString(), +dec));
      const recUSDT = await presaleContract.usdtToToken("1000000");
      const rec = await presaleContract.NativeToToken("1000000000000000000");
      setusdtToTokens(formatUnits(recUSDT.toString(), +dec));
      setethToTokens(formatUnits(rec.toString(), +dec));
      if (account) {
        let usdtBal = await usdtContract.balanceOf(account);
        setbalanceUSDT(+formatUnits(usdtBal.toString(), 6));
        let walletBalance = await provider.getBalance(account);
        setbalanceETH(+formatUnits(walletBalance.toString(), 18));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    voidInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presaleContract, account]);
  useEffect(() => {
    const calculator = async () => {
      try {
        if (token === "USDT") {
          const rec = +enteredAmount * +usdtToTokens;
          setreceivedTokens(rec);
        } else {
          const rec = +enteredAmount * ethToTokens;
          setreceivedTokens(rec);
        }
      } catch (error) {}
    };
    if (+enteredAmount > 0) {
      calculator();
    }
  }, [enteredAmount, tokenContract, presaleContract]);

  const buyHadler = async () => {
    if (account) {
      if (!enteredAmount) {
        setAlertState({
          open: true,
          message: `Error! Please enter a amount`,
          severity: "error",
        });
      } else if (enteredAmount <= 0) {
        setAlertState({
          open: true,
          message: `Error! Please enter a valid amount`,
          severity: "error",
        });
      } else {
        try {
          setloading(true);
          if (token === "USDT") {
            if (+enteredAmount < +minBuyUSDT) {
              setAlertState({
                open: true,
                message: `Minimum amount to buy is ${+minBuyUSDT}`,
                severity: "error",
              });
            } else {
              const balanceUSDT = await usdtContract.balanceOf(account);
              let allowance = await usdtContract.allowance(
                account,
                presaleAddress
              );
              allowance = +formatUnits(allowance.toString(), 6);
              if (allowance < +enteredAmount) {
                const approve = await usdtContract.approve(
                  presaleAddress,
                  balanceUSDT.toString()
                );
                await approve.wait();
              }
              const tx = await presaleContract.buyTokenUSDT(
                parseUnits(enteredAmount.toString(), 6)
              );
              await tx.wait();
            }
          } else {
            if (+enteredAmount < +minBuyETH) {
              setAlertState({
                open: true,
                message: `Minimum amount to buy is ${+minBuyETH} ETH`,
                severity: "error",
              });
            } else {
              const tx = await presaleContract.buyTokenEth({
                value: parseUnits(enteredAmount.toString(), 18).toString(),
              });
              await tx.wait();
            }
          }
          setComplete(true);
          setEnteredAmount("");
          setreceivedTokens("");
          initProgress();
          setloading(false);
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
      <div className="flex flex-row  w-full  items-center justify-between md:justify-start lg:justify-center  md:space-y-0 md:space-x-10">
        <button
          type="button"
          onClick={() => {
            setToken("USDT");
            openModal();
          }}
          className="Barlow text-[#fff] text-sm md:text-lg bg-[#7900EE] hover:bg-[#203cc6] min-w-[130px] w-[48%] px-2 md:px-6 py-3 rounded-3xl font-medium text-center"
        >
          BUY WITH USDT
        </button>
        <button
          type="button"
          onClick={() => {
            setToken("ETH");
            openModal();
          }}
          className="Barlow text-[#fff] text-sm md:text-lg bg-[#7900EE] hover:bg-[#203cc6] min-w-[130px] w-[48%] px-2 md:px-6 py-3 rounded-3xl font-medium text-center"
        >
          BUY WITH ETH
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[500px] text-[#fff]  rounded-2xl bg-[#0B0B0B] text-left p-5  ">
                  <div className=" w-full  ">
                    <div className="w-full  mx-auto p-5 rounded-xl flex flex-col gap-8 border border-[#303030]">
                      <div className=" Barlow flex space-x-5 items-center">
                        <p className="bg-[#232323] rounded-2xl p-2    flex self-center md:self-start">
                          ROUND 1 [ $0.045 ]
                        </p>

                        <button className="bg-[#39E3BA] border border-[#39E3BA] px-4 -py-1 h-8 rounded-2xl text-[#000] text-[12px] ml-1 font-semibold">
                          LIVE
                        </button>
                      </div>
                      <p
                        style={{ fontFamily: "Regular" }}
                        className="text-3xl font-normal  text-center md:text-left font-Rubik w-full "
                      >
                        Buy Cogwise $CGW
                      </p>
                      <div className="flex justify-between bg-[#141414] p-3 rounded-xl shadow-md">
                        <input
                          type="text"
                          placeholder="Enter Amount"
                          className=" max-w-sm min-w-[180px] bg-[#141414] p-3 focus:outline-0"
                          value={enteredAmount}
                          onChange={(e) => setEnteredAmount(e.target.value)}
                        />
                        <div className="flex space-x-5 items-center">
                          <button
                            onClick={() => {
                              token === "USDT"
                                ? setEnteredAmount(balanceUSDT)
                                : setEnteredAmount(balanceETH);
                            }}
                            className="bg-[#393939] px-2 h-8 rounded-lg pb-1"
                          >
                            max
                          </button>
                          <img
                            src={token === "USDT" ? t : eth}
                            alt=""
                            srcSet=""
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between bg-[#141414] p-3 rounded-xl shadow-md">
                        <input
                          type="text"
                          placeholder="Recive Amount"
                          className=" max-w-sm min-w-[180px] bg-[#141414] p-3 focus:outline-0"
                          value={receivedTokens}
                          // onChange={(e)=>setEnteredAmount(e.target.value)}
                        />
                        <div className="flex space-x-5 items-center">
                          <img
                            src={cwg}
                            alt=""
                            srcSet=""
                            style={{
                              objectFit: "contain",
                              width: "35px",
                              height: "35px",
                            }}
                          />
                        </div>
                      </div>

                      <div className="flex w-full justify-center ">
                        <ConnectWallect
                          onClick={() => buyHadler()}
                          text="BUY NOW"
                        />
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
