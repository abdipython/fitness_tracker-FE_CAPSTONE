import React from "react";

export default function CategoryCard({ title, icon }) {
  return (
    <div className="bg-blue-500 rounded-xl p-4 flex flex-col items-center justify-center text-white hover:bg-blue-600 cursor-pointer">
      <img src={icon} alt={title} className="w-14 h-14 mb-2" />
      <p className="capitalize">{title}</p>
    </div>
  );
}
