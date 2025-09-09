'use client'
import { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';

interface PremiumButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export default function PremiumButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon,
  loading = false,
  disabled = false,
  className = '',
  fullWidth = false
}: PremiumButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center
    font-semibold rounded-xl transition-all duration-300
    transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-4 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    overflow-hidden group
    ${fullWidth ? 'w-full' : ''}
  `;

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-[#0066CC] to-[#0052A3]
      text-white shadow-lg hover:shadow-xl
      focus:ring-[#0066CC]/50
    `,
    secondary: `
      bg-gradient-to-r from-[#2C4F5E] to-[#1E3A47]
      text-white shadow-lg hover:shadow-xl
      focus:ring-[#2C4F5E]/50
    `,
    outline: `
      bg-transparent border-2 border-[#0066CC]
      text-[#0066CC] hover:bg-[#0066CC] hover:text-white
      focus:ring-[#0066CC]/50
    `,
    ghost: `
      bg-transparent text-[#0066CC]
      hover:bg-[#0066CC]/10 focus:ring-[#0066CC]/50
    `
  };

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  const content = (
    <>
      {/* Ripple Effect Background */}
      <span className="absolute inset-0 w-full h-full">
        <span className="absolute top-0 left-0 w-full h-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl" />
      </span>
      
      {/* Button Content */}
      <span className="relative flex items-center gap-2">
        {loading ? (
          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : icon}
        {children}
      </span>
      
      {/* Shine Effect */}
      <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
}