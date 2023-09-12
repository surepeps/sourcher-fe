import MainLayout from '../views/layouts/MainLayout';
import AuthLayout from '../views/layouts/AuthLayout';
import NoSkeleton from '../views/skeletons/NoSkeleton';
import Login from '../views/pages/auth/Login';
import Register from '../views/pages/auth/Register';
import ForgotPassword from '../views/pages/auth/ForgotPassword';
import AuthMiddleware from '../middleware/AuthMiddleware';
import Home from '../views/pages/Home';



const createRoute = (path, element, pageName, privateRoute = true, layout = MainLayout,  skeleton = NoSkeleton) => ({
    path,
    element: (
      <AuthMiddleware
        path={path}
        pageName={pageName}
        privateRoute={privateRoute}
        component={element}
        layout={layout}
        skeleton={skeleton}
      />
    ),
  });


  const routes = [
    createRoute("/login", Login, "Login", false, AuthLayout),
    createRoute("/forgot-password", ForgotPassword, "Forgot Password", false, AuthLayout),
    createRoute("/register", Register, "Register", false, AuthLayout),
    createRoute("/", Home, "Dashboard", false),

  ];
  
  export default routes;