import React from "react";

const FullScreenHero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-end justify-start overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url("/full_hero.png")',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 z-10 flex flex-col items-start justify-end text-left px-4 pb-8 w-full max-w-md animate-fade-in-up">
        <div
          className="rounded-lg shadow-lg p-4 sm:p-6 animate-fade-in-up flex flex-col gap-2"
          style={{
            background: 'linear-gradient(120deg, rgba(255,255,255,0.35) 60%, rgba(255,255,255,0.12) 100%)',
            border: '1px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            animationDelay: '0.2s',
          }}
        >
          <h1
            className="text-xl sm:text-2xl font-extrabold mb-1 tracking-tight animate-fade-in-up text-pulse-500"
            style={{
              animationDelay: '0.3s',
              fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif',
              letterSpacing: '-1px',
            }}
          >
            8Robotics
          </h1>
          <p
            className="text-sm sm:text-base mb-2 font-medium animate-fade-in-up"
            style={{
              animationDelay: '0.4s',
              fontFamily: 'Inter, Arial, sans-serif',
              color: '#222',
            }}
          >
            Next-gen humanoid robots. Intelligent and adaptive companions for a better future.
          </p>
          <a
            href="/technology"
            className="inline-block bg-pulse-500/90 text-white font-semibold rounded-full px-5 py-2 text-sm shadow-lg hover:bg-pulse-600 transition-colors animate-fade-in-up min-w-0"
            style={{ animationDelay: '0.5s', boxShadow: '0 2px 16px #FE5C02', width: 'auto', maxWidth: '240px', textAlign: 'center' }}
          >
            Discover Our Technology
          </a>
        </div>
      </div>
    </section>
  );
};

export default FullScreenHero;
