import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

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
    <div className="bg-blue-700 p-6 rounded-2xl">
      <h3 className="mb-4 font-semibold">Progress</h3>
      <LineChart width={350} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Line type="monotone" dataKey="calories" stroke="#38bdf8" />
      </LineChart>
    </div>
  );
}
