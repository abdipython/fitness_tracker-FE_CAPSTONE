import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <span className="font-bold text-xl text-gray-800">FitTrack</span>
        </div>

        {/* Right: Menu + Profile */}
        <div className="flex items-center space-x-4">
          {/* Profile Section */}
          <div className="hidden sm:flex items-center space-x-2">
            <img
              src="/avatar.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full border border-gray-300"
            />
            <span className="text-gray-700 font-medium">Abdulrahman</span>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-gray-200 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Sidebar / Drawer */}
      {menuOpen && (
        <div className="bg-white shadow-md absolute top-16 left-0 w-64 h-screen p-4 z-50">
          <ul className="space-y-4">
            <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-600 cursor-pointer">Workouts</li>
            <li className="hover:text-blue-600 cursor-pointer">Nutrition</li>
            <li className="hover:text-blue-600 cursor-pointer">Settings</li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome back! 👋</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Example Card */}
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold text-lg mb-2">Today's Workout</h2>
            <p className="text-gray-600">Leg Day • 5 Exercises</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold text-lg mb-2">Calories Burned</h2>
            <p className="text-gray-600">450 kcal • Keep it up!</p>
          </div>
        </div>
      </main>
      <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Dashboard />
    </div>
    </div>
    
  );
}
