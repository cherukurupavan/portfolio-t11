import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const textAreaClasses = cva(
  'resize-vertical transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'focus:ring-gray-500',
        error: 'border-red-500 focus:ring-red-500',
        success: 'border-green-500 focus:ring-green-500',
      },
      size: {
        small: 'text-sm px-2 py-1 min-h-[60px]',
        medium: 'text-base px-3 py-2 min-h-[80px]',
        large: 'text-lg px-4 py-3 min-h-[100px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const TextArea = ({
  // Required parameters with defaults
  placeholder = "How can I help?*",
  text_font_size = "16",
  text_font_family = "Sora",
  text_font_weight = "400",
  text_line_height = "21px",
  text_text_align = "left",
  text_color = "#71717a",
  border_border = "1px solid #000000",
  border_border_radius = "4px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  value,
  onChange,
  rows = 4,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const textAreaStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
    border: border_border,
    borderRadius: border_border_radius,
  };

  // Safe change handler
  const handleChange = (event) => {
    if (disabled) return;
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      rows={rows}
      style={textAreaStyles}
      className={twMerge(
        textAreaClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default TextArea;