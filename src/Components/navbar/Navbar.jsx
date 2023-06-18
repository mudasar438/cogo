import React, { useContext, useState } from "react";
import { logo } from "../../images";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
// import { FaTelegramPlane } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Solution } from "./NavbarHovers/Solution";
import { CommunityHover } from "./NavbarHovers/CommunityHover";
import { AppContext } from "../../utils";
import { DocsHover } from "./NavbarHovers/DocsHover";
import { LanguageHover } from "./NavbarHovers/languageHover";
// import { GrLanguage } from "react-icons/gr";
import { MdLanguage } from "react-icons/md";

export const Navbar = () => {
  const { connect, account, disconnect } = useContext(AppContext);
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [community, setCommunity] = useState(false);
  const handlecomunityHover = () => {
    setCommunity(true);
  };
  const handlecommunity = () => {
    setCommunity(false);
  };
  const [docs, setDocs] = useState(false);
  const handleDocs = () => {
    setDocs(true);
  };
  const handleDocsfalse = () => {
    setDocs(false);
  };
  const [language, setLanguage] = useState(false);
  const handleLng = () => {
    setLanguage(true);
  };
  const handleLngFalse = () => {
    setLanguage(false);
  };

  return (
    <>
      <nav className="w-full  " style={{ fontFamily: "Regular" }}>
        <div className="w-full mx-auto border border-[rgba(255,255,255,0.12)]  fixed left-0 right-0 z-10 ml-auto mr-auto top-0  navhover ">
          <div className="max-w-screen-2xl mx-auto  justify-between px-4 md:items-center lg:flex  w-full ">
            <div>
              <div className="flex items-center justify-between py-3 md:py-3 lg:block">
                <a href="/">
                  <img src={logo} alt="" srcSet="" />
                </a>
                <div className="lg:hidden">
                  <button
                    className={`p-2 ${
                      navbar
                        ? "rounded-full bg-[#fff] text-[#000]"
                        : "rounded-md bg-black text-[#fff]"
                    } outline-none focus:border-[#fff] focus:border`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <GrFormClose className="text-2xl" />
                    ) : (
                      <AiOutlineMenu />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex justify-self-center md:justify-between pb-1 mt-8 lg:block md:pb-0 md:mt-0  ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <div className="flex-col lg:flex-row items-start justify-center space-y-4 lg:flex lg:space-x-4 lg:space-y-0 font-[14px] py-2 ">
                  <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => navigate("/")}
                    className="flex relative  space-x-2 items-center hover:text-[#7900ee] hover:bg-[#140c30] py-[1px] px-[0.5rem] rounded-[0.25rem]"
                  >
                    <p className="tracking-[1.34px] text-[14px] hover:font-extralight ">
                      {" "}
                      SOLUTIONS
                    </p>{" "}
                    <FiArrowDownRight className="text-[#7900ee] font-bold]" />
                    {isHovered ? <Solution /> : ""}
                  </button>
                  <button className="tracking-[1.34px] text-[14px] flex px-[0.5rem]  space-x-3 items-center hover:text-[#7900ee]  ">
                    PRESALE{" "}
                    <p className=" border border-[#39E3BA] px-1 rounded-2xl text-[#000] text-[12px] ml-1  font-normal blob green">
                      LIVE
                    </p>
                  </button>
                  <button
                    onMouseEnter={handleDocs}
                    onMouseLeave={handleDocsfalse}
                    className="relative flex space-x-2 items-center hover:text-[#7900ee] hover:bg-[#140c30] py-[1px] px-[0.5rem] rounded-[0.25rem] "
                  >
                    <p className="tracking-[1.34px] text-[14px]">DOCS</p>

                    <FiArrowDownRight className="text-[#7900ee]  font-semibold" />
                    {docs ? <DocsHover /> : ""}
                  </button>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="hover:text-[#7900ee] px-[0.5rem]  flex flex-col tracking-[1.34px] text-[14px]"
                  >
                    TEAM
                  </button>
                  <button
                    onMouseEnter={handlecomunityHover}
                    onMouseLeave={handlecommunity}
                    className="relative flex space-x-2 items-center hover:text-[#7900ee] hover:bg-[#140c30] py-[1px] px-[0.5rem] rounded-[0.25rem]"
                  >
                    {" "}
                    <p className="tracking-[1.34px] text-[14px]">
                      COMMUNITY
                    </p>{" "}
                    <FiArrowDownRight className="text-[#7900ee]  font-semibold" />
                    {community ? <CommunityHover /> : ""}
                  </button>
                  <button className=" hover:text-[#7900ee] px-[0.5rem]  tracking-[1.34px] text-[14px]">
                    CONTACT
                  </button>{" "}
                </div>
              </div>
            </div>
            <div
              className={`flex items-center flex-row  justify-center lg:block ${
                navbar ? "flex" : "hidden"
              }`}
            >
              <div className="flex gap-2 py-3 w-full">
                <button
                  onMouseEnter={handleLng}
                  onMouseLeave={handleLngFalse}
                  className="bg-[ #272727] mr-3 mt-2 rounded-full hidden lg:flex"
                >
                  <MdLanguage className="text-2xl relative" />
                  {language ? <LanguageHover /> : " "}
                </button>
                {account ? (
                  <button
                    onClick={() => disconnect()}
                    className="text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px]  py-2 px-4   rounded-[24px]"
                  >
                    {`${account.slice(0, 8) + "..."}`}
                  </button>
                ) : (
                  <button
                    onClick={() => connect()}
                    className=" blob blue text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px] py-2  px-4  rounded-[24px] "
                  >
                    CONNECT
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
