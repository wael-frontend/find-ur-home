import AvatarHeader from "../ui/AvatarHeader";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import { useState } from "react";
import ResponsiveMenu from "../ui/ResponsiveMenu";
import Nav from "../ui/Nav";
import UserAvatar from "../pages/Auth/UserAvatar";
export default function Applayout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="w-full fixed">
        <div className=" flex justify-between items-center py-0 bg-gray-50">
          <div className="flex gap-[100px]  items-center ">
            <AvatarHeader />
            <Nav />
          </div>
          <ResponsiveMenu open={open} />
          <button
            className="relative left-[110px]  xl:hidden lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <DensityMediumOutlinedIcon />
          </button>
          <div className="flex gap-[40px] mr-[50px] ">
            <UserAvatar />
            <button className="w-[100px] bg-amber-300 h-[40px] rounded-[5px] font-bold mt-2 max-sm:hidden ">
              Profile
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
