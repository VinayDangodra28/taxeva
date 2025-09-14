import React from 'react';

const ITRIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* ITR - Income Tax Return form */}
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 8h10M7 12h8M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 4l3-2h12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <text x="12" y="9" textAnchor="middle" fontSize="6" fill="currentColor">ITR</text>
  </svg>
);

export default ITRIcon;