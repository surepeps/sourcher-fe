import React, { useEffect, useMemo } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import MainLayout from '../views/layouts/MainLayout';
import LayoutSkeleton from '../views/skeletons/LayoutSkeleton';
import generalConfig from '../config/generalConfig';
import { useAuth } from '../context/AuthContext';




const AuthMiddleware = ({ component: Component, layout: Layout = MainLayout, skeleton, ...rest }) => {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

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


  if (isLoggedIn && !rest.privateRoute) {
    return <Navigate to='/' />;
  }

  if (!isLoggedIn && rest.privateRoute) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      {!user && rest.privateRoute ? <LayoutSkeleton skeleton={skeleton} /> :
        <Layout skeleton={skeleton} config={combineConfig} userData={user}>
          <Component {...rest} />
        </Layout>
      }
    </>
  );
};
  
  export default AuthMiddleware;