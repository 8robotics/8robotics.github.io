import React from 'react';
import { ArrowRight } from 'lucide-react';

const VideoBillboard: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Beautiful Sky and Stars Background */}
      <div className="absolute inset-0">
        <img
          src="pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Beautiful Night Sky with Stars"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content positioned at bottom */}
      <div className="relative z-10 h-full flex items-end pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="mb-4">
              <div className="inline-block bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2">
                <span className="text-cyan-400 text-xs font-medium uppercase tracking-wider">
                  Coming Soon 2025
                </span>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              <span className="block">8Robotics</span>
              <span className="block text-cyan-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-1">
                Shaping the Future of Humanoid Robotics
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-xl leading-relaxed">
              Intelligent Partners for a Smarter Tomorrow
            </p>
            
            <a
              href="mailto:info@8robotics.tech"
              className="inline-flex items-center space-x-2 bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg text-base font-semibold hover:bg-cyan-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoBillboard;