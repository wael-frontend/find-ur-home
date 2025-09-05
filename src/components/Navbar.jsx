import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import { useState } from "react";
import ResponsiveMenu from "../ui/ResponsiveMenu";
import Nav from "../ui/Nav";
import UserAvatar from "../pages/Auth/UserAvatar";
import AvatarHeader from "../ui/AvatarHeader";
export default function Applayout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className=" flex w-full md:w-[100%] lg:w-[100%] fixed h-20 lg:mr-5  bg-black/50 top-0 border-b border-gray-200 dark:border-gray-700 z-40 ">
        <AvatarHeader />

        <div className=" w-full flex  sm:flex-row justify-center items-center ">
          <div className=" relative mb text-center flex items-center gap-[200px] ">
            <Nav />
          </div>
          <ResponsiveMenu open={open} />
          <button
            className=" text-cyan-50  xl:hidden md:hidden z-50 fixed right-2"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <DensityMediumOutlinedIcon />
          </button>
        </div>
        <div className="flex  sm:hidden mr-10">
          <UserAvatar />
        </div>
      </nav>
    </>
  );
}
