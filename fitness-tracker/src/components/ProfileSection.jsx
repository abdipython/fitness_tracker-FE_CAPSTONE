import React from "react";

export default function ProfileSection() {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="https://via.placeholder.com/40"
        alt="Profile"
        className="w-10 h-10 rounded-full border-2 border-white"
      />
      <span className="text-white font-medium">Abdulrahman</span>
    </div>
  );
}
