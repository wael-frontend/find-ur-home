import {
  DashboardCustomize,
  DomainAddOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import useUser from "../Auth/useUser";
import AupdateUseracount from "../Auth/AupdateUseracount";
import transition from "../../ui/transition";

function ProfilePage() {
  const { user } = useUser();
  return (
    <div className="w-full h-screen flex gap-52  max-sm:gap-0  max-sm:justify-center bg">
      <div className="h-screen w-[300px] max-sm:hidden bg-[#E43636] ">
        <div className="mt-30 ml-30">
          <img
            src="/default-user.jpg"
            className="w-20 aspect-square object-cover object-center rounded-full "
          />
          <p className=" font-medium mt-3.5 mr-14">
            {user.user_metadata.full_name}{" "}
          </p>
        </div>
        <ul className="text-black mt-14 space-y-12 ml-4 ">
          <li>
            <DomainAddOutlined /> my listings
          </li>
          <li>
            <DashboardCustomize /> Dashboard
          </li>
          <li>
            <HomeOutlined /> back home{" "}
          </li>

          <li>
            <LogoutOutlined />{" "}
          </li>
        </ul>
      </div>
      <AupdateUseracount />
    </div>
  );
}
export default transition(ProfilePage);
