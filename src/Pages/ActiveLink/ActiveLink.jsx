import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? ' text-teal-400 font-serif' : 'text-white font-serif'
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
