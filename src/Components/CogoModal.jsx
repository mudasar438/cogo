import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { cwg, eth, logo, t } from "../images";
import { ConnectWallect } from "./SmallComponent/ConnectWallect";

export default function CogoModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="text-[#fff] text-lg bg-[#7900EE] hover:bg-[#203cc6] min-w-[130px]   px-6 py-2 rounded-3xl font-medium text-center"
        >
          BUY WITH USDT
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
                      <div className="flex space-x-5 items-center">
                        <p className="bg-[#232323] rounded-2xl p-2    flex self-center md:self-start">
                          ROUND 1 [ $0.045 ]
                        </p>

                        <button className="bg-[#39E3BA] border border-[#39E3BA] px-4 -py-1 h-8 rounded-2xl text-[#000] text-[12px] ml-1 font-semibold">
                          LIVE
                        </button>
                      </div>
                      <p className="text-3xl font-normal  text-center md:text-left font-Rubik w-full ">
                        Buy Cogwise $CGW
                      </p>
                      <div className="flex justify-between bg-[#141414] p-3 rounded-xl shadow-md">
                        <input
                          type="text"
                          placeholder="Enter Amount"
                          className=" max-w-sm min-w-[180px] bg-[#141414] p-3 focus:outline-0"
                        />
                        <div className="flex space-x-5 items-center">
                          <button className="bg-[#393939] px-2 h-8 rounded-lg pb-1">
                            max
                          </button>
                          <img
                            src={t}
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
                        <ConnectWallect text="BUY NOW" />
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
