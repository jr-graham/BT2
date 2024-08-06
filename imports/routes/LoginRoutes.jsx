import React, { lazy } from 'react';

// project import
import AuthLayout from '../features/Auth';
import Loadable from '../ui/components/Loadable';

// render - login
const AuthLogin = Loadable(lazy(() => import('../features/Auth/pages/login')));
const AuthRegister = Loadable(lazy(() => import('../features/Auth/pages/register')));
const AuthForgotPassword = Loadable(lazy(() => import('../features/Auth/pages/forgot-password')));
const AuthCheckMail = Loadable(lazy(() => import('../features/Auth/pages/check-mail')));
const AuthResetPassword = Loadable(lazy(() => import('../features/Auth/pages/reset-password')));
const AuthCodeVerification = Loadable(lazy(() => import('../features/Auth/pages/code-verification')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'check-mail',
          element: <AuthCheckMail />
        },
        {
          path: 'reset-password',
          element: <AuthResetPassword />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        }
      ]
    }
  ]
};

export default LoginRoutes;
