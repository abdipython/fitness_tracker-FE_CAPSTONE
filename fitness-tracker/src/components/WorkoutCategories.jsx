import React from "react";
import CategoryCard from "./CategoryCard";

export default function WorkoutCategories() {
  const categories = [
    { title: "upper body", icon: "/upperbody.png" },
    { title: "yoga", icon: "/yoga.png" },
    { title: "core", icon: "/core.png" },
    { title: "lower body", icon: "/lowerbody.png" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {categories.map((cat, idx) => (
        <CategoryCard key={idx} title={cat.title} icon={cat.icon} />
      ))}
    </div>
  );
}

