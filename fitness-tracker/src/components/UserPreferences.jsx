import { useState } from "react";

export default function UserPreferences() {
  const [prefs, setPrefs] = useState({
    goal: "",
    fitnessLevel: "",
    availability: "",
    workoutTypes: "",
  });

  const handleChange = (e) => {
    setPrefs({ ...prefs, [e.target.name]: e.target.value });
  };

  const savePreferences = (e) => {
    e.preventDefault();
    console.log("Saved Preferences:", prefs);
    alert("Preferences saved!");
  };

  return (
    <div className="bg-blue-800 p-6 rounded-2xl shadow-md space-y-6">
      <h2 className="text-xl font-bold text-white">User Preferences</h2>

      <form onSubmit={savePreferences} className="space-y-4">
        <select
          name="goal"
          value={prefs.goal}
          onChange={handleChange}
          className="w-full p-2 rounded bg-blue-700 text-white border border-blue-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        >
          <option value="">Select Goal</option>
          <option value="weight_loss">Weight Loss</option>
          <option value="muscle_gain">Muscle Gain</option>
          <option value="endurance">Endurance</option>
        </select>

        <select
          name="fitnessLevel"
          value={prefs.fitnessLevel}
          onChange={handleChange}
          className="w-full p-2 rounded bg-blue-700 text-white border border-blue-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        >
          <option value="">Fitness Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <input
          type="text"
          name="availability"
          placeholder="Availability (e.g. 4 days/week)"
          value={prefs.availability}
          onChange={handleChange}
          className="w-full p-2 rounded bg-blue-700 text-white placeholder-gray-300 border border-blue-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        />

        <input
          type="text"
          name="workoutTypes"
          placeholder="Preferred Workouts (e.g. Yoga, Cardio)"
          value={prefs.workoutTypes}
          onChange={handleChange}
          className="w-full p-2 rounded bg-blue-700 text-white placeholder-gray-300 border border-blue-600 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
        />

        <button className="bg-cyan-500 hover:bg-cyan-400 transition w-full py-2 rounded font-semibold text-blue-900">
          Save Preferences
        </button>
      </form>
    </div>
  );
}

