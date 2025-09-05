export default function Recommendation() {
  const recommendations = [
    "Try a 20 min yoga session today to improve flexibility.",
    "Increase your cardio workouts to 3x per week for endurance.",
    "Focus on upper body strength training for muscle gain.",
  ];

  return (
    <div className="bg-blue-700 p-6 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Recommendations</h2>
      <ul className="space-y-3">
        {recommendations.map((rec, i) => (
          <li
            key={i}
            className="bg-blue-600 p-3 rounded shadow-sm"
          >
            {rec}
          </li>
        ))}
      </ul>
    </div>
  );
}
