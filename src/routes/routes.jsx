import React from 'react';
import { createRoute } from '../helpers/routeUtils';
import AuthLayout from '../views/layouts/AuthLayout';
import MainLayout from '../views/layouts/MainLayout';
import NoSkeleton from '../views/skeletons/NoSkeleton';
import LayoutSkeleton from '../views/skeletons/LayoutSkeleton';
import Login from '../views/pages/auth/Login';
import Register from '../views/pages/auth/Register';
import ForgotPassword from '../views/pages/auth/ForgotPassword';
import Home from '../views/pages/Home';
import NewPage from '../views/pages/NewPage';
import ProfileController from '../controllers/ProfileController';
import ResetPassword from '../views/pages/auth/ResetPassword';
import VerifyAccount from '../views/pages/auth/VerifyAccount';
import ExpertRegister from '../views/pages/auth/ExpertRegister';
import ExpertStepsReg from '../views/pages/auth/ExpertStepsReg';
import ChatController from '../controllers/ChatController';




const routes = [
  createRoute('/login', Login, 'Login', false, AuthLayout, NoSkeleton, 'public'),
  createRoute('/forgot-password', ForgotPassword, 'Forgot Password', false, AuthLayout, NoSkeleton, 'public'),
  createRoute('/reset-password', ResetPassword, 'Reset Password', false, AuthLayout, NoSkeleton, 'public'),
  createRoute('/verify-email', VerifyAccount, 'Veryfy Account', false, AuthLayout, NoSkeleton, 'public'),
  createRoute('/expert-reg', ExpertRegister, 'Expert Registration', false, AuthLayout, NoSkeleton, 'public'),
  createRoute('/expert-steps', ExpertStepsReg, 'Expert Complete Regisration', true, AuthLayout, NoSkeleton, 'semiPrivate'),
  createRoute('/register', Register, 'Register', false, AuthLayout, NoSkeleton, 'public'),
  createRoute('/logout', Login, 'Logout', true, MainLayout, LayoutSkeleton, 'semiPrivate'),
  createRoute('/', Home, 'Dashboard', false, MainLayout, LayoutSkeleton, 'semiPrivate'),
  createRoute('/experts', NewPage, 'Experts', false, MainLayout, LayoutSkeleton, 'semiPrivate'),
  createRoute('/route1', Home, 'Route1', true, MainLayout, LayoutSkeleton, 'private'),
  createRoute('/sh/:username', ProfileController, 'My Profile', false, MainLayout, LayoutSkeleton, 'semiPrivate'),
  createRoute('/sh/chat/:username', ChatController, 'Chat', true, MainLayout, LayoutSkeleton, 'private'),
  createRoute('/sh/chat', ChatController, 'Chat', true, MainLayout, LayoutSkeleton, 'private'),
];

export default routes;
