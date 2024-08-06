import React, {useEffect} from 'react';
import { FormattedMessage } from 'react-intl';
import useStore from './../../../store/store';
// project import

// assets
import DashboardOutlined from '@ant-design/icons/DashboardOutlined';
import GoldOutlined from '@ant-design/icons/GoldOutlined';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';

const icons = { dashboard: DashboardOutlined, components: GoldOutlined, loading: LoadingOutlined };

const loadingMenu = {
  id: 'group-dashboard-loading',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  icon: icons.loading,
  children: [
    {
      id: 'dashboard1',
      title: <FormattedMessage id="dashboard" />,
      type: 'collapse',
      icon: icons.loading,
      children: [
        {
          id: 'default1',
          title: 'loading',
          type: 'item',
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'analytics1',
          title: 'loading',
          type: 'item',
          url: '/dashboard/analytics',
          breadcrumbs: false
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - API ||============================== //


export function MenuFromAPI() {
  const { menu, menuLoading } = useStore((state) => ({
    menu: state.menu,
    menuLoading: state.menuLoading,
  }));

  if (menuLoading) return loadingMenu;

  const subChildrenList = (children) => {
    return children?.map((subList) => {
      return fillItem(subList);
    });
  };

  const itemList = (subList) => {
    let list = fillItem(subList);

    if (subList.type === 'collapse') {
      list.children = subChildrenList(subList.children);
    }
    return list;
  };

  const childrenList = menu?.children?.map((subList) => {
    return itemList(subList);
  });

  let menuList = fillItem(menu, childrenList);
  return menuList;
}

function fillItem(item, children) {
  return {
    ...item,
    title: <FormattedMessage id={`${item?.title}`} />,
    icon: icons[item?.icon],
    ...(children && { children })
  };
}
