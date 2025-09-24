import {
  DashboardCustomize,
  DomainAddOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import useUser from "../pages/Auth/useUser";
import { Link } from "react-router-dom";
import useLogOut from "../pages/Auth/useLogOut";

export default function SideBar() {
  const { user } = useUser();
  const { avatar, full_name } = user.user_metadata;
  const { Logout } = useLogOut();

  return (
    <div className="h-screen w-[300px] max-sm:hidden bg-[#36e4a1] ">
      <div className=" text-center ">
        <img
          src={avatar || "/default-user.jpg"}
          className="w-20 aspect-square object-cover object-center rounded-full ml-16 mt-4 "
        />
        <p className=" font-medium mt-4 mr-20 text-amber-50">{full_name}</p>
      </div>
      <ul className="text-black mt-14 space-y-4 ml-4">
        <li>
          <Link
            to="/dashboard"
            className=" items-center gap-2 p-2 rounded-md bg-gray-200 block"
          >
            <DashboardCustomize /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/listing"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 block"
          >
            <DomainAddOutlined /> <span>My Listings</span>
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 block"
          >
            <HomeOutlined /> <span>Back Home</span>
          </Link>
        </li>

        <li>
          <button onClick={() => Logout()}>
            <LogoutOutlined /> <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
