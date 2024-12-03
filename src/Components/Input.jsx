import React from "react";

function Input({ 
  label, 
  type = "text", 
  name, 
  value, 
  onChange, 
  error, 
  placeholder = "", 
  className = "", 
  ...rest 
}) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="block font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full mt-2 p-3 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-indigo-500"
        }`}
        {...rest}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default Input;
