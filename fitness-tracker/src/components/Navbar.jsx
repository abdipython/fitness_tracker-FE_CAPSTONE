import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-950 shadow-md">
      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors">
        <Menu className="w-6 h-6" />
      </button>

      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center gap-2 text-white">
        🏃 <span className="hover:text-cyan-400 transition-colors">FE.FIT</span>
      </h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-gray-300">
        {[
          { path: "/", label: "Dashboard" },
          { path: "/tracker", label: "Tracker" },
          { path: "/plan", label: "Plan" },
          { path: "/recommendations", label: "Recommendations" },
          { path: "/preferences", label: "Preferences" },
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Profile Picture */}
      <img
        src="https://i.pravatar.cc/40"
        alt="user"
        className="rounded-full w-10 h-10 border-2 border-cyan-400 hover:scale-105 transition-transform duration-200"
      />
    </nav>
  );
}

