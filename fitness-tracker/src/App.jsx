import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import WorkoutTracker from "./components/WorkoutTracker";
import FitnessPlan from "./components/FitnessPlan";
import Recommendation from "./components/Recommendation";
import UserPreferences from "./components/UserPreferences";
import Footer from "./components/Footer";
import { Dumbbell, Activity, HeartPulse } from "lucide-react";
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
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
        <Navbar />

        <main className="flex-1 p-6">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {/* Categories */}
                  <div className="grid grid-cols-3 gap-6 text-center mb-10">
                    <div>
                      <Dumbbell className="mx-auto w-8 h-8 text-blue-500" />
                      <p className="mt-2 font-medium">Upper Body</p>
                    </div>
                    <div>
                      <HeartPulse className="mx-auto w-8 h-8 text-green-500" />
                      <p className="mt-2 font-medium">Yoga</p>
                    </div>
                    <div>
                      <Activity className="mx-auto w-8 h-8 text-red-500" />
                      <p className="mt-2 font-medium">Core</p>
                    </div>
                  </div>

                  {/* Tracker Section */}
                  <section>
                    <h2 className="text-2xl font-bold text-center">TRACKER</h2>
                    <p className="text-center text-gray-500">MTWTFSS</p>

                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                      <div className="bg-white shadow-md rounded-lg p-4">
                        <p className="text-lg font-bold">750</p>
                        <p className="text-sm text-gray-500">Calories</p>
                      </div>
                      <div className="bg-white shadow-md rounded-lg p-4">
                        <p className="text-lg font-bold">4</p>
                        <p className="text-sm text-gray-500">Workouts</p>
                      </div>
                      <div className="bg-white shadow-md rounded-lg p-4">
                        <p className="text-lg font-bold">23</p>
                        <p className="text-sm text-gray-500">BMI</p>
                      </div>
                    </div>
                  </section>

                  {/* Progress Graph */}
                  <section className="mt-10 bg-white shadow-md rounded-lg p-6">
                    <h3 className="font-bold mb-4">Progress</h3>
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
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#2563eb"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </section>
                </div>
              }
            />
            <Route path="/tracker" element={<WorkoutTracker />} />
            <Route path="/plan" element={<FitnessPlan />} />
            <Route path="/recommendations" element={<Recommendation />} />
            <Route path="/preferences" element={<UserPreferences />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

import { Dumbbell, Heart, Activity } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-blue-950">
        <button className="p-2 rounded-md border border-blue-700 md:hidden bg-blue-800">
          ☰
        </button>
        <h1 className="text-xl font-bold flex items-center gap-2 text-blue-300">
          🏃 FE.FIT
        </h1>
        <img
          src="https://randomuser.me/api/portraits/women/45.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full border-2 border-blue-400"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-6">
        {/* Categories */}
        <div className="grid grid-cols-3 gap-6 text-center">
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
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-center text-blue-200">
            TRACKER
          </h2>
          <p className="text-center text-gray-300">MTWTFSS</p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-800 shadow-md rounded-lg p-4">
              <p className="text-2xl font-bold text-blue-300">750</p>
              <p className="text-sm text-gray-200">Calories</p>
            </div>
            <div className="bg-blue-800 shadow-md rounded-lg p-4">
              <p className="text-2xl font-bold text-blue-300">4</p>
              <p className="text-sm text-gray-200">Workouts</p>
            </div>
            <div className="bg-blue-800 shadow-md rounded-lg p-4">
              <p className="text-2xl font-bold text-blue-300">23</p>
              <p className="text-sm text-gray-200">BMI</p>
            </div>
          </div>
        </section>

        {/* Progress Graph */}
        <section className="mt-10 bg-blue-800 shadow-md rounded-lg p-6">
          <h3 className="font-bold mb-4 text-blue-200">Progress</h3>
          {/* Chart placeholder */}
          <div className="w-full h-40 bg-blue-900 flex items-center justify-center rounded-md border border-blue-600">
            📈 Chart
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-400 border-t border-blue-700">
        © 2025 FE.FIT. All rights reserved.
      </footer>
    </div>
  );
}