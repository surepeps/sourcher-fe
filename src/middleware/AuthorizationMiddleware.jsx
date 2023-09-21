import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthorizationMiddleware = ({ isLoggedIn, privateRoute, publicRoute, children }) => {
  const navigate = useNavigate();
  const { isLoggedIn: userIsLoggedIn } = useAuth();

  useEffect(() => {
    if (privateRoute && !userIsLoggedIn) {
      navigate('/login');
    } else if (publicRoute && userIsLoggedIn) {
      navigate('/');
    }
  }, [privateRoute, publicRoute, userIsLoggedIn, navigate]);

  return children;
};

export default AuthorizationMiddleware;
