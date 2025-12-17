import React from "react";
const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
