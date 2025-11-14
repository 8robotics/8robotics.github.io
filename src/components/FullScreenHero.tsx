import React from "react";

const FullScreenHero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-end justify-start overflow-hidden"
      style={{ backgroundImage: 'url("/full_hero.png")' }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Text - White, No Background */}
      <div className="relative z-10 w-full max-w-xl px-6 pb-10">
        {/* Title */}
        {/* <h1
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-2xl font-machina"
        >
          8Robotics
        </h1> */}

        {/* Subtitle */}
        <p
          className="mt-3 text-lg sm:text-xl font-medium text-white/90 leading-relaxed drop-shadow-lg font-machina"
        >
          Next-gen humanoid robots. Intelligent and adaptive companions for a
          better future.
        </p>
      </div>

      {/* Scroll hint */}
      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/90 rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default FullScreenHero;