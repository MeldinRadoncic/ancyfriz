import React from "react";
import Error from "./Error";

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
  const showError = error && value === ''; // Show error styles only when there's an error and the field is empty

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
          showError ? "border-red-500" : "border-gray-300"
        } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
          showError ? "focus:ring-red-500" : "focus:ring-indigo-500"
        }`}
        {...rest}
      />
      {showError && <Error message={error} />}
    </div>
  );
}

export default Input;
