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
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-slate-100">
        <Navbar />

        <main className="flex-1 px-6 py-6">
          <Routes>
            {/* Dashboard / Home */}
            <Route
              path="/"
              element={
                <div>
                  {/* Categories */}
                  <div className="grid grid-cols-3 gap-6 text-center mb-10">
                    <div className="bg-blue-800/70 backdrop-blur p-5 rounded-2xl shadow-lg hover:scale-105 hover:bg-blue-700/80 transition">
                      <Dumbbell className="mx-auto w-9 h-9 text-cyan-400" />
                      <p className="mt-2 font-medium">Upper Body</p>
                    </div>
                    <div className="bg-blue-800/70 backdrop-blur p-5 rounded-2xl shadow-lg hover:scale-105 hover:bg-blue-700/80 transition">
                      <Heart className="mx-auto w-9 h-9 text-pink-400" />
                      <p className="mt-2 font-medium">Yoga</p>
                    </div>
                    <div className="bg-blue-800/70 backdrop-blur p-5 rounded-2xl shadow-lg hover:scale-105 hover:bg-blue-700/80 transition">
                      <Activity className="mx-auto w-9 h-9 text-green-400" />
                      <p className="mt-2 font-medium">Core</p>
                    </div>
                  </div>

                  {/* Tracker Section */}
                  <section>
                    <h2 className="text-2xl font-bold text-center text-cyan-300">
                      TRACKER
                    </h2>
                    <p className="text-center text-slate-400 tracking-widest">
                      MTWTFSS
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                      <div className="bg-blue-800/70 p-4 rounded-xl shadow-md hover:bg-blue-700/80 transition">
                        <p className="text-2xl font-bold text-cyan-400">750</p>
                        <p className="text-sm text-slate-300">Calories</p>
                      </div>
                      <div className="bg-blue-800/70 p-4 rounded-xl shadow-md hover:bg-blue-700/80 transition">
                        <p className="text-2xl font-bold text-cyan-400">4</p>
                        <p className="text-sm text-slate-300">Workouts</p>
                      </div>
                      <div className="bg-blue-800/70 p-4 rounded-xl shadow-md hover:bg-blue-700/80 transition">
                        <p className="text-2xl font-bold text-cyan-400">23</p>
                        <p className="text-sm text-slate-300">BMI</p>
                      </div>
                    </div>
                  </section>

                  {/* Progress Graph */}
                  <section className="mt-10 bg-blue-800/70 backdrop-blur shadow-lg rounded-2xl p-6">
                    <h3 className="font-bold mb-4 text-cyan-300">Progress</h3>
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
                          contentStyle={{
                            backgroundColor: "#1e3a8a",
                            color: "#fff",
                            borderRadius: "0.5rem",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#38bdf8"
                          strokeWidth={3}
                          dot={{ r: 5, fill: "#38bdf8" }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </section>
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

        <Footer />
      </div>
    </Router>
  );
}
