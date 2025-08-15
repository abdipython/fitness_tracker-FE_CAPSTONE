import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="FE.FIT" className="w-6 h-6" />
        <span className="text-white font-semibold text-lg">FE.FIT</span>
      </div>
      <div className="hidden md:flex gap-6 text-white">
        <a href="#">Home</a>
        <a href="#">Tracker</a>
        <a href="#">Workout</a>
      </div>
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-10 h-10 rounded-full border border-white"
      />
    </nav>
  );
}

