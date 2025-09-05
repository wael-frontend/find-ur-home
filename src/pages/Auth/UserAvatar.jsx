import { LogoutOutlined, Person } from "@mui/icons-material";
import useUser from "./useUser";
import Button from "../../ui/Button";
import useLogOut from "../Auth/useLogOut";
import { useNavigate } from "react-router-dom";

export default function UserAvatar() {
  const { user } = useUser();
  const { avatar, full_name } = user.user_metadata;
  const { Logout } = useLogOut();
  const navigate = useNavigate();
  console.log("Avatar URL:", avatar);
  console.log(full_name);
  return (
    <div className="max-sm:hidden lg:flex items-center space-x-35">
      <div className="flex gap-5">
        <img
          src={avatar || "default-user.jpg"}
          alt="User Avatar"
          className="w-14 h-14 rounded-[100%]  md:hidden lg:block"
        />
        <p className="text-white  md:hidden lg:block font-medium mt-3.5  ">
          {full_name}
        </p>
      </div>

      <div className="flex gap-3 mr-6 mt-3">
        <Button onClick={() => Logout()}>
          <LogoutOutlined />
        </Button>
        <Button onClick={() => navigate("/profile")}>
          <Person />
        </Button>
      </div>
    </div>
  );
}
