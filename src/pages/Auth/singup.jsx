import { DensityMediumOutlined } from "@mui/icons-material";
import ResponsiveMenu from "../../ui/ResponsiveMenu";
import SignupForm from "../../ui/SignupForm";
import { useState } from "react";

export default function Singup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
        <button
          className=" text-amber-100 relative bottom-[320px] right-7  xl:hidden lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <DensityMediumOutlined />
        </button>
        <ResponsiveMenu open={open} />
        <SignupForm />
      </div>
    </>
  );
}
