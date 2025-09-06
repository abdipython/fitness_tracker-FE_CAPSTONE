export default function Recommendation() {
  const recommendations = [
    "Try a 20 min yoga session today to improve flexibility.",
    "Increase your cardio workouts to 3x per week for endurance.",
    "Focus on upper body strength training for muscle gain.",
  ];

  return (
    <div className="bg-blue-800 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-white">Recommendations</h2>
      <ul className="space-y-3">
        {recommendations.map((rec, i) => (
          <li
            key={i}
            className="bg-blue-600 text-white p-3 rounded-lg shadow-sm transition-transform duration-200 hover:bg-blue-500 hover:scale-[1.02]"
          >
            {rec}
          </li>
        ))}
      </ul>
    </div>
  );
}

