import React from 'react';

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-sky-200 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 border-4 border-sky-500 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-4 border-4 border-sky-300 rounded-full animate-ping"></div>
        </div>
        <div className="text-white text-xl font-semibold mb-2">8Robotics</div>
        <div className="text-sky-300 text-sm">Loading the future...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;