import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-900">
      <button className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="text-2xl font-bold flex items-center gap-2">
        🏃 FE.FIT
      </h1>
      <div className="hidden md:flex gap-6">
        <Link to="/">Dashboard</Link>
        <Link to="/tracker">Tracker</Link>
        <Link to="/plan">Plan</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/preferences">Preferences</Link>
      </div>
      <img
        src="https://i.pravatar.cc/40"
        alt="user"
        className="rounded-full w-10 h-10"
      />
    </nav>
  );
}
