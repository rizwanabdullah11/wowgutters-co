import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded font-semibold transition-all duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-[#C2410C] text-white hover:bg-[#9A3412]',
    secondary: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#2563EB]',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
