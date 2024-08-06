import React, { lazy } from 'react';

// project import
import ErrorBoundary from './ErrorBoundary';
import Loadable from '../ui/components/Loadable';
import DashboardLayout from '../features/Dashboard';
import PagesLayout from '../ui/layout/Pages';
import SimpleLayout from '../ui/layout/Simple';

import { SimpleLayoutType } from 'config';
// import { loader as productsLoader, productLoader } from '../api/products';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('../features/Dashboard/pages/default')));
const DashboardAnalytics = Loadable(lazy(() => import('../features/Dashboard/pages/analytics')));

// render - widget
const WidgetStatistics = Loadable(lazy(() => import('../ui/pages/statistics')));
const WidgetData = Loadable(lazy(() => import('../ui/pages/data')));
const WidgetChart = Loadable(lazy(() => import('../ui/pages/chart')));

// render - applications
const AppChat = Loadable(lazy(() => import('../features/Chat/chat')));

const UserProfile = Loadable(lazy(() => import('../features/User/Profile/pags/user')));
const UserTabPersonal = Loadable(lazy(() => import('../features/User/Profile/components/TabPersonal')));
const UserTabPayment = Loadable(lazy(() => import('../features/User/Profile/components/TabPayment')));
const UserTabPassword = Loadable(lazy(() => import('../features/User/Profile/components/TabPassword')));
const UserTabSettings = Loadable(lazy(() => import('../features/User/Profile/components/TabSettings')));

const AccountProfile = Loadable(lazy(() => import('../features/User/Account/pages/account')));
const AccountTabProfile = Loadable(lazy(() => import('features/User/Account/components/TabProfile')));
const AccountTabPersonal = Loadable(lazy(() => import('features/User/Account/components/TabPersonal')));
const AccountTabAccount = Loadable(lazy(() => import('../features/User/Account/components/TabAccount')));
const AccountTabPassword = Loadable(lazy(() => import('../features/User/Account/components/TabPassword')));
const AccountTabRole = Loadable(lazy(() => import('../features/User/Account/components/TabRole')));
const AccountTabSettings = Loadable(lazy(() => import('../features/User/Account/components/TabSettings')));

const FormsPluginsEditor = Loadable(lazy(() => import('../ui/plugins/editor')));
const FormsPluginsDropzone = Loadable(lazy(() => import('../ui/plugins/dropzone')));

const ReactTableBasic = Loadable(lazy(() => import('../features/Tables/pages/react-table/basic')));
const ReactDenseTable = Loadable(lazy(() => import('../features/Tables/pages/react-table/dense')));
const ReactTableSorting = Loadable(lazy(() => import('../features/Tables/pages/react-table/sorting')));
const ReactTableFiltering = Loadable(lazy(() => import('../features/Tables/pages/react-table/filtering')));
const ReactTableGrouping = Loadable(lazy(() => import('../features/Tables/pages/react-table/grouping')));
const ReactTablePagination = Loadable(lazy(() => import('../features/Tables/pages/react-table/pagination')));
const ReactTableRowSelection = Loadable(lazy(() => import('features/Tables/pages/react-table/row-selection')));
const ReactTableExpanding = Loadable(lazy(() => import('../features/Tables/pages/react-table/expanding')));
const ReactTableEditable = Loadable(lazy(() => import('../features/Tables/pages/react-table/editable')));
const ReactTableDragDrop = Loadable(lazy(() => import('../features/Tables/pages/react-table/drag-drop')));
const ReactTableColumnVisibility = Loadable(lazy(() => import('../features/Tables/pages/react-table/column-visibility')));
const ReactTableColumnResizing = Loadable(lazy(() => import('../features/Tables/pages/react-table/column-resizing')));
const ReactTableStickyTable = Loadable(lazy(() => import('../features/Tables/pages/react-table/sticky')));
const ReactTableUmbrella = Loadable(lazy(() => import('../features/Tables/pages/react-table/umbrella')));
const ReactTableEmpty = Loadable(lazy(() => import('../features/Tables/pages/react-table/empty')));
const ReactTableVirtualized = Loadable(lazy(() => import('../features/Tables/pages/react-table/virtualized')));

// render - charts & map
const ChartApexchart = Loadable(lazy(() => import('../features/Charts/pages/apexchart')));
const ChartOrganization = Loadable(lazy(() => import('../features/Charts/pages/org-chart/org-chart')));
// const Map = Loadable(lazy(() => import('pages/map')));

// table routing
const MuiTableBasic = Loadable(lazy(() => import('../features/Tables/pages/mui-table/basic')));
const MuiTableDense = Loadable(lazy(() => import('../features/Tables/pages/mui-table/dense')));
const MuiTableEnhanced = Loadable(lazy(() => import('../features/Tables/pages/mui-table/enhanced')));
const MuiTableDatatable = Loadable(lazy(() => import('../features/Tables/pages/mui-table/datatable')));
const MuiTableCustom = Loadable(lazy(() => import('../features/Tables/pages/mui-table/custom')));
const MuiTableFixedHeader = Loadable(lazy(() => import('../features/Tables/pages/mui-table/fixed-header')));
const MuiTableCollapse = Loadable(lazy(() => import('../features/Tables/pages/mui-table/collapse')));

// pages routing
const AuthLogin = Loadable(lazy(() => import('../features/Auth/pages/login')));
const AuthRegister = Loadable(lazy(() => import('../features/Auth/pages/register')));
const AuthForgotPassword = Loadable(lazy(() => import('../features/Auth/pages/forgot-password')));
const AuthResetPassword = Loadable(lazy(() => import('../features/Auth/pages/reset-password')));
const AuthCheckMail = Loadable(lazy(() => import('../features/Auth/pages/check-mail')));
const AuthCodeVerification = Loadable(lazy(() => import('../features/Auth/pages/code-verification')));

const MaintenanceError = Loadable(lazy(() => import('../ui/pages/404')));
const MaintenanceError500 = Loadable(lazy(() => import('../ui/pages/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('../ui/pages/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('../ui/pages/coming-soon')));

const AppContactUS = Loadable(lazy(() => import('../ui/pages/contact-us')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('../ui/pages/sample-page')));
const PricingPage = Loadable(lazy(() => import('../features/Commerce/Price/pricing')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DashboardDefault />
            },
            {
              path: 'analytics',
              element: <DashboardAnalytics />
            }
          ]
        },
        {
          path: 'widget',
          children: [
            {
              path: 'statistics',
              element: <WidgetStatistics />
            },
            {
              path: 'data',
              element: <WidgetData />
            },
            {
              path: 'chart',
              element: <WidgetChart />
            }
          ]
        },
        {
          path: 'apps',
          children: [
            {
              path: 'chat',
              element: <AppChat />
            },
            {
              path: 'profiles',
              children: [
                {
                  path: 'account',
                  element: <AccountProfile />,
                  children: [
                    {
                      path: 'basic',
                      element: <AccountTabProfile />
                    },
                    {
                      path: 'personal',
                      element: <AccountTabPersonal />
                    },
                    {
                      path: 'my-account',
                      element: <AccountTabAccount />
                    },
                    {
                      path: 'password',
                      element: <AccountTabPassword />
                    },
                    {
                      path: 'role',
                      element: <AccountTabRole />
                    },
                    {
                      path: 'settings',
                      element: <AccountTabSettings />
                    }
                  ]
                },
                {
                  path: 'user',
                  element: <UserProfile />,
                  children: [
                    {
                      path: 'personal',
                      element: <UserTabPersonal />
                    },
                    {
                      path: 'payment',
                      element: <UserTabPayment />
                    },
                    {
                      path: 'password',
                      element: <UserTabPassword />
                    },
                    {
                      path: 'settings',
                      element: <UserTabSettings />
                    }
                  ]
                }
              ]
            },
            {
              path: 'plugins',
              children: [
                {
                  path: 'editor',
                  element: <FormsPluginsEditor />
                },
                {
                  path: 'dropzone',
                  element: <FormsPluginsDropzone />
                }
              ]
            }
          ]
        },
        {
          path: 'tables',
          children: [
            {
              path: 'react-table',
              children: [
                {
                  path: 'basic',
                  element: <ReactTableBasic />
                },
                {
                  path: 'dense',
                  element: <ReactDenseTable />
                },
                {
                  path: 'sorting',
                  element: <ReactTableSorting />
                },
                {
                  path: 'filtering',
                  element: <ReactTableFiltering />
                },
                {
                  path: 'grouping',
                  element: <ReactTableGrouping />
                },
                {
                  path: 'pagination',
                  element: <ReactTablePagination />
                },
                {
                  path: 'row-selection',
                  element: <ReactTableRowSelection />
                },
                {
                  path: 'expanding',
                  element: <ReactTableExpanding />
                },
                {
                  path: 'editable',
                  element: <ReactTableEditable />
                },
                {
                  path: 'drag-drop',
                  element: <ReactTableDragDrop />
                },
                {
                  path: 'column-visibility',
                  element: <ReactTableColumnVisibility />
                },
                {
                  path: 'column-resizing',
                  element: <ReactTableColumnResizing />
                },
                {
                  path: 'sticky-table',
                  element: <ReactTableStickyTable />
                },
                {
                  path: 'umbrella',
                  element: <ReactTableUmbrella />
                },
                {
                  path: 'empty',
                  element: <ReactTableEmpty />
                },
                {
                  path: 'virtualized',
                  element: <ReactTableVirtualized />
                }
              ]
            },
            {
              path: 'mui-table',
              children: [
                {
                  path: 'basic',
                  element: <MuiTableBasic />
                },
                {
                  path: 'dense',
                  element: <MuiTableDense />
                },
                {
                  path: 'enhanced',
                  element: <MuiTableEnhanced />
                },
                {
                  path: 'datatable',
                  element: <MuiTableDatatable />
                },
                {
                  path: 'custom',
                  element: <MuiTableCustom />
                },
                {
                  path: 'fixed-header',
                  element: <MuiTableFixedHeader />
                },
                {
                  path: 'collapse',
                  element: <MuiTableCollapse />
                }
              ]
            }
          ]
        },
        {
          path: 'charts',
          children: [
            {
              path: 'apexchart',
              element: <ChartApexchart />
            },
            {
              path: 'org-chart',
              element: <ChartOrganization />
            }
          ]
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'pricing',
          element: <PricingPage />
        }
      ]
    },
    {
      path: '/maintenance',
      element: <PagesLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    },
    {
      path: '/auth',
      element: <PagesLayout />,
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
          path: 'reset-password',
          element: <AuthResetPassword />
        },
        {
          path: 'check-mail',
          element: <AuthCheckMail />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        }
      ]
    },
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.SIMPLE} />,
      children: [
        {
          path: 'contact-us',
          element: <AppContactUS />
        }
      ]
    }
  ]
};

export default MainRoutes;
