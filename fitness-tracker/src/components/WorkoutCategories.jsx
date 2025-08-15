import React from "react";
import CategoryCard from "./CategoryCard";

export default function WorkoutCategories() {
  const categories = [
    { title: "Upper Body", icon: "/upperbody.png" },
    { title: "Lower Body", icon: "/lowerbody.png" },
    { title: "Core", icon: "/core.png" },
    { title: "Yoga", icon: "/yoga.png" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {categories.map((cat, idx) => (
        <CategoryCard key={idx} title={cat.title} icon={cat.icon} />
      ))}
    </div>
  );
}
