import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded-lg transition duration-200 inline-flex items-center justify-center gap-2 cursor-pointer';

  const variantStyles: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed',
    default: 'bg-primary text-white hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed',
    secondary: 'bg-secondary text-text hover:bg-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed',
    ghost: 'text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim();

  return (
    <button className={finalClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
