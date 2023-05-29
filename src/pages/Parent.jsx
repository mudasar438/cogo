import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar/Navbar";

export const Parent = () => {
  return (
    <div
      sx={{
        position: "relative",
      }}
    >
      <div className="screen-h-100vh w-full">
        <div>
          <Navbar />
        </div>

        <div>
          <Outlet />
        </div>
        {/* //footer */}
      </div>
    </div>
  );
};
