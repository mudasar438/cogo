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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clsx from "clsx";
import { Button, IconButton, Paper, Typography } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { cogo2, cogo3, cogo4, cwg, logo } from "../../images";
import { useState } from "react";
import { mdiBook, mdiFilePdfBox } from "@mdi/js";
import Icon from "@mdi/react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import { useContext } from "react";
import { AppContext } from "../../utils";

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

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
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

  const navigate = useNavigate();

  const styledactivelink = ({ isActive }) => {
    return {
      textDecoration: "none",
      textTransform: "capitalize",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "20px",
      color: isActive ? "#000" : "#fff ",
      fontFamily: "Poppins",
      display: "flex",
      gap: "20px",
      alignItems: "center",
      background: isActive ? "#fff" : "",
    };
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
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
          py: 5,
          background: "#292929",

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
            width: "150px",
            height: "70px",
            mx: "auto",

            color: "#fff",
            //   mt: "50px",
          }}
        >
          <img
            src={logo}
            alt=""
            srcSet=""
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </Box>
        <List sx={{ mt: 0, color: "#fff" }}>
          <Typography sx={{ fontSize: "20px ", ml: 2, my: 1.5 }}>
            HomePage
          </Typography>
          <Typography sx={{ fontSize: "20px ", ml: 2 }}>
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
              background: "#292929",
              // my: 1,
            }}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                Solutions
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className=" w-full md:w-[60%] space-y-3 text-left">
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
                            <p className="font-medium text-left text-[12px] md:text-lg text-[#fff]">
                              {item.name}
                            </p>
                            <p className="text-[#5C5C5C]  text-[12px] md:text-[14px] ">
                              {item.text}
                            </p>
                          </div>
                        </div>
                        {hover.name === item.name ? (
                          <button className="bg-[#7E0AEF] px-2 py-[1px] md:py-[2px] rounded-3xl  text-[10px] md:text-sm">
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
          <Typography sx={{ fontSize: "20px ", ml: 2 }}>Team</Typography>
          <Accordion
            sx={{
              borderBottom: "none",
              borderTop: "none",
              boxShadow: "none",
              "&.MuiAccordion-root:before ": {
                height: "0px !important",
              },
              width: "100%",
              background: "#292929",
              // my: 1,
            }}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "20px", color: "#fff" }}>
                Docs
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
              background: "#292929",
              // my: 1,
            }}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: "20px", color: "#fff", mt: -1 }}>
                Community
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
          <Typography sx={{ fontSize: "20px ", ml: 2 }}>Contact</Typography>

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
                      if(true){<CloseIcon />}
                      <MenuIcon
                        sx={{
                          fontSize: "25px",
                          cursor: "pointer",

                          color: "#fff",
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Paper>
                    <SwipeableDrawer
                      classes={{ paper: classes.paper }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      <Box
                        sx={{
                          height: "100vh",
                          width: "100%",
                          background: "#292929",
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
