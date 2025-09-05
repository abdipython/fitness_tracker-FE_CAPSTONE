import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import WorkoutTracker from "./components/WorkoutTracker";
import FitnessPlan from "./components/FitnessPlan";
import Recommendation from "./components/Recommendation";
import UserPreferences from "./components/UserPreferences";
import Footer from "./components/Footer";
import { Dumbbell, Activity, Yoga } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { day: "Mon", value: 400 },
  { day: "Tue", value: 600 },
  { day: "Wed", value: 700 },
  { day: "Thu", value: 650 },
  { day: "Fri", value: 800 },
  { day: "Sat", value: 900 },
  { day: "Sun", value: 700 },
];

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <main className="flex-1 p-6">
          <Routes>
            {/* Dashboard */}
            <Route
              path="/"
              element={
                <div>
                  {/* Categories */}
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div className="bg-white text-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition">
                      <Dumbbell className="mx-auto w-8 h-8 text-blue-500" />
                      <p className="mt-2 font-medium">Upper Body</p>
                    </div>
                    <div className="bg-white text-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition">
                      <Yoga className="mx-auto w-8 h-8 text-green-500" />
                      <p className="mt-2 font-medium">Yoga</p>
                    </div>
                    <div className="bg-white text-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition">
                      <Activity className="mx-auto w-8 h-8 text-red-500" />
                      <p className="mt-2 font-medium">Core</p>
                    </div>
                  </div>

                  {/* Tracker */}
                  <section className="mt-10">
                    <h2 className="text-2xl font-bold text-center">TRACKER</h2>
                    <p className="text-center text-gray-200">M T W T F S S</p>

                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                      <div className="bg-white text-gray-800 shadow-md rounded-lg p-4">
                        <p className="text-lg font-bold text-blue-600">750</p>
                        <p className="text-sm text-gray-500">Calories</p>
                      </div>
                      <div className="bg-white text-gray-800 shadow-md rounded-lg p-4">
                        <p className="text-lg font-bold text-green-600">4</p>
                        <p className="text-sm text-gray-500">Workouts</p>
                      </div>
                      <div className="bg-white text-gray-800 shadow-md rounded-lg p-4">
                        <p className="text-lg font-bold text-red-600">23</p>
                        <p className="text-sm text-gray-500">BMI</p>
                      </div>
                    </div>
                  </section>

                  {/* Progress Graph */}
                  <section className="mt-10 bg-white text-gray-800 shadow-md rounded-lg p-6">
                    <h3 className="font-bold mb-4">Progress</h3>
                    <div className="w-full h-64">
                      <ResponsiveContainer>
                        <LineChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="day" />
                          <YAxis />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            dot={{ r: 6 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </section>
                </div>
              }
            />

            {/* Other pages */}
            <Route path="/tracker" element={<WorkoutTracker />} />
            <Route path="/plan" element={<FitnessPlan />} />
            <Route path="/recommendations" element={<Recommendation />} />
            <Route path="/preferences" element={<UserPreferences />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
