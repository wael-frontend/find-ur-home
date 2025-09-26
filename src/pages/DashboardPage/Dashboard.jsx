import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import { salesData, usersData } from "../../DashboardData.js";
import SideBar from "../../ui/Sidebar.jsx";
import StatsCards from "../../ui/StatsCards.jsx";
import StayDurationChart from "../../ui/StayDurationChart.jsx";
import GeoTrafficMap from "../../ui/GeoTrafficMap.jsx";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import ResponsiveMenu from "../../ui/ResponsiveMenu.jsx";
import { useState } from "react";
export default function Dashboard() {
  const [open, setOPen] = useState();
  return (
    <div className="w-full h-screen flex   max-sm:gap-0  max-sm:justify-center  justify-center lg:overflow-hidden sm:overflow-y-scroll">
      <button
        className=" lg:hidden md:hidden  max-sm:block h-10 w-10 fixed left-0  "
        onClick={() => setOPen(!open)}
      >
        <DensityMediumOutlinedIcon />
      </button>
      <SideBar />
      <ResponsiveMenu open={open} />
      {/* Sales Line Chart */}
      <div className="w-full h-screen mt-4 overflow-y-scroll">
        <div className="flex w-full justify-center ">
          <StatsCards />
        </div>
        <div className="bg-white ounded-2xl shadow p-4 grid  lg:grid-cols-2 sm:grid-cols-1 mt-6 ">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="#ef4444"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
          <div>
            <StayDurationChart />
          </div>
        </div>
        <div className="grid lg:grid-cols-2  sm:grid-cols-1 md:grid-cols-2">
          <GeoTrafficMap />
          <div style={{ flex: 1 }}>
            <h2>Monthly Users</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={usersData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Users Bar Chart */}

      {/* Market Share Pie Chart */}
    </div>
  );
}
