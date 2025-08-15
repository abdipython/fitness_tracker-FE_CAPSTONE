import React from "react";
import Navbar from "./components/Navbar";
import WorkoutCategories from "./components/WorkoutCategories";
import Tracker from "./components/Tracker";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-500">
      <Navbar />
      <div className="p-4 text-white">
        <h1 className="text-3xl font-bold">Hi Alex,</h1>
        <p className="text-lg mb-6">Ready for today’s workout?</p>
        <WorkoutCategories />
        <Tracker />
      </div>
    </div>
  );
}

