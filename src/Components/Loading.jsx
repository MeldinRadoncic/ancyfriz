// Loading.js
import React from "react";

function Loading({ message = "Loading...", className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full mr-2 border-indigo-600"></div>
      <span className="text-indigo-600">{message}</span>
    </div>
  );
}

export default Loading;
