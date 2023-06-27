import React from "react";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, Paper, Typography } from "@mui/material";

import {
  china,
  cogo2,
  cogo3,
  cogo4,
  cwg,
  france,
  germany,
  italy,
  logo,
  southkorea,
  turkey,
  usa,
} from "../../images";
import { useState } from "react";
import { mdiBook, mdiFilePdfBox } from "@mdi/js";
import Icon from "@mdi/react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import { useContext } from "react";
import { AppContext } from "../../utils";
import { FiArrowDownRight } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { LanguageHover } from "./NavbarHovers/languageHover";

const array = [
  {
    name: " CogwiseAI Bot",
    icon: cwg,
    heading: "Hyper-charged NLP language",
    text: "Explore our Bot through   ",
  },
  {
    name: " CogwiseAI Alerts",
    icon: cogo2,
    heading: "Hyper-charged NLP language",
    text: "Explore our Bot through   ",
  },
  {
    name: " CogwiseAI Real-time Trading",
    icon: cogo3,
    heading: "Hyper-charged NLP language",
    text: "Explore our Bot through  ",
  },
  {
    name: "CogwiseAI Wallet Tracke",
    icon: cogo4,
    heading: "Hyper-charged NLP language",
    text: "Explore our Bot through   ",
  },
];
const array2 = [
  {
    name: " Whitepaper",
    icon: <Icon path={mdiFilePdfBox} size={1.2} color="lightGray" />,
  },
  {
    name: " View on GitBook",
    icon: <Icon path={mdiBook} size={1.2} color="lightGray" />,
  },
];
const array3 = [
  {
    name: " Telegra",
    icon: <FaTelegramPlane />,
    heading: "https://t.me/cogwise_io",
  },
  {
    name: " Twitter",
    icon: <AiOutlineTwitter />,
    heading: "https://twitter.com/cogwise",
  },
  {
    name: " Medium",
    icon: <SiMedium />,
    heading: "https://medium.com/@cogwise",
  },
  {
    name: " Raddit",
    icon: <FaTelegramPlane />,
    heading: "https://www.reddit.com/r/cogwise",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    heading: "https://github.com/cogwise-io",
  },
];
const array4 = [
  {
    name: " English",
    icon: usa,
  },
  {
    name: " Korean",
    icon: southkorea,
  },
  {
    name: " Chinese",
    icon: china,
  },
  {
    name: " German",
    icon: germany,
  },
  {
    name: " Turkish",
    icon: turkey,
  },
  {
    name: " Italian",
    icon: italy,
  },
  { name: "French", icon: france },
];

const useStyles = makeStyles({
  list: {
    width: " 70%",
  },
  fullList: {
    width: "70%",
    alignItems: "center",
  },
  paper: {
    background: "#0F131B",
    justifyContent: "flex-start",
  },
  hover: {
    "&:hover": {
      color: "#fff",
    },
  },
});

// eslint-disable-next-line react/prop-types
export default function Header({ children }) {
  const { connect, account, disconnect } = useContext(AppContext);
  const [language, setLanguage] = useState(false);
  const [icon, setIcon] = useState(false);

  const [hover, setHover] = useState({
    name: " CogwiseAI Bot",
    icon: cwg,
    heading: "Hyper-charged NLP language",
    text: "Explore our Bot through native language  ",
  });
  const [chover, setCHover] = useState({
    name: " Telegra",
    icon: <FaTelegramPlane />,
    heading: "https://t.me/cogwise_io",
  });
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    setIcon(!icon);
  };
  const list = (anchor) => (
    <div
      className="w-[300px]  "
      role="presentation"
      background="#292929"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        className="scroolbox"
        sx={{
          py: 1,
          background: "#000000",

          "&::-webkit-scrollbar": {
            width: "0 !important",
          },
          "&::-webkit-scrollbar:horizontal": {
            height: "4px !important",
          },
          "&::-webkit-scrollbar:verticle": {
            width: "4px !important",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#219D89",
          },
        }}
      >
        {children}

        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "70px",
            justifyContent: "space-between",
            alignItems: "center",
            mx: "auto",

            color: "#fff",
          }}
        >
          <img
            src={logo}
            alt=""
            srcSet=""
            style={{ height: "100%", width: "50%", objectFit: "contain" }}
          />
          <div className="flex justify-end  items-center">
            <p className="text-[#fff] text-sm ">EN</p>
            <Button onClick={() => setLanguage(!language)}>
              <MdLanguage className="text-2xl  text-[#fff]" />
            </Button>
          </div>
        </Box>
        <List sx={{ mt: 0, color: "#fff" }}>
          {language ? (
            <>
              <div className="ml-2 w-full space-y-3 text-left">
                {array4.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="  border-r-[#303030] hover:bg-[#212129] rounded-lg p-2 "
                    >
                      <div className="w-full flex  justify-between  items-center lg:items-start   lg:justify-start  space-x-3    ">
                        <div className=" flex space-x-3 justify-center py-[2px] lg:items-start ">
                          <img
                            src={item.icon}
                            alt=""
                            srcSet=""
                            style={{
                              width: "25px",
                              height: "25px",
                              objectFit: "cover",
                            }}
                          />
                          <p className="font-normal">{item.name}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}

          <Typography sx={{ fontSize: "24px ", ml: 2, my: 1.5 }}>
            HomePage
          </Typography>
          <Typography sx={{ fontSize: "24px ", ml: 2 }}>
            Presale{" "}
            <span className=" border border-[#39E3BA] px-1 rounded-2xl text-[#000] text-[12px] ml-1  font-normal blob green">
              LIVE
            </span>{" "}
          </Typography>
          <Accordion
            sx={{
              borderBottom: "none",
              borderTop: "none",
              boxShadow: "none",

              "&.MuiAccordion-root:before ": {
                height: "0px !important",
              },
              width: "100%",
              background: "#000",
              // my: 1,
            }}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Solutions
                <FiArrowDownRight className="text-[#7900ee] font-bold]" />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className=" w-full  space-y-3 text-left bg-[#000000]">
                {array.map((item, i) => {
                  return (
                    <div
                      onMouseEnter={() => setHover(item)}
                      key={i}
                      className="  border-r-[#303030] hover:bg-[#212129] rounded-lg p-1 md:p-2 "
                    >
                      <div className="w-full flex justify-between  items-center   space-x-3    ">
                        <div className="flex space-x-4 items-center">
                          <img
                            src={item.icon}
                            alt=""
                            srcSet=""
                            style={{ width: "20px", height: "20px" }}
                          />
                          <div className=" flex flex-col items-start ">
                            <p className="font-medium text-left text-[12px] md:text-sm text-[#fff]">
                              {item.name}
                            </p>
                            <p className="text-[#5C5C5C]  text-[12px] md:text-[14px] ">
                              {item.text}
                            </p>
                          </div>
                        </div>
                        {hover.name === item.name ? (
                          <button className="bg-[#7E0AEF] px-2 py-[1px] md:py-[2px] rounded-3xl  text-[10px] md:text-[12px]">
                            SOON
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>

          <Typography sx={{ fontSize: "24px ", ml: 2 }}>Team</Typography>
          <Accordion
            sx={{
              borderBottom: "none",
              borderTop: "none",
              boxShadow: "none",

              "&.MuiAccordion-root:before ": {
                height: "0px !important",
              },
              width: "100%",
              background: "#000",
              // my: 1,
            }}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                Docs
                <FiArrowDownRight className="text-[#7900ee] font-bold]" />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className=" w-full space-y-3 text-left">
                {array2.map((item, i) => {
                  return (
                    <div
                      // onMouseLeave={() => setHover(item)}
                      key={i}
                      className="  border-r-[#303030] hover:bg-[#212129] rounded-lg  "
                    >
                      <div className="w-full flex  justify-start  items-center   space-x-3    ">
                        <div className="w-[40px] h-[40px] rounded-md p-1 text-xl">
                          {item.icon}
                        </div>
                        <div className=" flex flex-col justify-center  lg:items-start mt-1">
                          <p className="font-medium text-[#fff]">{item.name}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              borderBottom: "none",
              borderTop: "none",
              boxShadow: "none",
              "&.MuiAccordion-root:before ": {
                height: "0px !important",
              },
              width: "100%",
              background: "#000",
              // my: 1,
            }}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#fff",
                  mt: -1,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                Community
                <FiArrowDownRight className="text-[#7900ee] font-bold]" />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col items-start  w-full space-y-3 text-left">
                {array3.map((item, i) => {
                  return (
                    <div
                      onMouseEnter={() => setCHover(item)}
                      key={i}
                      className=" w-full  border-r-[#303030] hover:bg-[#212129] rounded-lg p-2 "
                    >
                      <a
                        target="_blank"
                        href={`https//:${item.heading}`}
                        rel="noreferrer"
                        className="w-full flex  justify-between  items-center  lg:justify-between  space-x-3    "
                      >
                        <div className=" flex space-x-3">
                          <div className="w-[40px] text-[#fff] h-[40px] rounded-full p-3 bg-[#414141]">
                            {item.icon}
                          </div>
                          <div className=" w-full">
                            <p className="font-medium text-[#fff]  text-[16px] ">
                              {item.name}
                            </p>
                            <p className="text-[#5C5C5C] text-sm md:text-sm font-medium overflow-hidden">
                              {item.heading}
                            </p>
                          </div>
                        </div>
                        <div className="pr-2 font-extrabold ">
                          {hover?.name === item?.name ? (
                            <BsBoxArrowUpRight />
                          ) : (
                            ""
                          )}
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </AccordionDetails>
          </Accordion>
          <Typography sx={{ fontSize: "24px ", ml: 2 }}>Contact</Typography>

          <div className="flex gap-2 px-3 mt-16 w-full">
            {account ? (
              <button
                onClick={() => disconnect()}
                className="w-full text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px]  py-2 px-4   rounded-[24px]"
              >
                {`${account.slice(0, 8) + "..."}`}
              </button>
            ) : (
              <button
                onClick={() => connect()}
                className="w-full blob blue text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px] py-2  px-4  rounded-[24px] "
              >
                CONNECT
              </button>
            )}
          </div>
        </List>
      </Box>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mt="0px"
      >
        <Box sx={{ width: "100%" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              boxShadow: "0px 0px 7px  rgba(0, 0, 0, 0.25)",
            }}
          >
            <Hidden lgUp>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      borderRadius: "5px",
                      boxShadow: 2,
                      p: 1,
                    }}
                  >
                    <img src={logo} alt="" srcSet="" />
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                      {icon ? (
                        <CloseIcon
                          sx={{
                            background: "#fff",
                            fontSize: "40px",
                            cursor: "pointer",
                            borderRadius: "50%",
                            p: 1,
                            color: "#000",
                          }}
                        />
                      ) : (
                        <MenuIcon
                          sx={{
                            background: "#fff",
                            fontSize: "40px",
                            cursor: "pointer",
                            borderRadius: "50%",
                            p: 1,
                            color: "#000",
                          }}
                        />
                      )}
                    </IconButton>
                  </Box>
                  <Paper>
                    <SwipeableDrawer
                      // classes={{ paper: classes.paper }}
                      sx={{ width: "100%" }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      <Box
                        sx={{
                          height: "100vh",
                          width: "100%",

                          background: "#000",
                        }}
                      >
                        {list(anchor)}
                      </Box>
                    </SwipeableDrawer>
                  </Paper>
                </React.Fragment>
              ))}
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
}
