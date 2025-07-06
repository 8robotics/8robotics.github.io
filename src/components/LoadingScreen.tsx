import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white animate-pulse">
          Loading the Future
        </h2>
        <div className="mt-4 w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;