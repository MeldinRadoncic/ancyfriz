// Error.js
import React from "react";

const Error = ({ message, className = "" }) => {
  if (!message) return null;

  return (
    <p className={`text-sm text-red-500 ${className}`}>
      {message}
    </p>
  );
}

export default Error;
