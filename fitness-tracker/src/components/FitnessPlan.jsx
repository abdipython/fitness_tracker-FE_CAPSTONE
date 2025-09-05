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
    <div className="bg-blue-700 p-6 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Your Weekly Plan</h2>
      <ul className="space-y-2">
        {Object.entries(plan).map(([day, workout], i) => (
          <li
            key={i}
            className="flex justify-between bg-blue-600 p-3 rounded"
          >
            <span className="font-semibold">{day}</span>
            <span>{workout}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
