import React, { useContext, useState } from "react";
import { logo } from "../../images";
import BasicButton from "../SmallComponent/Basicbutton";
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
      <nav className="w-full " style={{ fontFamily: "Regular" }}>
        <div className="max-w-screen-2xl mx-auto justify-between px-4 md:items-center lg:flex   fixed left-0 right-0 z-10 ml-auto mr-auto top-0 w-full navhover">
          <div>
            <div className="flex items-center justify-between py-3 md:py-3 lg:block">
              <a href="/">
                <img src={logo} alt="" srcSet="" />
              </a>
              <div className="lg:hidden">
                <button
                  className="p-2 text-[#fff] rounded-md outline-none focus:border-[#fff] focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
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
              <div className="flex-col md:flex-row items-start justify-center space-y-4 md:flex md:space-x-1 md:space-y-0 font-[14px] ">
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => navigate("/")}
                  className="flex relative  space-x-2 items-center hover:bg-[#231414] px-5 p-2 rounded-3xl"
                >
                  <p className="tracking-[1.3px]"> SOLUTIONS</p>{" "}
                  <FiArrowDownRight className="text-[#8d7b7b] font-normal" />
                  {isHovered ? <Solution /> : ""}
                </button>
                <button className="tracking-[1.3px] flex space-x-3 items-center hover:bg-[#231414] px-5 p-2 rounded-3xl ">
                  PRESALE{" "}
                  <p className=" border border-[#39E3BA] px-1 rounded-2xl text-[#000] text-[12px] ml-1 font-normal blob green">
                    LIVE
                  </p>
                </button>
                <button
                  onMouseEnter={handleDocs}
                  onMouseLeave={handleDocsfalse}
                  className="flex space-x-2 items-center hover:bg-[#231414] px-5 p-2 rounded-3xl "
                >
                  <p className="tracking-[1.3px]">DOCS</p>

                  <FiArrowDownRight className="text-[#4240a6] font-semibold" />
                  {docs ? <DocsHover /> : ""}
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  className=" hover:bg-[#231414] px-5 p-2 rounded-3xl flex flex-col tracking-[1.3px]"
                >
                  TEAM
                </button>
                <button
                  onMouseEnter={handlecomunityHover}
                  onMouseLeave={handlecommunity}
                  className="flex space-x-2 items-center  hover:bg-[#231414] px-3 p-2 rounded-3xl"
                >
                  {" "}
                  <p className="tracking-[1.3px]">COMMUNITY</p>{" "}
                  <FiArrowDownRight className="text-[#4240a6] font-semibold" />
                  {community ? <CommunityHover /> : ""}
                </button>
                <button className=" hover:bg-[#231414] px-5 p-2 rounded-3xl tracking-[1.3px]">
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
            <div className="flex gap-2 py-3">
              <button
                onMouseEnter={handleLng}
                onMouseLeave={handleLngFalse}
                className="bg-[ #272727]  rounded-full"
              >
                <MdLanguage className="text-3xl" />
                {language ? <LanguageHover /> : " "}
              </button>
              {account ? (
                <button
                  onClick={() => disconnect()}
                  className="text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px]   px-4 py-2  rounded-[24px]"
                >
                  {`${account.slice(0, 8) + "..."}`}
                </button>
              ) : (
                <button
                  onClick={() => connect()}
                  className="text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px]   px-4 py-2 rounded-[24px]"
                >
                  Connect
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
