import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { eth, t } from "../images";
import { ConnectWallect } from "./SmallComponent/ConnectWallect";

export default function MyModal() {
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
          className="Barlow text-[#fff] text-lg bg-[#7900EE] hover:bg-[#203cc6] min-w-[130px]   px-6 py-2 rounded-3xl font-medium text-center"
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
                      <div className="Barlow flex space-x-5 items-center">
                        <p className="'Barlow bg-[#232323] rounded-2xl p-2 flex self-center md:self-start">
                          ROUND 1 [ $0.045 ]
                        </p>

                        <button className="bg-[#39E3BA] border border-[#39E3BA] px-4 -py-1 h-8 rounded-2xl text-[#000] text-[12px] ml-1 font-semibold">
                          LIVE
                        </button>
                      </div>
                      <p className="text-3xl font-normal  text-center md:text-left font-Rubik w-full ">
                        Buy Cogwise $CGW
                      </p>

                      <div className="w-full bg-gray-200 rounded-full dark:bg-[#232323]">
                        <div
                          className=" bg-gradient-to-r from-[#292D2C] to-[#328D77] text-xl font-medium text-[#000] text-center p-0.5 leading-none rounded-full"
                          style={{ width: "64.23%" }}
                        >
                          {" "}
                          64.23%
                        </div>
                      </div>
                      <div className=" flex flex-col   sm:flex-row space-y-12 sm:space-y-0 sm:space-x-12 shadow-xl w-full items-center justify-center md:justify-start">
                        <div className="">
                          <p className="text-[#858585] font-medium">
                            SOLD (BGPT)
                          </p>
                          <p className="text-2xl py-2">270,192,205</p>
                          <p className="text-[#545454] font-medium">
                            / 300,000,000
                          </p>
                        </div>

                        <div className="">
                          <p className="text-[#858585] font-medium">
                            SOLD (BGPT)
                          </p>
                          <p className="text-2xl py-2">270,192,205</p>
                          <p className="text-[#545454] font-medium">
                            / 300,000,000
                          </p>
                        </div>
                      </div>
                      <div className="flex w-full justify-center ">
                        <ConnectWallect text="connect" />
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
