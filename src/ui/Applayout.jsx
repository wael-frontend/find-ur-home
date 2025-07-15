import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <div className=" min-h-screen w-screen">
      <Header />
      <main className="bg-gray-50 w-full">
        <Outlet />
      </main>
    </div>
  );
}
