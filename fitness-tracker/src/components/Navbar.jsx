export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="FE.FIT" className="w-8 h-8" />
        <span className="font-bold text-xl">FE.FIT</span>
      </div>

      <ul className="flex space-x-8">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">Tracker</a></li>
        <li><a href="#" className="hover:text-gray-300">Workout</a></li>
      </ul>

      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-10 h-10 rounded-full border-2 border-white"
      />
    </nav>
  );
}
