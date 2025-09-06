export default function FitnessPlan() {
  const plan = {
    Monday: "Upper Body Strength",
    Tuesday: "Yoga",
    Wednesday: "Cardio (Running)",
    Thursday: "Core Training",
    Friday: "HIIT",
    Saturday: "Rest",
    Sunday: "Long Walk / Light Jog",
  };

  return (
    <div className="bg-blue-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white text-center">
        Your Weekly Plan
      </h2>
      <ul className="space-y-2">
        {Object.entries(plan).map(([day, workout], i) => (
          <li
            key={i}
            className="flex justify-between bg-blue-700 hover:bg-blue-600 
                       transition-all duration-200 p-3 rounded-xl shadow-sm cursor-pointer"
          >
            <span className="font-semibold text-white">{day}</span>
            <span className="text-cyan-300">{workout}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

