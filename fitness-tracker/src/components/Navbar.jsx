import React from "react";
import ToggleButton from "./ToggleButton";
import ProfileSection from "./ProfileSection";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="App Logo" className="w-10 h-10 rounded-full" />
        <span className="text-white font-bold text-lg">FitTrack</span>
      </div>

      {/* Toggle Button */}
      <ToggleButton />

      {/* Profile Section */}
      <ProfileSection />
    </nav>
  );
}
