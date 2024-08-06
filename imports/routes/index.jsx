import React, { lazy } from 'react';
import { Meteor } from 'meteor/meteor';
import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';

import { SimpleLayoutType } from 'config';
import SimpleLayout from './../ui/layout/Simple';
import Loadable from '../ui/components/Loadable';

// render - landing page
const PagesLanding = Loadable(lazy(() => import('../features/Landing/landing')));

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.LANDING} />,
      children: [
        {
          index: true,
          element: <PagesLanding />
        }
      ]
    },
    LoginRoutes,
    MainRoutes
  ],
  { basename: Meteor.settings.public.VITE_APP_BASE_NAME }
);

export default router;
