import React from 'react';

const Grid = ({ children, className = "", gap = "20px", ...props }) => {
  return (
    <div 
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ${className}`}
      style={{ gap }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Grid;