import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <progress className="progress flex mx-auto w-56 bg-emerald-500"></progress>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      state={{ from: location }}
      to={`/login`}
      replace={true}
    ></Navigate>
  );
};

export default PrivateRoute;
