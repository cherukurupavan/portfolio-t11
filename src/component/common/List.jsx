import React from 'react';

const List = ({ children, className = "", gap = "32px", ...props }) => {
  return (
    <div 
      className={`flex flex-col ${className}`}
      style={{ gap }}
      {...props}
    >
      {children}
    </div>
  );
};

export default List;