function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
        Track Your Fitness <span className="text-blue-600">Journey</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl">
        Stay on top of your workouts, meals, and progress with QuickChef. 
        Get personalized plans and stay motivated.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;
