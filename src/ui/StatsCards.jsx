import {
  FaEnvelope,
  FaShoppingCart,
  FaUsers,
  FaTrafficLight,
} from "react-icons/fa";

const statsData = [
  {
    id: 1,
    title: "Emails Sent",
    value: "12,361",
    change: "+14%",
    icon: <FaEnvelope size={24} />,
  },
  {
    id: 2,
    title: "Sales Obtained",
    value: "431,225",
    change: "+21%",
    icon: <FaShoppingCart size={24} />,
  },
  {
    id: 3,
    title: "New Clients",
    value: "32,441",
    change: "+5%",
    icon: <FaUsers size={24} />,
  },
  {
    id: 4,
    title: "Traffic Received",
    value: "1,325,134",
    change: "+43%",
    icon: <FaTrafficLight size={24} />,
  },
];

export default function StatsCards() {
  return (
    <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-0 w-full lg:h-24  ">
      {statsData.map((stat) => (
        <div
          key={stat.id}
          className=" text-white p-6 flex flex-col items-start shadow-lg hover:shadow-xl transition"
        >
          <div className="flex items-center gap-3">
            <span className="text-green-400">{stat.icon}</span>
            <p className="text-2xl font-semibold text-gray-900 ml-12">
              {stat.value}
            </p>
          </div>
          <p className="text-gray-900 text-sm">{stat.title}</p>
          <p className="text-green-400 text-sm mt-2">{stat.change}</p>
        </div>
      ))}
    </div>
  );
}
