import ProgressChart from "./ProgressChart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-6 rounded-xl text-center shadow-md hover:scale-105 transform transition">
          <span className="text-4xl">🏋️</span>
          <p className="mt-2 text-blue-200 font-semibold">Upper Body</p>
        </div>
        <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-6 rounded-xl text-center shadow-md hover:scale-105 transform transition">
          <span className="text-4xl">🧘</span>
          <p className="mt-2 text-blue-200 font-semibold">Yoga</p>
        </div>
        <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-6 rounded-xl text-center shadow-md hover:scale-105 transform transition">
          <span className="text-4xl">🤸</span>
          <p className="mt-2 text-blue-200 font-semibold">Core</p>
        </div>
      </div>

     
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4 text-blue-200">
          TRACKER
        </h2>
        <div className="flex justify-center gap-2 mb-4">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span
              key={i}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-blue-200 font-semibold hover:bg-blue-600 transition"
            >
              {d}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-blue-200">
              <span>Calories</span>
              <span>750</span>
            </div>
            <div className="w-full bg-blue-950 rounded-full h-3 mt-1">
              <div className="bg-cyan-400 h-3 rounded-full w-4/5"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-blue-200">
              <span>Workouts</span>
              <span>4</span>
            </div>
            <div className="w-full bg-blue-950 rounded-full h-3 mt-1">
              <div className="bg-cyan-400 h-3 rounded-full w-2/3"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-blue-200">
              <span>BMI</span>
              <span>23</span>
            </div>
            <div className="w-full bg-blue-950 rounded-full h-3 mt-1">
              <div className="bg-cyan-400 h-3 rounded-full w-1/2"></div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-bold text-blue-200 mb-4">Progress Chart</h3>
        <ProgressChart />
      </div>
    </div>
  );
}
