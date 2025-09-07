export default function Stats() {
  return (
    <div className="section-grid">
      <div className="card">
        <div className="icon">💪</div>
        <h3 className="text-lg font-semibold">Upper Body</h3>
        <p className="text-gray-300">Strength Training</p>
      </div>

      <div className="card">
        <div className="icon">🧘</div>
        <h3 className="text-lg font-semibold">Yoga</h3>
        <p className="text-gray-300">Flexibility</p>
      </div>

      <div className="card">
        <div className="icon">🏋️</div>
        <h3 className="text-lg font-semibold">Core</h3>
        <p className="text-gray-300">Endurance</p>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold">Tracker</h2>
        <p className="tracker">MTWTFSS</p>
        <p className="text-gray-300">4 Workouts</p>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold">Calories</h2>
        <p className="text-2xl text-yellow-400 font-bold">750</p>
        <p className="text-gray-300">Burned</p>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold">BMI</h2>
        <p className="text-2xl text-yellow-400 font-bold">23</p>
        <p className="text-gray-300">Healthy</p>
      </div>
    </div>
  );
}
