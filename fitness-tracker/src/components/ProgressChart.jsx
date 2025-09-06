import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", calories: 500 },
  { day: "Tue", calories: 650 },
  { day: "Wed", calories: 700 },
  { day: "Thu", calories: 800 },
  { day: "Fri", calories: 750 },
  { day: "Sat", calories: 900 },
  { day: "Sun", calories: 650 },
];

export default function ProgressChart() {
  return (
    <div className="bg-blue-800 p-6 rounded-2xl shadow-md">
      <h3 className="mb-4 font-semibold text-white text-lg">Progress</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" />
            <XAxis dataKey="day" stroke="#e0f2fe" />
            <YAxis stroke="#e0f2fe" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e3a8a",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
              labelStyle={{ color: "#bae6fd" }}
            />
            <Line
              type="monotone"
              dataKey="calories"
              stroke="#38bdf8"
              strokeWidth={3}
              dot={{ r: 5, fill: "#38bdf8", strokeWidth: 2, stroke: "#0c4a6e" }}
              activeDot={{ r: 7, fill: "#bae6fd" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

