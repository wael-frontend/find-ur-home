import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div className=" flex min-h-screen w-screen justify-center">
      <Navbar />
      <main className="bg-gray-50 w-full">
        <Outlet />
      </main>
    </div>
  );
}
