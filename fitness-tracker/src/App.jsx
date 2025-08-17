import React from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Web App
          </h1>
          <p className="text-lg md:text-xl mb-6">
            A modern React + TailwindCSS application
          </p>
          <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl shadow hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} My Web App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

