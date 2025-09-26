import AupdateUseracount from "../Auth/AupdateUseracount";
import transition from "../../ui/transition";
import SideBar from "../../ui/Sidebar";
import ResponsiveMenu from "../../ui/ResponsiveMenu";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function ProfilePage() {
  const [open, setOPen] = useState();

  return (
    <>
      <div className="bg-amber-700 w-full">
        <button
          className=" lg:hidden md:hidden  max-sm:block h-10 w-10 fixed left-0  "
          onClick={() => setOPen(!open)}
        >
          {open ? (
            <X size={36} strokeWidth={2.25} />
          ) : (
            <Menu size={36} strokeWidth={2.25} />
          )}{" "}
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
