import React from 'react';

const Line = ({ 
  width = "120px", 
  height = "2px", 
  backgroundColor = "#000000",
  className = "",
  ...props 
}) => {
  const lineStyles = {
    width,
    height,
    backgroundColor,
  };

  return (
    <div 
      style={lineStyles}
      className={`${className}`}
      {...props}
    />
  );
};

export default Line;