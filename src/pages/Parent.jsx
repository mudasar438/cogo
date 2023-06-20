import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar/Navbar";
import { Hidden, Typography } from "@mui/material";
import Header from "../Components/navbar/Header";

export const Parent = () => {
  return (
    <div className="">
      <div className="screen-h-100vh w-full relative">
        <div>
          <Navbar />
        </div>
        <Hidden mdUp>
          <Header />
        </Hidden>

        <div className="pt-16">
          <Outlet />
        </div>
        {/* //footer */}
      </div>
    </div>
  );
};
