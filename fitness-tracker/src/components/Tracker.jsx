import React, { useState, useEffect } from "react";

export default function Tracker() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  // target percentages
  const [calories, setCalories] = useState(0);
  const [workouts, setWorkouts] = useState(0);
  const [bmi, setBmi] = useState(0);

  useEffect(() => {
    // Animate after mount
    setTimeout(() => {
      setCalories(75); // 75% filled
      setWorkouts(80); // 80% filled
      setBmi(40); // 40% filled
    }, 300);
  }, []);

  return (
    <div className="bg-blue-900 rounded-xl p-4 text-white mt-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4">TRACKER</h2>

      {/* Days */}
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

      {/* Calories */}
      <div className="mb-2 text-sm md:text-base">
        CALORIES <span className="float-right">750</span>
      </div>
      <div className="bg-blue-700 rounded-full h-2 mb-4 overflow-hidden">
        <div
          className="bg-green-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${calories}%` }}
        ></div>
      </div>

      {/* Workouts */}
      <div className="mb-2 text-sm md:text-base">
        WORKOUTS <span className="float-right">4</span>
      </div>
      <div className="bg-blue-700 rounded-full h-2 mb-4 overflow-hidden">
        <div
          className="bg-green-400 h-2 rounded-full transition-all duration-1000 ease-out delay-200"
          style={{ width: `${workouts}%` }}
        ></div>
      </div>

      {/* BMI */}
      <div className="mb-2 text-sm md:text-base">
        BMI <span className="float-right">23</span>
      </div>
      <div className="bg-blue-700 rounded-full h-2 overflow-hidden">
        <div
          className="bg-green-400 h-2 rounded-full transition-all duration-1000 ease-out delay-400"
          style={{ width: `${bmi}%` }}
        ></div>
      </div>
    </div>
  );
}



