import React from "react";

export default function Tracker() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="bg-blue-900 rounded-xl p-4 text-white mt-6">
      <h2 className="text-lg font-semibold mb-4">Tracker</h2>
      <div className="flex gap-2 mb-4">
        {days.map((day, i) => (
          <div
            key={i}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              i < 5 ? "bg-blue-500" : "bg-blue-800"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="mb-2">Calories <span className="float-right">700 kcal</span></div>
      <div className="bg-blue-700 rounded-full h-2 mb-4">
        <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
      </div>

      <div className="mb-2">Workouts <span className="float-right">3 / 5</span></div>
      <div className="bg-blue-700 rounded-full h-2 mb-4">
        <div className="bg-green-400 h-2 rounded-full w-3/5"></div>
      </div>

      <div className="mb-2">BMI <span className="float-right">Underweight</span></div>
      <div className="bg-blue-700 rounded-full h-2">
        <div className="bg-green-400 h-2 rounded-full w-2/6"></div>
      </div>
    </div>
  );
}

