import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  const location = useLocation();
  const hideNavbar =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/profile");
  return (
    <div className=" flex min-h-screen w-screen justify-center">
      {!hideNavbar && <Navbar />}
      <main className="bg-gray-50 w-full">
        <Outlet />
      </main>
    </div>
  );
}
