import React, { useContext } from "react";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { Button, IconButton, Paper, Typography } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo } from "../../images.js";
import { FiArrowDownRight } from "react-icons/fi";
import { CommunityHover } from "./NavbarHovers/CommunityHover.jsx";
import { DocsHover } from "./NavbarHovers/DocsHover.jsx";
import { Solution } from "./NavbarHovers/Solution.jsx";
import { useState } from "react";
import { AppContext } from "../../utils.js";

const useStyles = makeStyles({
  list: {
    width: "300px",
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
export default function NavDrawar({ children }) {
  const { connect, account, disconnect } = useContext(AppContext);
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });
  const navigate = useNavigate();
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
      className=" w-[300px] sm:w-[600px] md:w-[600px] min-h-screen"
      //   className={clsx(classes.list, {
      //     [classes.fullList]: anchor === "top" || anchor === "bottom",
      //   })}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {children}

      <Box
        sx={{
          display: "flex",
          width: "150px",
          height: "70px",
          ml: 3,
          mt: "10px",
        }}
      >
        <img
          src={logo}
          alt=""
          srcSet=""
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </Box>
      <List sx={{ mt: 0, px: 2 }}>
        <div className="items-start justify-center text-[#fff] text-xl space-y-3   py-2 ">
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/")}
            className="flex relative  space-x-2 items-center py-[1px] px-[0.5rem] rounded-[0.25rem]"
          >
            <p className="tracking-[1.34px] "> SOLUTIONS</p>{" "}
            <FiArrowDownRight className="text-[#696969] font-bold]" />
            {isHovered ? <Solution /> : ""}
          </button>
          <button className="tracking-[1.34px] flex px-[0.5rem]  space-x-3 items-center  ">
            PRESALE{" "}
            <p className=" border border-[#39E3BA] px-1 rounded-2xl text-[#000] text-[12px] ml-1  font-normal blob green">
              LIVE
            </p>
          </button>
          <button
            onMouseEnter={handleDocs}
            onMouseLeave={handleDocsfalse}
            className="flex space-x-2 items-center  py-[1px] px-[0.5rem] rounded-[0.25rem] "
          >
            <p className="tracking-[1.34px] ">DOCS</p>

            <FiArrowDownRight className="text-[#696969]  font-semibold" />
            {docs ? <DocsHover /> : ""}
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className=" px-[0.5rem]  flex flex-col tracking-[1.34px] "
          >
            TEAM
          </button>
          <button
            onMouseEnter={handlecomunityHover}
            onMouseLeave={handlecommunity}
            className="flex space-x-2  py-[1px] px-[0.5rem] rounded-[0.25rem]"
          >
            {" "}
            <p className="tracking-[1.34px">COMMUNITY</p>{" "}
            <FiArrowDownRight className="text-[#696969]  font-semibold" />
            {community ? <CommunityHover /> : ""}
          </button>
          <button className=" px-[0.5rem]  tracking-[1.34px] ">CONTACT</button>{" "}
        </div>
        <div className="flex items-center flex-row  justify-center  mt-10">
          {account ? (
            <button
              onClick={() => disconnect()}
              className=" w-full text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px]  py-2 px-4   rounded-[24px]"
            >
              {`${account.slice(0, 8) + "..."}`}
            </button>
          ) : (
            <button
              onClick={() => connect()}
              className="w-full text-[#fff] text-[14px] bg-[#7900EE] hover:bg-[#4940cf] min-w-[130px] py-2  px-4  rounded-[24px] blob blue "
            >
              CONNECT
            </button>
          )}
        </div>
      </List>
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
        minHeight="100vh"
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
                      mt: -3,
                      p: 1,
                    }}
                  >
                    <img src={logo} alt="" srcset="" />
                    <IconButton onClick={toggleDrawer(anchor, true)}>
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
