import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const iconButtonClasses = cva(
  'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-gray-500',
        secondary: 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'bg-transparent hover:bg-opacity-10 focus:ring-gray-500',
      },
      size: {
        small: 'p-2',
        medium: 'p-3',
        large: 'p-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const IconButton = ({
  // Required parameters with defaults
  src = "/images/img_social_icon.svg",
  alt = "Icon",
  width = 20,
  height = 20,
  backgroundColor = "#000000",
  borderRadius = "4px",
  
  // Optional parameters (no defaults)
  border,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  onClick,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidBorder = border && typeof border === 'string' && border?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const buttonStyles = {
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    ...(hasValidBorder && { border: border }),
  };

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        iconButtonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height}
        className="object-contain"
      />
    </button>
  );
};

export default IconButton;