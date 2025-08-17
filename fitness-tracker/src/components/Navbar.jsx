import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 relative">
      <div className="flex items-center gap-2">
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
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

      {open && (
        <div className="absolute top-16 left-0 w-full bg-blue-800 flex flex-col items-center py-4 md:hidden">
          <a href="#" className="py-2 text-white">Home</a>
          <a href="#" className="py-2 text-white">Tracker</a>
          <a href="#" className="py-2 text-white">Workout</a>
        </div>
      )}
    </nav>
  );
}
