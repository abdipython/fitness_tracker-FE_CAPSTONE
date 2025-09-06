import { useState } from "react";

export default function WorkoutTracker() {
  const [workouts, setWorkouts] = useState([]);
  const [form, setForm] = useState({ type: "", duration: "", calories: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addWorkout = (e) => {
    e.preventDefault();
    if (!form.type || !form.duration || !form.calories) return;
    setWorkouts([...workouts, form]);
    setForm({ type: "", duration: "", calories: "" });
  };

  return (
    <div className="bg-blue-800 p-6 rounded-2xl shadow-md space-y-6">
      <h2 className="text-xl font-bold text-white">Workout Tracker</h2>

      {/* Workout Form */}
      <form onSubmit={addWorkout} className="space-y-4">
        <input
          type="text"
          name="type"
          placeholder="Workout Type (e.g. Running)"
          value={form.type}
          onChange={handleChange}
          className="w-full p-2 rounded bg-blue-700 text-white placeholder-gray-300 border border-blue-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={form.duration}
          onChange={handleChange}
          className="w-full p-2 rounded bg-blue-700 text-white placeholder-gray-300 border border-blue-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        />
        <input
          type="number"
          name="calories"
          placeholder="Calories Burned"
          value={form.calories}
          onChange={handleChange}
          className="w-full p-2 rounded bg-blue-700 text-white placeholder-gray-300 border border-blue-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        />
        <button className="bg-cyan-500 hover:bg-cyan-400 transition w-full py-2 rounded font-semibold text-blue-900">
          Add Workout
        </button>
      </form>

      {/* Logged Workouts */}
      <div>
        <h3 className="text-lg font-semibold text-white">Logged Workouts</h3>
        <ul className="mt-2 space-y-2">
          {workouts.map((w, i) => (
            <li
              key={i}
              className="bg-blue-700 hover:bg-blue-600 transition p-3 rounded flex justify-between text-white"
            >
              <span className="font-medium">{w.type}</span>
              <span>{w.duration} mins</span>
              <span>{w.calories} cal</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
