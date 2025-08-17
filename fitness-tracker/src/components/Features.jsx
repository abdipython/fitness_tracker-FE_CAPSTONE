import React from "react";
import { Star, Shield, Zap } from "lucide-react"; // icons from lucide-react

const features = [
  {
    title: "Fast Performance",
    description: "Enjoy blazing fast speed with our optimized platform.",
    icon: <Zap className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Secure by Design",
    description: "Your data is protected with top-tier security measures.",
    icon: <Shield className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "User Friendly",
    description: "A clean and intuitive interface that anyone can use.",
    icon: <Star className="w-10 h-10 text-indigo-600" />,
  },
];

function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Why Choose Us?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
