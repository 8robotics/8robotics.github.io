import React, { useState, useEffect } from "react";

const FullScreenHero = () => {
  // Phrases to be typed
  const line1Text = "Iliya: A redefination of physical intelligence,";
  const line2Text = "a paradigm shift in mobility.";
  const line3Text = "Stay tuned!";

  const [displayLine1, setDisplayLine1] = useState("");
  const [displayLine2, setDisplayLine2] = useState("");
  const [displayLine3, setDisplayLine3] = useState("");

  useEffect(() => {
    let i = 0;
    let j = 0;
    let k = 0;
    const speed = 50; 

    // Sequence: Type Line 1
    const typeLine1 = setInterval(() => {
      if (i < line1Text.length) {
        setDisplayLine1(line1Text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeLine1);
        
        // Then: Type Line 2
        const typeLine2 = setInterval(() => {
          if (j < line2Text.length) {
            setDisplayLine2(line2Text.slice(0, j + 1));
            j++;
          } else {
            clearInterval(typeLine2);
            
            // Finally: Type Line 3
            const typeLine3 = setInterval(() => {
              if (k < line3Text.length) {
                setDisplayLine3(line3Text.slice(0, k + 1));
                k++;
              } else {
                clearInterval(typeLine3);
              }
            }, speed);
          }
        }, speed);
      }
    }, speed);

    return () => clearInterval(typeLine1);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-center"
      style={{ backgroundImage: 'url("/banner-fog.png")' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Left Text Container */}
      <div className="relative z-10 flex-none w-full lg:w-full px-8 md:px-16 lg:px-24 text-left">
        {/* Line 1 */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed drop-shadow-lg font-machina whitespace-nowrap min-h-[1.5em]">
          {displayLine1}
          {displayLine1.length > 0 && displayLine2.length === 0 && (
            <span className="animate-pulse border-r-2 border-white ml-1" />
          )}
        </p>
        
        {/* Line 2 */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed drop-shadow-lg font-machina mt-2 whitespace-nowrap min-h-[1.5em]">
          {displayLine2}
          {displayLine2.length > 0 && displayLine3.length === 0 && (
            <span className="animate-pulse border-r-2 border-white ml-1" />
          )}
        </p>

        {/* Line 3 - Stay Tuned with Technological Blue */}
        <p className="text-lg sm:text-xl md:text-2xl text-blue-400  leading-relaxed drop-shadow-[0_0_10px_rgba(96,165,250,0.5)] font-machina mt-4 whitespace-nowrap min-h-[1.5em] tracking-wide">
          {displayLine3}
          {displayLine3.length > 0 && (
            <span className="animate-pulse border-r-2 border-blue-400 ml-1" />
          )}
        </p>
      </div>

      {/* Right Robot Image */}
      <div className="absolute right-0 hidden lg:flex items-center justify-end px-8 md:px-16 lg:px-24">
        <img
          src="/robot-white.png"
          alt="Robot"
          className="h-96 md:h-[28rem] lg:h-[32rem] object-contain opacity-90"
        />
      </div>
    </section>
  );
};

export default FullScreenHero;