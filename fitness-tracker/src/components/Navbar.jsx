import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-800 to-blue-600 shadow-md">
      
      <div className="flex items-center gap-2">
        <span className="text-2xl">🏃</span>
        <h1 className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
          FE.FIT
        </h1>
      </div>

      
      <div className="hidden md:flex gap-8 text-white font-medium">
        <Link
          to="/workout"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          Workouts
        </Link>
        <Link
          to="/tracker"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          Tracker
        </Link>
      </div>

      
      <button className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors">
        <Menu size={28} />
      </button>

      
      <img
        src="https://i.pravatar.cc/40"
        alt="user"
        className="w-10 h-10 rounded-full border-2 border-cyan-400 hover:scale-105 transition-transform duration-200"
      />
    </nav>
  );
}


