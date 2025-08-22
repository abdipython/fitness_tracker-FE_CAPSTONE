import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tracker from "./components/Tracker";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand.DEFAULT to-brand.dark text-white font-sans">
      <Navbar />
      <Hero />
      <Tracker />
    </div>
  );
}

