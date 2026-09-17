import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Authentic Colorful Facebook Logo
 * Official Facebook brand blue (#1877F2) circle with white stylized 'f'
 */
export const FacebookLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Facebook"
  >
    <circle cx="18" cy="18" r="18" fill="#1877F2" />
    <path
      d="M23.5 18.25L24.18 13.82H19.92V10.95C19.92 9.74 20.51 8.56 22.41 8.56H24.34V4.79C24.34 4.79 22.59 4.5 20.91 4.5C17.41 4.5 15.11 6.63 15.11 10.49V13.82H11.22V18.25H15.11V29C16.07 29.15 17.05 29.23 18.05 29.23C19.05 29.23 20.03 29.15 20.99 29V18.25H23.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

/**
 * Authentic Colorful Instagram Logo
 * Official vibrant camera icon with multi-color radial gradient
 */
export const InstagramLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size }) => {
  const gradientId = React.useId();
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Instagram"
    >
      <defs>
        <radialGradient
          id={`${gradientId}-ig`}
          cx="20%"
          cy="110%"
          r="125%"
          fx="15%"
          fy="110%"
        >
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="15%" stopColor="#FF543E" />
          <stop offset="50%" stopColor="#C837AB" />
          <stop offset="100%" stopColor="#4158D0" />
        </radialGradient>
      </defs>
      {/* Rounded Squircle Background */}
      <rect width="36" height="36" rx="9" fill={`url(#${gradientId}-ig)`} />
      {/* Outer Rounded Camera Frame */}
      <rect
        x="8.5"
        y="8.5"
        width="19"
        height="19"
        rx="5.5"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        fill="none"
      />
      {/* Center Lens Circle */}
      <circle
        cx="18"
        cy="18"
        r="4.8"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        fill="none"
      />
      {/* Flash Dot */}
      <circle cx="23.4" cy="12.6" r="1.3" fill="#FFFFFF" />
    </svg>
  );
};

/**
 * Authentic Colorful Google Gmail Logo
 * Official 4-color envelope M (Blue, Red, Green, Yellow)
 */
export const GmailLogo: React.FC<LogoProps> = ({ className = 'w-5 h-5', size }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    aria-label="Gmail"
  >
    {/* Left vertical pillar: Blue */}
    <path
      d="M4.5 13.5V36.5C4.5 38.71 6.29 40.5 8.5 40.5H14.5V20.5L4.5 13.5Z"
      fill="#4285F4"
    />
    {/* Right vertical pillar: Green */}
    <path
      d="M33.5 40.5H39.5C41.71 40.5 43.5 38.71 43.5 36.5V13.5L33.5 20.5V40.5Z"
      fill="#34A853"
    />
    {/* Top left fold: Red */}
    <path
      d="M33.5 10.5L24 17.5L14.5 10.5V20.5L24 27.5L33.5 20.5V10.5Z"
      fill="#EA4335"
    />
    {/* Top fold envelope flap with yellow accent */}
    <path
      d="M4.5 13.5L14.5 20.5V10.5L9.95 7.1C7.75 5.46 4.5 7.02 4.5 9.77V13.5Z"
      fill="#FBBC04"
    />
    {/* Top right fold flap: Red */}
    <path
      d="M33.5 10.5V20.5L43.5 13.5V9.77C43.5 7.02 40.25 5.46 38.05 7.1L33.5 10.5Z"
      fill="#C5221F"
    />
  </svg>
);
