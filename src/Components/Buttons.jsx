import { Link } from 'react-router-dom';
import React from 'react';

const Buttons = ({ href, color, children }) => {
  const buttonColorClass = color ? color : 'bg-teal-500 text-white';
  return (
    <Link to={href}  role="button">
      <button
        className={`px-4 py-2 rounded-md focus:outline-none ${buttonColorClass}`}
      >
        {children}
      </button>
    </Link >
  );
};

export default Buttons;