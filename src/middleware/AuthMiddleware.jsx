import React, { useEffect, useMemo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import MainLayout from '../views/layouts/MainLayout';
import LayoutSkeleton from '../views/skeletons/LayoutSkeleton';
import generalConfig from '../config/generalConfig';
import { useAuth } from '../context/AuthContext';

const AuthMiddleware = ({ component: Component, layout: Layout = MainLayout, skeleton, ...rest }) => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  console.log("Auth middleware: ", user);

  // Combine configuration
  const combineConfig = useMemo(() => {
    return { ...generalConfig, ...{ pageName: rest.pageName } };
  }, [rest.pageName]);

  // Perform logout when component mounts
  useEffect(() => {
    if ((isLoggedIn || !isLoggedIn) && rest.path === '/logout') {
      logout();
      navigate("/login");
    }
  }, [isLoggedIn, logout, navigate, rest.path]);

 
  if (!isLoggedIn && rest.privateRoute) {
    // Redirect to '/' for private routes when not logged in
    return <Navigate to='/login' />;
  }

  if (isLoggedIn && ['login', 'register', 'forgot-password'].includes(rest.path.split('/')[1])) {
    // Redirect to '/' if trying to access login, register, or forgot-password when logged in
    return <Navigate to='/' />;
  }

  return (
    <>
      {isLoggedIn ? (
        !user ? (
          <LayoutSkeleton skeleton={skeleton} />
        ) : (
          <Layout skeleton={skeleton} config={combineConfig} userData={user}>
            <Component {...rest} />
          </Layout>
        )
      ) : (
        <Layout skeleton={skeleton} config={combineConfig}>
          <Component {...rest} />
        </Layout>
      )}
    </>
  );
};
  
export default AuthMiddleware;
