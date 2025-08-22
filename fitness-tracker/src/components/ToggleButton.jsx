import React, { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 
        ${isOn ? "bg-green-500" : "bg-gray-300"}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300
          ${isOn ? "translate-x-6" : ""}`}
      ></div>
    </button>
  );
}
