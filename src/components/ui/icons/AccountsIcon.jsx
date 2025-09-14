import React from 'react';

const AccountsIcon = ({ className = "", size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Accounts - Balance scale */}
    <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 6h8l-1 5H5l-1-5h8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 11l-2 6h4l-2-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M16 11l-2 6h4l-2-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="12" cy="3" r="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

export default AccountsIcon;