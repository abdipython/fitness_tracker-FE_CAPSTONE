<div className="bg-tracker-bg rounded-xl p-6 shadow-card">
  <h2 className="text-xl font-bold mb-4">Tracker</h2>

  {/* Weekdays */}
  <div className="flex space-x-3 mb-6">
    {["M","T","W","T","F","S"].map((d,i) => (
      <div key={i} 
           className="w-8 h-8 flex items-center justify-center 
                      rounded-full bg-tracker-circle text-sm font-medium">
        {d}
      </div>
    ))}
  </div>
  
  {/* Progress bars */}
  <p className="text-gray-300">Calories</p>
  <div className="w-full bg-gray-700 h-2 rounded-full mb-2">
    <div className="bg-green-400 h-2 rounded-full w-[70%]"></div>
  </div>
  <span className="text-sm">700 kcal</span>


