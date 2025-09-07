import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import WorkoutTracker from "./components/WorkoutTracker";
import FitnessPlan from "./components/FitnessPlan";
import Recommendation from "./components/Recommendation";
import UserPreferences from "./components/UserPreferences";
import Footer from "./components/Footer";
import { Dumbbell, Activity, Heart } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 px-6 py-6 space-y-10">
          <Routes>
            {/* Dashboard / Home */}
            <Route
              path="/"
              element={
                <div className="space-y-10">
                  {/* Categories */}
                  <div className="grid grid-cols-3 gap-6 text-center mb-10">
                    <div className="bg-blue-800 p-4 rounded-xl shadow-lg hover:bg-blue-700 transition">
                      <Dumbbell className="mx-auto w-8 h-8 text-blue-300" />
                      <p className="mt-2 font-medium">Upper Body</p>
                    </div>
                    <div className="bg-blue-800 p-4 rounded-xl shadow-lg hover:bg-blue-700 transition">
                      <Heart className="mx-auto w-8 h-8 text-pink-300" />
                      <p className="mt-2 font-medium">Yoga</p>
                    </div>
                    <div className="bg-blue-800 p-4 rounded-xl shadow-lg hover:bg-blue-700 transition">
                      <Activity className="mx-auto w-8 h-8 text-green-300" />
                      <p className="mt-2 font-medium">Core</p>
                    </div>
                  </div>

                  {/* Tracker Section */}
                  <section>
                    <h2 className="text-2xl font-bold text-center text-blue-200">
                      TRACKER
                    </h2>
                    <p className="text-center text-gray-400">MTWTFSS</p>

                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                      <div className="bg-blue-800 shadow-md rounded-lg p-4">
                        <p className="text-2xl font-bold text-blue-300">750</p>
                        <p className="text-sm text-gray-300">Calories</p>
                      </div>
                      <div className="bg-blue-800 shadow-md rounded-lg p-4">
                        <p className="text-2xl font-bold text-blue-300">4</p>
                        <p className="text-sm text-gray-300">Workouts</p>
                      </div>
                      <div className="bg-blue-800 shadow-md rounded-lg p-4">
                        <p className="text-2xl font-bold text-blue-300">23</p>
                        <p className="text-sm text-gray-300">BMI</p>
                      </div>
                    </div>
                  </section>

                  {/* Progress Graph */}
                  <section className="mt-10 bg-blue-800 shadow-md rounded-lg p-6">
                    <h3 className="font-bold mb-4 text-blue-200">Progress</h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart
                        data={[
                          { day: "Mon", value: 2 },
                          { day: "Tue", value: 3 },
                          { day: "Wed", value: 1 },
                          { day: "Thu", value: 4 },
                          { day: "Fri", value: 5 },
                          { day: "Sat", value: 2 },
                          { day: "Sun", value: 3 },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e3a8a" />
                        <XAxis dataKey="day" stroke="#93c5fd" />
                        <YAxis stroke="#93c5fd" />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1e3a8a", color: "#fff" }}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#60a5fa"
                          strokeWidth={3}
                          dot={{ fill: "#3b82f6", r: 5 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </section>

                  {/* Recommendations Section */}
                  <Recommendation />
                </div>
              }
            />

            {/* Other Routes */}
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
