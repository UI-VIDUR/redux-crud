import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'; // Import your UserContext

const PrivateRoute = ({ element }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if (!user) {
    // Redirect to login page if not authenticated
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // Render the component if authenticated
  return element;
};

export default PrivateRoute;
