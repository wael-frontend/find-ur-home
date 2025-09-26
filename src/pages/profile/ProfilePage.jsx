import AupdateUseracount from "../Auth/AupdateUseracount";
import transition from "../../ui/transition";
import SideBar from "../../ui/Sidebar";
import ResponsiveMenu from "../../ui/ResponsiveMenu";
import { DensityMediumOutlined } from "@mui/icons-material";
import { useState } from "react";

function ProfilePage() {
  const [open, setOPen] = useState();

  return (
    <>
      <div className="bg-amber-700 w-full">
        <button
          className=" lg:hidden md:hidden  max-sm:block h-10 w-10 fixed left-0  "
          onClick={() => setOPen(!open)}
        >
          <DensityMediumOutlined />
        </button>
        <ResponsiveMenu open={open} />
      </div>
      <div className="w-full h-screen flex gap-52  max-sm:gap-0  max-sm:justify-center bg">
        <SideBar />
        <AupdateUseracount />
      </div>
    </>
  );
}
export default transition(ProfilePage);
