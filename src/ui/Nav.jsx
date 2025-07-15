import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="max-sm:hidden md:block z-10 bg-white/20 backdrop-blur-md border-b border-white/20 h-8 w-[380px] rounded-2xl ">
        <ul className="flex gap-6 font-bold ">
          <Link to="/" className="flex">
            <Home />
            <li>Home</li>
          </Link>
          <Link to="/listing">
            <li>Listings</li>
          </Link>
          <Link>
            <li>Favorites</li>
          </Link>
          <Link>
            <li>Bookings </li>
          </Link>
        </ul>
      </div>
      <button></button>
    </>
  );
}
