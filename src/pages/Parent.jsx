import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar/Navbar";

export const Parent = () => {
  return (
    <div className="">
      <div className="screen-h-100vh w-full relative">
        <div>
          <Navbar />
        </div>

        <div className="pt-16">
          <Outlet />
        </div>
        {/* //footer */}
      </div>
    </div>
  );
};
