import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Fitness Overview</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-md">Workout Progress</div>
        <div className="bg-white rounded-xl p-4 shadow-md">Calories Burned</div>
        <div className="bg-white rounded-xl p-4 shadow-md">Steps Today</div>
        <div className="bg-white rounded-xl p-4 shadow-md">Water Intake</div>
      </div>
    </div>
  );
}
