import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow ${className}`}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
