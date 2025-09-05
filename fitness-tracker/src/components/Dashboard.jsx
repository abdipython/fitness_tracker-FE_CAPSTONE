import ProgressChart from "./ProgressChart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Workout Categories */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-500 p-6 rounded-xl text-center">
          <span className="text-4xl">🏋️</span>
          <p className="mt-2">Upper Body</p>
        </div>
        <div className="bg-blue-500 p-6 rounded-xl text-center">
          <span className="text-4xl">🧘</span>
          <p className="mt-2">Yoga</p>
        </div>
        <div className="bg-blue-500 p-6 rounded-xl text-center">
          <span className="text-4xl">🤸</span>
          <p className="mt-2">Core</p>
        </div>
      </div>

      {/* Tracker */}
      <div className="bg-blue-700 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-center mb-4">TRACKER</h2>
        <div className="flex justify-center gap-2 mb-4">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span
              key={i}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500"
            >
              {d}
            </span>
          ))}
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <span>Calories</span>
              <span>750</span>
            </div>
            <div className="w-full bg-blue-900 rounded-full h-3 mt-1">
              <div className="bg-cyan-400 h-3 rounded-full w-4/5"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span>Workouts</span>
              <span>4</span>
            </div>
            <div className="w-full bg-blue-900 rounded-full h-3 mt-1">
              <div className="bg-cyan-400 h-3 rounded-full w-2/3"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <span>BMI</span>
              <span>23</span>
            </div>
            <div className="w-full bg-blue-900 rounded-full h-3 mt-1">
              <div className="bg-cyan-400 h-3 rounded-full w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <ProgressChart />
    </div>
  );
}
