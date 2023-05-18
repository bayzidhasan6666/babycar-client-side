import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? ' text-purple-600 border-y border-purple-600 font-serif' : 'text-white font-serif'
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
