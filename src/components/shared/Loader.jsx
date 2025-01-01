import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        {/* Spinner */}
        <div className="w-6 h-6 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin"></div>
        {/* Text */}
        <span className="text-yellow-500 font-semibold text-lg">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
