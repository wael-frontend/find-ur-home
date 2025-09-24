import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const stayData = [
  { duration: "1-3 days", value: 400, color: "#34d399" },
  { duration: "4-7 days", value: 300, color: "#60a5fa" },
  { duration: "8-14 days", value: 200, color: "#fbbf24" },
  { duration: "15+ days", value: 100, color: "#f87171" },
];

export default function StayDurationChart() {
  return (
    <div className=" text-gray-950 rounded-2xl p-0 shadow-lg  h-[300px]  w-[100%]  ">
      <h2 className="text-base font-semibold mb-4">Stay Duration</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={stayData}
            nameKey="duration"
            dataKey="value"
            innerRadius={80}
            outerRadius={110}
            cx="60%"
            cy="40%"
            paddingAngle={2}
          >
            {stayData.map((entry) => (
              <Cell
                key={entry.duration}
                fill={entry.color}
                stroke={entry.color}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign=""
            align="right"
            layout="vertical"
            iconSize={10}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
