import React from 'react';

const GSTIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* GST - Tax percentage symbol with circular border */}
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 8l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="16" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <text x="12" y="5" textAnchor="middle" fontSize="8" fill="currentColor">GST</text>
  </svg>
);

export default GSTIcon;