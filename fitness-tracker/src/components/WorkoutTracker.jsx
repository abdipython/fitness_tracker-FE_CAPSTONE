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
    <div className="bg-blue-700 p-6 rounded-2xl space-y-6">
      <h2 className="text-xl font-bold">Workout Tracker</h2>

      <form onSubmit={addWorkout} className="space-y-4">
        <input
          type="text"
          name="type"
          placeholder="Workout Type (e.g. Running)"
          value={form.type}
          onChange={handleChange}
          className="w-full p-2 rounded text-black"
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={form.duration}
          onChange={handleChange}
          className="w-full p-2 rounded text-black"
        />
        <input
          type="number"
          name="calories"
          placeholder="Calories Burned"
          value={form.calories}
          onChange={handleChange}
          className="w-full p-2 rounded text-black"
        />
        <button className="bg-cyan-500 w-full py-2 rounded font-semibold">
          Add Workout
        </button>
      </form>

      <div>
        <h3 className="text-lg font-semibold">Logged Workouts</h3>
        <ul className="mt-2 space-y-2">
          {workouts.map((w, i) => (
            <li
              key={i}
              className="bg-blue-600 p-2 rounded flex justify-between"
            >
              <span>{w.type}</span>
              <span>{w.duration} mins</span>
              <span>{w.calories} cal</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
