import React from 'react';
// project import
import { FormattedMessage } from 'react-intl';

// assets
import LineChartOutlined from '@ant-design/icons/LineChartOutlined';
import IdcardOutlined from '@ant-design/icons/IdcardOutlined';
import DatabaseOutlined from '@ant-design/icons/DatabaseOutlined';
import BuildOutlined from '@ant-design/icons/BuildOutlined';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import CustomerServiceOutlined from '@ant-design/icons/CustomerServiceOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';
import ShoppingCartOutlined from '@ant-design/icons/ShoppingCartOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import AppstoreAddOutlined from '@ant-design/icons/AppstoreAddOutlined';
import FileTextOutlined from '@ant-design/icons/FileTextOutlined';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import LinkOutlined from '@ant-design/icons/LinkOutlined';
import PieChartOutlined from '@ant-design/icons/PieChartOutlined';
import EnvironmentOutlined from '@ant-design/icons/EnvironmentOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import BoxPlotOutlined from '@ant-design/icons/BoxPlotOutlined';
import BorderOutlined from '@ant-design/icons/BorderOutlined';
import StopOutlined from '@ant-design/icons/StopOutlined';
import QuestionOutlined from '@ant-design/icons/QuestionOutlined';
import DeploymentUnitOutlined from '@ant-design/icons/DeploymentUnitOutlined';
import LoginOutlined from '@ant-design/icons/LoginOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import PhoneOutlined from '@ant-design/icons/PhoneOutlined';
import DollarOutlined from '@ant-design/icons/DollarOutlined';

// icons
const icons = {
  LineChartOutlined,
  IdcardOutlined,
  DatabaseOutlined,
  BuildOutlined,
  CalendarOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  AppstoreAddOutlined,
  FileTextOutlined,
  PlusOutlined,
  LinkOutlined,
  PieChartOutlined,
  EnvironmentOutlined,
  MenuUnfoldOutlined,
  BoxPlotOutlined,
  BorderOutlined,
  StopOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined,
  LoginOutlined,
  RocketOutlined,
  PhoneOutlined,
  DollarOutlined
};

// ==============================|| MENU ITEMS ||============================== //


const pages = {
  id: 'group-pages',
  title: <FormattedMessage id="pages" />,
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: <FormattedMessage id="authentication" />,
      type: 'collapse',
      icon: icons.LoginOutlined,
      children: [
        {
          id: 'login',
          title: <FormattedMessage id="login" />,
          type: 'item',
          url: '/auth/login',
          target: true
        },
        {
          id: 'register',
          title: <FormattedMessage id="register" />,
          type: 'item',
          url: '/auth/register',
          target: true
        },
        {
          id: 'forgot-password',
          title: <FormattedMessage id="forgot-password" />,
          type: 'item',
          url: '/auth/forgot-password',
          target: true
        },
        {
          id: 'reset-password',
          title: <FormattedMessage id="reset-password" />,
          type: 'item',
          url: '/auth/reset-password',
          target: true
        },
        {
          id: 'check-mail',
          title: <FormattedMessage id="check-mail" />,
          type: 'item',
          url: '/auth/check-mail',
          target: true
        },
        {
          id: 'code-verification',
          title: <FormattedMessage id="code-verification" />,
          type: 'item',
          url: '/auth/code-verification',
          target: true
        }
      ]
    },
    {
      id: 'maintenance',
      title: <FormattedMessage id="maintenance" />,
      type: 'collapse',
      icon: icons.RocketOutlined,
      isDropdown: true,
      children: [
        {
          id: 'error-404',
          title: <FormattedMessage id="error-404" />,
          type: 'item',
          url: '/maintenance/404',
          target: true
        },
        {
          id: 'error-500',
          title: <FormattedMessage id="error-500" />,
          type: 'item',
          url: '/maintenance/500',
          target: true
        },
        {
          id: 'coming-soon',
          title: <FormattedMessage id="coming-soon" />,
          type: 'item',
          url: '/maintenance/coming-soon',
          target: true
        },
        {
          id: 'under-construction',
          title: <FormattedMessage id="under-construction" />,
          type: 'item',
          url: '/maintenance/under-construction',
          target: true
        }
      ]
    },
    {
      id: 'contact-us',
      title: <FormattedMessage id="contact-us" />,
      type: 'item',
      url: '/contact-us',
      icon: icons.PhoneOutlined,
      target: true
    },
    {
      id: 'pricing',
      title: <FormattedMessage id="pricing" />,
      type: 'item',
      url: '/pricing',
      icon: icons.DollarOutlined
    }
  ]
};

const other = {
  id: 'other',
  type: 'group',
  children: [
    {
      id: 'menu-level',
      title: <FormattedMessage id="menu-level" />,
      type: 'collapse',
      icon: icons.MenuUnfoldOutlined,
      children: [
        {
          id: 'menu-level-1.1',
          title: (
            <>
              <FormattedMessage id="level" /> 1
            </>
          ),
          type: 'item',
          url: '#'
        },
        {
          id: 'menu-level-1.2',
          title: (
            <>
              <FormattedMessage id="level" /> 1
            </>
          ),
          type: 'collapse',
          children: [
            {
              id: 'menu-level-2.1',
              title: (
                <>
                  <FormattedMessage id="level" /> 2
                </>
              ),
              type: 'item',
              url: '#'
            },
            {
              id: 'menu-level-2.2',
              title: (
                <>
                  <FormattedMessage id="level" /> 2
                </>
              ),
              type: 'collapse',
              children: [
                {
                  id: 'menu-level-3.1',
                  title: (
                    <>
                      <FormattedMessage id="level" /> 3
                    </>
                  ),
                  type: 'item',
                  url: '#'
                },
                {
                  id: 'menu-level-3.2',
                  title: (
                    <>
                      <FormattedMessage id="level" /> 3
                    </>
                  ),
                  type: 'item',
                  url: '#'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'menu-level-subtitle',
      title: <FormattedMessage id="menu-level-subtitle" />,
      caption: <FormattedMessage id="menu-level-subtitle-caption" />,
      type: 'collapse',
      icon: icons.BoxPlotOutlined,
      children: [
        {
          id: 'sub-menu-level-1.1',
          title: (
            <>
              <FormattedMessage id="level" /> 1
            </>
          ),
          caption: <FormattedMessage id="menu-level-subtitle-item" />,
          type: 'item',
          url: '#'
        },
        {
          id: 'sub-menu-level-1.2',
          title: (
            <>
              <FormattedMessage id="level" /> 1
            </>
          ),
          caption: <FormattedMessage id="menu-level-subtitle-collapse" />,
          type: 'collapse',
          children: [
            {
              id: 'sub-menu-level-2.1',
              title: (
                <>
                  <FormattedMessage id="level" /> 2
                </>
              ),
              caption: <FormattedMessage id="menu-level-subtitle-sub-item" />,
              type: 'item',
              url: '#'
            }
          ]
        }
      ]
    },
    {
      id: 'disabled-menu',
      title: <FormattedMessage id="disabled-menu" />,
      type: 'item',
      url: '#',
      icon: icons.StopOutlined,
      disabled: true
    },
    {
      id: 'oval-chip-menu',
      title: <FormattedMessage id="oval-chip-menu" />,
      type: 'item',
      url: '#',
      icon: icons.BorderOutlined
    },
    {
      id: 'documentation',
      title: <FormattedMessage id="documentation" />,
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/',
      icon: icons.QuestionOutlined,
      external: true,
      target: true,
      chip: {
        label: 'gitbook',
        color: 'secondary',
        size: 'small'
      }
    },
    {
      id: 'roadmap',
      title: <FormattedMessage id="roadmap" />,
      type: 'item',
      url: 'https://codedthemes.gitbook.io/mantis/roadmap',
      icon: icons.DeploymentUnitOutlined,
      external: true,
      target: true
    }
  ]
};

const applications = {
  id: 'group-applications',
  title: <FormattedMessage id="applications" />,
  icon: icons.AppstoreAddOutlined,
  type: 'group',
  children: [
    {
      id: 'chat',
      title: <FormattedMessage id="chat" />,
      type: 'item',
      url: '/apps/chat',
      icon: icons.MessageOutlined,
      breadcrumbs: false
    },
    {
      id: 'profile',
      title: <FormattedMessage id="profile" />,
      type: 'collapse',
      icon: icons.UserOutlined,
      children: [
        {
          id: 'user-profile',
          title: <FormattedMessage id="user-profile" />,
          type: 'item',
          link: '/apps/profiles/user/:tab',
          url: '/apps/profiles/user/personal',
          breadcrumbs: false
        },
        {
          id: 'account-profile',
          title: <FormattedMessage id="account-profile" />,
          type: 'item',
          link: '/apps/profiles/account/:tab',
          url: '/apps/profiles/account/basic',
          breadcrumbs: false
        }
      ]
    },
  ]
};

const widget = {
  id: 'group-widget',
  title: <FormattedMessage id="widgets" />,
  icon: icons.IdcardOutlined,
  type: 'group',
  children: [
    {
      id: 'statistics',
      title: <FormattedMessage id="statistics" />,
      type: 'item',
      url: '/widget/statistics',
      icon: icons.IdcardOutlined
    },
    {
      id: 'data',
      title: <FormattedMessage id="data" />,
      type: 'item',
      url: '/widget/data',
      icon: icons.DatabaseOutlined
    },
    {
      id: 'chart',
      title: <FormattedMessage id="chart" />,
      type: 'item',
      url: '/widget/chart',
      icon: icons.LineChartOutlined
    }
  ]
};
const chartsMap = {
  id: 'group-charts-map',
  title: <FormattedMessage id="charts-map" />,
  icon: icons.PieChartOutlined,
  type: 'group',
  children: [
    {
      id: 'react-chart',
      title: <FormattedMessage id="charts" />,
      type: 'collapse',
      icon: icons.PieChartOutlined,
      children: [
        {
          id: 'apexchart',
          title: <FormattedMessage id="apexchart" />,
          type: 'item',
          url: '/charts/apexchart'
        },
        {
          id: 'org-chart',
          title: <FormattedMessage id="org-chart" />,
          type: 'item',
          url: '/charts/org-chart'
        }
      ]
    },
  ]
};
const menuItems = {
  items: [widget, applications, chartsMap, pages, other]
};

export default menuItems;
