import WorkoutCard from "./WorkoutCard";

export default function Hero() {
  const workouts = [
    { title: "Upper Body", img: "/upper.png" },
    { title: "Lower Body", img: "/lower.png" },
    { title: "Core", img: "/core.png" },
    { title: "Yoga", img: "/yoga.png" },
  ];

  return (
    <div className="px-8 py-10">
      <h1 className="text-4xl font-bold">Hi Alex,</h1>
      <p className="text-xl mb-6">Ready for today’s workout?</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {workouts.map((w, i) => (
          <WorkoutCard key={i} title={w.title} img={w.img} />
        ))}
      </div>

      <button className="bg-white text-blue-700 px-6 py-2 rounded-lg shadow hover:bg-gray-100">
        See more
      </button>
    </div>
  );
}
