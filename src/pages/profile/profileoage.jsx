import AupdateUseracount from "../Auth/AupdateUseracount";
import transition from "../../ui/transition";
import SideBar from "../../ui/Sidebar";

function ProfilePage() {
  return (
    <div className="w-full h-screen flex gap-52  max-sm:gap-0  max-sm:justify-center bg">
      <SideBar />
      <AupdateUseracount />
    </div>
  );
}
export default transition(ProfilePage);
