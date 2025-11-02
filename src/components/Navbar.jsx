import { useState, useEffect } from "react";
import ResponsiveMenu from "../ui/ResponsiveMenu";
import Nav from "../ui/Nav";
import UserAvatar from "../pages/Auth/UserAvatar";
import AvatarHeader from "../ui/AvatarHeader";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Applayout() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const apllaybg = location.pathname.startsWith("/listing");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 right-0 flex items-center justify-around   w-full px-6 lg:px-0 3xl:px-0 z-30 py-0 transition-all duration-300  h-18 ${
          isScrolled || apllaybg
            ? "bg-white backdrop-blur-md shadow-md text-gray-900"
            : "bg-transparent text-white"
        }`}
      >
        <AvatarHeader isScrolled={isScrolled} apllaybg={apllaybg} />

        <div>
          <Nav />
          <ResponsiveMenu open={open} />
          <button
            className="text-cyan-50 xl:hidden md:hidden z-50 fixed right-2"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </button>
        </div>

        <div>
          <UserAvatar />
        </div>
      </nav>
    </>
  );
}
