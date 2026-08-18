import React from 'react';

/**
 * Reusable Button component for Skyfall Lounge foundation.
 * Variants: primary (champagne gold filled), outline (champagne gold border), ghost
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center uppercase tracking-widest font-medium transition-all duration-300 rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-champagne disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gold-champagne text-bg-primary hover:bg-gold-bronze hover:text-text-primary border border-gold-champagne',
    outline: 'border border-gold-champagne text-gold-champagne hover:bg-gold-champagne hover:text-bg-primary',
    secondary: 'border border-text-primary/40 text-text-primary hover:border-gold-champagne hover:text-gold-champagne bg-transparent',
    'outline-light': 'border border-text-primary/40 text-text-primary hover:border-gold-champagne hover:text-gold-champagne bg-transparent',
    ghost: 'text-text-primary hover:text-gold-champagne hover:bg-bg-charcoal',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
